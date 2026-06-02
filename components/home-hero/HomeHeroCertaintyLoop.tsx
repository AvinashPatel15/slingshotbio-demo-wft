import { useEffect, useMemo, useState } from "react";
import "@fontsource/ibm-plex-serif/400.css";
import "@fontsource/ibm-plex-serif/400-italic.css";
import { LogoStrip } from "../ui/prototype-logo-strip";

type LoopScene = {
  top: string;
  bottom: string;
  holdMs?: number;
  variant: "claim" | "brand";
};

const typingSpeedMs = 100;
const topPauseMs = 900;
const bottomPauseMs = 1400;
const brandBottomPauseMs = bottomPauseMs * 2;
const clearDurationMs = 360;

const loopScenes: LoopScene[] = [
  {
    top: "Nature varies.",
    bottom: "We don’t.",
    variant: "claim",
  },
  {
    top: "Plastic pretends.",
    bottom: "We don’t.",
    variant: "claim",
  },
  {
    top: "SlingshotBio.",
    bottom: "Certainty.",
    holdMs: brandBottomPauseMs,
    variant: "brand",
  },
];

function clampText(line: string, count: number) {
  return line.slice(0, Math.max(0, Math.min(line.length, count)));
}

function getSceneDuration(scene: LoopScene) {
  return scene.top.length * typingSpeedMs + topPauseMs + scene.bottom.length * typingSpeedMs + (scene.holdMs ?? bottomPauseMs) + clearDurationMs;
}

function getFrame(elapsedMs: number) {
  const sceneDurations = loopScenes.map(getSceneDuration);
  const totalDuration = sceneDurations.reduce((total, duration) => total + duration, 0);
  let elapsed = elapsedMs % totalDuration;
  let sceneIndex = 0;

  while (elapsed >= sceneDurations[sceneIndex]) {
    elapsed -= sceneDurations[sceneIndex];
    sceneIndex += 1;
  }

  const scene = loopScenes[sceneIndex];
  const topTypingDuration = scene.top.length * typingSpeedMs;
  const bottomTypingDuration = scene.bottom.length * typingSpeedMs;
  const holdDuration = scene.holdMs ?? bottomPauseMs;
  const bottomStart = topTypingDuration + topPauseMs;
  const clearStart = bottomStart + bottomTypingDuration + holdDuration;

  if (elapsed < topTypingDuration) {
    return {
      sceneIndex,
      topCharacters: Math.floor(elapsed / typingSpeedMs) + 1,
      bottomCharacters: 0,
      isClearing: false,
    };
  }

  if (elapsed < bottomStart) {
    return {
      sceneIndex,
      topCharacters: scene.top.length,
      bottomCharacters: 0,
      isClearing: false,
    };
  }

  if (elapsed < bottomStart + bottomTypingDuration) {
    return {
      sceneIndex,
      topCharacters: scene.top.length,
      bottomCharacters: Math.floor((elapsed - bottomStart) / typingSpeedMs) + 1,
      isClearing: false,
    };
  }

  return {
    sceneIndex,
    topCharacters: scene.top.length,
    bottomCharacters: scene.bottom.length,
    isClearing: elapsed >= clearStart,
  };
}

export function HomeHeroCertaintyLoop() {
  const reducedMotion = useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);
  const [frame, setFrame] = useState(() =>
    reducedMotion
      ? {
          sceneIndex: 2,
          topCharacters: loopScenes[2].top.length,
          bottomCharacters: loopScenes[2].bottom.length,
          isClearing: false,
        }
      : getFrame(0),
  );

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let animationFrame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      setFrame(getFrame(now - startedAt));
      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [reducedMotion]);

  const scene = loopScenes[frame.sceneIndex];
  const topLine = clampText(scene.top, frame.topCharacters);
  const bottomLine = clampText(scene.bottom, frame.bottomCharacters);
  const brandPrefix = clampText("Slingshot", topLine.length);
  const brandSuffix =
    topLine.length > "Slingshot".length ? clampText("Bio.", topLine.length - "Slingshot".length) : "";

  return (
    <section className="home-hero-certainty home-hero-strong home-hero-loop">
      <div className="frame home-hero-certainty__frame home-hero-strong__frame">
        <div className="home-hero-loop__content">
          <h1
            className={`home-hero-loop__title${frame.isClearing ? " home-hero-loop__title--clearing" : ""}`}
            aria-label="Nature varies. We don’t. Plastic pretends. We don’t. SlingshotBio. Certainty."
          >
            <span className="home-hero-loop__line home-hero-loop__line--top">
              {scene.variant === "brand" ? (
                <>
                  <strong>{brandPrefix}</strong>
                  <span>{brandSuffix}</span>
                </>
              ) : (
                topLine
              )}
            </span>
            <span className={`home-hero-loop__line home-hero-loop__line--bottom home-hero-loop__line--${scene.variant}`}>
              {bottomLine}
            </span>
          </h1>

          <div className="home-hero-loop__meta">
            <p className="home-hero-certainty__helper home-hero-strong__helper home-hero-certainty__helper--visible">
              <span>Precision Cell Mimics</span>
              <span>
                <em>for</em> Flow Cytometry Controls
              </span>
            </p>

            <div className="home-hero-certainty__actions home-hero-strong__actions home-hero-certainty__actions--visible">
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
