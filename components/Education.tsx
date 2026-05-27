import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { education } from "@/data/education";

export function Education() {
  return (
    <section className="content-section section-shell" aria-labelledby="education-title">
      <SectionLabel title="College" />
      <Reveal className="education-row" id="education-title">
        <div>
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
        </div>
        <p className="education-note">{education.note}</p>
      </Reveal>
    </section>
  );
}
