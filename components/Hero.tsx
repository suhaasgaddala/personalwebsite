"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const firstName = "SUHAAS";
const lastName = "GADDALA";
const HOLE_COUNT = 14;

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

function FilmSprocket() {
  return (
    <div className="film-sprocket" aria-hidden="true">
      {Array.from({ length: HOLE_COUNT }).map((_, i) => (
        <div className="film-hole" key={i} />
      ))}
    </div>
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
        <motion.div
          className="film-frame"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <FilmSprocket />
          <Image
            src="/suhaas-photo.png"
            alt="Suhaas Gaddala"
            width={400}
            height={560}
            className="film-photo"
            priority
          />
          <FilmSprocket />
        </motion.div>
      </div>
    </section>
  );
}
