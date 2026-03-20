"use client";

import { motion } from "framer-motion";
import experience from "@/data/experience.json";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading tag="career.timeline" title="Experience" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-px" />

          <div className="flex flex-col gap-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {/* Dot */}
                <div className="absolute left-[3px] top-3 h-[9px] w-[9px] rounded-full border-2 border-primary bg-bg sm:left-1/2 sm:-translate-x-1/2" />

                {/* Period (left on desktop) */}
                <div
                  className={`pl-8 sm:pl-0 ${
                    i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:order-2 sm:pl-10"
                  }`}
                >
                  <span className="font-mono text-xs text-primary">
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`pl-8 ${
                    i % 2 === 0 ? "sm:pl-10" : "sm:order-1 sm:pr-10 sm:pl-0 sm:text-right"
                  }`}
                >
                  <h3 className="font-bold">{exp.role}</h3>
                  <p className="mb-2 text-sm text-text-muted">{exp.company}</p>
                  <p className="mb-3 text-sm leading-relaxed text-text-muted">
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-1.5 ${i % 2 !== 0 ? "sm:justify-end" : ""}`}>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-primary/5 px-2 py-0.5 font-mono text-[11px] text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
