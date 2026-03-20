"use client";

import { useState } from "react";
import projects from "@/data/projects.json";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

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

const allProjects = [...projects.professional, ...projects.freelance] as Project[];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Projects" subtitle="Things I've built for companies and clients" color="purple" />

        {/* Professional / Company */}
        <div className="mb-12">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-text-bright mb-5">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Company Projects
            <span className="h-px flex-1 bg-border ml-2" />
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.professional.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project as unknown as Project)}
              />
            ))}
          </div>
        </div>

        {/* Freelance */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-text-bright mb-5">
            <span className="h-2 w-2 rounded-full bg-orange" />
            Freelance &amp; Independent Projects
            <span className="h-px flex-1 bg-border ml-2" />
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.freelance.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project as unknown as Project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
