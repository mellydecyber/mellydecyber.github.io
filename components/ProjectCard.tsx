"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  category: string;
  color: string;
  live?: string | null;
  client?: string;
  status: string;
  responsibilities: string[];
  period: string;
}

const colorMap: Record<string, { border: string; tag: string; accent: string; gradient: string }> = {
  accent: {
    border: "hover:border-accent/30",
    tag: "border-accent/20 text-accent bg-accent/5",
    accent: "text-accent",
    gradient: "from-accent/10 to-transparent",
  },
  purple: {
    border: "hover:border-purple/30",
    tag: "border-purple/20 text-purple bg-purple/5",
    accent: "text-purple",
    gradient: "from-purple/10 to-transparent",
  },
  pink: {
    border: "hover:border-pink/30",
    tag: "border-pink/20 text-pink bg-pink/5",
    accent: "text-pink",
    gradient: "from-pink/10 to-transparent",
  },
  primary: {
    border: "hover:border-primary/30",
    tag: "border-primary/20 text-primary bg-primary/5",
    accent: "text-primary",
    gradient: "from-primary/10 to-transparent",
  },
  orange: {
    border: "hover:border-orange/30",
    tag: "border-orange/20 text-orange bg-orange/5",
    accent: "text-orange",
    gradient: "from-orange/10 to-transparent",
  },
};

export default function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const colors = colorMap[project.color] || colorMap.accent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") onClick(); }}
      className={`group relative cursor-pointer rounded-xl border border-border bg-bg-card overflow-hidden transition-all duration-300 card-glow ${colors.border} hover:bg-bg-card-hover`}
    >
      {/* Color gradient top bar */}
      <div className={`h-1 w-full bg-linear-to-r ${colors.gradient}`} />

      <div className="p-5">
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

          {/* Expand icon */}
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/0 text-text-dim transition-all group-hover:bg-white/5 group-hover:text-text-muted">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-base font-bold mb-1 text-text-bright transition-colors group-hover:${colors.accent}`}>
          {project.name}
        </h3>

        {/* Client (for freelance) */}
        {project.client && (
          <p className={`text-xs font-medium mb-2 ${colors.accent}`}>
            {project.client}
          </p>
        )}

        {/* Period */}
        <p className="text-[11px] text-text-dim font-mono mb-3">
          {project.period}
        </p>

        {/* Description */}
        <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-white/5 border border-border px-2 py-0.5 text-[11px] text-text-muted font-mono"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded-md bg-white/5 border border-border px-2 py-0.5 text-[11px] text-text-dim font-mono">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* View more hint */}
        <div className="flex items-center gap-1.5 text-[11px] text-text-dim group-hover:text-text-muted transition-colors">
          <span>Click to view details</span>
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-0.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
