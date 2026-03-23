"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "accueil", href: "#hero" },
  { label: "à propos", href: "#about" },
  { label: "compétences", href: "#skills" },
  { label: "projets", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["hero", "about", "skills", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 40px",
        borderBottom: scrolled ? "0.5px solid rgba(139,92,246,0.2)" : "0.5px solid transparent",
        background: scrolled ? "rgba(10,10,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "18px",
          color: "#c4b5fd",
          textDecoration: "none",
          letterSpacing: "0.02em",
        }}
      >
        MR<span style={{ color: "rgba(196,181,253,0.35)" }}>.</span>
      </a>

      <div style={{ display: "flex", gap: "4px" }}>
        {links.map(({ label, href }) => {
          const id = href.replace("#", "");
          const isActive = active === id;
          return (
            <a
              key={id}
              href={href}
              style={{
                fontSize: "12px",
                color: isActive ? "#c4b5fd" : "rgba(232,230,240,0.45)",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                background: isActive ? "rgba(139,92,246,0.12)" : "transparent",
                border: isActive ? "0.5px solid rgba(139,92,246,0.3)" : "0.5px solid transparent",
                transition: "all 0.2s ease",
                fontWeight: isActive ? 500 : 400,
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.target as HTMLAnchorElement).style.color = "#a78bfa";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.target as HTMLAnchorElement).style.color = "rgba(232,230,240,0.45)";
                }
              }}
            >
              {label}
            </a>
          );
        })}
      </div>

      <a
        href="/cv-mialisoa-randriamanana.pdf"
        download
        style={{
          fontSize: "12px",
          color: "#8b5cf6",
          border: "0.5px solid rgba(139,92,246,0.5)",
          padding: "6px 14px",
          borderRadius: "6px",
          textDecoration: "none",
          transition: "all 0.2s ease",
          fontWeight: 500,
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLAnchorElement).style.background = "rgba(139,92,246,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLAnchorElement).style.background = "transparent";
        }}
      >
        télécharger CV
      </a>
    </nav>
  );
}
