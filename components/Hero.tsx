import Image from "next/image";
import type { CSSProperties } from "react";

const messages = [
  { text: "hello, world", typingAt: 0.3, sendAt: 0.95 },
  { text: "im suhaas gaddala", typingAt: 1.35, sendAt: 2.15 },
  { text: "scroll down for more stuff", typingAt: 2.55, sendAt: 3.4 }
];

export function Hero() {
  return (
    <section className="hero home-hero section-shell msg-hero" id="top" aria-labelledby="hero-title">
      <h1 className="sr-only" id="hero-title">
        Suhaas Gaddala
      </h1>
      <div className="msg-thread">
        <div className="msg-contact">
          <span className="msg-avatar">
            <Image
              src="/suhaas-photo.png"
              alt="Suhaas in a film-style portrait"
              fill
              sizes="128px"
              priority
            />
          </span>
          <span className="msg-contact-name">suhaas</span>
        </div>
        <div className="msg-list">
          {messages.map((message) => (
            <div className="msg-slot" key={message.text}>
              <span
                className="msg-typing"
                style={
                  {
                    "--typing-in": `${message.typingAt}s`,
                    "--typing-out": `${message.sendAt}s`
                  } as CSSProperties
                }
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </span>
              <p className="msg-bubble" style={{ animationDelay: `${message.sendAt}s` }}>
                {message.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <span className="msg-scroll-cue" aria-hidden="true" />
    </section>
  );
}
