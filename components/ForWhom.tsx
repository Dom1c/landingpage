const checklistItems = [
  "Du läufst seit einer Weile, aber wirst nicht wirklich schneller",
  "Nach langen Läufen bist du tagelang platt",
  "Du fragst dich, was du wann essen sollst",
  "Dein erster Wettkampf steht an und du weißt nicht, wie du dich vorbereiten sollst",
  "Du willst verstehen, was im Körper passiert, statt blind Pläne abzuarbeiten",
];

export function ForWhom() {
  return (
    <section id="fuer-wen" className="for-whom">
      <div className="wrap">
        <div className="two-col">
          <div>
            <div className="section-eyebrow reveal-up">Für wen</div>
            <h2 className="reveal-up">
              Du läufst gern.
              <br />
              <span className="italic">Aber dir fehlt Struktur.</span>
            </h2>
          </div>
          <div>
            <ul className="checklist" data-stagger>
              {checklistItems.map((item) => (
                <li key={item} className="reveal-left">
                  <span className="check-mark">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
