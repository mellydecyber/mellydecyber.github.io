"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile.json";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading tag="cat /etc/profile" title="System Overview" index="01" />

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
            <span className="text-[10px] text-text-dim ml-2">about.sh</span>
          </div>

          <div className="p-5 space-y-4">
            {/* Command */}
            <div>
              <span className="text-primary-dim text-xs">melli@system:~$</span>
              <span className="text-text-bright text-xs ml-2">cat ./about.md</span>
            </div>

            {/* Output */}
            <div className="text-text text-xs leading-relaxed border-l-2 border-primary/20 pl-4">
              {profile.about}
            </div>

            {/* Info table */}
            <div className="pt-2">
              <div className="text-primary-dim text-xs mb-2">
                melli@system:~$ neofetch
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs">
                {[
                  { key: "Name", val: profile.name },
                  { key: "Role", val: profile.role },
                  { key: "Location", val: profile.location },
                  { key: "Email", val: profile.email },
                  { key: "Status", val: profile.status.system },
                  { key: "Uptime", val: profile.status.uptime },
                ].map((item) => (
                  <div key={item.key} className="flex gap-2 py-0.5">
                    <span className="text-accent w-20 shrink-0">{item.key}:</span>
                    <span className="text-text-muted">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-3 pt-3 border-t border-border">
              {profile.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-text-dim border border-border px-3 py-1 transition-all hover:text-primary hover:border-primary/30 hover:bg-primary/5"
                >
                  $ open {social.name.toLowerCase()}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-text-dim border border-border px-3 py-1 transition-all hover:text-warning hover:border-warning/30 hover:bg-warning/5"
              >
                $ download resume.pdf
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
