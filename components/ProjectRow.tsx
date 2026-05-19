import type { projects } from "@/data/projects";
import { socials } from "@/data/socials";

type Project = (typeof projects)[number];

type ProjectRowProps = {
  project: Project;
  index: number;
};

export function ProjectRow({ project, index }: ProjectRowProps) {
  const linkLabel = project.href === "#" ? "GitHub profile fallback" : `Open ${project.name}`;
  const href = project.href === "#" ? socials.github : project.href;

  return (
    <a className="project-row interactive-row" href={href} aria-label={linkLabel}>
      <div className="row-index">{String(index + 1).padStart(2, "0")}</div>
      <div className="project-meta">
        <span>{project.category}</span>
        <p>{project.stack}</p>
      </div>
      <div className="project-main">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
      <div className="project-year">
        <span>{project.year}</span>
        <b aria-hidden="true">→</b>
      </div>
    </a>
  );
}
