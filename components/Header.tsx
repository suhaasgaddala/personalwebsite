"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { socials } from "@/data/socials";

export function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isAgentsSectionActive, setIsAgentsSectionActive] = useState(false);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setIsAgentsSectionActive(false);
      return;
    }

    const agentsSection = document.getElementById("agents");
    if (!agentsSection) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsAgentsSectionActive(entry.isIntersecting),
      { rootMargin: "-30% 0px -45% 0px", threshold: 0 }
    );

    observer.observe(agentsSection);
    return () => observer.disconnect();
  }, [pathname]);

  const navLinks = [
    {
      href: "/#agents",
      label: "agents",
      active: pathname === "/" && (hash === "#agents" || isAgentsSectionActive)
    },
    { href: "/about", label: "about", active: pathname.startsWith("/about") },
    { href: "/projects", label: "projects", active: pathname.startsWith("/projects") },
    {
      href: socials.substack,
      label: "writings",
      active: pathname.startsWith("/writings") || pathname.startsWith("/blog")
    }
  ];

  return (
    <header className="site-header header-enter">
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
    </header>
  );
}
