"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type OrientationHandler = (event: DeviceOrientationEvent) => void;

const handlers = new Set<OrientationHandler>();
const stateListeners = new Set<(s: PermissionState) => void>();
let initialized = false;
let listening = false;
let permissionState: PermissionState = "unknown";

type PermissionState = "unknown" | "needs-tap" | "granted" | "denied";

function setPermissionState(s: PermissionState) {
  permissionState = s;
  stateListeners.forEach((fn) => fn(s));
}

function dispatch(event: DeviceOrientationEvent) {
  handlers.forEach((h) => h(event));
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("deviceorientation", dispatch);
  setPermissionState("granted");
}

type DOEWithPermission = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<"granted" | "denied">;
};

function getDOE(): DOEWithPermission | undefined {
  return (window as unknown as { DeviceOrientationEvent?: DOEWithPermission })
    .DeviceOrientationEvent;
}

export function requestTiltPermission() {
  const DOE = getDOE();
  if (!DOE) return;
  if (typeof DOE.requestPermission !== "function") {
    startListening();
    return;
  }
  DOE.requestPermission()
    .then((res) => {
      if (res === "granted") startListening();
      else setPermissionState("denied");
    })
    .catch(() => setPermissionState("denied"));
}

function initOrientation() {
  if (initialized) return;
  initialized = true;

  const DOE = getDOE();
  if (!DOE) return;

  if (typeof DOE.requestPermission === "function") {
    setPermissionState("needs-tap");
    const tryRequest = () => {
      if (permissionState === "granted") return;
      DOE.requestPermission!()
        .then((res) => {
          if (res === "granted") {
            startListening();
            window.removeEventListener("touchstart", tryRequest);
            window.removeEventListener("click", tryRequest);
          } else {
            setPermissionState("denied");
          }
        })
        .catch(() => setPermissionState("denied"));
    };
    window.addEventListener("touchstart", tryRequest, { passive: true });
    window.addEventListener("click", tryRequest);
  } else {
    startListening();
  }
}

function register(handler: OrientationHandler) {
  handlers.add(handler);
  initOrientation();
  return () => {
    handlers.delete(handler);
  };
}

export function subscribePermissionState(
  fn: (s: PermissionState) => void
): () => void {
  stateListeners.add(fn);
  fn(permissionState);
  return () => {
    stateListeners.delete(fn);
  };
}

interface TiltImageProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  /** lower = more sensitive (degrees of phone tilt for max effect) */
  sensitivity?: number;
  /** px of translate at max tilt for added depth */
  parallax?: number;
}

export function TiltImage({
  children,
  className = "",
  maxTilt = 18,
  sensitivity = 18,
  parallax = 12,
}: TiltImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: none) and (pointer: coarse)").matches)
      return;

    let baseBeta: number | null = null;
    let baseGamma: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let glareX = 50;
    let glareY = 50;
    let currentGlareX = 50;
    let currentGlareY = 50;
    let rafId: number | null = null;
    let firstReading = true;

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      currentGlareX += (glareX - currentGlareX) * 0.15;
      currentGlareY += (glareY - currentGlareY) * 0.15;

      const tx = (currentY / maxTilt) * parallax;
      const ty = (-currentX / maxTilt) * parallax;

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${tx.toFixed(
          2
        )}px, ${ty.toFixed(2)}px, 0) rotateX(${currentX.toFixed(
          2
        )}deg) rotateY(${currentY.toFixed(2)}deg)`;
      }
      if (glareRef.current) {
        glareRef.current.style.setProperty(
          "--glare-x",
          `${currentGlareX.toFixed(1)}%`
        );
        glareRef.current.style.setProperty(
          "--glare-y",
          `${currentGlareY.toFixed(1)}%`
        );
      }

      rafId = requestAnimationFrame(animate);
    };

    const onOrientation: OrientationHandler = (e) => {
      if (e.beta === null || e.gamma === null) return;
      if (firstReading) {
        baseBeta = e.beta;
        baseGamma = e.gamma;
        firstReading = false;
        setActive(true);
        if (rafId === null) rafId = requestAnimationFrame(animate);
      }
      const dBeta = e.beta - (baseBeta ?? 0);
      const dGamma = e.gamma - (baseGamma ?? 0);
      const clamp = (v: number) => Math.max(-maxTilt, Math.min(maxTilt, v));
      targetX = clamp((dBeta / sensitivity) * -maxTilt);
      targetY = clamp((dGamma / sensitivity) * maxTilt);
      glareX = 50 + (targetY / maxTilt) * 45;
      glareY = 50 - (targetX / maxTilt) * 45;
    };

    const unregister = register(onOrientation);

    return () => {
      unregister();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [maxTilt, sensitivity, parallax]);

  return (
    <div
      ref={wrapRef}
      className={`tilt-image${active ? " tilt-image--active" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      <div ref={innerRef} className="tilt-image__inner">
        {children}
      </div>
      <div ref={glareRef} className="tilt-image__glare" aria-hidden="true" />
    </div>
  );
}
