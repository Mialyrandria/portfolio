"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    label: "langages",
    skills: [
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "HTML / CSS", level: 90 },
      { name: "TypeScript", level: 65 },
    ],
  },
  {
    label: "frameworks & librairies",
    skills: [
      { name: "React / React Native", level: 85 },
      { name: "Django", level: 82 },
      { name: "SpringBoot", level: 70 },
      { name: "VueJS", level: 68 },
      { name: "Node.js", level: 72 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    label: "outils & environnement",
    skills: [
      { name: "Git", level: 80 },
      { name: "Figma", level: 75 },
      { name: "Docker", level: 65 },
      { name: "Postman", level: 80 },
      { name: "PostgreSQL / MySQL", level: 75 },
    ],
  },
];

const softSkills = ["Bonne communication","Travail en équipe","Problem-solving","Adaptabilité","Curiosité","Rigueur"];

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "13px", color: "rgba(232,230,240,0.8)" }}>{name}</span>
        <span style={{ fontSize: "11px", color: "#8b5cf6", fontWeight: 500 }}>{level}%</span>
      </div>
      <div style={{ height: "3px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{ height: "100%", width: animate ? `${level}%` : "0%", background: "linear-gradient(90deg, #8b5cf6, #a78bfa)", borderRadius: "2px", transition: "width 1s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true;
        setAnimate(true);
        if (ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "translateY(0)";
        }
      }
    }, { threshold: 0.1 });
    if (ref.current) {
      ref.current.style.opacity = "0";
      ref.current.style.transform = "translateY(32px)";
      ref.current.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" style={{ padding: "100px 40px", background: "rgba(139,92,246,0.03)", borderTop: "0.5px solid rgba(139,92,246,0.1)", borderBottom: "0.5px solid rgba(139,92,246,0.1)" }}>
      <div ref={ref} style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#8b5cf6", textTransform: "uppercase", marginBottom: "10px" }}>savoir-faire</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", color: "#fff" }}>Compétences</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "32px", marginBottom: "48px" }}>
          {skillGroups.map(({ label, skills }) => (
            <div key={label}>
              <p style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#8b5cf6", textTransform: "uppercase", marginBottom: "20px", fontWeight: 500 }}>{label}</p>
              {skills.map(({ name, level }) => <SkillBar key={name} name={name} level={level} animate={animate} />)}
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#8b5cf6", textTransform: "uppercase", marginBottom: "16px", fontWeight: 500 }}>soft skills</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {softSkills.map((s) => (
              <span key={s} style={{ fontSize: "13px", padding: "7px 16px", borderRadius: "8px", background: "rgba(255,255,255,0.03)", color: "rgba(232,230,240,0.7)", border: "0.5px solid rgba(232,230,240,0.1)", transition: "all 0.2s", cursor: "default" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLSpanElement; el.style.borderColor="rgba(139,92,246,0.4)"; el.style.color="#c4b5fd"; el.style.background="rgba(139,92,246,0.08)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLSpanElement; el.style.borderColor="rgba(232,230,240,0.1)"; el.style.color="rgba(232,230,240,0.7)"; el.style.background="rgba(255,255,255,0.03)"; }}
              >{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
