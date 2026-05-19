import type { projects } from "@/data/projects";
import type { CSSProperties } from "react";

type Project = (typeof projects)[number];

type ProjectRowProps = {
  project: Project;
  x: number;
};

export function ProjectRow({ project, x }: ProjectRowProps) {
  return (
    <a
      className="project-row kinetic-project-row"
      href={project.href}
      aria-label={`Open ${project.name} on GitHub`}
      style={{ "--lane-x": `${x}vw` } as CSSProperties}
    >
      <div className="project-title-window">
        <h3 className="project-title-marquee">{project.name}</h3>
      </div>
    </a>
  );
}
