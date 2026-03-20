"use client";

import { motion } from "framer-motion";
import contact from "@/data/contact.json";
import profile from "@/data/profile.json";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading tag="ssh connect" title="Initiate Connection" index="05" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-lg border border-border bg-bg-terminal overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-error/60" />
              <div className="h-2 w-2 rounded-full bg-warning/60" />
              <div className="h-2 w-2 rounded-full bg-success/60" />
            </div>
            <span className="text-[10px] text-text-dim ml-2">contact.sh</span>
          </div>

          <div className="p-5 space-y-4">
            {/* Command */}
            <div className="text-xs">
              <span className="text-primary-dim">visitor@portfolio:~$</span>
              <span className="text-text-bright ml-2">./contact --connect</span>
            </div>

            {/* Message */}
            <div className="text-xs text-text-muted leading-relaxed border-l-2 border-accent/20 pl-4">
              <div className="text-accent text-sm font-bold mb-2">{contact.headline}</div>
              {contact.description}
            </div>

            {/* Contact info */}
            <div className="space-y-2 text-xs">
              <div className="text-primary-dim text-[10px] uppercase tracking-wider mb-2">
                Connection endpoints:
              </div>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 border border-border p-3 transition-all hover:border-primary/30 hover:bg-primary/5 group"
              >
                <span className="text-primary shrink-0">&gt;</span>
                <div>
                  <div className="text-text-dim text-[10px]">EMAIL</div>
                  <div className="text-text group-hover:text-primary transition-colors">
                    {contact.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 border border-border p-3 transition-all hover:border-primary/30 hover:bg-primary/5 group"
              >
                <span className="text-primary shrink-0">&gt;</span>
                <div>
                  <div className="text-text-dim text-[10px]">PHONE</div>
                  <div className="text-text group-hover:text-primary transition-colors">
                    {contact.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 border border-border p-3">
                <span className="text-primary shrink-0">&gt;</span>
                <div>
                  <div className="text-text-dim text-[10px]">LOCATION</div>
                  <div className="text-text">{contact.location}</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2 border-t border-border">
              <div className="text-primary-dim text-[10px] uppercase tracking-wider mb-3">
                Social channels:
              </div>
              <div className="flex flex-wrap gap-2">
                {contact.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border px-4 py-2 text-xs text-text-muted transition-all hover:border-primary/30 hover:text-primary hover:bg-primary/5"
                  >
                    <span className="text-text-dim">$</span> open {social.name.toLowerCase()}
                  </a>
                ))}
              </div>
            </div>

            {/* Resume link */}
            <div className="pt-2 border-t border-border">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-warning/20 bg-warning/5 px-4 py-2 text-xs text-warning transition-all hover:border-warning/40 hover:bg-warning/10"
              >
                <span className="text-warning/60">&gt;</span>
                download resume.pdf
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
