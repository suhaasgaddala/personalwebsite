import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { skills } from "@/data/skills";

export function TechnicalDepth() {
  return (
    <section className="content-section section-shell" aria-labelledby="skills-title">
      <SectionLabel title={"Technical\nDepth"} />
      <div className="skill-grid" id="skills-title">
        {skills.map((group, index) => (
          <Reveal className="skill-group" delay={index * 0.05} key={group.category}>
            <h3>{group.category}</h3>
            <p>{group.items.join(" / ")}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
