"use client";

import { useEffect, useState } from "react";
import {
  requestTiltPermission,
  subscribePermissionState,
} from "./TiltImage";

export function TiltActivator() {
  const [state, setState] = useState<
    "unknown" | "needs-tap" | "granted" | "denied"
  >("unknown");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: none) and (pointer: coarse)").matches)
      return;
    return subscribePermissionState(setState);
  }, []);

  if (state !== "needs-tap") return null;

  return (
    <button
      type="button"
      className="tilt-activator"
      onClick={() => requestTiltPermission()}
      aria-label="3D-Effekt aktivieren"
    >
      <span className="tilt-activator__icon" aria-hidden="true">✦</span>
      3D-Effekt aktivieren
    </button>
  );
}
