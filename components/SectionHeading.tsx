"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag: string;
  title: string;
  index: string;
}

export default function SectionHeading({ tag, title, index }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-text-dim text-[10px]">[{index}]</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-primary text-glow text-lg font-bold">
          {title}
        </span>
        <span className="text-text-dim text-[10px]">// {tag}</span>
      </div>
    </motion.div>
  );
}
