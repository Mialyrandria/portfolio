"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const chips = ["React", "Django", "SpringBoot", "React Native", "Node.js", "Python", "Figma"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 40px 80px",
        position: "relative",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      <div
        ref={containerRef}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: text content */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                background: "#22c55e",
                borderRadius: "50%",
                display: "inline-block",
                boxShadow: "0 0 8px #22c55e",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                color: "#8b5cf6",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              disponible pour des opportunités
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.0,
              marginBottom: "20px",
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Mialisoa
            <br />
            <span style={{ color: "#8b5cf6" }}>Randria</span>manana
          </h1>

          <p
            style={{
              fontSize: "15px",
              color: "rgba(232,230,240,0.65)",
              maxWidth: "440px",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            Développeuse full-stack passionnée par la création d'applications
            web et mobile modernes. Je transforme des idées en solutions
            logicielles élégantes et performantes.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                background: "#8b5cf6",
                color: "#fff",
                padding: "11px 24px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.background = "#7c3aed")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.background = "#8b5cf6")
              }
            >
              voir mes projets →
            </a>
            <a
              href="#contact"
              style={{
                background: "transparent",
                color: "#c4b5fd",
                padding: "11px 24px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 400,
                textDecoration: "none",
                border: "0.5px solid rgba(139,92,246,0.5)",
                transition: "all 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.background =
                  "rgba(139,92,246,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              me contacter
            </a>
          </div>

          {/* Tech chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "36px",
            }}
          >
            {chips.map((chip, i) => (
              <span
                key={chip}
                style={{
                  fontSize: "11px",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  background: "rgba(139,92,246,0.1)",
                  color: "#a78bfa",
                  border: "0.5px solid rgba(139,92,246,0.25)",
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div
          style={{
            flexShrink: 0,
            position: "relative",
            width: "240px",
            height: "240px",
          }}
        >
          {/* Outer decorative ring */}
          <div
            style={{
              position: "absolute",
              inset: "-10px",
              borderRadius: "50%",
              border: "0.5px solid rgba(139,92,246,0.2)",
            }}
          />
          {/* Main ring */}
          <div
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              border: "2px solid rgba(139,92,246,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "218px",
                height: "218px",
                borderRadius: "50%",
                overflow: "hidden",
                background: "rgba(139,92,246,0.15)",
                border: "0.5px solid rgba(139,92,246,0.3)",
                position: "relative",
              }}
            >
              {/*
               * ======================================
               * REMPLACE /photo.jpg PAR TA VRAIE PHOTO
               * Place ton image dans: public/photo.jpg
               * ======================================
               */}
              <Image
                src="/IMG_20231004_161614_604.jpg"
                alt="Mialisoa Randriamanana"
                fill
                style={{ objectFit: "cover" }}
                priority
                onError={(e) => {
                  // Fallback si la photo n'est pas encore ajoutée
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Fallback placeholder visible tant que photo.jpg n'existe pas */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
              </div>
            </div>
          </div>

          {/* Accent dot bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: "14px",
              right: "6px",
              width: "12px",
              height: "12px",
              background: "#8b5cf6",
              borderRadius: "50%",
              border: "2.5px solid #0a0a0f",
            }}
          />
          {/* Accent dot top-left */}
          <div
            style={{
              position: "absolute",
              top: "18px",
              left: "4px",
              width: "7px",
              height: "7px",
              background: "rgba(139,92,246,0.5)",
              borderRadius: "50%",
              border: "1.5px solid #0a0a0f",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.4,
        }}
      >
        <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#a78bfa", textTransform: "uppercase" }}>
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom, #8b5cf6, transparent)",
          }}
        />
      </div>
    </section>
  );
}
