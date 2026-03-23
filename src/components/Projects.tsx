"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    name: "Clean-Ik",
    category: "Web App · ERP",
    description:
      "Système ERP complet de gestion de clinique. Gestion des patients, rendez-vous, facturation et stocks médicaux. Interface JSP et backend JEE/JPA conteneurisé avec Docker.",
    stack: ["JEE", "JPA", "JSP", "MySQL", "Tailwind", "Docker"],
    accent: "#8b5cf6",
    icon: "⚕",
  },
  {
    name: "LearnFlow",
    category: "Plateforme éducative",
    description:
      "Plateforme de partage de cours et d'exercices entre étudiants. Développée avec le micro-framework Python Bottle et le moteur de templates Jinja2.",
    stack: ["Python", "Bottle", "Jinja2", "MySQL"],
    accent: "#0ea5e9",
    icon: "📚",
  },
  {
    name: "Caisse hors ligne",
    category: "Mobile · JIRAMA",
    description:
      "Application mobile de caisse hors ligne pour la JIRAMA. Fonctionne sans connexion internet, synchronisation Firebase au retour en ligne.",
    stack: ["React Native", "Node.js", "Firebase"],
    accent: "#10b981",
    icon: "📱",
  },
  {
    name: "OrientaFilière",
    category: "Web · MESUPRES",
    description:
      "Application web d'orientation universitaire pour les nouveaux bacheliers malgaches. Intègre un système de recommandation de filières basé sur le profil de l'étudiant.",
    stack: ["Django", "React", "Python", "PostgreSQL"],
    accent: "#f59e0b",
    icon: "🎓",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      ref.current.style.opacity = "0";
      ref.current.style.transform = "translateY(32px)";
      ref.current.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" style={{ padding: "100px 40px" }}>
      <div ref={ref} style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#8b5cf6", textTransform: "uppercase", marginBottom: "10px" }}>
            réalisations
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#fff" }}>
            Mes projets
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
            gap: "16px",
          }}
        >
          {projects.map(({ name, category, description, stack, accent, icon }) => (
            <div
              key={name}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "0.5px solid rgba(232,230,240,0.08)",
                borderRadius: "14px",
                padding: "28px 32px",
                transition: "all 0.25s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = `${accent}55`;
                el.style.background = `${accent}0a`;
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(232,230,240,0.08)";
                el.style.background = "rgba(255,255,255,0.025)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "28px",
                  right: "28px",
                  height: "1.5px",
                  background: `linear-gradient(90deg, transparent, ${accent}88, transparent)`,
                }}
              />

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "10px",
                      padding: "3px 9px",
                      borderRadius: "5px",
                      background: `${accent}18`,
                      color: accent,
                      border: `0.5px solid ${accent}44`,
                      marginBottom: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "#fff",
                    }}
                  >
                    {name}
                  </h3>
                </div>
                <span
                  style={{
                    fontSize: "28px",
                    opacity: 0.6,
                    marginTop: "4px",
                  }}
                >
                  {icon}
                </span>
              </div>

              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(232,230,240,0.58)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                {description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {stack.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "11px",
                      padding: "3px 9px",
                      borderRadius: "5px",
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(232,230,240,0.5)",
                      border: "0.5px solid rgba(232,230,240,0.08)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
