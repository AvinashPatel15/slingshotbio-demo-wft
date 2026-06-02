"use client";

import React from "react";
import ReproducibilityHero from "./reproducibility-hero";
import CytometerProblemSection from "./cytometer-problem-section";
import ProblemYouKnowSection from "./problem-you-know-section";
import ReferenceMovementSection from "./reference-movement-section";
import ProofMimicsSection from "./proof-mimics-section";
import SameControlSection from "./same-control-section";
import ProductFamilyGrid from "./product-family-grid";
import TryItOutCta from "./try-it-out-cta";

export default function ReproducibilityClient() {
  return (
    <main className="reproducibility-page min-h-screen bg-white text-[#0d0c0c] font-sans">
      <ReproducibilityHero />
      <CytometerProblemSection />
      <ProblemYouKnowSection />
      <ReferenceMovementSection />
      <ProofMimicsSection />
      <SameControlSection />
      <ProductFamilyGrid />
      <TryItOutCta />
    </main>
  );
}
