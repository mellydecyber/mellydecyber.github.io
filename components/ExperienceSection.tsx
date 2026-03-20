"use client";

import { motion } from "framer-motion";
import experience from "@/data/experience.json";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading tag="git log --career" title="Mission Log" index="04" />

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="relative border-l border-border pl-6 pb-8 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full border-2 border-primary bg-bg group-hover:bg-primary/20 transition-colors" />

              {/* Period */}
              <div className="text-[10px] text-text-dim mb-1">
                <span className="text-primary-dim">[{String(i).padStart(2, "0")}]</span>
                {" "}{exp.period}
              </div>

              {/* Role & company */}
              <div className="mb-2">
                <h3 className="text-sm font-bold text-text-bright">
                  {exp.role}
                </h3>
                <span className="text-xs text-accent">
                  @ {exp.company}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-text-muted leading-relaxed mb-3">
                {exp.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] text-primary-dim border border-primary/10 bg-primary/5 px-1.5 py-0.5"
                  >
                    {tech}
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
