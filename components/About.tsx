import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function About() {
  return (
    <section className="content-section section-shell" id="about" aria-labelledby="about-title">
      <SectionLabel title="About" />
      <Reveal className="about-copy" delay={0.08}>
        <p id="about-title">
          I’m Suhaas Gaddala, a full stack developer studying Computer Science at
          The University of Texas at Dallas with a Data Science pathway and
          Finance minor. I build across AI infrastructure, backend systems, cloud
          platforms, machine learning pipelines, and polished web products.
        </p>
        <p>
          My work spans deployed TypeScript/Express services for AI agents,
          Go/Python cloud infrastructure, behavioral machine learning research,
          multimodal LiDAR and vision pipelines, financial intelligence platforms,
          lock-free systems, and computer vision models.
        </p>
      </Reveal>
    </section>
  );
}
