"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile.json";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  const stats = [
    { label: "Uptime", value: profile.status.uptime },
    { label: "Last Deploy", value: profile.status.lastDeploy },
    { label: "Active Missions", value: profile.status.activeMissions },
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading tag="system.overview" title="About" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-xl border border-border bg-bg-card p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-text-muted">
            <span className="h-3 w-3 rounded-full bg-success" />
            system_summary.log
          </div>

          <p className="mb-8 leading-relaxed text-text-muted">
            {profile.about}
          </p>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-bg p-4 text-center"
              >
                <div className="font-mono text-lg font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
