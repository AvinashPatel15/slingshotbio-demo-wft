"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { HomeHeroNaturalProof } from "@/components/home-hero/HomeHeroNaturalProof";
import { ProblemSection } from "@/components/sections/problem-section";
import { ShopControlsSection } from "@/components/sections/shop-controls-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { RelatedResourcesSection } from "@/components/sections/related-resources-section";
import "@/components/home-hero/homeHeroLab.css";

type HeroCtaMode = "dual" | "shop-only" | "none" | "none-centered";

const heroCtaOptions: Array<{
  mode: HeroCtaMode;
  label: string;
  status: string;
}> = [
  {
    mode: "dual",
    label: "Two CTAs",
    status: "current",
  },
  {
    mode: "shop-only",
    label: "Shop only",
    status: "test",
  },
  {
    mode: "none",
    label: "No hero CTAs",
    status: "client",
  },
  {
    mode: "none-centered",
    label: "Centered copy",
    status: "client",
  },
];

export default function HomeClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isStrongHeaderCovered, setIsStrongHeaderCovered] = useState(false);
  const [isStrongContentVisible, setIsStrongContentVisible] = useState(false);
  const [isStrongOverlayActive, setIsStrongOverlayActive] = useState(false);
  const [isCtaSelectorOpen, setIsCtaSelectorOpen] = useState(false);

  const ctaSelectorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const heroCtaParam = searchParams.get("heroCta");
  const heroCtaMode: HeroCtaMode =
    heroCtaParam === "shop-only" || heroCtaParam === "none" || heroCtaParam === "none-centered"
      ? (heroCtaParam as HeroCtaMode)
      : "dual";

  const activeCtaIndex = heroCtaOptions.findIndex((option) => option.mode === heroCtaMode);
  const activeCtaNumber = String(activeCtaIndex + 1).padStart(2, "0");

  useEffect(() => {
    if (!isCtaSelectorOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!ctaSelectorRef.current?.contains(event.target as Node)) {
        setIsCtaSelectorOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCtaSelectorOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCtaSelectorOpen]);

  const selectHeroCtaMode = (mode: HeroCtaMode) => {
    const params = new URLSearchParams(window.location.search);
    if (mode === "dual") {
      params.delete("heroCta");
    } else {
      params.set("heroCta", mode);
    }
    router.push(`/?${params.toString()}`, { scroll: false });
    setIsCtaSelectorOpen(false);
  };

  useEffect(() => {
    const updateStrongScrollState = () => {
      const contentTop = contentRef.current?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;

      setIsStrongHeaderCovered((current) => {
        if (current) {
          return contentTop <= 145;
        }
        return contentTop <= 121;
      });
      setIsStrongOverlayActive(contentTop < window.innerHeight - 2);
    };

    updateStrongScrollState();
    window.addEventListener("scroll", updateStrongScrollState, { passive: true });
    window.addEventListener("resize", updateStrongScrollState);

    return () => {
      window.removeEventListener("scroll", updateStrongScrollState);
      window.removeEventListener("resize", updateStrongScrollState);
    };
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsStrongContentVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px 0px 20% 0px",
        threshold: 0.01,
      },
    );

    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`homepage home-page home-page--natural-proof${
        heroCtaMode === "none" || heroCtaMode === "none-centered" ? " home-page--white-nav" : ""
      }${
        heroCtaMode === "none-centered" ? " home-page--hero-meta-centered" : ""
      }${
        isStrongHeaderCovered ? " home-page--strong-covered" : ""
      }${isStrongOverlayActive ? " home-page--strong-overlay-active" : ""}${
        isStrongContentVisible ? " home-page--strong-content-visible" : ""
      }`}
    >
      <HomeHeroNaturalProof ctaMode={heroCtaMode} />

      <div ref={contentRef} className="content-shell hero-lab-content">
        <ProblemSection />
        <ShopControlsSection />
        <TestimonialsSection />
        <RelatedResourcesSection />
      </div>

      <div
        ref={ctaSelectorRef}
        className={`hero-lab-float home-hero-cta-switch${isCtaSelectorOpen ? " hero-lab-float--open" : ""}`}
        aria-label="Homepage CTA variant selector"
      >
        <button
          className="hero-lab-float__button"
          type="button"
          aria-expanded={isCtaSelectorOpen}
          aria-label={`Hero CTA variant ${activeCtaNumber}`}
          onClick={() => setIsCtaSelectorOpen((current) => !current)}
        >
          {activeCtaNumber}
        </button>

        <div className="hero-lab-float__menu" role="menu" aria-label="Hero CTA variants">
          {heroCtaOptions.map((option, index) => {
            const optionNumber = String(index + 1).padStart(2, "0");

            return (
              <button
                key={option.mode}
                className={`hero-lab-float__item${option.mode === heroCtaMode ? " hero-lab-float__item--active" : ""}`}
                type="button"
                role="menuitemradio"
                aria-checked={option.mode === heroCtaMode}
                onClick={() => selectHeroCtaMode(option.mode)}
              >
                <span>{optionNumber}</span>
                <strong>{option.label}</strong>
                <small>{option.status}</small>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
