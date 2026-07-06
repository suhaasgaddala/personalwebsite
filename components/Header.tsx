"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { socials } from "@/data/socials";

export function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/#agents", label: "agents", active: false },
    { href: "/about", label: "about", active: pathname.startsWith("/about") },
    { href: "/projects", label: "projects", active: pathname.startsWith("/projects") },
    {
      href: socials.substack,
      label: "writings",
      active: pathname.startsWith("/writings") || pathname.startsWith("/blog")
    }
  ];

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="header-grid" aria-label="Primary navigation">
        <Link
          href="/"
          className="header-link header-name header-logo-link"
          aria-label="Suhaas Gaddala home"
        >
          <span className="sg-logo-text" aria-hidden="true">suhaas</span>
          <span className="sr-only">Suhaas Gaddala</span>
        </Link>
        {navLinks.map((link) => (
          <Link
            href={link.href}
            className={`header-link hide-mobile${link.active ? " header-link-active" : ""}`}
            aria-current={link.active ? "page" : undefined}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
