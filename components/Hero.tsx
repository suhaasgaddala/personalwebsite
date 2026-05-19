"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

      <motion.div
        className="hero-minor hero-about-bar"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.15 }}
      >
        <Link href="/about" className="hero-about-link">
          about
        </Link>
        <div className="hero-about-copy">
          <p>
            I’m currently based in Texas, still trying to figure out what I want
            to do in terms of engineering. I’m still trying to find the niche I’m
            passionate about, but in the meantime, I’m currently interested at
            the intersection of finance, quantitative financial modeling, and
            autonomous systems. I am also currently in the process of publishing
            some research regarding ML models.
          </p>
          <p>
            I love to play tennis and volleyball, and I dream to move to northern
            Italy.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
