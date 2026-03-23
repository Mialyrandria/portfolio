export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "32px 40px",
        borderTop: "0.5px solid rgba(232,230,240,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "16px", color: "#c4b5fd" }}>
        MR<span style={{ color: "rgba(196,181,253,0.3)" }}>.</span>
      </span>
      <p style={{ fontSize: "12px", color: "rgba(232,230,240,0.3)" }}>
        © {year} Mialisoa Randriamanana — Antananarivo, Madagascar
      </p>
      <div style={{ display: "flex", gap: "16px" }}>
        {[
          { label: "GitHub", href: "https://github.com/Mialyrandria" },
          { label: "LinkedIn", href: "https://linkedin.com" },
          { label: "Email", href: "mailto:mialyrandriamanana731@gmail.com" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{ fontSize: "12px", color: "rgba(232,230,240,0.35)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#a78bfa")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(232,230,240,0.35)")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
