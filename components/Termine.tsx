import Link from "next/link";
import { ClockIcon, PinIcon, UsersIcon } from "./icons";

const termine = [
  {
    featured: true,
    badge: "Nächster Termin",
    badgeSoft: false,
    title: "Training, Ernährung und Recovery für Läufer",
    day: "Samstag",
    date: "06.06.2026",
    time: "10:00 – 12:00 Uhr",
    location: "Seven Apica · Hagenhof 7, Braunschweig",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Seven+Apica+Hagenhof+7+Braunschweig",
    spots: "15 Plätze",
    price: "66 €",
    cta: "Verbindlich anmelden",
    href: "https://buy.stripe.com/REPLACE_LINK",
    ghost: false,
  },
  {
    featured: false,
    badge: "Bald",
    badgeSoft: true,
    title: "Gruppencoaching",
    subtitle: "Wettkampf­vorbereitung — Halbmarathon, Marathon, o. ä.",
    day: "Termin",
    date: "folgt in Kürze",
    time: "Datum tbd",
    location: "Braunschweig & online",
    spots: "4–8 Plätze",
    price: "coming soon",
    cta: "Demnächst verfügbar",
    href: "#",
    ghost: true,
  },
  {
    featured: false,
    badge: "Auf Anfrage",
    badgeSoft: true,
    title: "Impulsvorträge",
    day: "Format",
    date: "auf Anfrage",
    time: "Dauer nach Absprache",
    location: "Braunschweig & Region",
    spots: "Vortrag · individuell",
    price: "coming soon",
    cta: "Auf Anfrage",
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
            maxWidth: 720,
            marginTop: -20,
          }}
        >
          Seminare und Coaching für Läufer aus Braunschweig, Wolfenbüttel,
          Salzgitter, Wolfsburg, Gifhorn und der Region Hannover — Vorbereitung
          u. a. auf Braunschweiger Nachtlauf, Lauftage, Marathon Hannover,
          Halbmarathon und deinen ersten 10er.
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
              {"subtitle" in termin && termin.subtitle ? (
                <div className="termin-subtitle">{termin.subtitle}</div>
              ) : null}
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
                  {"locationHref" in termin && termin.locationHref ? (
                    <a
                      href={termin.locationHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="termin-location-link"
                    >
                      {termin.location}
                    </a>
                  ) : (
                    termin.location
                  )}
                </div>
                <div className="termin-meta-row">
                  <UsersIcon />
                  {termin.spots}
                </div>
              </div>
              <div className="termin-price">
                <span
                  className={`price-amount${
                    termin.price.includes("€") ? "" : " price-amount-soft"
                  }`}
                >
                  {termin.price}
                </span>
                {termin.price.includes("€") && (
                  <span className="price-vat">inkl. MwSt.</span>
                )}
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
