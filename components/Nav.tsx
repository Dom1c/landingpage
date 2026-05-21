import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="logo">
          Dominic<span>·</span>Thormann
        </div>
        <ul className="nav-links">
          <li>
            <Link href="#fuer-wen">Für wen</Link>
          </li>
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
        <Link href="#termine" className="nav-cta">
          Platz sichern
        </Link>
      </div>
    </nav>
  );
}
