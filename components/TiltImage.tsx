"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type OrientationHandler = (event: DeviceOrientationEvent) => void;

const handlers = new Set<OrientationHandler>();
let initialized = false;
let listening = false;

function dispatch(event: DeviceOrientationEvent) {
  handlers.forEach((h) => h(event));
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("deviceorientation", dispatch);
}

function initOrientation() {
  if (initialized) return;
  initialized = true;

  const DOE = (
    window as unknown as {
      DeviceOrientationEvent?: typeof DeviceOrientationEvent & {
        requestPermission?: () => Promise<"granted" | "denied">;
      };
    }
  ).DeviceOrientationEvent;

  if (!DOE) return;

  if (typeof DOE.requestPermission === "function") {
    const requestOnce = () => {
      DOE.requestPermission!()
        .then((res) => {
          if (res === "granted") startListening();
        })
        .catch(() => {});
    };
    window.addEventListener("touchstart", requestOnce, {
      once: true,
      passive: true,
    });
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

interface TiltImageProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltImage({
  children,
  className = "",
  maxTilt = 8,
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
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      currentGlareX += (glareX - currentGlareX) * 0.12;
      currentGlareY += (glareY - currentGlareY) * 0.12;

      if (innerRef.current) {
        innerRef.current.style.transform = `rotateX(${currentX.toFixed(
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
      targetX = clamp((dBeta / 30) * -maxTilt);
      targetY = clamp((dGamma / 30) * maxTilt);
      glareX = 50 + (targetY / maxTilt) * 35;
      glareY = 50 - (targetX / maxTilt) * 35;
    };

    const unregister = register(onOrientation);

    return () => {
      unregister();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [maxTilt]);

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
