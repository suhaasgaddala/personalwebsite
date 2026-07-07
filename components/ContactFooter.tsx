import { socials } from "@/data/socials";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.4 8h4.2v15H.4V8Zm7.4 0h4.03v2.05h.06c.56-1.06 1.94-2.18 3.99-2.18 4.27 0 5.06 2.81 5.06 6.46V23h-4.2v-7.68c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.05V23h-4.2V8Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.15c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18A10.9 10.9 0 0 1 12 6c.98 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 2h3.28l-7.17 8.2L23.44 22h-6.6l-5.17-6.76L5.75 22H2.46l7.67-8.76L2.05 2h6.77l4.67 6.17L18.9 2Zm-1.15 17.92h1.82L7.83 3.97H5.88l11.87 15.95Z" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.8C6.36 1.8 1.8 6.36 1.8 12S6.36 22.2 12 22.2 22.2 17.64 22.2 12 17.64 1.8 12 1.8Zm4.68 14.72c-.18.3-.58.4-.88.22-2.41-1.47-5.44-1.8-9.02-.99-.34.08-.69-.13-.77-.48-.08-.34.13-.69.48-.77 3.91-.89 7.26-.5 9.98 1.16.3.19.4.58.21.86Zm1.25-2.78c-.23.37-.71.48-1.08.26-2.76-1.7-6.98-2.19-10.25-1.2-.42.12-.85-.11-.98-.52-.12-.42.11-.85.53-.98 3.72-1.13 8.36-.58 11.52 1.36.37.23.49.71.26 1.08Zm.11-2.9c-3.31-1.97-8.78-2.15-11.94-1.19-.5.15-1.03-.13-1.18-.63-.15-.5.13-1.03.63-1.18 3.63-1.1 9.66-.89 13.45 1.36.45.27.6.85.33 1.3-.27.45-.85.6-1.29.34Z" />
    </svg>
  );
}

export function ContactFooter() {
  return (
    <footer className="contact-footer" id="contact">
      <div className="footer-minimal">
        <p>React + Next.js + Tailwind + some black coffee + and alot of music :)</p>
        <div className="social-links" aria-label="Social links">
          <a href={socials.linkedIn} aria-label="LinkedIn profile">
            <LinkedInIcon />
          </a>
          <a href={socials.github} aria-label="GitHub profile">
            <GitHubIcon />
          </a>
          <a href={socials.x} aria-label="X profile">
            <XIcon />
          </a>
          <a href={socials.spotify} aria-label="Spotify profile">
            <SpotifyIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
