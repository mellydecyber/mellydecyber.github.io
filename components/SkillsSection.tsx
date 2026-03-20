"use client";

import { motion } from "framer-motion";
import skills from "@/data/skills.json";
import SectionHeading from "./SectionHeading";

const colorMap: Record<string, { text: string; dot: string; line: string; leaf: string }> = {
  accent: { text: "text-accent", dot: "bg-accent", line: "border-accent/20", leaf: "text-accent/70" },
  purple: { text: "text-purple", dot: "bg-purple", line: "border-purple/20", leaf: "text-purple/70" },
  pink: { text: "text-pink", dot: "bg-pink", line: "border-pink/20", leaf: "text-pink/70" },
  primary: { text: "text-primary", dot: "bg-primary", line: "border-primary/20", leaf: "text-primary/70" },
  orange: { text: "text-orange", dot: "bg-orange", line: "border-orange/20", leaf: "text-orange/70" },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Skills & Technologies" subtitle="Tools and technologies I work with" color="pink" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, gi) => {
            const colors = colorMap[group.color] || colorMap.accent;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: gi * 0.05 }}
                className="rounded-xl border border-border bg-bg-card p-5 card-glow"
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className={`h-2.5 w-2.5 rounded-sm ${colors.dot}`} />
                  <h3 className={`text-sm font-bold ${colors.text}`}>
                    {group.category}
                  </h3>
                </div>

                {/* Tree list */}
                <div className={`border-l-2 ${colors.line} pl-4 space-y-2`}>
                  {group.items.map((item, ii) => {
                    const isLast = ii === group.items.length - 1;
                    return (
                      <div key={item} className="relative flex items-center gap-2">
                        {/* Tree branch */}
                        <span className={`text-[10px] font-mono ${colors.leaf}`}>
                          {isLast ? "└──" : "├──"}
                        </span>
                        <span className="text-sm text-text">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
