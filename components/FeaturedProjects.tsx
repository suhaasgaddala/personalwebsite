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
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      const titles = Array.from(
        section.querySelectorAll<HTMLElement>(".project-title-marquee")
      );
      const viewportWidth = window.innerWidth;
      const gutter = Math.max(14, Math.min(38, viewportWidth * 0.024));

      setPositions(
        titles.map((title, index) => {
          const stagger = (Math.floor(index / 2) % 3) * (viewportWidth < 640 ? 10 : 18);
          const titleWidth = title.offsetWidth;
          const measuredDistance =
            viewportWidth * (viewportWidth < 640 ? 0.2 : 0.18) +
            Math.min(titleWidth, viewportWidth) * (viewportWidth < 640 ? 0.18 : 0.22);
          const distance = Math.min(
            viewportWidth * (viewportWidth < 640 ? 0.42 : 0.46),
            Math.max(viewportWidth * (viewportWidth < 640 ? 0.28 : 0.26), measuredDistance)
          );

          if (index % 2 === 0) {
            const start = gutter + stagger;
            const end = start + distance;
            return `${start + (end - start) * progress}px`;
          }

          const start = viewportWidth - titleWidth - gutter - stagger;
          const end = start - distance;
          return `${start + (end - start) * progress}px`;
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
