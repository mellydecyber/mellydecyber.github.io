"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag: string;
  title: string;
}

export default function SectionHeading({ tag, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12"
    >
      <span className="mb-2 block font-mono text-xs text-primary">
        // {tag}
      </span>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    </motion.div>
  );
}
