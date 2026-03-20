"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile.json";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="About Me" subtitle="Who I am and what I do" color="accent" />

        <div className="grid gap-8 md:grid-cols-5">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-text-muted leading-relaxed">
              {profile.about}
            </p>

            {/* Key highlights */}
            <ul className="space-y-2.5">
              {profile.highlights.map((item, i) => {
                const colors = [
                  "text-accent",
                  "text-purple",
                  "text-pink",
                  "text-primary",
                  "text-orange",
                ];
                return (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className={`mt-1 ${colors[i % colors.length]}`}>
                      <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-text">{item}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="rounded-xl border border-border bg-bg-card p-5 space-y-4">
              {/* Terminal-style header */}
              <div className="flex items-center gap-1.5 pb-3 border-b border-border">
                <div className="h-2 w-2 rounded-full bg-error/60" />
                <div className="h-2 w-2 rounded-full bg-warning/60" />
                <div className="h-2 w-2 rounded-full bg-success/60" />
                <span className="text-[10px] text-text-dim ml-2 font-mono">profile.sh</span>
              </div>

              {[
                { label: "Name", value: profile.name, color: "text-accent" },
                { label: "Role", value: profile.role, color: "text-purple" },
                { label: "Based in", value: profile.location, color: "text-text" },
                { label: "Email", value: profile.email, color: "text-pink", href: `mailto:${profile.email}` },
                { label: "Phone", value: profile.phone, color: "text-text", href: `tel:${profile.phone}` },
              ].map((item) => (
                <div key={item.label} className="text-xs font-mono">
                  <span className="text-text-dim">{item.label}:</span>
                  {item.href ? (
                    <a href={item.href} className={`ml-2 ${item.color} hover:underline`}>
                      {item.value}
                    </a>
                  ) : (
                    <span className={`ml-2 ${item.color}`}>{item.value}</span>
                  )}
                </div>
              ))}

              {/* Status */}
              <div className="pt-3 border-t border-border space-y-2">
                {Object.entries(profile.status).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between text-xs">
                    <span className="text-text-dim capitalize">{key}</span>
                    <span className="text-primary font-mono text-[11px]">{val}</span>
                  </div>
                ))}
              </div>

              {/* Resume download */}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-accent/20 bg-accent/5 py-2.5 text-xs font-medium text-accent transition-all hover:bg-accent/10 hover:border-accent/40"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
