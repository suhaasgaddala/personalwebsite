"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { socials } from "@/data/socials";

type CommandIconName =
  | "home"
  | "agents"
  | "about"
  | "work"
  | "projects"
  | "writings"
  | "linkedin"
  | "x"
  | "github";

function CommandIcon({ name }: { name: CommandIconName }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="command-svg-icon">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  if (name === "projects") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="command-svg-icon command-project-icon">
        <path
          d="M5 12.2c1.05-3.7 3.7-5.55 7-5.55s5.95 1.85 7 5.55"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M12 6.65v10.8c0 1.2-.72 1.9-1.74 1.9-.78 0-1.35-.34-1.68-.96"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M5 12.2c1.5-1.1 3-.9 4.5 0 1.67-1.1 3.33-1.1 5 0 1.5-.9 3-.9 4.5 0"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.65"
        />
      </svg>
    );
  }

  const symbolByName: Record<Exclude<CommandIconName, "github" | "projects">, string> = {
    home: "↑",
    agents: "◆",
    about: "○",
    work: "◇",
    writings: "✎",
    linkedin: "in",
    x: "𝕏"
  };

  return (
    <span className={name === "writings" ? "command-writing-icon" : undefined} aria-hidden="true">
      {symbolByName[name]}
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState("");
  const commandInputRef = useRef<HTMLInputElement>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);

  const commandItems = useMemo(
    () => [
      { href: "/#top", icon: "home" as const, title: "Home", hint: "Top" },
      { href: "/#agents", icon: "agents" as const, title: "Agents", hint: "AI chat UI" },
      { href: "/#about", icon: "about" as const, title: "About", hint: "Story" },
      { href: "/#experience", icon: "work" as const, title: "Work", hint: "Experience" },
      { href: "/#projects", icon: "projects" as const, title: "Projects", hint: "Builds" },
      { href: "/#writings", icon: "writings" as const, title: "Writings", hint: "Substack" },
      { href: socials.linkedIn, icon: "linkedin" as const, title: "LinkedIn", hint: "linkedin.com" },
      { href: socials.x, icon: "x" as const, title: "Twitter / X", hint: "x.com" },
      { href: socials.github, icon: "github" as const, title: "GitHub", hint: "github.com" }
    ],
    []
  );

  const visibleCommandItems = commandItems.filter((item) => {
    const query = commandQuery.trim().toLowerCase();

    if (!query) {
      return true;
    }

    return `${item.title} ${item.hint}`.toLowerCase().includes(query);
  });

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["agents", "about", "projects", "writings"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const scanLine = window.innerHeight * 0.58;
      const sectionRects = sections.map((section) => ({
        id: section.id,
        rect: section.getBoundingClientRect()
      }));
      const current =
        [...sectionRects]
          .reverse()
          .find(({ rect }) => rect.top <= scanLine && rect.bottom >= scanLine) ??
        sectionRects
          .filter(({ rect }) => rect.bottom > 0 && rect.top < window.innerHeight)
          .sort(
            (a, b) =>
              Math.abs(a.rect.top - scanLine) - Math.abs(b.rect.top - scanLine)
          )[0];

      setActiveSection(current?.id ?? "");
    };

    const scheduleActiveSectionUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", scheduleActiveSectionUpdate);
    window.addEventListener("hashchange", scheduleActiveSectionUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleActiveSectionUpdate);
      window.removeEventListener("resize", scheduleActiveSectionUpdate);
      window.removeEventListener("hashchange", scheduleActiveSectionUpdate);
    };
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsCommandOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setIsCommandOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!isCommandOpen) {
      setCommandQuery("");
      return;
    }

    requestAnimationFrame(() => commandInputRef.current?.focus());
  }, [isCommandOpen]);

  useEffect(() => {
    if (!isCommandOpen) {
      return;
    }

    const closeOnOutsidePointer = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (commandMenuRef.current?.contains(target)) {
        return;
      }

      setIsCommandOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer, true);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer, true);
  }, [isCommandOpen]);

  const homeSection = pathname === "/" ? activeSection || hash.replace("#", "") : "";
  const navLinks = [
    {
      href: "/#agents",
      label: "agents",
      active: homeSection === "agents"
    },
    {
      href: "/#about",
      label: "about",
      active: pathname.startsWith("/about") || homeSection === "about"
    },
    {
      href: "/#projects",
      label: "projects",
      active: pathname.startsWith("/projects") || homeSection === "projects"
    },
    {
      href: "/#writings",
      label: "writings",
      active:
        pathname.startsWith("/writings") ||
        pathname.startsWith("/blog") ||
        homeSection === "writings"
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
        <div className="header-nav-links">
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
        </div>
        <button
          className="command-trigger"
          type="button"
          aria-label="Open site overview"
          aria-expanded={isCommandOpen}
          onClick={() => setIsCommandOpen(true)}
        >
          <span aria-hidden="true">⌘</span>
          <span>K</span>
        </button>
      </nav>
      {isCommandOpen ? (
        <div
          className="command-overlay"
          role="presentation"
          onClick={() => setIsCommandOpen(false)}
          onMouseDown={() => setIsCommandOpen(false)}
          onPointerDown={() => setIsCommandOpen(false)}
        >
          <div
            ref={commandMenuRef}
            className="command-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site overview"
            onClick={(event) => event.stopPropagation()}
            onMouseDown={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
          >
            <input
              ref={commandInputRef}
              className="command-input"
              value={commandQuery}
              onChange={(event) => setCommandQuery(event.target.value)}
              placeholder="Type a command or search..."
              aria-label="Search site overview"
            />
            <div className="command-list">
              {visibleCommandItems.length > 0 ? (
                visibleCommandItems.map((item, index) => (
                  <a
                    className="command-item"
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsCommandOpen(false)}
                  >
                    <span className="command-icon">
                      <CommandIcon name={item.icon} />
                    </span>
                    <span className="command-title">{item.title}</span>
                    <span className="command-hint">{item.hint}</span>
                    {index === 0 && !commandQuery ? (
                      <span className="sr-only">Recommended</span>
                    ) : null}
                  </a>
                ))
              ) : (
                <p className="command-empty">No matching section.</p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
