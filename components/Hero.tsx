"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const firstName = "SUHAAS";
const lastName = "GADDALA";

const photoCards = [
  {
    src: "/suhaas-photo.png",
    alt: "Suhaas in a film-style portrait",
    topic: "proof of life",
    caption: "hey there :)"
  },
  {
    src: "/suhaas-hiking.jpeg",
    alt: "Suhaas looking out over the coast after a hike",
    topic: "after the hike",
    caption: "after a 4 hour long hike in hawaii"
  },
  {
    src: "/suhaas-debugging.jpeg",
    alt: "Suhaas debugging on a laptop by a window",
    topic: "debugging",
    caption: "this is me debugging"
  }
];

const stackPositions = [
  { x: 0, y: 0, rotate: -1.5, scale: 1 },
  { x: 22, y: 18, rotate: 5.5, scale: 0.96 },
  { x: -18, y: 34, rotate: -6, scale: 0.92 }
];

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

function PhotoStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const lastWheelAt = useRef(0);

  const showNext = () => setActiveIndex((current) => (current + 1) % photoCards.length);
  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + photoCards.length) % photoCards.length);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 8) return;
      event.preventDefault();
      event.stopPropagation();

      const now = Date.now();
      if (now - lastWheelAt.current < 420) return;
      lastWheelAt.current = now;

      if (event.deltaY > 0) {
        showNext();
      } else {
        showPrevious();
      }
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });
    return () => stage.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <motion.div
      className="photo-stack"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Photo stack"
    >
      <div className="photo-stack-stage" ref={stageRef}>
        {photoCards.map((card, index) => {
          const stackPosition = (index - activeIndex + photoCards.length) % photoCards.length;
          const transform = stackPositions[stackPosition];
          const isActive = index === activeIndex;

          return (
            <motion.button
              type="button"
              className="photo-card"
              key={card.src}
              onClick={() => setActiveIndex(index)}
              animate={{
                x: transform.x,
                y: transform.y,
                rotate: transform.rotate,
                scale: transform.scale
              }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{ zIndex: photoCards.length - stackPosition }}
              aria-label={`Bring ${card.topic} photo to front`}
              aria-pressed={isActive}
            >
              <span className="photo-tape" aria-hidden="true" />
              <span className="photo-card-image">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 900px) 70vw, 22vw"
                  priority={index === 0}
                />
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="photo-stack-caption" aria-live="polite">
        <p>{photoCards[activeIndex].caption}</p>
      </div>
    </motion.div>
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
