import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./icons";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Halbtags-Seminar · Präsenz</span>
            <h1>
              Lauf <span className="italic">schneller</span>,
              <br />
              gesünder,
              <br />
              <span className="italic">nachhaltiger.</span>
            </h1>
            <p className="hero-sub">
              Training, Ernährung und Wettkampfvorbereitung für Hobby-Läufer.
              Praxisnah, ehrlich, ohne 1.000-Kilometer-pro-Woche-Mythen — mit
              Ironman-Finisher Dominic Thormann.
            </p>
            <div className="hero-cta-row">
              <Link href="#termine" className="btn-primary">
                Termin wählen
                <ArrowIcon />
              </Link>
              <Link href="#inhalte" className="btn-ghost">
                Was du lernst
              </Link>
            </div>
          </div>

          <div className="hero-photo">
            <Image
              src="/images/ironman.jpg"
              alt="Dominic Thormann beim Ironman-Finish"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              priority
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
            <div className="hero-photo-badge">
              <div className="b-label">Ironman Finisher · 10:56:46</div>
              <div className="b-text">
                3,8 km Schwimmen · 180 km Rad · 42 km Laufen
              </div>
            </div>
          </div>

          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Dauer</span>
              <span className="meta-value">2 Stunden</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Gruppe</span>
              <span className="meta-value">10–15 Personen</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Level</span>
              <span className="meta-value">Einsteiger & Hobby</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Sprache</span>
              <span className="meta-value">Deutsch</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
