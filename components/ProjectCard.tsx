"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  category: string;
  color: string;
  live?: string | null;
  client?: string;
  status: string;
}

const colorMap: Record<string, { border: string; bg: string; text: string; tag: string }> = {
  accent: {
    border: "hover:border-accent/30",
    bg: "bg-accent/10",
    text: "text-accent",
    tag: "border-accent/20 text-accent bg-accent/5",
  },
  purple: {
    border: "hover:border-purple/30",
    bg: "bg-purple/10",
    text: "text-purple",
    tag: "border-purple/20 text-purple bg-purple/5",
  },
  pink: {
    border: "hover:border-pink/30",
    bg: "bg-pink/10",
    text: "text-pink",
    tag: "border-pink/20 text-pink bg-pink/5",
  },
  primary: {
    border: "hover:border-primary/30",
    bg: "bg-primary/10",
    text: "text-primary",
    tag: "border-primary/20 text-primary bg-primary/5",
  },
  orange: {
    border: "hover:border-orange/30",
    bg: "bg-orange/10",
    text: "text-orange",
    tag: "border-orange/20 text-orange bg-orange/5",
  },
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const colors = colorMap[project.color] || colorMap.accent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className={`group rounded-xl border border-border bg-bg-card p-5 transition-all duration-300 card-glow ${colors.border} hover:bg-bg-card-hover`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${colors.tag}`}>
            {project.category}
          </span>
          <span
            className={`flex items-center gap-1 text-[10px] font-mono ${
              project.status === "active" ? "text-success" : "text-text-dim"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${
              project.status === "active" ? "bg-success animate-pulse" : "bg-text-dim"
            }`} />
            {project.status}
          </span>
        </div>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-accent transition-colors"
            title="Visit live site"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        )}
      </div>

      {/* Title */}
      <h3 className={`text-base font-bold mb-2 text-text-bright group-hover:${colors.text} transition-colors`}>
        {project.name}
      </h3>

      {/* Client (for freelance) */}
      {project.client && (
        <p className={`text-xs font-medium mb-2 ${colors.text}`}>
          Client: {project.client}
        </p>
      )}

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-white/5 border border-border px-2 py-0.5 text-[11px] text-text-muted font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
