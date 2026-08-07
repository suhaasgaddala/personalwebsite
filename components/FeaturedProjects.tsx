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
    let isMotionActive = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const rows = Array.from(
      section.querySelectorAll<HTMLElement>(".kinetic-project-row")
    );

    const resetMotion = () => {
      rows.forEach((row) => row.style.removeProperty("--lane-x"));
      section.removeAttribute("data-motion-active");
    };

    const update = () => {
      frame = 0;
      const viewportWidth = window.innerWidth;
      if (!isMotionActive || reducedMotion.matches || viewportWidth < 640) {
        resetMotion();
        return;
      }

      section.dataset.motionActive = "true";
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

    const scheduleUpdate = () => {
      if (!isMotionActive || frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isMotionActive = entry.isIntersecting;

        if (isMotionActive && !reducedMotion.matches && window.innerWidth >= 640) {
          section.dataset.motionActive = "true";
          scheduleUpdate();
          return;
        }

        window.cancelAnimationFrame(frame);
        frame = 0;
        resetMotion();
      },
      { rootMargin: "100% 0px" }
    );

    const onMotionPreferenceChange = () => {
      if (reducedMotion.matches) {
        window.cancelAnimationFrame(frame);
        frame = 0;
        resetMotion();
        return;
      }

      if (isMotionActive) {
        section.dataset.motionActive = "true";
        scheduleUpdate();
      }
    };

    observer.observe(section);
    reducedMotion.addEventListener("change", onMotionPreferenceChange);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      reducedMotion.removeEventListener("change", onMotionPreferenceChange);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resetMotion();
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
