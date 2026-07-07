"use client";

import { ProjectRow } from "@/components/ProjectRow";
import { projects } from "@/data/projects";
import { useEffect, useRef } from "react";

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    let frame = 0;
    const rows = Array.from(
      section.querySelectorAll<HTMLElement>(".kinetic-project-row")
    );

    const update = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 640) {
        rows.forEach((row) => row.style.removeProperty("--lane-x"));
        return;
      }

      const gutter = Math.max(14, Math.min(38, viewportWidth * 0.024));
      const leftAnchor = gutter;
      const rightAnchor = viewportWidth * 0.34;
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

      rows.forEach((row, index) => {
        const x =
          index % 2 === 0
            ? leftAnchor + (rightAnchor - leftAnchor) * progress
            : rightAnchor + (leftAnchor - rightAnchor) * progress;

        row.style.setProperty("--lane-x", `${x}px`);
      });
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
        {projects.map((project) => (
          <ProjectRow project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}
