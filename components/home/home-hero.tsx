import type { CSSProperties } from "react";

import { LogoStrip } from "@/components/ui/logo-strip";
import "@fontsource/ibm-plex-serif/300-italic.css";
import "@fontsource/ibm-plex-serif/400.css";
import "@fontsource/ibm-plex-serif/400-italic.css";

type HeroTitleLine = {
  text: string;
  chars: number;
  width: string;
  finalOpacity: number;
  typeDelay: number;
  typeDuration: number;
};

const heroTitleLines: HeroTitleLine[] = [
  {
    text: "Nature varies.",
    chars: 14,
    width: "10.7em",
    finalOpacity: 0.8,
    typeDelay: 0,
    typeDuration: 1350,
  },
  {
    text: "Plastic pretends.",
    chars: 17,
    width: "13.2em",
    finalOpacity: 0.9,
    typeDelay: 1700,
    typeDuration: 1600,
  },
  {
    text: "We don't.",
    chars: 9,
    width: "7.2em",
    finalOpacity: 1,
    typeDelay: 3650,
    typeDuration: 1050,
  },
];

const heroFadeDurationMs = 420;

function HeroAnimatedTitle() {
  return (
    <h1
      aria-label="Nature varies. Plastic pretends. We don't."
      className="flex min-w-0 flex-col font-heading text-4xl font-semibold leading-[1.18] text-white sm:text-5xl md:min-w-[min(100%,960px)] lg:text-[clamp(52px,6vw,72px)] lg:leading-[1.3]"
    >
      {heroTitleLines.map((line) => (
        <span
          className="hero-title-line block w-max max-w-0 overflow-hidden whitespace-nowrap opacity-0"
          key={line.text}
          style={
            {
              "--hero-title-final-opacity": line.finalOpacity,
              "--hero-title-fade-delay": `${line.typeDelay + line.typeDuration}ms`,
              "--hero-title-fade-duration": `${heroFadeDurationMs}ms`,
              "--hero-title-steps": line.chars,
              "--hero-title-type-delay": `${line.typeDelay}ms`,
              "--hero-title-type-duration": `${line.typeDuration}ms`,
              "--hero-title-type-width": `min(${line.width}, calc(100vw - 2.5rem))`,
            } as CSSProperties
          }
        >
          {line.text}
        </span>
      ))}
    </h1>
  );
}

export function HomeHero() {
  return (
    <section className="relative h-auto min-h-[820px] overflow-hidden bg-black [--logo-strip-cycle:4891px] [--logo-strip-gap:56px] [--logo-strip-height:112px] md:h-[750px] md:min-h-0 md:[--logo-strip-cycle:5947px] md:[--logo-strip-gap:100px] md:[--logo-strip-height:132px] 2xl:h-[70vh] 2xl:min-h-[780px]">
      <div aria-hidden="true" className="absolute inset-0 bg-black">
        <video
          autoPlay
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          poster="/assets/videos/scene-video-hero-poster.jpg"
          preload="auto"
        >
          <source src="/assets/videos/scene-video-hero.webm" type="video/webm" />
          <source src="/assets/videos/scene-video-hero.mp4" type="video/mp4" />
          <source src="/assets/videos/scene-video-hero.mov" type="video/quicktime" />
        </video>
      </div>

      <div className="container relative z-10 flex min-h-[820px] flex-col items-start justify-center overflow-hidden pt-[148px] pb-[180px] md:h-[750px] md:min-h-0 md:pt-[156px] md:pb-[calc(132px+var(--logo-strip-height))] 2xl:h-full">
        <div className="animate-fade-up">
          <HeroAnimatedTitle />
        </div>

        <p className="mt-5 flex animate-fade-up-delay-1 flex-col font-heading text-2xl font-medium leading-[1.3] text-white md:text-[clamp(32px,4vw,40px)] md:leading-[1.4]">
          <span className="text-brand-orange-500">Precision Cell Mimics</span>
          <span>
            <em style={{ fontFamily: '"IBM Plex Serif", Georgia, serif', fontStyle: "italic", fontWeight: 300, color: "rgba(255, 255, 255, 0.8)" }}>for</em> Flow Cytometry Controls
          </span>
        </p>

        <div className="mt-12 flex w-full animate-fade-up-delay-2 flex-col items-start gap-3.5 md:mt-[52px] md:w-auto md:flex-row md:gap-5">
          <a
            className="inline-flex min-h-11 w-[min(100%,240px)] items-center justify-center rounded-full border border-transparent bg-[linear-gradient(67deg,#f86402_26.875%,#f86902_81.221%)] px-6 py-3 font-bold text-base text-white leading-[1.4] shadow-[inset_0_-1px_0_rgba(255,206,168,0.14),0_10px_22px_rgba(248,100,2,0.36),0_0_0_1px_rgba(248,132,56,0.16)] transition hover:-translate-y-px hover:brightness-105 md:min-w-44 md:w-auto"
            href="/shop#shop-all-product"
          >
            Shop Controls
          </a>
          <a
            className="inline-flex min-h-11 w-[min(100%,240px)] items-center justify-center rounded-full border border-transparent bg-[linear-gradient(47.658deg,#1e1e25_17.083%,#000000_86.812%)] px-6 py-3 font-bold text-base text-white/95 leading-[1.4] shadow-[inset_0_-1px_0_rgba(255,255,255,0.06),0_12px_26px_rgba(0,0,0,0.36),0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur transition hover:-translate-y-px hover:text-brand-orange-500 hover:brightness-105 md:min-w-39 md:w-auto"
            href="/sample-request"
          >
            Request Sample
          </a>
        </div>
      </div>

      <LogoStrip />
    </section>
  );
}
