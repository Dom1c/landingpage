import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./icons";
import { IronmanDetails } from "./IronmanDetails";
import { ParallaxImage } from "./ParallaxImage";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <h1>
              Lauf <span className="italic">schneller</span>,
              <br />
              gesünder,
              <br />
              <span className="italic">nachhaltiger.</span>
            </h1>
            <p className="hero-sub">
              Training, Ernährung und Wettkampfvorbereitung für Hobby- und
              ambitionierte Läufer. Praxisnah, ehrlich, ohne
              1.000-Kilometer-pro-Woche-Mythen, mit Ironman-Finisher Dominic
              Thormann.
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
            <ParallaxImage>
              <Image
                src="/images/ironman.jpg"
                alt="Dominic Thormann beim Ironman-Finish"
                fill
                sizes="(max-width: 900px) 100vw, 540px"
                priority
                fetchPriority="high"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
            </ParallaxImage>
            <div className="hero-photo-badge">
              <div className="b-label">Ironman Finisher · 10:56:46</div>
              <div className="b-text">
                3,8 km Schwimmen · 180 km Rad · 42 km Laufen
              </div>
              <IronmanDetails />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
