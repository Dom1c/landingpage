import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { ObfuscatedContact } from "@/components/ObfuscatedContact";

export const metadata: Metadata = {
  title: "Datenschutz — Dominic Thormann",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
        DSGVO ist:
      </p>
      <ObfuscatedContact />

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <p>
        Ich verarbeite personenbezogene Daten nur, soweit dies zur Bereitstellung
        einer funktionsfähigen Website sowie meiner Inhalte und Leistungen
        erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur nach
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), zur Vertragserfüllung (lit.
        b), zur Erfüllung rechtlicher Pflichten (lit. c) oder auf Grundlage
        berechtigter Interessen (lit. f).
      </p>

      <h2>3. Hosting und Server-Logs</h2>
      <p>
        Diese Website wird bei einem externen Dienstleister gehostet. Beim
        Aufruf der Seite werden technisch notwendige Daten (sog. Server-Logs)
        verarbeitet, insbesondere:
      </p>
      <ul>
        <li>anonymisierte IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene URL und Referrer</li>
        <li>verwendeter Browser und Betriebssystem</li>
      </ul>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes
        Interesse besteht in einem stabilen, sicheren und funktionsfähigen
        Betrieb dieser Website. Die Logs werden nach kurzer Zeit gelöscht,
        sofern keine Sicherheitsvorfälle eine längere Speicherung erfordern.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Diese Website setzt grundsätzlich nur technisch notwendige Cookies ein,
        die für den Betrieb der Seite erforderlich sind. Eine Einwilligung ist
        hierfür nicht erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Drittanbieter wie
        Calendly oder Stripe können beim Aufruf der jeweiligen Funktion eigene
        Cookies setzen — siehe dazu die folgenden Abschnitte.
      </p>

      <h2>5. Terminbuchung über Calendly</h2>
      <p>
        Für die Buchung von Kennenlern-Terminen nutze ich den Dienst{" "}
        <strong>Calendly</strong> der Calendly LLC, 271 17th St NW, Atlanta, GA
        30363, USA. Beim Aufruf des Calendly-Widgets werden personenbezogene
        Daten (z. B. IP-Adresse, Browserdaten, Eingabedaten wie Name und
        E-Mail-Adresse) an Calendly übermittelt und in den USA verarbeitet.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
        sowie lit. f DSGVO (effiziente Terminkoordination).
      </p>
      <p>
        Details findest du in der Datenschutzerklärung von Calendly:{" "}
        <a
          href="https://calendly.com/de/pages/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          calendly.com/de/pages/privacy
        </a>
        .
      </p>

      <h2>6. Zahlungsabwicklung über Stripe</h2>
      <p>
        Für die Bezahlung von Seminarplätzen verwende ich{" "}
        <strong>Stripe</strong> (Stripe Payments Europe, Ltd., 1 Grand Canal
        Street Lower, Grand Canal Dock, Dublin, Irland). Wenn du den
        Bezahlvorgang startest, wirst du auf die Stripe-Plattform weitergeleitet.
        Dort eingegebene Zahlungsdaten werden ausschließlich durch Stripe
        verarbeitet. Ich selbst erhalte keine vollständigen Kreditkarten- oder
        Kontodaten.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
        Details unter{" "}
        <a
          href="https://stripe.com/de/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          stripe.com/de/privacy
        </a>
        .
      </p>

      <h2>7. Schriftarten (Google Fonts, lokal)</h2>
      <p>
        Diese Website verwendet die Schriftarten „Inter Tight&ldquo; und
        „Newsreader&ldquo;. Die Schriften werden über die in Next.js integrierte
        Funktion <code>next/font</code> bereits zum Zeitpunkt des Build-Prozesses
        heruntergeladen und anschließend lokal von meinem eigenen Server
        ausgeliefert. Beim Aufruf der Website wird daher{" "}
        <strong>keine Verbindung zu Google-Servern aufgebaut</strong>.
      </p>

      <h2>8. Externe Links</h2>
      <p>
        Auf dieser Website befinden sich Links zu externen Diensten (z. B.
        Google Maps für die Anzeige des Veranstaltungsortes). Diese werden erst
        durch einen aktiven Klick aufgerufen. Eine Übertragung von Daten an die
        jeweiligen Anbieter findet erst statt, wenn du den Link nutzt.
      </p>

      <h2>9. Kontaktaufnahme per E-Mail</h2>
      <p>
        Wenn du mich per E-Mail kontaktierst, werden die übermittelten Daten
        (E-Mail-Adresse, ggf. Name und Inhalt der Nachricht) zur Bearbeitung
        deiner Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
        oder f DSGVO. Die Daten werden gelöscht, sobald sie zur Zweckerreichung
        nicht mehr erforderlich sind und keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>10. Deine Rechte</h2>
      <p>Du hast jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>
          Widerspruch gegen die Verarbeitung auf Basis berechtigter Interessen
          (Art. 21 DSGVO)
        </li>
        <li>
          Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft
        </li>
      </ul>
      <p>
        Außerdem steht dir ein Beschwerderecht bei einer Datenschutz-Aufsichts­behörde
        zu (Art. 77 DSGVO). Zuständig ist die Landesbeauftragte für den
        Datenschutz Niedersachsen.
      </p>

      <h2>11. SSL-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
        TLS-Verschlüsselung. Du erkennst dies daran, dass die Adresszeile des
        Browsers mit <code>https://</code> beginnt.
      </p>

      <p className="legal-updated">Stand: Mai 2026</p>
    </LegalPage>
  );
}
