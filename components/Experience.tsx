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
      <SectionLabel title="Where I Have Worked" />
      <div className="row-list" id="experience-title">
        {experience.map((item, index) => (
          <Reveal className="experience-row interactive-row" delay={index * 0.06} key={item.company}>
            <div className="row-meta">
              <div className="company-line">
                <h3>
                  <a href={item.href}>{item.company}</a>
                </h3>
                <span>{item.dates}</span>
                <span>{item.location}</span>
              </div>
              <p>{item.role}</p>
            </div>
            <div className="row-main">
              {item.summary.split(/\n{2,}/).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
