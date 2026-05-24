"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  /** 0–1, fraction of container height the image travels across its full scroll */
  strength?: number;
}

export function ParallaxImage({
  children,
  className = "",
  strength = 0.18,
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number | null = null;
    let inViewport = false;
    const scale = 1 + strength;

    const update = () => {
      rafId = null;
      const el = wrapRef.current;
      const inner = innerRef.current;
      if (!el || !inner) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const maxOffset = rect.height * strength * 0.5;
      const offset = (clamped - 0.5) * -2 * maxOffset;
      inner.style.transform = `translate3d(0, ${offset.toFixed(
        2
      )}px, 0) scale(${scale})`;
    };

    const schedule = () => {
      if (!inViewport) return;
      if (rafId === null) rafId = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        inViewport = entries[0]?.isIntersecting ?? false;
        if (inViewport) schedule();
      },
      { rootMargin: "100px 0px" }
    );
    if (wrapRef.current) observer.observe(wrapRef.current);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return (
    <div
      ref={wrapRef}
      className={`parallax-image${className ? ` ${className}` : ""}`}
      style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: "inherit" }}
    >
      <div
        ref={innerRef}
        className="parallax-image__inner"
        style={{
          position: "absolute",
          inset: 0,
          transform: "translate3d(0,0,0) scale(1.18)",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
