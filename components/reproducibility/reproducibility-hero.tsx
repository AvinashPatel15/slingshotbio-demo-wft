"use client";

import React from "react";
import Link from "next/link";

export default function ReproducibilityHero() {
  return (
    <section
      className="bg-[#020202] text-white relative overflow-hidden flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/custom-hero.png')",
      }}
    >
      {/* Main content shell */}
      <div className="container mx-auto px-4 md:px-12 relative z-10 md:py-32 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Copy Section */}
          <div className="lg:col-span-8 flex flex-col items-start text-left select-text">
            {/* Tag / Eyebrow */}
            <div className="animate-fade-up">
              <span className="font-heading font-bold text-[#f76a00] text-[13px] md:text-[24px] tracking-[0.25em] md:leading-[28px] uppercase block">
                REPRODUCIBILITY
              </span>
            </div>

            {/* Premium, High-Impact Heading */}
            <div className="animate-fade-up-delay-1 md:mt-6 mt-3">
              <h1 className="font-heading font-semibold text-white md:leading-[80px] tracking-[-0.02em] text-[40px] sm:text-5xl md:text-[72px] max-w-[720px] transition-all">
                A Reference That <br className="hidden sm:inline" />
                Doesn&apos;t Change.
              </h1>
            </div>

            {/* Description Text */}
            <div className="animate-fade-up-delay-2 md:mt-8 mt-4">
              <p className="text-[#C6C3C0] font-sans text-[15px] sm:text-base md:text-[18px] leading-[1.65] max-w-[540px] transition-all">
                For two decades, the field has poured money into better lasers,
                more detectors, smarter unmixing. The instruments became great.
                The reproducibility didn&apos;t.
              </p>
            </div>
          </div>

          {/* Right Column: Empty spacer */}
          <div className="hidden lg:block lg:col-span-4 h-[300px]" />
        </div>
      </div>
    </section>
  );
}
