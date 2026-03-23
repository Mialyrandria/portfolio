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
        padding: "120px 20px 80px",
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
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Photo — visible uniquement sur mobile, centrée en haut */}
        <div className="photo-mobile">
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              border: "2px solid rgba(139,92,246,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 32px",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "124px",
                height: "124px",
                borderRadius: "50%",
                overflow: "hidden",
                background: "rgba(139,92,246,0.15)",
                position: "relative",
              }}
            >
              <Image
                src="/IMG_20231004_161614_604.jpg"
                alt="Mialisoa Randriamanana"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Fallback */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "6px", right: "2px", width: "10px", height: "10px", background: "#8b5cf6", borderRadius: "50%", border: "2px solid #0a0a0f" }} />
          </div>
        </div>

        {/* Layout desktop : texte gauche + photo droite */}
        <div className="hero-layout">
          {/* Texte */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#8b5cf6", textTransform: "uppercase", fontWeight: 500 }}>
                disponible pour des opportunités
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(32px, 8vw, 60px)",
                lineHeight: 1.05,
                marginBottom: "20px",
                color: "#fff",
                letterSpacing: "-0.02em",
                wordBreak: "break-word",
              }}
            >
              Mialisoa
              <br />
              <span style={{ color: "#8b5cf6" }}>Randria</span>manana
            </h1>

            <p
              style={{
                fontSize: "clamp(13px, 3.5vw, 15px)",
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
                  display: "inline-block",
                }}
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
                  display: "inline-block",
                }}
              >
                me contacter
              </a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "36px" }}>
              {chips.map((chip) => (
                <span
                  key={chip}
                  style={{
                    fontSize: "11px",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    background: "rgba(139,92,246,0.1)",
                    color: "#a78bfa",
                    border: "0.5px solid rgba(139,92,246,0.25)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Photo desktop — cachée sur mobile */}
          <div className="photo-desktop" style={{ flexShrink: 0, position: "relative", width: "240px", height: "240px" }}>
            <div style={{ position: "absolute", inset: "-10px", borderRadius: "50%", border: "0.5px solid rgba(139,92,246,0.2)" }} />
            <div style={{ width: "240px", height: "240px", borderRadius: "50%", border: "2px solid rgba(139,92,246,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "218px", height: "218px", borderRadius: "50%", overflow: "hidden", background: "rgba(139,92,246,0.15)", position: "relative" }}>
                <Image src="/IMG_20231004_161614_604.jpg" alt="Mialisoa Randriamanana" fill style={{ objectFit: "cover" }} priority />
                
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "14px", right: "6px", width: "12px", height: "12px", background: "#8b5cf6", borderRadius: "50%", border: "2.5px solid #0a0a0f" }} />
            <div style={{ position: "absolute", top: "18px", left: "4px", width: "7px", height: "7px", background: "rgba(139,92,246,0.5)", borderRadius: "50%", border: "1.5px solid #0a0a0f" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.4 }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#a78bfa", textTransform: "uppercase" }}>scroll</span>
        <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, #8b5cf6, transparent)" }} />
      </div>

      <style>{`
        .hero-layout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }
        .photo-mobile { display: none; }
        .photo-desktop { display: block; }
        @media (max-width: 768px) {
          .hero-layout {
            flex-direction: column;
            gap: 0;
          }
          .photo-mobile { display: block; }
          .photo-desktop { display: none; }
        }
      `}</style>
    </section>
  );
}
