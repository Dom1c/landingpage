import Image from "next/image";

const proofCards = [
  {
    src: "/images/ironman.jpg",
    alt: "Ironman Finish",
    label: "Ironman",
    title: "Volle Distanz, Finisher",
    desc: "3,8 km Schwimmen, 180 km Rad, 42 km Lauf — der ultimative Test für Vorbereitung.",
  },
  {
    src: "/images/schwimmen.jpg",
    alt: "Langdistanz Schwimmen Malta",
    label: "Open Water",
    title: "13,4 km am Stück",
    desc: "6 Stunden Schwimmen in Malta. Was möglich ist, wenn der Körper richtig vorbereitet ist.",
  },
  {
    src: "/images/fasten.jpg",
    alt: "7 Tage Fasten",
    label: "Stoffwechsel",
    title: "7 Tage Fasten",
    desc: "Eine Woche komplett ohne Nahrung. Den Körper auf Fettverbrennung umstellen — am eigenen Leib verstanden.",
  },
  {
    src: "/images/vipassana.jpg",
    alt: "Vipassana Meditation",
    label: "Mentale Stärke",
    title: "10 Tage Vipassana",
    desc: "10 Tage Meditation, 10 Stunden täglich. Kein Handy, kein Reden, kein Lesen. Der mentale Anker.",
  },
] as const;

export function Proof() {
  return (
    <section className="proof">
      <div className="wrap">
        <div className="section-eyebrow">Nicht nur Theorie</div>
        <h2>
          Ich habe es <span className="italic">selbst gemacht.</span>
        </h2>
        <p className="proof-intro">
          Bevor ich etwas weitergebe, probiere ich es am eigenen Körper. Vier
          Erfahrungen, die mir gezeigt haben, wozu der Körper mit der richtigen
          Vorbereitung fähig ist.
        </p>

        <div className="proof-grid">
          {proofCards.map((card) => (
            <div key={card.title} className="proof-card reveal">
              <Image src={card.src} alt={card.alt} fill sizes="280px" />
              <div className="proof-card-overlay">
                <div className="proof-card-label">{card.label}</div>
                <div className="proof-card-title">{card.title}</div>
                <div className="proof-card-desc">{card.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="proof-quote">
          &ldquo;Was du als Hobby-Läufer brauchst, ist nicht mehr Wissen aus
          Büchern. Du brauchst Wissen, das jemand ausprobiert hat — und versteht,
          was im Körper wirklich passiert.&rdquo;
          <span className="proof-quote-author">— Dominic Thormann</span>
        </blockquote>
      </div>
    </section>
  );
}
