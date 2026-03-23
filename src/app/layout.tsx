import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mialisoa Randriamanana — Développeuse Full-Stack",
  description:
    "Portfolio de Mialisoa Randriamanana, développeuse full-stack passionnée par le web, Python, JavaScript, React et Django. Basée à Antananarivo, Madagascar.",
  keywords: ["développeuse", "full-stack", "React", "Django", "Madagascar", "portfolio"],
  authors: [{ name: "Mialisoa Randriamanana" }],
  openGraph: {
    title: "Mialisoa Randriamanana — Développeuse Full-Stack",
    description: "Portfolio de Mialisoa Randriamanana, développeuse full-stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
