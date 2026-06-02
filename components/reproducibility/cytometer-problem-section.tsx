"use client";

import React from "react";

export default function CytometerProblemSection() {
  return (
    <section className="bg-white text-[#0d0c0c] md:py-24 py-16 relative overflow-hidden border-t border-[#ded9d4]/30">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left select-text">
            <h2 className="font-heading font-semibold text-[#0d0c0c] md:leading-[56px] tracking-[-0.02em] text-[36px] sm:text-4xl md:text-[48px] max-w-[620px] transition-all">
              The Cytometer Is <br />
              Not The Problem
            </h2>

            <div className="mt-6 md:mt-8 space-y-6">
              <p className="text-[#7B7B7B] font-sans text-sm leading-[24px] max-w-[533px]">
                For two decades, the field has poured money into better lasers,
                more detectors, smarter unmixing. The instruments became great.
                The reproducibility, didn&apos;t.
              </p>

              <p className="text-[#7B7B7B] font-sans text-sm leading-[24px] max-w-[533px]">
                The reason is as old as cytometry itself: controls, controls,
                controls. Inherently, every donor&apos;s blood is different and
                every cell line drifts with passage, simply because of the
                heterogeneity of living things. Using these shifting controls as
                references, across time and multiple sites, is a biological
                problem which cannot be solved with a hardware solution.
              </p>
            </div>

            {/* Brand highlights in orange */}
            <div className="mt-6 md:mt-10 space-y-2">
              <p className="font-heading font-semibold text-[#f76a00] text-[18px] sm:text-xl md:text-[24px] leading-[32px]">
                You can&apos;t fix that with optics.
              </p>
              <p className="font-heading font-semibold text-[#f76a00] text-[18px] sm:text-xl md:text-[24px] leading-[32px]">
                You fix it by changing what you measure against.
              </p>
            </div>
          </div>

          {/* Right Column: Diagram Image */}
          <div className="lg:col-span-5 flex items-center justify-center relative w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center bg-white p-2">
              <img
                src="/reprodu.png"
                alt="Flow Cytometry Optic split and cell flow diagram showing lasers, detectors, and particles"
                className="w-full max-w-[304px] h-auto object-contain mx-auto select-none"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
