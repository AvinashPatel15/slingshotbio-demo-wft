import type { CSSProperties } from "react";
import {
  customBiomarkerDots,
  customBiomarkerRings,
  customBiomarkerTags,
} from "../../content/homepage";
import { tagMotion } from "../../content/shop-controls";

export function ShopControlsCta() {
  const artCenterX = 640.5;
  const artCenterY = 300;
  const maxTagDistance = 540;

  const ringOrbitDots = [
    ...customBiomarkerRings.map((ring, index) => ({
      orbitSize: ring.size,
      angle: [14, 78, 142, 224, 304][index] ?? 0,
      duration: [30, 36, 42, 48, 54][index] ?? 40,
      opacity: index > 2 ? 0.34 : 0.72,
      reverse: index % 2 === 1,
      size: index > 2 ? 3 : 4,
      src:
        index % 2 === 0
          ? "/assets/illustrations/custom-biomarkers/dot-orange.svg"
          : "/assets/illustrations/custom-biomarkers/dot-gray.svg",
    })),
    {
      orbitSize: 773,
      angle: 34,
      duration: 58,
      opacity: 0.24,
      reverse: true,
      size: 3,
      src: "/assets/illustrations/custom-biomarkers/dot-gray.svg",
    },
    {
      orbitSize: 951,
      angle: 156,
      duration: 66,
      opacity: 0.22,
      reverse: false,
      size: 3,
      src: "/assets/illustrations/custom-biomarkers/dot-gray.svg",
    },
    {
      orbitSize: 951,
      angle: 286,
      duration: 72,
      opacity: 0.2,
      reverse: true,
      size: 2.5,
      src: "/assets/illustrations/custom-biomarkers/dot-orange.svg",
    },
  ];

  return (
    <div className="custom-controls-cta reveal reveal--delay-1">
      <div className="custom-controls-cta__art" aria-hidden="true">
        {customBiomarkerRings.map((ring) => (
          <img
            key={ring.size}
            className="custom-controls-cta__ring"
            src={ring.src}
            alt=""
            loading="lazy"
            style={{ "--ring-size": `${ring.size}px` } as CSSProperties}
          />
        ))}
        {ringOrbitDots.map((dot, index) => (
          <span
            key={`ring-orbit-${dot.orbitSize}-${index}`}
            className={`custom-controls-cta__orbit custom-controls-cta__orbit--ring${
              dot.reverse ? " custom-controls-cta__orbit--reverse" : ""
            }`}
            style={
              {
                "--orbit-size": `${dot.orbitSize}px`,
                "--orbit-angle": `${dot.angle}deg`,
                "--orbit-duration": `${dot.duration}s`,
                "--dot-opacity": dot.opacity,
                "--dot-size": `${dot.size}px`,
              } as CSSProperties
            }
          >
            <img className="custom-controls-cta__dot custom-controls-cta__dot--ring" src={dot.src} alt="" loading="lazy" />
          </span>
        ))}
        {customBiomarkerDots.map((dot, index) => (
          <span
            key={`${dot.orbitSize}-${dot.angle}-${index}`}
            className={`custom-controls-cta__orbit${dot.reverse ? " custom-controls-cta__orbit--reverse" : ""}`}
            style={
              {
                "--orbit-size": `${dot.orbitSize}px`,
                "--orbit-angle": `${dot.angle}deg`,
                "--orbit-duration": `${dot.duration}s`,
              } as CSSProperties
            }
          >
            <img className="custom-controls-cta__dot" src={dot.src} alt="" loading="lazy" />
          </span>
        ))}
        {customBiomarkerTags.map((tag, index) => {
          const deltaX = tag.x - artCenterX;
          const deltaY = tag.y - artCenterY;
          const distance = Math.hypot(deltaX, deltaY);
          const proximity = Math.max(0, Math.min(1, 1 - distance / maxTagDistance));
          const motion = tagMotion[index % tagMotion.length];

          return (
            <span
              key={`${tag.label}-${tag.x}-${index}`}
              className="custom-controls-tag"
              style={
                {
                  "--tag-x": `${tag.x}px`,
                  "--tag-y": `${tag.y}px`,
                  "--tag-proximity": proximity.toFixed(3),
                  "--tag-delay": `${motion.delay}s`,
                  "--tag-duration": "24s",
                  "--tag-drift-x": `${motion.driftX}px`,
                  "--tag-drift-y": `${motion.driftY}px`,
                  "--tag-exit-x": `${motion.exitX}px`,
                  "--tag-exit-y": `${motion.exitY}px`,
                } as CSSProperties
              }
            >
              {tag.label}
            </span>
          );
        })}
      </div>
      <div className="custom-controls-cta__copy">
        <div className="custom-controls-cta__title">
          <p>Build a Precision</p>
          <p>Custom Cell Mimic</p>
        </div>
        <strong className=" text-xl text-[#ffffffb3] font-normal leading-7.5">See how leading labs and enterprise teams use Slingshot controls <br /> to improve reproducibility, <br /> reduce variability, and make more confident decisions.</strong>
        <a className="btn btn--primary btn--md btn--full custom-controls-cta__button" href="/custom-biomarker-cell-mimics">
          Start Your Custom Request
        </a>
      </div>
    </div>
  );
}
