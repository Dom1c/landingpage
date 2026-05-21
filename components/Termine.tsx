import Link from "next/link";
import { ClockIcon, PinIcon, UsersIcon } from "./icons";

const termine = [
  {
    featured: true,
    badge: "Nächster Termin",
    badgeSoft: false,
    title: "Training, Ernährung und Recovery für Läufer",
    day: "Samstag",
    date: "06. Juni 2026",
    time: "10:00 – 12:00 Uhr",
    location: "Seven Apica, Braunschweig",
    spots: "10–15 Plätze",
    price: "59 €",
    cta: "Verbindlich anmelden",
    href: "https://buy.stripe.com/REPLACE_LINK",
    ghost: false,
  },
  {
    featured: false,
    badge: "Bald",
    badgeSoft: true,
    title: "Mindset und Wettkampfvorbereitung",
    day: "Termin",
    date: "folgt in Kürze",
    time: "Datum tbd",
    location: "Braunschweig",
    spots: "Begrenzte Plätze",
    price: "59 €",
    cta: "Demnächst verfügbar",
    href: "#",
    ghost: true,
  },
  {
    featured: false,
    badge: "Bald",
    badgeSoft: true,
    title: "Lauftechnik Praxiskurs",
    day: "Termin",
    date: "folgt in Kürze",
    time: "Datum tbd",
    location: "Braunschweig",
    spots: "Begrenzte Plätze",
    price: "59 €",
    cta: "Demnächst verfügbar",
    href: "#",
    ghost: true,
  },
] as const;

export function Termine() {
  return (
    <section id="termine">
      <div className="wrap">
        <div className="section-eyebrow">Termine</div>
        <h2>
          Die nächsten
          <br />
          <span className="italic">Termine.</span>
        </h2>
        <p
          style={{
            color: "var(--ink-soft)",
            fontSize: 18,
            maxWidth: 600,
            marginTop: -20,
          }}
        >
          Bezahlung direkt online über Stripe. Bestätigung kommt per Mail.
        </p>

        <div className="termine-grid">
          {termine.map((termin) => (
            <div
              key={termin.title}
              className={`termin-card${termin.featured ? " featured" : ""}`}
            >
              <div
                className={`termin-badge${termin.badgeSoft ? " soft" : ""}`}
              >
                {termin.badge}
              </div>
              <div className="termin-title">{termin.title}</div>
              <div>
                <div className="termin-day">{termin.day}</div>
                <div className="termin-date">{termin.date}</div>
              </div>
              <div className="termin-meta">
                <div className="termin-meta-row">
                  <ClockIcon />
                  {termin.time}
                </div>
                <div className="termin-meta-row">
                  <PinIcon />
                  {termin.location}
                </div>
                <div className="termin-meta-row">
                  <UsersIcon />
                  {termin.spots}
                </div>
              </div>
              <div className="termin-price">
                <span className="price-amount">{termin.price}</span>
                <span className="price-vat">inkl. MwSt.</span>
              </div>
              {termin.ghost ? (
                <span className="termin-cta ghost">{termin.cta}</span>
              ) : (
                <Link
                  href={termin.href}
                  className="termin-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {termin.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
