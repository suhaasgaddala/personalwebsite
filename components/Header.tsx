"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="header-grid" aria-label="Primary navigation">
        <a href="#top" className="header-link header-name">
          Suhaas Gaddala
        </a>
        <span>Full Stack Developer</span>
        <span className="hide-mobile">Folio / 2024 — 2026</span>
        <a href="#contact" className="header-link header-contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </motion.header>
  );
}
