import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function About() {
  return (
    <section className="content-section section-shell" id="about" aria-labelledby="about-title">
      <SectionLabel title="About" />
      <Reveal className="about-copy" delay={0.08}>
        <p id="about-title">
          I am currently based in Dallas and San Francisco. I am still trying to
          find what I am passionate about within the CS space but currently
          obsessed with financial modeling and autonomous systems. A lot of my
          projects that I have built are out of trying to fix a problem that I
          have encountered and chasing that dopamine hit of satisfaction.
        </p>
        <p>
          As an only child, I spent a lot of time alone and in thought, which
          has shaped me to appreciate my surroundings and harbor my love for
          nature. It eventually led to me taking appreciation in patience within
          growth of things and one day, I aspire to open a ranch within Italy
          and focus on raising a peaceful life there.
        </p>
      </Reveal>
    </section>
  );
}
