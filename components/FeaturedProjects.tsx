"use client";

import { ProjectRow } from "@/components/ProjectRow";
import { projects } from "@/data/projects";
import { useEffect, useRef, useState } from "react";

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [positions, setPositions] = useState(() => projects.map(() => "0px"));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    let frame = 0;

    const update = () => {
      const viewportWidth = window.innerWidth;
      const gutter = Math.max(14, Math.min(38, viewportWidth * 0.024));
      const leftAnchor = gutter;
      const rightAnchor = viewportWidth < 640 ? viewportWidth * 0.18 : viewportWidth * 0.34;
      const rect = section.getBoundingClientRect();
      const scrollStart = window.innerHeight * 0.92;
      const scrollDistance = Math.max(
        window.innerHeight * 0.8,
        rect.height - window.innerHeight * 0.2
      );
      const progress = Math.min(
        1,
        Math.max(0, (scrollStart - rect.top) / scrollDistance)
      );

      setPositions(
        projects.map((_, index) => {
          if (index % 2 === 0) {
            return `${leftAnchor + (rightAnchor - leftAnchor) * progress}px`;
          }

          return `${rightAnchor + (leftAnchor - rightAnchor) * progress}px`;
        })
      );
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="kinetic-projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <h2 className="sr-only" id="projects-title">
        Projects
      </h2>
      <div className="kinetic-project-list">
        {projects.map((project, index) => {
          return (
            <ProjectRow
              project={project}
              x={positions[index] ?? "0px"}
              key={project.name}
            />
          );
        })}
      </div>
    </section>
  );
}
