"use client";

import projects from "@/data/projects.json";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Projects" subtitle="Things I've built for companies and clients" color="purple" />

        {/* Professional / Company */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-text-bright mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Company Projects
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.professional.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Freelance */}
        <div className="mt-12">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-text-bright mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Freelance & Independent Projects
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.freelance.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
