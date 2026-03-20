"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  color?: string;
}

const colorMap: Record<string, string> = {
  accent: "text-accent",
  purple: "text-purple",
  pink: "text-pink",
  primary: "text-primary",
  orange: "text-orange",
};

export default function SectionHeading({ title, subtitle, color = "accent" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-10"
    >
      <div className="flex items-center gap-4 mb-3">
        <h2 className="text-2xl font-bold text-text-bright sm:text-3xl">
          {title}
        </h2>
        <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
      <p className={`text-sm ${colorMap[color] || "text-accent"}`}>
        {subtitle}
      </p>
    </motion.div>
  );
}
