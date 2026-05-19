import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { education } from "@/data/education";

export function Education() {
  return (
    <section className="content-section section-shell" aria-labelledby="education-title">
      <SectionLabel eyebrow="04 / Foundation" title="Education" />
      <Reveal className="education-row" id="education-title">
        <div>
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
          <p>{education.pathway} / {education.minor}</p>
        </div>
        <div className="education-meta">
          <span>{education.graduation}</span>
          <span>{education.gpa}</span>
          <span>{education.location}</span>
        </div>
        <p className="coursework">{education.coursework}</p>
      </Reveal>
    </section>
  );
}
