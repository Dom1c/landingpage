import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              Dominic<span>·</span>Thormann
            </div>
            <p className="footer-tagline">
              Training, Ernährung & Wettkampfvorbereitung für Hobby-Läufer.
              Praxisnah, ehrlich, ohne Bullshit.
            </p>
          </div>
          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li>
                <Link href="#inhalte">Inhalte</Link>
              </li>
              <li>
                <Link href="#trainer">Trainer</Link>
              </li>
              <li>
                <Link href="#termine">Termine</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Rechtliches</h4>
            <ul>
              <li>
                <Link href="/impressum">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz">Datenschutz</Link>
              </li>
              <li>
                <Link href="/agb">AGB</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Dominic Thormann. Alle Rechte vorbehalten.</div>
          <div>Made with ❤ in Niedersachsen</div>
        </div>
      </div>
    </footer>
  );
}
