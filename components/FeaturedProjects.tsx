import { ProjectRow } from "@/components/ProjectRow";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section
      className="content-section section-shell"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionLabel eyebrow="02 / Build" title={`Projects\n(${projects.length})`} />
      <div className="row-list" id="projects-title">
        {projects.map((project, index) => (
          <Reveal delay={index * 0.06} key={project.name}>
            <ProjectRow project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
