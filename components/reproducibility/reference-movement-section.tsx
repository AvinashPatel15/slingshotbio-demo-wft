"use client";

import React from "react";

export default function ReferenceMovementSection() {
  return (
    <section className="bg-[#0c0c0b] text-white py-20 md:py-32 relative overflow-hidden border-t border-white/5">
      {/* Subtle ambient lighting inside the section */}
      <div
        className="absolute bottom-0 left-[10vw] w-[35vw] h-[35vw] max-w-[500px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none z-1"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className="max-w-[620px] md:mb-16 mb-8 select-text">
          <h2 className="font-heading font-semibold text-white md:leading-[57px] tracking-[-0.02em] text-[36px] sm:text-4xl md:text-[48px] transition-all animate-fade-up">
            What If The Reference <br />
            Didn&apos;t Move?
          </h2>
        </div>

        {/* Two-Column Comparison Card */}
        <div className="bg-[#ffffff]/4 border border-[#ffffff]/7 rounded-2xl p-8 md:p-12 mb-8 select-text animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative">
            {/* Left Side: Polystyrene Beads */}
            <div className="flex flex-col items-start text-left">
              <span className="font-sans font-medium text-[#C6C3C0] text-[11px] tracking-[1.74px] uppercase block mb-4">
                TRADITIONAL REFERENCE
              </span>
              <h3 className="font-heading font-bold text-white text-2xl md:text-[32px] md:leading-8 mb-4">
                Polystyrene Beads
              </h3>
              <p className="text-[#9A9794] font-sans text-sm sm:text-base leading-[24px] max-w-[440px]">
                A golf ball, round, dense, optical. It doesn&apos;t scatter or
                stain like a living cell, so it cannot serve as a meaningful
                biological reference.
              </p>
            </div>

            {/* Vertical Divider for desktop screens */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"
              aria-hidden="true"
            />

            {/* Right Side: Real Cell */}
            <div className="flex flex-col items-start text-left pt-8 md:pt-0 border-t border-white/10 md:border-t-0">
              <span className="font-sans font-medium text-[#C6C3C0] text-[11px] tracking-[1.74px] uppercase block mb-4">
                BIOLOGICAL CONTROL
              </span>
              <h3 className="font-heading font-bold text-white text-2xl md:text-[32px] mb-4">
                Real Cell
              </h3>
              <p className="text-[#9A9794] font-sans text-sm sm:text-base leading-[24px] max-w-[440px]">
                A tomato, soft, complex, perishable. Scatters and stains right.
                But every donor is different, every lot drifts. You cannot run
                the same sample twice.
              </p>
            </div>
          </div>
        </div>

        {/* Dark Orange Hydrogel Callout Card */}
        <div className="bg-[#F76A0012] border border-[#f76a00]/18 rounded-2xl p-8 md:p-12 select-text animate-fade-up-delay-1">
          <div className="flex flex-col items-start text-left">
            <h3 className="font-heading font-semibold text-white text-xl sm:text-2xl md:text-[32px] md:leading-[44px] tracking-[-0.01em] mb-6 max-w-[800px]">
              You Want Something That Scatters Like Beads &amp; Stains Like The
              Tomato, Without The Mush.
            </h3>

            <p className="text-[#C6C3C0] font-sans text-sm sm:text-base leading-[26px] max-w-[960px]">
              That&apos;s a{" "}
              <span className="text-[#f76a00] font-medium leading-6">cell mimic.</span>{" "}
              A synthetic, hydrogel particle engineered to behave like a cell on
              the cytometer — same forward and side scatter, cell-like
              autofluorescence, biomarkers at the densities you choose, but
              manufactured to spec, shelf-stable, and non-biohazardous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
