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
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "14px 20px",
          borderBottom: scrolled ? "0.5px solid rgba(139,92,246,0.2)" : "0.5px solid transparent",
          background: scrolled || menuOpen ? "rgba(10,10,15,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={handleLinkClick}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "18px",
            color: "#c4b5fd",
            textDecoration: "none",
            letterSpacing: "0.02em",
            flexShrink: 0,
          }}
        >
          MR<span style={{ color: "rgba(196,181,253,0.35)" }}>.</span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
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
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </a>
            );
          })}
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
              fontWeight: 500,
              marginLeft: "8px",
              whiteSpace: "nowrap",
            }}
          >
            télécharger CV
          </a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background: "transparent",
            border: "0.5px solid rgba(139,92,246,0.4)",
            borderRadius: "8px",
            padding: "8px 10px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Menu"
        >
          <span style={{ display: "block", width: "18px", height: "1.5px", background: menuOpen ? "#8b5cf6" : "#c4b5fd", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <span style={{ display: "block", width: "18px", height: "1.5px", background: menuOpen ? "#8b5cf6" : "#c4b5fd", transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "18px", height: "1.5px", background: menuOpen ? "#8b5cf6" : "#c4b5fd", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "57px",
            left: 0,
            right: 0,
            zIndex: 49,
            background: "rgba(10,10,15,0.98)",
            borderBottom: "0.5px solid rgba(139,92,246,0.2)",
            padding: "16px 20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {links.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={id}
                href={href}
                onClick={handleLinkClick}
                style={{
                  fontSize: "15px",
                  color: isActive ? "#c4b5fd" : "rgba(232,230,240,0.6)",
                  textDecoration: "none",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  background: isActive ? "rgba(139,92,246,0.1)" : "transparent",
                  border: isActive ? "0.5px solid rgba(139,92,246,0.25)" : "0.5px solid transparent",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {label}
              </a>
            );
          })}
          <a
            href="/cv-mialisoa-randriamanana.pdf"
            download
            onClick={handleLinkClick}
            style={{
              fontSize: "14px",
              color: "#8b5cf6",
              border: "0.5px solid rgba(139,92,246,0.5)",
              padding: "12px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 500,
              marginTop: "8px",
              textAlign: "center",
            }}
          >
            télécharger CV
          </a>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .hamburger { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
