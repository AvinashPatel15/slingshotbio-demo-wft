import { useEffect, useState } from "react";
import "@fontsource/ibm-plex-serif/300-italic.css";
import "@fontsource/ibm-plex-serif/400.css";
import "@fontsource/ibm-plex-serif/400-italic.css";
import { LogoStrip } from "../ui/prototype-logo-strip";

const titleLines = ["Nature varies.", "Plastic pretends. We don’t.", "SlingshotBio. Certainty."] as const;
const titleTotalCharacters = titleLines.reduce((total, line) => total + line.length, 0);
const titleTypingSpeedMs = 56;
const titleStartDelayMs = 260;
const titleBlockPauseMs = 520;
const titleAccentPauseMs = 760;
const titleCompleteDelayMs = 320;
const actionsRevealDelayMs = 560;

function getTitleTypingDelay(characterCount: number) {
  const firstLineEnd = titleLines[0].length;
  const plasticPretendsEnd = firstLineEnd + "Plastic pretends. ".length;
  const secondLineEnd = firstLineEnd + titleLines[1].length;
  const slingshotBioEnd = secondLineEnd + "SlingshotBio. ".length;

  if (characterCount === 0) {
    return titleStartDelayMs;
  }

  if (characterCount === firstLineEnd || characterCount === secondLineEnd) {
    return titleBlockPauseMs;
  }

  if (characterCount === plasticPretendsEnd || characterCount === slingshotBioEnd) {
    return titleAccentPauseMs;
  }

  return titleTypingSpeedMs;
}

function clampText(line: string, count: number) {
  return line.slice(0, Math.max(0, Math.min(line.length, count)));
}

export function HomeHeroStrongTypography() {
  const [titleCharacters, setTitleCharacters] = useState(0);
  const [showHelper, setShowHelper] = useState(false);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTitleCharacters(titleTotalCharacters);
      setShowHelper(true);
      setShowActions(true);
      return;
    }

    if (titleCharacters < titleTotalCharacters) {
      const titleTimer = window.setTimeout(() => {
        setTitleCharacters((current) => current + 1);
      }, getTitleTypingDelay(titleCharacters));

      return () => window.clearTimeout(titleTimer);
    }

    const helperTimer = window.setTimeout(() => {
      setShowHelper(true);
    }, titleCompleteDelayMs);
    const actionsTimer = window.setTimeout(() => {
      setShowActions(true);
    }, titleCompleteDelayMs + actionsRevealDelayMs);

    return () => {
      window.clearTimeout(helperTimer);
      window.clearTimeout(actionsTimer);
    };
  }, [titleCharacters]);

  const firstLine = clampText(titleLines[0], titleCharacters);
  const secondLine = clampText(titleLines[1], titleCharacters - titleLines[0].length);
  const thirdLine = clampText(titleLines[2], titleCharacters - titleLines[0].length - titleLines[1].length);
  const thirdLinePrefix = clampText("SlingshotBio. ", thirdLine.length);
  const thirdLineCertainty = clampText("Certainty", thirdLine.length - "SlingshotBio. ".length);
  const thirdLinePeriod = clampText(".", thirdLine.length - "SlingshotBio. Certainty".length);

  return (
    <section className="home-hero-certainty home-hero-strong">
      <div className="frame home-hero-certainty__frame home-hero-strong__frame">
        <div className="home-hero-strong__content">
          <h1 className="home-hero-certainty__title home-hero-strong__title" aria-label="Nature varies. Plastic pretends. We don’t. SlingshotBio. Certainty.">
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
                  ? clampText("Bio. ", thirdLinePrefix.length - "Slingshot".length)
                  : ""}
              </span>
              <em>{thirdLineCertainty}</em>
              <span className="home-hero-certainty__period">{thirdLinePeriod}</span>
            </span>
          </h1>

          <div className="home-hero-strong__meta">
            <p className={`home-hero-certainty__helper home-hero-strong__helper${showHelper ? " home-hero-certainty__helper--visible" : ""}`}>
              <span>Precision Cell Mimics</span>
              <span>
                <em>for</em> Flow Cytometry Controls
              </span>
            </p>

            <div className={`home-hero-certainty__actions home-hero-strong__actions${showActions ? " home-hero-certainty__actions--visible" : ""}`}>
              <a className="btn btn--primary btn--lg home-hero-certainty__button home-hero-strong__button" href="/shop#shop-all-product">
                <span>Shop Controls</span>
              </a>
              <a className="btn btn--lg sample-button home-hero-certainty__button home-hero-strong__button" href="/sample-request">
                <span>Request Sample</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <LogoStrip className="home-hero-certainty__logos home-hero-strong__logos" />
    </section>
  );
}
