import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { socials } from "@/data/socials";

export function Music() {
  return (
    <section className="content-section section-shell" aria-labelledby="music-title">
      <SectionLabel title="Music" />
      <Reveal className="about-copy about-copy-small" delay={0.08}>
        <p id="music-title">
          I really love everything but country music, but my recent obsession is
          listening to a lot of jazz with a mix of bossa nova, both European and
          Brazilian style.
        </p>
        <p>
          Please check out my{" "}
          <a className="inline-text-link" href={socials.spotify}>
            Spotify
          </a>{" "}
          and if you have any music recommendations, I am always here to give it
          a listen :)
        </p>
      </Reveal>
    </section>
  );
}
