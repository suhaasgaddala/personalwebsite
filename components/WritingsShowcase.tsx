import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { socials } from "@/data/socials";
import { getAllWritings } from "@/lib/writings";

const substackPost = {
  title: "the beauty of blond‘e’ and frank ocean.",
  href: "https://suhaasgaddala.substack.com/p/the-beauty-of-blonde-and-frank-ocean",
  image: "/substack-blonde.jpg"
};

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
        <div>
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

          <article className="substack-post">
            <a
              className="substack-post-link"
              href={substackPost.href}
              target="_blank"
              rel="noreferrer"
            >
              <h2>{substackPost.title}</h2>
              <span className="substack-post-image" aria-hidden="true">
                <Image
                  src={substackPost.image}
                  alt=""
                  width={736}
                  height={675}
                  sizes="(max-width: 640px) 28vw, 12rem"
                  quality={72}
                />
              </span>
            </a>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
