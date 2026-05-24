const pillars = [
  {
    num: "01 · TRAINING",
    title: "Den Motor verstehen",
    description:
      "Energiesysteme, Pulszonen, Schwellen. Warum 90 % deiner Läufe langsam sein sollten und wann du wirklich Gas geben darfst.",
    items: [
      "Aerob vs. Anaerob",
      "LT1 & LT2: deine Schwellen",
      "Die 90/10-Regel",
      "Atmung als Steuerung",
    ],
  },
  {
    num: "02 · ERNÄHRUNG",
    title: "Treibstoff & Erholung",
    description:
      "Vom Einkauf bis zur Verdauung. Was, wann und wie viel, ohne Diät-Dogmen und ohne 47 Supplements.",
    items: [
      "Makros: Carbs, Fett, Protein",
      "Timing rund ums Training",
      "Qualität & Empfindlichkeiten",
      "Race Day Nutrition",
    ],
  },
  {
    num: "03 · RECOVERY",
    title: "Da, wo Anpassung passiert",
    description:
      "Schlaf, Rhythmus, Balance. Der unterschätzte Hebel und der Grund, warum Profis nicht härter trainieren, sondern besser regenerieren.",
    items: [
      "Schlaf als Leistungsfaktor",
      "Circadianer Rhythmus",
      "Grounding & Natur",
      "Mentale Balance",
    ],
  },
] as const;

export function Pillars() {
  return (
    <section id="inhalte">
      <div className="wrap">
        <div className="section-eyebrow reveal-up">Die 3 Säulen</div>
        <h2 className="reveal-up">
          Drei Bereiche.
          <br />
          <span className="italic">Ein Ziel: nachhaltige Leistung.</span>
        </h2>

        <div className="pillars-grid" data-stagger>
          {pillars.map((pillar) => (
            <div key={pillar.num} className="pillar reveal-up">
              <div className="pillar-num">{pillar.num}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <ul className="pillar-list">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
