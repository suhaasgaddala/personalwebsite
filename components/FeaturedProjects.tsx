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
      const rows = Array.from(
        section.querySelectorAll<HTMLElement>(".kinetic-project-row")
      );
      const viewportWidth = window.innerWidth;
      const gutter = Math.max(14, Math.min(38, viewportWidth * 0.024));

      setPositions(
        rows.map((row, index) => {
          const title = row.querySelector<HTMLElement>(".project-title-marquee");
          if (!title) {
            return "0px";
          }

          const rect = row.getBoundingClientRect();
          const travelStart = window.innerHeight * 0.95;
          const travelDistance = window.innerHeight * 0.78;
          const progress = Math.min(
            1,
            Math.max(0, (travelStart - rect.top) / travelDistance)
          );
          const stagger = (Math.floor(index / 2) % 3) * (viewportWidth < 640 ? 10 : 18);
          const titleWidth = title.offsetWidth;
          const leftAnchor = gutter + stagger;
          const rightAnchor = Math.max(
            leftAnchor,
            viewportWidth - titleWidth - gutter - stagger
          );

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
