import Image from "next/image";
import { CalendlyCTA } from "./CalendlyCTA";
import { ParallaxImage } from "./ParallaxImage";

export function Trainer() {
  return (
    <section id="trainer" className="trainer">
      <div className="wrap">
        <div className="trainer-grid">
          <div className="trainer-img-wrap reveal-right">
            <ParallaxImage strength={0.06}>
              <Image
                src="/images/coach Dom.jpeg"
                alt="Dominic Thormann"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </ParallaxImage>
          </div>
          <div className="reveal-left">
            <div className="trainer-tagline">Dein Coach &amp; Mentor</div>
            <h2 className="trainer-name">Dominic Thormann.</h2>
            <p>
              Ironman-Finisher, Langdistanz-Schwimmer,
              Meditations-Praktizierender. Aber vor allem: jemand, der seinen
              Körper über viele Jahre kennengelernt hat, mit allen Höhen,
              Tiefen und Lehren.
            </p>
            <p>
              Ich war als Ironman zu verbissen und habe dabei die Balance
              verloren. Aus dieser Erfahrung ist das hier entstanden: ein
              Seminar, das genau das weitergibt, was ich gern früher gewusst
              hätte. Wie der Körper wirklich tickt. Und warum Recovery oft den
              größeren Hebel hat als ein weiterer harter Trainingstag.
            </p>
            <p>
              Was ich vermittle, kommt aus{" "}
              <span className="italic">persönlicher Erfahrung</span>. Am
              eigenen Körper, mit Daten, in echten Wettkämpfen.
            </p>
            <CalendlyCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
