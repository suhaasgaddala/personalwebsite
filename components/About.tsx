import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function About() {
  return (
    <section className="content-section section-shell" id="about" aria-labelledby="about-title">
      <SectionLabel title="About" />
      <Reveal className="about-copy" delay={0.08}>
        <p id="about-title">
          I’m Suhaas Gaddala, a full stack developer studying Computer Science at
          The University of Texas at Dallas. I build AI infrastructure, backend
          systems, cloud tools, machine learning pipelines, and product-grade web
          applications.
        </p>
        <p>
          This page keeps the working notes: places I have worked, projects I
          have built, school, and the parts of life that keep me curious.
        </p>
      </Reveal>
    </section>
  );
}
