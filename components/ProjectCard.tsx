"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  metrics: Record<string, string | undefined>;
  github: string | null;
  live: string | null;
  status: string;
}

const statusColors: Record<string, string> = {
  active: "text-success",
  completed: "text-accent",
  maintenance: "text-warning",
};

const statusDot: Record<string, string> = {
  active: "bg-success",
  completed: "bg-accent",
  maintenance: "bg-warning",
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className="group rounded-lg border border-border bg-bg-terminal transition-all hover:border-primary/20 hover:bg-bg-card-hover"
    >
      {/* Card header */}
      <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status] || "bg-text-dim"}`} />
          <span className="text-[10px] text-text-dim">
            module/{project.id}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] uppercase tracking-wider ${statusColors[project.status] || "text-text-dim"}`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Name */}
        <div>
          <h3 className="text-sm font-bold text-text-bright group-hover:text-primary transition-colors">
            {project.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs text-text-muted leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-1.5">
          {Object.entries(project.metrics)
            .filter((entry): entry is [string, string] => typeof entry[1] === "string")
            .map(([key, value]) => (
              <div
                key={key}
                className="border border-border bg-bg px-2 py-1.5 text-center"
              >
                <div className="text-[10px] font-bold text-primary">
                  {value}
                </div>
                <div className="text-[9px] uppercase tracking-wider text-text-dim mt-0.5">
                  {key}
                </div>
              </div>
            ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] text-primary-dim border border-primary/10 bg-primary/5 px-1.5 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.github || project.live) && (
          <div className="flex gap-3 pt-1 border-t border-border">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-text-dim hover:text-primary transition-colors"
              >
                [github]
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-text-dim hover:text-accent transition-colors"
              >
                [live]
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
