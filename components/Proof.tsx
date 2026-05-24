import Image from "next/image";

const proofCards = [
  {
    src: "/images/schwimmen.jpg",
    alt: "Langdistanz Schwimmen Malta",
    label: "Open Water",
    title: "13,4 km am Stück",
    desc: "6 Stunden Schwimmen in Malta. Was möglich ist, wenn der Körper richtig vorbereitet ist.",
  },
  {
    src: "/images/marathon.jpg",
    alt: "Dominic Thormann beim ADAC Marathon Hannover, 3:29:35",
    label: "Wettkampf",
    title: "5 Marathons",
    desc: "Mit jeder Distanz feiner abgestimmt. So vorbereitet, dass das Event nicht zum Kampf wird, sondern zum Highlight, an das du dich lächelnd erinnerst.",
  },
  {
    src: "/images/fasten.jpg",
    alt: "8 Tage Fasten",
    label: "Stoffwechsel",
    title: "8 Tage Fasten",
    desc: "Acht Tage komplett ohne Nahrung. Den Körper auf Fettverbrennung umstellen, am eigenen Leib verstanden.",
  },
  {
    src: "/images/vipassana.jpg",
    alt: "Vipassana Meditation",
    label: "Mentale Stärke",
    title: "10 Tage Vipassana",
    desc: "10 Tage Meditation, 10 Stunden täglich. Kein Handy, kein Reden, kein Lesen. Der mentale Anker.",
  },
  {
    src: "/images/whoop-hrv.png",
    alt: "WHOOP Dashboard mit eigenen Werten: HRV 204 ms, RHR 36 bpm",
    label: "Datenbasiert",
    title: "Perfekte Regeneration",
    desc: "HRV, Schlaf und Belastung täglich gemessen. Optimale Abstimmung entsteht erst, wenn du verstehst, was dein Körper wirklich braucht.",
    variant: "data" as const,
  },
  {
    src: "/images/bali.jpeg",
    alt: "Auslandssemester auf Bali, traditionelle Zeremonie",
    label: "Naturverbundenheit",
    title: "Auslandssemester Bali",
    desc: "Auf Bali gelernt, im Einklang mit der Natur und mit mir selbst zu leben. Eine andere Art, den eigenen Körper und Rhythmus zu verstehen.",
  },
] as const;

export function Proof() {
  return (
    <section className="proof">
      <div className="wrap">
        <div className="section-eyebrow reveal-up">Nicht nur Theorie</div>
        <h2 className="reveal-up">
          Ich habe es <span className="italic">selbst gemacht.</span>
        </h2>
        <p className="proof-intro reveal-up">
          Bevor ich etwas weitergebe, probiere ich es am eigenen Körper. Sechs
          Stationen, die mir gezeigt haben, wozu der Körper mit der richtigen
          Vorbereitung fähig ist.
        </p>

        <div className="proof-grid" data-stagger>
          {proofCards.map((card) => {
            const isData = "variant" in card && card.variant === "data";
            return (
              <div
                key={card.title}
                className={`proof-card reveal-up${isData ? " proof-card-data" : ""}`}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 400px"
                  loading="lazy"
                />
                <div
                  className={`proof-card-overlay${isData ? " proof-card-overlay-data" : ""}`}
                >
                  <div className="proof-card-label">{card.label}</div>
                  <div className="proof-card-title">{card.title}</div>
                  <div className="proof-card-desc">{card.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <blockquote className="proof-quote reveal-up">
          &ldquo;Was du als Hobby-Läufer brauchst, ist nicht mehr Wissen aus
          Büchern. Du brauchst Wissen, das jemand ausprobiert hat und versteht,
          was im Körper wirklich passiert.&rdquo;
          <span className="proof-quote-author">Dominic Thormann</span>
        </blockquote>
      </div>
    </section>
  );
}
