"use client";

import { useState, type CSSProperties } from "react";
import {
  customBiomarkerDots,
  customBiomarkerRings,
  customBiomarkerTags,
  productSteps,
} from "../../content/homepage";
import type { ProductStep } from "../../content/types";

const tagMotion = [
  { delay: -6.6, driftX: -8, driftY: 7, exitX: 5, exitY: -4 },
  { delay: -18.2, driftX: 6, driftY: -6, exitX: -4, exitY: 5 },
  { delay: -10.4, driftX: -5, driftY: -8, exitX: 4, exitY: 6 },
  { delay: -2.8, driftX: 8, driftY: 5, exitX: -6, exitY: -3 },
  { delay: -14.7, driftX: -7, driftY: 4, exitX: 5, exitY: -5 },
  { delay: -23.5, driftX: 5, driftY: 8, exitX: -3, exitY: -6 },
  { delay: -4.1, driftX: 7, driftY: -7, exitX: -5, exitY: 4 },
  { delay: -27.6, driftX: -6, driftY: 6, exitX: 4, exitY: -4 },
  { delay: -12.1, driftX: -7, driftY: -5, exitX: 6, exitY: 4 },
  { delay: -20.8, driftX: 8, driftY: 6, exitX: -5, exitY: -4 },
  { delay: -8.9, driftX: 5, driftY: -8, exitX: -4, exitY: 6 },
  { delay: -25.2, driftX: -6, driftY: 5, exitX: 5, exitY: -5 },
  { delay: -16.3, driftX: 7, driftY: 4, exitX: -6, exitY: -3 },
  { delay: -0.9, driftX: -5, driftY: -7, exitX: 4, exitY: 5 },
  { delay: -29.2, driftX: 6, driftY: 7, exitX: -5, exitY: -4 },
  { delay: -11.7, driftX: -8, driftY: -4, exitX: 6, exitY: 3 },
  { delay: -21.9, driftX: 7, driftY: -5, exitX: -4, exitY: 5 },
  { delay: -5.4, driftX: -6, driftY: 8, exitX: 5, exitY: -6 },
  { delay: -24.1, driftX: 5, driftY: 6, exitX: -4, exitY: -5 },
  { delay: -15.1, driftX: -7, driftY: -6, exitX: 5, exitY: 4 },
] as const;

const productStepLabels: Record<ProductStep["id"], [string, string]> = {
  "instrument-standardization": ["Instrument Standardization &", "Harmonization"],
  "spectral-unmixing": ["Spectral Unmixing &", "Compensation"],
  immunophenotyping: ["Immunophenotyping", "Controls"],
  "quantitative-antigen-density": ["Quantitative Antigen", "Density"],
};

export function ShopControlsSection() {
  const artCenterX = 640.5;
  const artCenterY = 300;
  const maxTagDistance = 540;
  const [activeStepId, setActiveStepId] = useState<ProductStep["id"]>("instrument-standardization");
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      productSteps
        .flatMap((step) => step.products)
        .filter((product) => product.sizeOptions?.length)
        .map((product) => [product.name, product.sizeOptions![0]]),
    ),
  );
  const activeStep = productSteps.find((step) => step.id === activeStepId) ?? productSteps[0];
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
    <section className="section section--muted shop-controls-section">
      <div className="frame shop-controls-frame">
        <div className="shop-controls-heading reveal">
          <p className="eyebrow">Shop Controls</p>
          <h2 className="text-heading-lg">Mimics for Every Step of the Flow</h2>
          <p className="text-body-lg text-muted">
            Our polymer-based cell mimics are fully customizable, engineered to replicate
            specific cellular characteristics for precise control in every assay.
          </p>
        </div>

        <div className="product-tabs" role="tablist" aria-label="Product workflow steps">
          {productSteps.map((step) => (
            <button
              key={step.id}
              type="button"
              className={`product-tab${activeStep.id === step.id ? " product-tab--active" : ""}`}
              role="tab"
              aria-selected={activeStep.id === step.id}
              aria-controls={`products-${step.id}`}
              id={`tab-${step.id}`}
              onClick={() => setActiveStepId(step.id)}
            >
              <span>
                <strong>
                  <span>{productStepLabels[step.id][0]}</span>
                  <span>{productStepLabels[step.id][1]}</span>
                </strong>
              </span>
            </button>
          ))}
        </div>

        <div
          className="product-grid"
          id={`products-${activeStep.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeStep.id}`}
        >
          {activeStep.products.map((product) => (
            <article key={`${activeStep.id}-${product.name}`} className="card product-card">
              <div className="product-card__media">
                <img
                  src={product.imageSrc}
                  alt={`${product.name} product packaging`}
                  width={350}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="product-card__body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-card__meta">
                  <strong>{product.price}</strong>
                  {product.sizeOptions?.length ? (
                    <label className="product-card__select-wrap">
                      <select
                        className="product-card__select"
                        value={selectedSizes[product.name] ?? product.sizeOptions[0]}
                        onChange={(event) =>
                          setSelectedSizes((current) => ({
                            ...current,
                            [product.name]: event.target.value,
                          }))
                        }
                        aria-label={`Select test quantity for ${product.name}`}
                      >
                        {product.sizeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                  ) : null}
                </div>
              </div>
              <div className="product-card__actions">
                <a className="btn btn--primary btn--md btn--full" href={product.href} target="_blank" rel="noreferrer">
                  Add to Cart
                </a>
                <a className="btn btn--secondary btn--md btn--full" href={product.href} target="_blank" rel="noreferrer">
                  Learn more
                </a>
              </div>
            </article>
          ))}
        </div>

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
                className={`custom-controls-cta__orbit custom-controls-cta__orbit--ring${dot.reverse ? " custom-controls-cta__orbit--reverse" : ""
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
      </div>
    </section>
  );
}
