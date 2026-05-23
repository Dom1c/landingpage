import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <main style={{ padding: "140px 0 100px" }}>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Link
          href="/"
          style={{
            fontFamily: "var(--display)",
            fontSize: 14,
            color: "var(--accent)",
            textDecoration: "none",
            marginBottom: 32,
            display: "inline-block",
          }}
        >
          ← Zurück zur Startseite
        </Link>
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            marginBottom: 40,
            animation: "none",
          }}
        >
          {title}
        </h1>
        <div className="legal-content">{children}</div>
      </div>
    </main>
  );
}
