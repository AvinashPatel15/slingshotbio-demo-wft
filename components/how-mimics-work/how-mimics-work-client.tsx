"use client";

import Image from "next/image";
import Link from "next/link";
import { EngineeringVideoSection } from "./engineering-video-section";
import { WhyReplaceCellsSection } from "./why-replace-cells-section";
import { CustomControlSection } from "./custom-control-section";
import { ProductFamilySection } from "./product-family-section";
import { LetsTalkSection } from "./lets-talk-section";

export default function HowMimicsWorkClient() {
  return (
    <main className="how-mimics-page min-h-screen bg-[#F7F6F5] text-[#0d0c0c] font-sans overflow-x-hidden relative flex flex-col justify-between">
      {/* Dynamic light subtle ambient glow in background */}
      <div
        className="absolute top-0 right-0 w-[50vw] h-[40vw] max-w-[800px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container how-mimics-hero-shell mx-auto px-6 py-16 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            <div className="animate-fade-up">
              <h1 className="font-heading font-semibold text-[#0d0c0c] leading-[1.12] tracking-[-0.02em] text-[40px] sm:text-5xl md:text-[56px] lg:text-[72px] max-w-[620px] transition-all">
                Built to Behave <br />
                like a Cell.
              </h1>
            </div>

            <div className="animate-fade-up-delay-1 mt-6">
              <p className="font-heading font-medium text-[#F76A00] text-lg sm:text-xl md:text-[22px] lg:text-[24px] leading-[28px]">
                Not a bead. Not a donor. Not an animal.
              </p>
            </div>

            <div className="animate-fade-up-delay-2 mt-6">
              <p className="text-[#555350] font-sans text-sm sm:text-base lg:text-[14px] leading-[22px] max-w-[540px]">
                A polystyrene bead is to a cell what a tennis ball is to a tomato. Wrong
                refractive index, wrong scatter, wrong surface. Donor cells are reproducible
                until the donor goes home. Animal cells aren&apos;t human. We engineered a
                particle that behaves like a cell in the flow cytometer and keeps behaving
                that way for up to three years, same lot.
              </p>
            </div>

            {/* CTA Buttons Container */}
            <div className="how-mimics-hero-actions animate-fade-up-delay-2 mt-10 flex flex-wrap items-center gap-4 sm:gap-5 w-full">
              {/* Primary CTA */}
              <Link
                href="/shop#shop-all-product"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#F76A00] px-8 py-4 font-medium text-base !text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 active:scale-98"
              >
                See It Engineered
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/sample-request"
                className="inline-flex min-h-[52px] bg-white items-center justify-center rounded-full border border-[#0d0c0c] px-8 py-4 font-medium text-base text-[#0d0c0c] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
              >
                Request Free Sample
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Graphic */}
          <div className="how-mimics-hero-visual lg:col-span-6 flex items-center justify-center relative w-full mt-8 lg:mt-0 z-0">
            <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center animate-fade-up">
              {/* Main Concentric Rings Sphere Image */}
              <div className="w-full h-full relative select-none">
                <Image
                  src="/how-mimics-work-hero2.png"
                  alt="Slingshot Bio Polymer Core Mimics concentric rings design"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <EngineeringVideoSection />
      <WhyReplaceCellsSection />
      <CustomControlSection />
      <ProductFamilySection />
      <LetsTalkSection />

      {/* Premium subtle logo strip at the bottom of the page */}
      {/* <div
        className="bg-white border-t border-[#ded9d4]/60 py-6 overflow-hidden relative mt-auto"
        style={{
          "--logo-strip-height": "48px",
          "--logo-strip-gap": "80px",
        } as React.CSSProperties}
      >
        <LogoStrip className="opacity-40 grayscale hover:opacity-75 transition-opacity" />
      </div> */}

    </main>
  );
}
