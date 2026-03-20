"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  metrics: Record<string, string | undefined>;
  github: string;
  live: string | null;
  status: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group rounded-xl border border-border bg-bg-card p-6 transition-colors hover:border-primary/30 hover:bg-bg-card-hover"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-mono text-lg font-bold">{project.name}</h3>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                project.status === "active"
                  ? "bg-success/10 text-success"
                  : "bg-warning/10 text-warning"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-primary"
              aria-label="Live site"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="mb-4 grid grid-cols-3 gap-2">
        {Object.entries(project.metrics)
          .filter((entry): entry is [string, string] => typeof entry[1] === "string")
          .map(([key, value]) => (
          <div
            key={key}
            className="rounded-md border border-border bg-bg px-3 py-2 text-center"
          >
            <div className="font-mono text-xs font-bold text-primary">
              {value}
            </div>
            <div className="mt-0.5 text-[10px] uppercase tracking-wider text-text-muted">
              {key}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-primary/5 px-2 py-0.5 font-mono text-[11px] text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
