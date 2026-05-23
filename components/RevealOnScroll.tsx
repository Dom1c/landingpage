"use client";

import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      document
        .querySelectorAll(".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale")
        .forEach((el) => el.classList.add("in"));
      return;
    }

    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((parent) => {
      const children = parent.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale",
      );
      children.forEach((child, i) => {
        child.style.setProperty("--reveal-delay", `${i * 80}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    document
      .querySelectorAll(
        ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale",
      )
      .forEach((el) => observer.observe(el));

    let ticking = false;
    const progressBar = document.getElementById("scroll-progress");
    const heroBg = document.querySelector<HTMLElement>(".hero-bg");

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(1, y / max) : 0;

        if (progressBar) {
          progressBar.style.transform = `scaleX(${ratio})`;
        }
        if (heroBg && y < 900) {
          heroBg.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
        }
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div id="scroll-progress" aria-hidden="true" />;
}
