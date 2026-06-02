import { type CSSProperties, useEffect, useState } from "react";
import "@fontsource/ibm-plex-serif/300-italic.css";
import "@fontsource/ibm-plex-serif/400.css";
import "@fontsource/ibm-plex-serif/400-italic.css";
import { LogoStrip } from "../ui/prototype-logo-strip";

const titleLines = ["Nature varies.", "Plastic pretends. We don’t.", "Slingshot Bio. Certainty."] as const;
const titleTotalCharacters = titleLines.reduce((total, line) => total + line.length, 0);
const titleTypingSpeedMs = 84;
const titleLinePauseMs = 520;
const titleSecondPhrasePauseMs = 820;
const titleThirdPhrasePauseMs = 860;
const titleStartDelayMs = 260;
const titleCompleteDelayMs = 300;
const actionsRevealDelayMs = 560;
const mediaRevealDelayMs = 1250;
const cinematicScaleStart = 3.5;
const cinematicStartOffsetY = 228;

function getTitleTypingDelay(characterCount: number) {
  const firstLineEnd = titleLines[0].length;
  const secondLineEnd = firstLineEnd + titleLines[1].length;
  const plasticPretendsEnd = firstLineEnd + "Plastic pretends. ".length;
  const slingshotBioEnd = secondLineEnd + "Slingshot Bio. ".length;

  if (characterCount === 0) {
    return titleStartDelayMs;
  }

  if (characterCount === firstLineEnd || characterCount === secondLineEnd) {
    return titleLinePauseMs;
  }

  if (characterCount === plasticPretendsEnd) {
    return titleSecondPhrasePauseMs;
  }

  if (characterCount === slingshotBioEnd) {
    return titleThirdPhrasePauseMs;
  }

  return titleTypingSpeedMs;
}

const cinematicScaleDurationMs = Array.from({ length: titleTotalCharacters }, (_, index) =>
  getTitleTypingDelay(index),
).reduce((total, delay) => total + delay, 0);

function clampText(line: string, count: number) {
  return line.slice(0, Math.max(0, Math.min(line.length, count)));
}

function easeOutSine(progress: number) {
  return Math.sin((progress * Math.PI) / 2);
}

export function HomeHeroCinematic() {
  const [titleCharacters, setTitleCharacters] = useState(0);
  const [scaleProgress, setScaleProgress] = useState(0);
  const [showHelper, setShowHelper] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showMedia, setShowMedia] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTitleCharacters(titleTotalCharacters);
      setScaleProgress(1);
      setShowHelper(true);
      setShowActions(true);
      setShowMedia(true);
      return;
    }

    if (titleCharacters < titleTotalCharacters) {
      const delay = getTitleTypingDelay(titleCharacters);

      const titleTimer = window.setTimeout(() => {
        setTitleCharacters((current) => current + 1);
      }, delay);

      return () => window.clearTimeout(titleTimer);
    }

    const helperTimer = window.setTimeout(() => {
      setShowHelper(true);
    }, titleCompleteDelayMs);
    const actionsTimer = window.setTimeout(() => {
      setShowActions(true);
    }, titleCompleteDelayMs + actionsRevealDelayMs);
    const mediaTimer = window.setTimeout(() => {
      setShowMedia(true);
    }, titleCompleteDelayMs + mediaRevealDelayMs);

    return () => {
      window.clearTimeout(helperTimer);
      window.clearTimeout(actionsTimer);
      window.clearTimeout(mediaTimer);
    };
  }, [titleCharacters]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    let animationFrame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const rawProgress = Math.min((now - startedAt) / cinematicScaleDurationMs, 1);
      setScaleProgress(easeOutSine(rawProgress));

      if (rawProgress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  const firstLine = clampText(titleLines[0], titleCharacters);
  const secondLine = clampText(titleLines[1], titleCharacters - titleLines[0].length);
  const thirdLine = clampText(titleLines[2], titleCharacters - titleLines[0].length - titleLines[1].length);
  const thirdLinePrefix = clampText("Slingshot Bio. ", thirdLine.length);
  const thirdLineCertainty = clampText("Certainty", thirdLine.length - "Slingshot Bio. ".length);
  const thirdLinePeriod = clampText(".", thirdLine.length - "Slingshot Bio. Certainty".length);
  const titleScale = cinematicScaleStart - (cinematicScaleStart - 1) * scaleProgress;
  const titleOffsetY = cinematicStartOffsetY * (1 - scaleProgress);

  return (
    <section className="home-hero-certainty home-hero-certainty--cinematic">
      {showMedia ? (
        <div className="home-hero-certainty__media" aria-hidden="true">
          <video
            className="home-hero-certainty__video"
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
      ) : null}

      <div className="frame home-hero-certainty__frame">
        <div className="home-hero-certainty__content">
          <h1
            className="home-hero-certainty__title home-hero-certainty__title--cinematic"
            style={
              {
                "--cinematic-title-scale": titleScale,
                "--cinematic-title-y": `${titleOffsetY}px`,
              } as CSSProperties
            }
            aria-label="Nature varies. Plastic pretends. We don’t. Slingshot Bio. Certainty."
          >
            <span className="home-hero-certainty__title-line home-hero-certainty__title-line--light">{firstLine}</span>
            <span className="home-hero-certainty__title-line">
              <span className="home-hero-certainty__title-line--light">{clampText("Plastic pretends. ", secondLine.length)}</span>
              <span className="home-hero-certainty__title-line--light">
                {clampText("We don’t.", secondLine.length - "Plastic pretends. ".length)}
              </span>
            </span>
            <span className="home-hero-certainty__title-line">
              <span>{clampText("Slingshot", thirdLinePrefix.length)}</span>
              <span className="home-hero-certainty__title-line--regular">
                {thirdLinePrefix.length > "Slingshot".length
                  ? clampText(" Bio. ", thirdLinePrefix.length - "Slingshot".length)
                  : ""}
              </span>
              <em>{thirdLineCertainty}</em>
              <span className="home-hero-certainty__period">{thirdLinePeriod}</span>
            </span>
          </h1>

          <p className={`home-hero-certainty__helper${showHelper ? " home-hero-certainty__helper--visible" : ""}`}>
            <span>Precision Cell Mimics</span>
            <span>
              <em>for</em> Flow Cytometry Controls
            </span>
          </p>

          <div className={`home-hero-certainty__actions${showActions ? " home-hero-certainty__actions--visible" : ""}`}>
            <a className="btn btn--primary btn--lg home-hero-certainty__button" href="/shop#shop-all-product">
              <span>Shop Controls</span>
            </a>
            <a className="btn btn--lg sample-button home-hero-certainty__button" href="/sample-request">
              <span>Request Sample</span>
            </a>
          </div>
        </div>
      </div>

      {showMedia ? <LogoStrip className="home-hero-certainty__logos" /> : null}
    </section>
  );
}
