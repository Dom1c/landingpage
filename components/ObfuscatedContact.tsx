"use client";

import { useEffect, useState } from "react";

const encoded = {
  name: "RG9taW5pYyBUaG9ybWFubg==",
  street: "V2VuZGVuc3RyYcOfZSAzOA==",
  city: "MzgxMDAgQnJhdW5zY2h3ZWln",
  emailUser: "ZG9taW5pY3Rob3JtYW5u",
  emailDomain: "aWNsb3VkLmNvbQ==",
};

function decode(value: string) {
  if (typeof window === "undefined") return "";
  const binary = window.atob(value);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

type Variant = "block" | "inline-email";

type Props = {
  variant?: Variant;
};

export function ObfuscatedContact({ variant = "block" }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <span
        style={{
          color: "var(--ink-mute)",
          fontStyle: "italic",
          fontSize: 15,
        }}
      >
        [Kontaktdaten werden geladen, bitte JavaScript aktivieren]
      </span>
    );
  }

  const name = decode(encoded.name);
  const street = decode(encoded.street);
  const city = decode(encoded.city);
  const email = `${decode(encoded.emailUser)}@${decode(encoded.emailDomain)}`;

  if (variant === "inline-email") {
    return (
      <a
        href={`mailto:${email}`}
        style={{ color: "var(--accent)", textDecoration: "none" }}
      >
        {email}
      </a>
    );
  }

  return (
    <address
      style={{
        fontStyle: "normal",
        lineHeight: 1.7,
        color: "var(--ink)",
      }}
    >
      <div>{name}</div>
      <div>{street}</div>
      <div>{city}</div>
      <div style={{ marginTop: 12 }}>
        E-Mail:{" "}
        <a
          href={`mailto:${email}`}
          style={{ color: "var(--accent)", textDecoration: "none" }}
        >
          {email}
        </a>
      </div>
    </address>
  );
}
