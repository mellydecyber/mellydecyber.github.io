"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const colorMap: Record<string, { tag: string; accent: string; badge: string; dot: string }> = {
  accent: { tag: "border-accent/30 text-accent bg-accent/5", accent: "text-accent", badge: "bg-accent/10 text-accent border-accent/20", dot: "bg-accent" },
  purple: { tag: "border-purple/30 text-purple bg-purple/5", accent: "text-purple", badge: "bg-purple/10 text-purple border-purple/20", dot: "bg-purple" },
  pink: { tag: "border-pink/30 text-pink bg-pink/5", accent: "text-pink", badge: "bg-pink/10 text-pink border-pink/20", dot: "bg-pink" },
  primary: { tag: "border-primary/30 text-primary bg-primary/5", accent: "text-primary", badge: "bg-primary/10 text-primary border-primary/20", dot: "bg-primary" },
  orange: { tag: "border-orange/30 text-orange bg-orange/5", accent: "text-orange", badge: "bg-orange/10 text-orange border-orange/20", dot: "bg-orange" },
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-4 z-[101] flex items-center justify-center sm:inset-8 md:inset-12"
          >
            <div
              className="relative w-full max-w-2xl max-h-full overflow-y-auto rounded-2xl border border-border bg-bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-border text-text-muted transition-all hover:bg-white/10 hover:text-text-bright"
                aria-label="Close modal"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Project image / gradient header */}
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  project.color === "accent" ? "from-accent/20 via-accent/5 to-bg-card" :
                  project.color === "purple" ? "from-purple/20 via-purple/5 to-bg-card" :
                  project.color === "pink" ? "from-pink/20 via-pink/5 to-bg-card" :
                  project.color === "primary" ? "from-primary/20 via-primary/5 to-bg-card" :
                  "from-orange/20 via-orange/5 to-bg-card"
                }`} />
                {/* Decorative pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-card to-transparent h-20" />
                {/* Large project initial */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-7xl font-bold opacity-10 ${colorMap[project.color]?.accent || "text-accent"}`}>
                    {project.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 -mt-8 relative">
                {/* Badges row */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className={`rounded-full border px-3 py-1 text-xs font-medium ${colorMap[project.color]?.tag || ""}`}>
                    {project.category}
                  </span>
                  <span className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
                    project.status === "active"
                      ? "border-success/30 text-success bg-success/5"
                      : "border-border text-text-dim bg-white/5"
                  }`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      project.status === "active" ? "bg-success animate-pulse" : "bg-text-dim"
                    }`} />
                    {project.status}
                  </span>
                  <span className="text-xs text-text-dim font-mono">{project.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-bright mb-1">
                  {project.name}
                </h3>

                {/* Client */}
                {project.client && (
                  <p className={`text-sm font-medium mb-3 ${colorMap[project.color]?.accent || "text-accent"}`}>
                    Client: {project.client}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                {/* What I Did */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-text-bright mb-3">
                    <span className={`h-1.5 w-1.5 rounded-full ${colorMap[project.color]?.dot || "bg-accent"}`} />
                    What I Did
                  </h4>
                  <ul className="space-y-2">
                    {project.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20" className={`shrink-0 mt-0.5 ${colorMap[project.color]?.accent || "text-accent"}`}>
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-bright mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-medium font-mono ${colorMap[project.color]?.badge || "bg-accent/10 text-accent border-accent/20"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-bg transition-all hover:shadow-lg ${
                        project.color === "accent" ? "bg-accent hover:bg-accent-dim hover:shadow-accent/20" :
                        project.color === "purple" ? "bg-purple hover:bg-purple-dim hover:shadow-purple/20" :
                        project.color === "pink" ? "bg-pink hover:shadow-pink/20" :
                        project.color === "primary" ? "bg-primary hover:bg-primary-dim hover:shadow-primary/20" :
                        "bg-orange hover:shadow-orange/20"
                      }`}
                    >
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Visit Live Site
                    </a>
                  )}
                  <button
                    onClick={onClose}
                    className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition-all hover:border-white/20 hover:text-text-bright hover:bg-white/5"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
