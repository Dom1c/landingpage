"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function IronmanDetails() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const modal = open ? (
    <div
      className="ironman-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Ironman Hamburg 2024, Finisher-Urkunde"
      onClick={() => setOpen(false)}
    >
      <button
        type="button"
        className="ironman-modal-close"
        onClick={() => setOpen(false)}
        aria-label="Schließen"
      >
        ×
      </button>
      <div
        className="ironman-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src="/images/ironman-finish.jpg"
          alt="Ironman Hamburg 2024 Ergebnis: 10:56:46, 161. Platz M30-34"
          width={1240}
          height={1600}
          sizes="90vw"
          className="ironman-modal-img"
        />
        <p className="ironman-modal-caption">
          IRONMAN European Championship Hamburg · 02. Juni 2024
        </p>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        className="ironman-details-trigger"
        onClick={() => setOpen(true)}
        aria-label="Finisher Urkunde ansehen"
      >
        Finisher Urkunde ansehen
        <span aria-hidden>→</span>
      </button>
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
