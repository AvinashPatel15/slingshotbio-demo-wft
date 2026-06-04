"use client";

import { useState } from "react";
import { productSteps } from "../../content/homepage";
import type { ProductStep } from "../../content/types";
import { ShopControlsTabs } from "./ShopControlsTabs";
import { ShopControlsGrid } from "./ShopControlsGrid";
import { ShopControlsCta } from "./ShopControlsCta";

export function ShopControlsSection() {
  const [activeStepId, setActiveStepId] = useState<ProductStep["id"]>("instrument-standardization");
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      productSteps
        .flatMap((step) => step.products)
        .filter((product) => product.sizeOptions?.length)
        .map((product) => [product.name, product.sizeOptions![0]]),
    ),
  );

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

        <ShopControlsTabs activeStepId={activeStepId} setActiveStepId={setActiveStepId} />
        <ShopControlsGrid
          activeStepId={activeStepId}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
        />
        <ShopControlsCta />
      </div>
    </section>
  );
}
