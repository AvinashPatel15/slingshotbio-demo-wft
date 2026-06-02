import type { CSSProperties } from "react";
import { LogoStrip } from "../ui/prototype-logo-strip";
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
  { text: "Nature varies.", chars: 14, width: "10.7em", finalOpacity: 0.8, typeDelay: 0, typeDuration: 1350 },
  { text: "Plastic pretends.", chars: 17, width: "13.2em", finalOpacity: 0.9, typeDelay: 1700, typeDuration: 1600 },
  { text: "We don't.", chars: 9, width: "7.2em", finalOpacity: 1, typeDelay: 3650, typeDuration: 1050 },
];

const heroFadeDurationMs = 420;

function HeroAnimatedTitle() {
  return (
    <h1 className="hero-title reveal" aria-label="Nature varies. Plastic pretends. We don't.">
      {heroTitleLines.map((line) => (
        <span
          key={line.text}
          className="hero-title__line"
          style={
            {
              "--hero-title-final-opacity": line.finalOpacity,
              "--hero-title-fade-delay": `${line.typeDelay + line.typeDuration}ms`,
              "--hero-title-fade-duration": `${heroFadeDurationMs}ms`,
              "--hero-title-steps": line.chars,
              "--hero-title-type-delay": `${line.typeDelay}ms`,
              "--hero-title-type-duration": `${line.typeDuration}ms`,
              "--hero-title-type-width": line.width,
            } as CSSProperties
          }
        >
          {line.text}
        </span>
      ))}
    </h1>
  );
}

export function HomeHeroCurrent() {
  return (
    <section className="hero-section hero-section--current">
      <div className="hero-media-slot" aria-hidden="true">
        <video
          className="hero-media"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/videos/scene-video-hero-poster.jpg"
        >
          <source src="/assets/videos/scene-video-hero.webm" type="video/webm" />
          <source src="/assets/videos/scene-video-hero.mp4" type="video/mp4" />
          <source src="/assets/videos/scene-video-hero.mov" type="video/quicktime" />
        </video>
      </div>
      <div className="frame hero-frame">
        <HeroAnimatedTitle />

        <p className="hero-helper reveal reveal--delay-1">
          <span>Precision Cell Mimics</span>
          <span>
            <em style={{ fontFamily: '"IBM Plex Serif", Georgia, serif', fontStyle: "italic", fontWeight: 300, color: "rgba(255, 255, 255, 0.8)" }}>for</em> Flow Cytometry Controls
          </span>
        </p>

        <div className="hero-actions reveal reveal--delay-2">
          <a className="btn btn--primary btn--primary-glow btn--md" href="/shop#shop-all-product">
            <span>Shop Controls</span>
          </a>
          <a className="btn btn--md sample-button" href="/sample-request">
            <span>Request Sample</span>
          </a>
        </div>
      </div>
      <LogoStrip />
    </section>
  );
}
