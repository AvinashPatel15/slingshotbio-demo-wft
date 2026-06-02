"use client";

import React, { useState } from "react";
import CustomBiomarkerHero from "./custom-biomarker-hero";
import BiologicalControlComparison from "./biological-control-comparison";
import LifecycleSteps from "./lifecycle-steps";
import EvaluationKitForm from "./evaluation-kit-form";
import StickyCtaBar from "./sticky-cta-bar";

export default function CustomBiomarkerClient() {
  const [selectedAntigens] = useState<string[]>(["CD3", "CD4"]);
  const [expressionLevel] = useState<string>("Medium");

  return (
    <main className="custom-biomarker-page min-h-screen bg-[#faf9f6] text-[#0d0c0c] font-sans overflow-x-hidden relative flex flex-col justify-between">
      {/* Light ambient glow for page top */}
      <div
        className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[900px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <CustomBiomarkerHero />

      <BiologicalControlComparison />

      <LifecycleSteps />

      <EvaluationKitForm
        prefilledAntigens={selectedAntigens}
        prefilledExpression={expressionLevel}
      />

      {/* Premium subtle logo strip at the bottom of the page
      <div
        className="bg-white border-t border-[#ded9d4]/60 py-6 overflow-hidden relative mt-auto"
        style={{
          "--logo-strip-height": "48px",
          "--logo-strip-gap": "80px",
        } as React.CSSProperties}
      >
        <LogoStrip className="opacity-40 grayscale hover:opacity-75 transition-opacity" />
      </div> */}

      <StickyCtaBar />
    </main>
  );
}
