import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function Interests() {
  return (
    <section className="content-section section-shell interests" aria-labelledby="interests-title">
      <SectionLabel eyebrow="05 / Human" title="Interests" />
      <Reveal className="interest-copy" id="interests-title">
        <p>
          Outside of engineering, I’m an instrumentalist of 8+ years, a music
          obsessive with a 2200+ song playlist, and an athlete across tennis,
          pickleball, and volleyball.
        </p>
        <strong>
          MUSIC / TENNIS / PICKLEBALL / VOLLEYBALL / SYSTEMS / AI / FINANCE / DESIGN
        </strong>
      </Reveal>
    </section>
  );
}
