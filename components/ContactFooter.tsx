import { CopyEmailButton } from "@/components/CopyEmailButton";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { socials } from "@/data/socials";

export function ContactFooter() {
  return (
    <footer className="contact-footer" id="contact">
      <Marquee text="LET'S BUILD — SAY HELLO — SHIP SYSTEMS — TALK IDEAS —" />
      <Reveal className="footer-content">
        <div>
          <span className="footer-kicker">Available for serious systems, sharp products, and ambitious ideas.</span>
          <a className="footer-email" href={`mailto:${socials.email}`}>
            {socials.email}
          </a>
          <CopyEmailButton email={socials.email} />
        </div>
        <div className="footer-links" aria-label="Contact links">
          <a href={`mailto:${socials.email}`}>Email Email</a>
          <a href={socials.linkedIn}>LinkedIn LinkedIn</a>
          <a href={socials.github}>GitHub GitHub</a>
          <span>{socials.phone}</span>
        </div>
      </Reveal>
      <div className="footer-meta">
        <span>© 2026 Suhaas Gaddala</span>
        <span>Full Stack Developer</span>
        <span>@suhaasga / {socials.githubLabel}</span>
      </div>
    </footer>
  );
}
