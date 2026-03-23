"use client";

import { useEffect, useRef } from "react";

const contactLinks = [
  {
    icon: "✉",
    label: "email",
    value: "mialyrandriamanana731@gmail.com",
    href: "mailto:mialyrandriamanana731@gmail.com",
  },
  {
    icon: "☎",
    label: "téléphone",
    value: "+261 34 28 724 15",
    href: "tel:+261342872415",
  },
  {
    icon: "in",
    label: "linkedin",
    value: "Mialy Randriamanana",
    href: "https://www.linkedin.com/in/mialy-randriamanana-184027390/",
  },
  {
    icon: "gh",
    label: "github",
    value: "Mialyrandria",
    href: "https://github.com/Mialyrandria",
  },
];

export default function Contact() {
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
    <section id="contact" style={{ padding: "80px 20px", background: "rgba(139,92,246,0.03)", borderTop: "0.5px solid rgba(139,92,246,0.1)" }}>
      <div ref={ref} style={{ maxWidth: "700px", margin: "0 auto" }}>

        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#8b5cf6", textTransform: "uppercase", marginBottom: "10px" }}>contact</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(26px, 6vw, 40px)", color: "#fff", marginBottom: "16px" }}>
            Travaillons<br />ensemble
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(232,230,240,0.6)", lineHeight: 1.85 }}>
            Tu as un projet, une opportunité ou simplement envie d'échanger sur
            le développement web ? N'hésite pas à me contacter, je te répondrai
            rapidement.
          </p>
        </div>

        <div className="contact-grid">
          {contactLinks.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "18px",
                background: "rgba(255,255,255,0.025)",
                border: "0.5px solid rgba(232,230,240,0.08)",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(139,92,246,0.35)";
                el.style.background = "rgba(139,92,246,0.06)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(232,230,240,0.08)";
                el.style.background = "rgba(255,255,255,0.025)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(139,92,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, color: "#a78bfa", flexShrink: 0 }}>
                {icon}
              </div>
              <div style={{ overflow: "hidden" }}>
                <p style={{ fontSize: "10px", color: "#8b5cf6", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3px" }}>{label}</p>
                <p style={{ fontSize: "13px", color: "rgba(232,230,240,0.7)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 480px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
