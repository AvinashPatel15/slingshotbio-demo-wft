"use client";

import React from "react";
import CustomBiomarkerHero from "./custom-biomarker-hero";
import ProductOverview from "./product-overview";
import LifecycleSteps from "./lifecycle-steps";
import ProductCapabilities from "./product-capabilities";
import UnparalleledCustomization from "./unparalleled-customization";
import CustomForm from "./custom-form";
import StickyCtaBar from "./sticky-cta-bar";

export default function CustomBiomarkerClient() {
  return (
    <main className="custom-biomarker-page min-h-screen bg-[#FFFFFF] text-[#0d0c0c] font-sans overflow-x-hidden relative flex flex-col justify-between">
      <div
        className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[900px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <CustomBiomarkerHero />
      <ProductOverview />
      <LifecycleSteps />
      <ProductCapabilities />
      <UnparalleledCustomization />
      <CustomForm />
      {/* <StickyCtaBar /> */}
    </main>
  );
}
