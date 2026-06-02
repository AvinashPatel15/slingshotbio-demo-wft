"use client";

import React from "react";

export default function ProblemYouKnowSection() {
  return (
    <section className="bg-[#F7F6F5] text-[#0d0c0c] py-16 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Title */}
          <div className="lg:col-span-5 flex flex-col items-start text-left select-text">
            <h2 className="font-heading font-semibold text-[#0d0c0c] md:leading-[56px] tracking-[-0.02em] text-[34px] sm:text-4xl md:text-[44px] lg:text-[48px] max-w-[420px] transition-all">
              The Problem You <br />
              Already Know
            </h2>
          </div>

          {/* Right Column: Copy Block */}
          <div className="lg:col-span-7 flex flex-col items-start text-left select-text">
            <p className="text-[#7B7B7B] font-sans text-sm leading-[24px] max-w-[580px] transition-all">
              If you run flow, you&apos;ve lived this. How to differentiate
              between true biological changes in your subjects and the
              inevitable technical noise of the instrument and reagents over
              time? It doesn&apos;t. When the control changes more than the
              assay, the assay can&apos;t tell you anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
