import { PhotoStack } from "@/components/PhotoStack";
import type { CSSProperties } from "react";

const firstName = "SUHAAS";
const lastName = "GADDALA";

function AnimatedWord({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span aria-hidden="true" className="hero-word">
      {text.split("").map((letter, index) => (
        <span
          className="hero-letter"
          style={{ "--letter-delay": `${delay + index * 0.055}s` } as CSSProperties}
          key={`${text}-${letter}-${index}`}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="hero home-hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-name-lockup">
        <h1 className="hero-name home-name" id="hero-title" aria-label="Suhaas Gaddala">
          <span className="sr-only">Suhaas Gaddala</span>
          <AnimatedWord text={firstName} delay={0.12} />
          <span className="hero-last">
            <AnimatedWord text={lastName} delay={0.48} />
          </span>
        </h1>
        <PhotoStack />
      </div>
    </section>
  );
}
