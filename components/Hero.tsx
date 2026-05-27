"use client";

import { motion } from "framer-motion";

const firstName = "SUHAAS";
const lastName = "GADDALA";

function AnimatedWord({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span aria-hidden="true" className="hero-word">
      {text.split("").map((letter, index) => (
        <motion.span
          className="hero-letter"
          initial={{ opacity: 0, y: 64, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + index * 0.055
          }}
          key={`${text}-${letter}-${index}`}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="hero home-hero section-shell" id="top" aria-labelledby="hero-title">
      <h1 className="hero-name home-name" id="hero-title" aria-label="Suhaas Gaddala">
        <span className="sr-only">Suhaas Gaddala</span>
        <AnimatedWord text={firstName} delay={0.12} />
        <span className="hero-last">
          <AnimatedWord text={lastName} delay={0.48} />
        </span>
      </h1>
    </section>
  );
}
