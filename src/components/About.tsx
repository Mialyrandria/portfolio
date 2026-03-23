"use client";

import { useEffect, useRef } from "react";

const stats = [
  { label: "formation", value: "Licence Info", sub: "ESMIA · Risques & Décisions" },
  { label: "certification", value: "TEFL", sub: "MTTC Madagascar" },
  { label: "localisation", value: "Antananarivo", sub: "Madagascar" },
  { label: "statut", value: "Disponible", sub: "Ouverte aux opportunités" },
];

const experiences = [
  {
    role: "Stagiaire Développeuse",
    company: "MESUPRES",
    location: "Timbazaza, Antananarivo",
    description:
      "Développement d'une plateforme d'orientation pour les nouveaux bacheliers. Backend Django, frontend React, et implémentation d'un système de recommandation de filières universitaires.",
    tags: ["Django", "React", "Python"],
  },
  {
    role: "Stagiaire Développeuse",
    company: "JIRAMA",
    location: "Antaninarenina, Antananarivo",
    description:
      "Développement d'une application mobile de caisse hors ligne. Backend Node.js, frontend React Native, persistance des données avec Firebase.",
    tags: ["React Native", "Node.js", "Firebase"],
  },
];

export default function About() {
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
    <section id="about" style={{ padding: "80px 20px" }}>
      <div ref={ref} style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#8b5cf6", textTransform: "uppercase", marginBottom: "10px" }}>profil</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(26px, 6vw, 40px)", color: "#fff", marginBottom: "16px" }}>
            À propos de moi
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(232,230,240,0.65)", maxWidth: "560px", lineHeight: 1.85 }}>
            Diplômée d'une licence en informatique, je suis passionnée par le développement
            d'applications web et les technologies numériques. Compétente en Python et JavaScript,
            j'ai une expérience concrète dans la création d'applications avec Django et React.
            Curieuse, adaptable, et toujours prête à apprendre.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "10px", marginBottom: "48px" }}>
          {stats.map(({ label, value, sub }) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(232,230,240,0.08)", borderRadius: "10px", padding: "16px" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#8b5cf6", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#e8e6f0", marginBottom: "3px" }}>{value}</p>
              <p style={{ fontSize: "11px", color: "rgba(232,230,240,0.45)" }}>{sub}</p>
            </div>
          ))}
        </div>

        <div>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#8b5cf6", textTransform: "uppercase", marginBottom: "20px" }}>expérience</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {experiences.map(({ role, company, location, description, tags }) => (
              <div key={company} style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(232,230,240,0.08)", borderRadius: "12px", padding: "20px 20px 20px 22px", borderLeft: "2px solid #8b5cf6", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                <div style={{ marginBottom: "10px" }}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "15px", color: "#fff" }}>{role}</p>
                  <p style={{ fontSize: "13px", color: "#a78bfa", fontWeight: 500 }}>{company}</p>
                  <p style={{ fontSize: "11px", color: "rgba(232,230,240,0.4)", marginTop: "2px" }}>{location}</p>
                </div>
                <p style={{ fontSize: "13px", color: "rgba(232,230,240,0.6)", lineHeight: 1.75, marginBottom: "12px" }}>{description}</p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {tags.map((t) => (
                    <span key={t} style={{ fontSize: "11px", padding: "3px 9px", borderRadius: "5px", background: "rgba(139,92,246,0.12)", color: "#a78bfa", border: "0.5px solid rgba(139,92,246,0.25)" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
