import Link from "next/link";

type LegalPageProps = {
  title: string;
};

export function LegalPage({ title }: LegalPageProps) {
  return (
    <main style={{ padding: "140px 0 80px" }}>
      <div className="wrap">
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
        <h1 style={{ marginBottom: 24 }}>{title}</h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: 640, fontSize: 18 }}>
          Diese Seite ist noch ein Platzhalter. Bitte füge hier den vollständigen
          rechtlichen Text ein.
        </p>
      </div>
    </main>
  );
}
