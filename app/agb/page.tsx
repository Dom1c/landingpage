import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  LegalSubsection,
} from "@/components/LegalPage";
import { ObfuscatedContact } from "@/components/ObfuscatedContact";

export const metadata: Metadata = {
  title: "AGB — Dominic Thormann",
  robots: { index: false, follow: false },
};

export default function AgbPage() {
  return (
    <LegalPage
      title="Allgemeine Geschäftsbedingungen"
      updated="Mai 2026"
    >
      <LegalSection title="1. Geltungsbereich">
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge
          zwischen Dominic Thormann (nachfolgend „Anbieter&ldquo;) und den
          Teilnehmenden (nachfolgend „Kunde&ldquo;) über die Teilnahme an
          Seminaren, Workshops und vergleichbaren Veranstaltungen rund um die
          Themen Lauftraining, Ernährung und Wettkampfvorbereitung.
          Entgegenstehende oder abweichende Bedingungen des Kunden werden nicht
          anerkannt, es sei denn, ihrer Geltung wird ausdrücklich schriftlich
          zugestimmt.
        </p>
      </LegalSection>

      <LegalSection title="2. Vertragspartner">
        <ObfuscatedContact />
      </LegalSection>

      <LegalSection title="3. Vertragsschluss">
        <p>
          Die Darstellung der Seminare auf dieser Website stellt kein rechtlich
          bindendes Angebot dar, sondern eine Aufforderung zur Buchung. Mit der
          verbindlichen Buchung über den vom Anbieter bereitgestellten
          Zahlungslink (Stripe) gibt der Kunde ein Angebot auf Abschluss eines
          Teilnahmevertrags ab. Der Vertrag kommt mit der schriftlichen
          Buchungsbestätigung per E-Mail durch den Anbieter zustande.
        </p>
      </LegalSection>

      <LegalSection title="4. Leistungsumfang">
        <p>
          Der konkrete Leistungsumfang (Termin, Ort, Dauer, Inhalte) ergibt
          sich aus der jeweiligen Seminarbeschreibung auf der Website zum
          Zeitpunkt der Buchung sowie aus der Buchungsbestätigung. Der Anbieter
          behält sich vor, in begründeten Fällen (z. B. Krankheit, höhere
          Gewalt) inhaltliche oder organisatorische Anpassungen vorzunehmen,
          soweit diese für den Kunden zumutbar sind.
        </p>
      </LegalSection>

      <LegalSection title="5. Preise und Zahlung">
        <p>
          Es gelten die zum Zeitpunkt der Buchung auf der Website ausgewiesenen
          Preise. Der Anbieter ist Kleinunternehmer im Sinne des § 19 UStG; es
          wird daher keine Umsatzsteuer ausgewiesen. Die Zahlung erfolgt
          vollständig im Voraus über den Zahlungsdienstleister Stripe. Die
          Teilnahme setzt den vollständigen Zahlungseingang voraus.
        </p>
      </LegalSection>

      <LegalSection title="6. Widerrufsrecht für Verbraucher">
        <p>
          Verbrauchern steht grundsätzlich ein 14-tägiges Widerrufsrecht nach
          § 355 BGB zu. Das Widerrufsrecht erlischt vorzeitig, wenn der
          Anbieter die Dienstleistung vollständig erbracht hat und der Kunde
          dem zuvor ausdrücklich zugestimmt und gleichzeitig seine Kenntnis vom
          Erlöschen des Widerrufsrechts bestätigt hat (§ 356 Abs. 4 BGB). Der
          Widerruf ist in Textform an die unter Ziffer 2 genannte Adresse zu
          richten.
        </p>
        <LegalSubsection title="Muster-Widerrufsformular">
          <p>
            Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über die
            folgende Dienstleistung: [Seminarbezeichnung, Datum] — bestellt am
            [Datum] — Name, Anschrift, Datum, Unterschrift (nur bei Mitteilung
            auf Papier).
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="7. Stornierung und Umbuchung">
        <p>
          Unabhängig vom Widerrufsrecht gelten für die Stornierung der
          Teilnahme folgende Regelungen:
        </p>
        <ul>
          <li>
            Stornierung bis 14 Tage vor Veranstaltungsbeginn: Rückerstattung
            des gezahlten Entgelts abzüglich einer Bearbeitungspauschale von
            15 €.
          </li>
          <li>
            Stornierung 14 bis 7 Tage vor Veranstaltungsbeginn: 50 % des
            Teilnahmeentgelts.
          </li>
          <li>
            Stornierung weniger als 7 Tage vor Veranstaltungsbeginn oder bei
            Nichterscheinen: Es wird das volle Teilnahmeentgelt fällig.
          </li>
          <li>
            Der Kunde darf jederzeit eine Ersatzperson benennen, sofern diese
            die Teilnahmebedingungen erfüllt. Eine kurze Mitteilung in Textform
            genügt.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Absage durch den Anbieter">
        <p>
          Der Anbieter kann eine Veranstaltung absagen, wenn die Mindestzahl an
          Teilnehmenden nicht erreicht wird oder ein wichtiger Grund vorliegt
          (z. B. Krankheit, höhere Gewalt). In diesem Fall erhält der Kunde
          das gezahlte Entgelt vollständig zurück. Weitergehende Ansprüche,
          etwa auf Erstattung von Reise- oder Übernachtungskosten, bestehen
          nur bei Vorsatz oder grober Fahrlässigkeit des Anbieters.
        </p>
      </LegalSection>

      <LegalSection title="9. Pflichten des Kunden">
        <p>
          Die Teilnahme an den Seminaren erfolgt auf eigene Verantwortung. Der
          Kunde versichert, gesundheitlich in der Lage zu sein, an den
          Inhalten teilzunehmen, und etwaige gesundheitliche Risiken vorab mit
          einem Arzt abgeklärt zu haben. Die im Seminar gegebenen Empfehlungen
          ersetzen keine ärztliche oder physiotherapeutische Beratung.
        </p>
      </LegalSection>

      <LegalSection title="10. Haftung">
        <p>
          Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des
          Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen
          oder fahrlässigen Pflichtverletzung beruhen, sowie für sonstige
          Schäden, die auf einer vorsätzlichen oder grob fahrlässigen
          Pflichtverletzung beruhen. Im Übrigen ist die Haftung auf den
          vertragstypisch vorhersehbaren Schaden begrenzt. Eine weitergehende
          Haftung ist ausgeschlossen.
        </p>
      </LegalSection>

      <LegalSection title="11. Urheber- und Nutzungsrechte">
        <p>
          Alle im Rahmen der Seminare ausgegebenen Unterlagen, Texte, Folien
          und Materialien sind urheberrechtlich geschützt. Eine Weitergabe,
          Vervielfältigung oder Veröffentlichung — auch auszugsweise — bedarf
          der vorherigen schriftlichen Zustimmung des Anbieters.
        </p>
      </LegalSection>

      <LegalSection title="12. Bild- und Tonaufnahmen">
        <p>
          Eigene Bild- oder Tonaufnahmen während der Veranstaltung sind nur mit
          ausdrücklicher Zustimmung des Anbieters sowie aller davon
          betroffenen Personen zulässig.
        </p>
      </LegalSection>

      <LegalSection title="13. Datenschutz">
        <p>
          Hinweise zur Verarbeitung personenbezogener Daten findest du in der{" "}
          <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
      </LegalSection>

      <LegalSection title="14. Schlussbestimmungen">
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
          des UN-Kaufrechts. Sofern der Kunde Kaufmann, juristische Person des
          öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist,
          ist Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis
          Braunschweig. Sollte eine Bestimmung dieser AGB unwirksam sein,
          bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
