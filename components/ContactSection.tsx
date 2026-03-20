"use client";

import { motion } from "framer-motion";
import contact from "@/data/contact.json";
import profile from "@/data/profile.json";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" color="accent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-xl border border-border bg-bg-card overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-accent/5 via-purple/5 to-pink/5 border-b border-border px-6 py-8 text-center">
            <h3 className="text-2xl font-bold text-text-bright mb-2">
              {contact.headline}
            </h3>
            <p className="text-text-muted max-w-lg mx-auto">
              {contact.description}
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Contact cards */}
            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 rounded-lg border border-border p-4 transition-all hover:border-accent/30 hover:bg-accent/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-accent">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-text-dim mb-0.5">Email</div>
                  <div className="text-xs text-text group-hover:text-accent transition-colors truncate">
                    {contact.email}
                  </div>
                </div>
              </a>

            { contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="group flex items-center gap-3 rounded-lg border border-border p-4 transition-all hover:border-purple/30 hover:bg-purple/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple/10">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-purple">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-text-dim mb-0.5">Phone</div>
                  <div className="text-xs text-text group-hover:text-purple transition-colors truncate">
                    {contact.phone}
                  </div>
                </div>
              </a>
            )}

            { contact.location && (
              <div className="flex items-center gap-3 rounded-lg border border-border p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink/10">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-pink">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-text-dim mb-0.5">Location</div>
                  <div className="text-xs text-text truncate">{contact.location}</div>
                </div>
              </div>
            )}
            </div>


            {/* Social links */}
            <div>
              <p className="text-xs text-text-dim uppercase tracking-wider mb-3">Find me on</p>
              <div className="flex flex-wrap gap-2">
                {contact.socials.map((social) => {
                  const colorClasses: Record<string, string> = {
                    github: "hover:border-text-bright/30 hover:bg-white/5 hover:text-text-bright",
                    linkedin: "hover:border-accent/30 hover:bg-accent/5 hover:text-accent",
                    email: "hover:border-purple/30 hover:bg-purple/5 hover:text-purple",
                  };
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-text-muted transition-all ${colorClasses[social.icon] || ""}`}
                    >
                      {social.icon === "github" && (
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      )}
                      {social.icon === "linkedin" && (
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                      {social.icon === "email" && (
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" />
                        </svg>
                      )}
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Resume */}
            <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-sm text-text-muted">
                Want the full picture? Download my resume.
              </p>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-dim px-5 py-2.5 text-sm font-semibold text-bg transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
