import { useEffect, useState } from "react";
import "@fontsource/ibm-plex-serif/300-italic.css";
import "@fontsource/ibm-plex-serif/400.css";
import "@fontsource/ibm-plex-serif/400-italic.css";
import { LogoStrip } from "../ui/prototype-logo-strip";

const titleLines = ["Nature varies.", "Plastic pretends. We don’t.", "Slingshot Bio. Certainty."] as const;
const titleTotalCharacters = titleLines.reduce((total, line) => total + line.length, 0);
const titleTypingSpeedMs = 58;
const titleLinePauseMs = 360;
const titleStartDelayMs = 260;
const titleCompleteDelayMs = 320;
const helperRevealDelayMs = 0;
const actionsRevealDelayMs = 560;
const videoRevealDelayMs = 1250;

function clampText(line: string, count: number) {
  return line.slice(0, Math.max(0, Math.min(line.length, count)));
}

export function HomeHeroCertainty() {
  const [titleCharacters, setTitleCharacters] = useState(0);
  const [showHelper, setShowHelper] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTitleCharacters(titleTotalCharacters);
      setShowHelper(true);
      setShowActions(true);
      setShowVideo(true);
      return;
    }

    if (titleCharacters < titleTotalCharacters) {
      const firstLineEnd = titleLines[0].length;
      const secondLineEnd = firstLineEnd + titleLines[1].length;
      const pauseAfterLine = titleCharacters === firstLineEnd || titleCharacters === secondLineEnd;
      const delay = titleCharacters === 0 ? titleStartDelayMs : pauseAfterLine ? titleLinePauseMs : titleTypingSpeedMs;

      const titleTimer = window.setTimeout(() => {
        setTitleCharacters((current) => current + 1);
      }, delay);

      return () => window.clearTimeout(titleTimer);
    }

    const helperTimer = window.setTimeout(() => {
      setShowHelper(true);
    }, titleCompleteDelayMs + helperRevealDelayMs);
    const actionsTimer = window.setTimeout(() => {
      setShowActions(true);
    }, titleCompleteDelayMs + actionsRevealDelayMs);
    const videoTimer = window.setTimeout(() => {
      setShowVideo(true);
    }, titleCompleteDelayMs + videoRevealDelayMs);

    return () => {
      window.clearTimeout(helperTimer);
      window.clearTimeout(actionsTimer);
      window.clearTimeout(videoTimer);
    };
  }, [titleCharacters]);

  const firstLine = clampText(titleLines[0], titleCharacters);
  const secondLine = clampText(titleLines[1], titleCharacters - titleLines[0].length);
  const thirdLine = clampText(titleLines[2], titleCharacters - titleLines[0].length - titleLines[1].length);
  const thirdLinePrefix = clampText("Slingshot Bio. ", thirdLine.length);
  const thirdLineCertainty = clampText("Certainty", thirdLine.length - "Slingshot Bio. ".length);
  const thirdLinePeriod = clampText(".", thirdLine.length - "Slingshot Bio. Certainty".length);

  return (
    <section className="home-hero-certainty">
      {showVideo ? (
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
          <h1 className="home-hero-certainty__title" aria-label="Nature varies. Plastic pretends. We don’t. Slingshot Bio. Certainty.">
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

      <LogoStrip className="home-hero-certainty__logos" />
    </section>
  );
}
