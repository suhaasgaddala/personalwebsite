"use client";

import { motion } from "framer-motion";

const tags = [
  "AI Infrastructure",
  "Cloud Systems",
  "Machine Learning",
  "Full Stack Products",
  "Distributed Systems"
];

export function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-name-wrap">
          <h1 className="hero-name" id="hero-title" aria-label="Suhaas Gaddala">
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              SUHAAS
            </motion.span>
            <motion.span
              className="hero-last"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
            >
              GADDALA
            </motion.span>
          </h1>
        </div>

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        >
          <p className="role">Full Stack Developer</p>
          <p>
            building AI infrastructure, cloud-native systems, machine learning
            pipelines, and polished data-driven products.
          </p>
          <a className="work-link" href="#projects">
            <span aria-hidden="true">→</span> View Selected Work
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-tags"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.95 }}
      >
        <span className="tag-star" aria-hidden="true">
          *
        </span>
        {tags.map((tag, index) => (
          <span className="hero-tag" key={tag}>
            {tag}
            {index < tags.length - 1 ? <span aria-hidden="true">/</span> : null}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="hero-preview"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.08, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Selected experience preview"
      >
        <div className="preview-label">
          <span>Selected Experience</span>
          <span aria-hidden="true">↓</span>
        </div>
        {["Blaze (YC S24)", "UT Southwestern", "Dell Technologies"].map((item, index) => (
          <a className="preview-item" href="#experience" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
            <em>
              {index === 0
                ? "AI Agent Infrastructure"
                : index === 1
                  ? "AI / ML Research"
                  : "Cloud Infrastructure"}
            </em>
            <b aria-hidden="true">→</b>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
