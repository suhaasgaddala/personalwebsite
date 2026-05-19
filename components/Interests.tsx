import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function Interests() {
  return (
    <section className="content-section section-shell interests" aria-labelledby="interests-title">
      <SectionLabel eyebrow="05 / Human" title="Interests" />
      <Reveal className="interest-copy" id="interests-title">
        <ul>
          <li>Cooking</li>
          <li>Tennis</li>
          <li>Volleyball</li>
          <li>Music and instrumental performance</li>
          <li>Pickleball</li>
        </ul>
      </Reveal>
    </section>
  );
}
