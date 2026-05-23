"use client";

import { useState, type FormEvent } from "react";

const MAILERLITE_ENDPOINT =
  "https://assets.mailerlite.com/jsonp/2369477/forms/188112315786200631/subscribe";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("fields[email]", email);
      formData.append("ml-submit", "1");
      formData.append("anticsrf", "true");

      await fetch(MAILERLITE_ENDPOINT, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="newsletter">
      <div className="wrap">
        <div className="newsletter-card reveal-scale">
          <div className="newsletter-text">
            <div className="section-eyebrow">Warteliste</div>
            <h2>
              Verpass keinen <span className="italic">Termin.</span>
            </h2>
            <p>
              Trag dich ein und erhalte Infos zu neuen Kursen und Seminaren —
              sobald die Termine stehen. Kein Spam, keine Weitergabe.
            </p>
          </div>

          {status === "success" ? (
            <div className="newsletter-success">
              <strong>Fast geschafft.</strong>
              <span>
                Schau in dein Postfach — du musst die Anmeldung per E-Mail
                bestätigen.
              </span>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                name="email"
                placeholder="Deine E-Mail-Adresse"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
              />
              <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sende…" : "Eintragen"}
              </button>
              {status === "error" && (
                <div className="newsletter-error">
                  Etwas ist schiefgelaufen. Bitte später nochmal versuchen.
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
