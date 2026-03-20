"use client";

import { motion } from "framer-motion";
import skills from "@/data/skills.json";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading tag="system.capabilities" title="Skills" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-bg-card p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-lg">{group.icon}</span>
                <h3 className="font-mono text-sm font-bold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-bg px-2 py-1 text-xs text-text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
