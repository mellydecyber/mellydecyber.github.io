"use client";

import projects from "@/data/projects.json";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading tag="ls ~/projects" title="Active Modules" index="02" />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
