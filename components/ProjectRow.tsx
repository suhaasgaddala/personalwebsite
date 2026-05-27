import type { projects } from "@/data/projects";
import type { CSSProperties } from "react";

type Project = (typeof projects)[number];

type ProjectRowProps = {
  project: Project;
  x: string;
};

export function ProjectRow({ project, x }: ProjectRowProps) {
  const displayTitle = project.name === "tab"
    ? "tab / interface"
    : project.name;
  const titleClassName = displayTitle.length > 16
    ? "project-title-marquee project-title-marquee-long"
    : displayTitle.length > 9
      ? "project-title-marquee project-title-marquee-medium"
    : "project-title-marquee";

  return (
    <a
      className="project-row kinetic-project-row"
      href={project.href}
      aria-label={`Open ${project.name} on GitHub`}
      style={{ "--lane-x": x } as CSSProperties}
    >
      <div className="project-title-window">
        <h3 className={titleClassName}>{displayTitle}</h3>
      </div>
    </a>
  );
}
