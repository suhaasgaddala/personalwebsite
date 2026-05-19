"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="header-grid" aria-label="Primary navigation">
        <Link href="/" className="header-link header-name">
          suhaas gaddala
        </Link>
        <Link href="/about" className="header-link hide-mobile">
          about
        </Link>
        <Link href="/writings" className="header-link hide-mobile">
          writings
        </Link>
        <a href="#contact" className="header-link header-contact">
          contact
        </a>
      </nav>
    </motion.header>
  );
}
