"use client";

import projects from "@/data/projects.json";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading tag="modules.active" title="Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
