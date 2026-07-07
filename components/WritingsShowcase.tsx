import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { socials } from "@/data/socials";
import { getAllWritings } from "@/lib/writings";

export async function WritingsShowcase() {
  const writings = await getAllWritings();

  return (
    <section
      className="content-section section-shell writings-showcase"
      id="writings"
      aria-labelledby="writings-title"
    >
      <SectionLabel title="Writings" />
      <Reveal className="writings-preview" id="writings-title" delay={0.08}>
        {writings.length > 0 ? (
          <div className="writing-list">
            {writings.slice(0, 3).map((writing) => (
              <article className="writing-row" key={writing.slug}>
                <Link href={`/writings/${writing.slug}`} className="writing-row-link">
                  <div>
                    <h2>{writing.title}</h2>
                    <p>{writing.description}</p>
                  </div>
                  <span>{writing.date}</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="writing-imessage">
            <div className="writing-message-slot">
              <span className="writing-typing" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <p className="writing-message">currently my writings are on substack</p>
            </div>
            <div className="writing-message-slot">
              <span className="writing-typing" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <p className="writing-message">
                here&apos;s the link:
                <br />
                <a className="writing-message-link" href={socials.substack}>
                  suhaasgaddala.substack.com
                </a>
              </p>
            </div>
          </div>
        )}
      </Reveal>
    </section>
  );
}
