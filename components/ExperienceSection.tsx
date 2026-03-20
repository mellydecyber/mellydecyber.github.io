"use client";

import { motion } from "framer-motion";
import experience from "@/data/experience.json";
import SectionHeading from "./SectionHeading";

const dotColors = [
  "border-accent bg-accent/20",
  "border-purple bg-purple/20",
  "border-pink bg-pink/20",
  "border-primary bg-primary/20",
  "border-orange bg-orange/20",
  "border-accent bg-accent/20",
];

const companyColors = [
  "text-accent",
  "text-purple",
  "text-pink",
  "text-primary",
  "text-orange",
  "text-accent",
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Work Experience" subtitle="Where I've worked and what I've built" color="orange" />

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="relative border-l-2 border-border pl-7 pb-10 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 ${dotColors[i % dotColors.length]} transition-all group-hover:scale-125`} />

              {/* Period badge */}
              <div className="mb-2">
                <span className="inline-block rounded-full bg-white/5 border border-border px-3 py-0.5 text-xs text-text-muted font-mono">
                  {exp.period}
                </span>
              </div>

              {/* Role & company */}
              <h3 className="text-base font-bold text-text-bright mb-0.5">
                {exp.role}
              </h3>
              <p className={`text-sm font-medium mb-3 ${companyColors[i % companyColors.length]}`}>
                {exp.company}
              </p>

              {/* Description */}
              <p className="text-sm text-text-muted leading-relaxed mb-3">
                {exp.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/5 border border-border px-2 py-0.5 text-[11px] text-text-muted font-mono"
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
