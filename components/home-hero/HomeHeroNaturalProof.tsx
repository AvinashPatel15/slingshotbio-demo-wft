import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { LogoStrip } from "../ui/prototype-logo-strip";
import "@fontsource/ibm-plex-serif/300-italic.css";
import "@fontsource/ibm-plex-serif/400.css";
import "@fontsource/ibm-plex-serif/400-italic.css";

type NaturalProofScene = {
  top: string;
  bottom: string;
  duration: number;
  fadeOut?: boolean;
  variant?: "claim" | "brand";
  videoSrc: string;
  playbackRate?: number;
};

type HomeHeroNaturalProofProps = {
  ctaMode?: "dual" | "shop-only" | "none" | "none-centered";
};

const scenes: NaturalProofScene[] = [
  {
    top: "Nature varies.",
    bottom: "We don’t.",
    duration: 8,
    videoSrc: "/assets/videos/hero-lab/mouse-1.mp4",
  },
  {
    top: "Plastic pretends.",
    bottom: "We don’t.",
    duration: 8,
    fadeOut: true,
    videoSrc: "/assets/videos/hero-lab/plastic-2.mp4",
  },
  {
    top: "Slingshot Bio.",
    bottom: "Certainty.",
    duration: 6.412,
    variant: "brand",
    videoSrc: "/assets/videos/hero-6.mp4",
    playbackRate: 0.9,
  },
];

const naturalProofPlaybackRate = 1.18;
const brandTypingSpeedSeconds = 0.09;
const brandBottomTypingDelaySeconds = 0.25;

function clampText(text: string, count: number) {
  return text.slice(0, Math.max(0, Math.min(text.length, count)));
}

function usePreloadVideos(videoSources: string[]) {
  useEffect(() => {
    const links = videoSources.map((href) => {
      const link = document.createElement("link");

      link.rel = "preload";
      link.as = "video";
      link.href = href;
      link.type = "video/mp4";
      document.head.appendChild(link);

      return link;
    });

    return () => {
      links.forEach((link) => link.remove());
    };
  }, [videoSources]);
}

export function HomeHeroNaturalProof({ ctaMode = "dual" }: HomeHeroNaturalProofProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSources = useMemo(() => scenes.map((item) => item.videoSrc), []);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(8);
  const scene = scenes[sceneIndex];
  const sceneVariant = scene.variant ?? "claim";
  const isBrandScene = sceneVariant === "brand";
  const scenePlaybackRate = scene.playbackRate ?? naturalProofPlaybackRate;
  const sceneDuration = videoDuration;
  const topStartAt = isBrandScene ? 1 : 1.4;
  const brandBottomStartAt = topStartAt + scene.top.length * brandTypingSpeedSeconds + brandBottomTypingDelaySeconds;
  const bottomStartAt = isBrandScene ? brandBottomStartAt : 2.65;
  const topExitAt = Math.max(0, sceneDuration - 0.95);
  const bottomExitAt = Math.max(0, sceneDuration - 0.58);
  const brandTopCharacters = isBrandScene ? Math.floor((videoTime - topStartAt) / brandTypingSpeedSeconds) + 1 : scene.top.length;
  const brandBottomCharacters = isBrandScene ? Math.floor((videoTime - bottomStartAt) / brandTypingSpeedSeconds) + 1 : scene.bottom.length;
  const brandTopText = clampText(scene.top, brandTopCharacters);
  const brandBottomText = clampText(scene.bottom, brandBottomCharacters);
  const brandTopTyped = brandTopText.length >= scene.top.length;
  const brandBottomTyped = brandBottomText.length >= scene.bottom.length;
  const topVisible = videoTime >= topStartAt && videoTime < topExitAt && (!isBrandScene || brandTopText.length > 0);
  const bottomVisible = videoTime >= bottomStartAt && videoTime < bottomExitAt && (!isBrandScene || brandBottomText.length > 0);
  const topZooming = videoTime >= topStartAt && videoTime < sceneDuration && (!isBrandScene || brandTopTyped);
  const bottomZooming = videoTime >= bottomStartAt && videoTime < sceneDuration && (!isBrandScene || brandBottomTyped);
  const topExiting = videoTime >= topExitAt;
  const bottomExiting = videoTime >= bottomExitAt;
  const sceneAnimationDuration = `${(sceneDuration / scenePlaybackRate) * 1000}ms`;

  usePreloadVideos(videoSources);

  useEffect(() => {
    let animationFrame = 0;

    const syncToVideo = () => {
      setVideoTime(videoRef.current?.currentTime ?? 0);
      animationFrame = window.requestAnimationFrame(syncToVideo);
    };

    setVideoTime(0);
    setVideoDuration(scene.duration);
    animationFrame = window.requestAnimationFrame(syncToVideo);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [scene]);

  const startScene = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    setVideoDuration(Number.isFinite(video.duration) ? video.duration : 8);
    video.playbackRate = scenePlaybackRate;
    video.currentTime = 0;
    setVideoTime(0);
    void video.play();
  };

  const advanceScene = () => {
    setVideoTime(0);
    setSceneIndex((current) => (current + 1) % scenes.length);
  };

  return (
    <section
      className="home-hero-certainty home-hero-strong home-hero-loop home-hero-natural-proof"
      style={{ "--natural-proof-scene-ms": sceneAnimationDuration } as CSSProperties}
    >
      <video
        ref={videoRef}
        className="home-hero-natural-proof__video"
        autoPlay
        muted
        playsInline
        preload="auto"
        key={scene.videoSrc}
        onLoadedMetadata={startScene}
        onEnded={advanceScene}
      >
        <source src={scene.videoSrc} type="video/mp4" />
      </video>

      {sceneVariant === "brand" ? <div className="home-hero-natural-proof__brand-fade" aria-hidden="true" /> : null}
      {scene.fadeOut ? <div className="home-hero-natural-proof__scene-fade" aria-hidden="true" /> : null}
      <div className="home-hero-natural-proof__shade" aria-hidden="true" />

      <div className="frame home-hero-certainty__frame home-hero-strong__frame home-hero-natural-proof__frame">
        <div className="home-hero-loop__content home-hero-natural-proof__content">
          <h1 className="home-hero-loop__title home-hero-natural-proof__title" aria-label={`${scene.top} ${scene.bottom}`}>
            <span
              className={`home-hero-loop__line home-hero-natural-proof__line${
                topVisible ? " home-hero-natural-proof__line--visible" : ""
              }${topExiting ? " home-hero-natural-proof__line--exiting" : ""}`}
            >
              <span className={`home-hero-natural-proof__line-text${topZooming ? " home-hero-natural-proof__line-text--zooming" : ""}`}>
                {sceneVariant === "brand" ? (
                  <span className="home-hero-natural-proof__typed-brand">
                    <span className="home-hero-natural-proof__typed-measure" aria-hidden="true">
                      <strong>Slingshot</strong>
                      <span className="home-hero-natural-proof__brand-suffix">Bio.</span>
                    </span>
                    <span className="home-hero-natural-proof__typed-text">
                      <strong>{clampText("Slingshot", brandTopText.length)}</strong>
                      <span className="home-hero-natural-proof__brand-suffix">
                        {brandTopText.length > "Slingshot".length ? clampText("Bio.", brandTopText.length - "Slingshot".length) : ""}
                      </span>
                    </span>
                  </span>
                ) : (
                  scene.top
                )}
              </span>
            </span>
            <span
              className={`home-hero-loop__line home-hero-loop__line--${sceneVariant} home-hero-natural-proof__line${
                bottomVisible ? " home-hero-natural-proof__line--visible" : ""
              }${bottomExiting ? " home-hero-natural-proof__line--exiting" : ""}`}
            >
              <span className={`home-hero-natural-proof__line-text${bottomZooming ? " home-hero-natural-proof__line-text--zooming" : ""}`}>
                {sceneVariant === "brand" ? (
                  <span className="home-hero-natural-proof__typed-brand">
                    <span className="home-hero-natural-proof__typed-measure" aria-hidden="true">
                      {scene.bottom}
                    </span>
                    <span className="home-hero-natural-proof__typed-text">{brandBottomText}</span>
                  </span>
                ) : (
                  scene.bottom
                )}
              </span>
            </span>
          </h1>

          <div className="home-hero-loop__meta home-hero-natural-proof__meta">
            <p className="home-hero-certainty__helper home-hero-strong__helper home-hero-certainty__helper--visible">
              <span>Precision Cell Mimics</span>
              <span>
                <em>for</em> Flow Cytometry Controls
              </span>
            </p>

            {ctaMode === "none" || ctaMode === "none-centered" ? null : (
              <div className="home-hero-certainty__actions home-hero-strong__actions home-hero-certainty__actions--visible">
                <a className="btn btn--primary btn--lg home-hero-certainty__button home-hero-strong__button" href="/shop#shop-all-product">
                  <span>Shop Controls</span>
                </a>
                {ctaMode === "dual" ? (
                  <a className="btn btn--lg sample-button home-hero-certainty__button home-hero-strong__button" href="/sample-request">
                    <span>Request Sample</span>
                  </a>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>

      <LogoStrip className="home-hero-certainty__logos home-hero-strong__logos" />
    </section>
  );
}
