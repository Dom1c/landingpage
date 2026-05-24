"use client";

import Script from "next/script";
import { useCallback, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/dominicthormann";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function CalendlyCTA() {
  const pendingOpen = useRef(false);

  const openCalendly = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      pendingOpen.current = true;
    }
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (pendingOpen.current && window.Calendly) {
            pendingOpen.current = false;
            window.Calendly.initPopupWidget({ url: CALENDLY_URL });
          }
        }}
      />

      <div id="gespraech" className="trainer-cta">
        <p className="trainer-cta-headline">
          <span className="italic">Finde heraus,</span> wie ich dich unterstützen kann.
        </p>
        <div className="trainer-cta-action">
          <button
            type="button"
            className="btn-primary"
            onClick={openCalendly}
            aria-label="Termin mit Dominic vereinbaren"
          >
            Termin vereinbaren
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
