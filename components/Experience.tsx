import { experience } from "@/data/experience";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function Experience() {
  return (
    <section
      className="content-section section-shell"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionLabel eyebrow="01 / Work" title={"Selected\nExperience"} />
      <div className="row-list" id="experience-title">
        {experience.map((item, index) => (
          <Reveal className="experience-row interactive-row" delay={index * 0.06} key={item.company}>
            <div className="row-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="row-meta">
              <h3>{item.company}</h3>
              <p>{item.role}</p>
              <span>{item.dates}</span>
              <span>{item.location}</span>
            </div>
            <div className="row-main">
              <p>{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
