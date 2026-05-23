import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

type LegalPageProps = {
  title: string;
  eyebrow?: string;
  updated?: string;
  children: ReactNode;
};

const titleStyle: CSSProperties = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(36px, 4.5vw, 48px)",
  fontWeight: 600,
  letterSpacing: "-0.02em",
  lineHeight: 1.05,
  color: "var(--ink)",
  margin: 0,
  animation: "none",
};

const eyebrowStyle: CSSProperties = {
  fontFamily: "var(--display)",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--accent)",
  marginBottom: 16,
};

const backStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontFamily: "var(--display)",
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--ink-mute)",
  textDecoration: "none",
  marginBottom: 48,
  transition: "color 0.2s",
};

const sectionTitleStyle: CSSProperties = {
  fontFamily: "var(--display)",
  fontSize: 17,
  fontWeight: 600,
  letterSpacing: "-0.005em",
  lineHeight: 1.4,
  color: "var(--ink)",
  margin: "44px 0 14px",
  animation: "none",
};

const subTitleStyle: CSSProperties = {
  fontFamily: "var(--display)",
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: 0,
  lineHeight: 1.4,
  color: "var(--ink)",
  margin: "22px 0 8px",
};

export function LegalPage({
  title,
  eyebrow = "Rechtliches",
  updated,
  children,
}: LegalPageProps) {
  return (
    <>
      <Nav />
      <main
        style={{
          padding: "120px 0 88px",
          background: "var(--bg)",
          minHeight: "100vh",
        }}
      >
        <div
          className="wrap"
          style={{ maxWidth: 640, paddingLeft: 24, paddingRight: 24 }}
        >
          <Link href="/" style={backStyle} className="legal-back">
            <span aria-hidden style={{ fontSize: 15 }}>
              ←
            </span>{" "}
            Zurück zur Startseite
          </Link>

          <header
            style={{
              marginBottom: 48,
              paddingBottom: 32,
              borderBottom: "1px solid var(--line)",
            }}
          >
            <div style={eyebrowStyle}>{eyebrow}</div>
            <h1 style={titleStyle}>{title}</h1>
          </header>

          <div className="legal-content">{children}</div>

          {updated && (
            <p
              style={{
                marginTop: 56,
                paddingTop: 24,
                borderTop: "1px solid var(--line)",
                fontFamily: "var(--display)",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
              }}
            >
              Stand: {updated}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

type SectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: SectionProps) {
  return (
    <section style={{ padding: 0, position: "static" }}>
      <h2 style={sectionTitleStyle}>{title}</h2>
      {children}
    </section>
  );
}

export function LegalSubsection({ title, children }: SectionProps) {
  return (
    <>
      <h3 style={subTitleStyle}>{title}</h3>
      {children}
    </>
  );
}
