"use client";

import { motion } from "framer-motion";
import skills from "@/data/skills.json";
import SectionHeading from "./SectionHeading";

const levelLabel: Record<string, string> = {
  expert: "███████████████████ 95%",
  advanced: "████████████████░░░ 80%",
  intermediate: "████████████░░░░░░░ 60%",
  basic: "███████░░░░░░░░░░░░ 35%",
};

const levelColor: Record<string, string> = {
  expert: "text-primary",
  advanced: "text-primary-dim",
  intermediate: "text-accent",
  basic: "text-warning",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading tag="skills --list" title="System Capabilities" index="03" />

        <div className="space-y-4">
          {skills.groups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: gi * 0.05 }}
              className="rounded-lg border border-border bg-bg-terminal overflow-hidden"
            >
              {/* Group header */}
              <div className="border-b border-border px-4 py-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[11px] text-text-bright font-bold">
                  {group.category}
                </span>
                <span className="text-[10px] text-text-dim ml-auto">
                  {group.items.length} modules
                </span>
              </div>

              {/* Skills list */}
              <div className="p-4 space-y-2">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 text-xs"
                  >
                    <span className="text-text w-24 shrink-0">
                      {item.name}
                    </span>
                    <span className={`font-mono text-[10px] ${levelColor[item.level]} hidden sm:inline`}>
                      {levelLabel[item.level]}
                    </span>
                    <span className={`text-[10px] uppercase tracking-wider ${levelColor[item.level]} sm:hidden`}>
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
