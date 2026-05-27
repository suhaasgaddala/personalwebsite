import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { socials } from "@/data/socials";

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.8C6.36 1.8 1.8 6.36 1.8 12S6.36 22.2 12 22.2 22.2 17.64 22.2 12 17.64 1.8 12 1.8Zm4.68 14.72c-.18.3-.58.4-.88.22-2.41-1.47-5.44-1.8-9.02-.99-.34.08-.69-.13-.77-.48-.08-.34.13-.69.48-.77 3.91-.89 7.26-.5 9.98 1.16.3.19.4.58.21.86Zm1.25-2.78c-.23.37-.71.48-1.08.26-2.76-1.7-6.98-2.19-10.25-1.2-.42.12-.85-.11-.98-.52-.12-.42.11-.85.53-.98 3.72-1.13 8.36-.58 11.52 1.36.37.23.49.71.26 1.08Zm.11-2.9c-3.31-1.97-8.78-2.15-11.94-1.19-.5.15-1.03-.13-1.18-.63-.15-.5.13-1.03.63-1.18 3.63-1.1 9.66-.89 13.45 1.36.45.27.6.85.33 1.3-.27.45-.85.6-1.29.34Z" />
    </svg>
  );
}

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
          Please check out my Spotify and if you have any music recommendations,
          I am always here to give it a listen :)
        </p>
        <a className="spotify-link" href={socials.spotify} aria-label="Spotify profile">
          <SpotifyIcon />
        </a>
      </Reveal>
    </section>
  );
}
