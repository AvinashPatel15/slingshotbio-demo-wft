"use client";

import React from "react";
import Image from "next/image";

export default function CustomBiomarkerHero() {
  const scrollToConfigurator = (e: React.MouseEvent) => {
    e.preventDefault();
    const configSection = document.getElementById("configurator-section");
    if (configSection) {
      configSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formSection = document.getElementById("evaluation-kit-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#0d0c0c] text-white relative py-20 md:py-32 md:min-h-[75vh] !min-h-[50vh] flex items-center overflow-hidden">

      {/* Absolute Background Image representing custom-hero.png */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/custom-hero.png"
          alt="Starry background with glowing cell mimic globe"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center opacity-90"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Title, Subtitle, and Pill CTAs */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start text-left">
            <div className="animate-fade-up">
              <h1 className="font-heading font-semibold text-white md:leading-[72px] tracking-[-0.03em] text-[44px] sm:text-5xl md:text-[72px] transition-all">
                Custom TruCytes<sup className="text-[30px] sm:text-[35px] md:text-[52px] lg:text-[58px]  top-[-0.20em] font-normal">®</sup> <br />
                Biomarker Controls
              </h1>
            </div>

            <div className="animate-fade-up-delay-1 mt-6">
              <p className="text-[#c8c5c2] font-sans text-base sm:text-lg lg:text-[18px] leading-[28px] max-w-[580px]">
                Mimic any cell type of your choosing with custom TruCytes® biomarker cell mimics. Scalable, reproducible results tailored to your unique research needs.
              </p>
            </div>

            {/* Pill CTAs matching mockup button design */}
            <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap items-center gap-4 sm:gap-5 w-full">
              <a
                href="#evaluation-kit-form-section"
                onClick={scrollToForm}
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#f76a00] px-[16px] py-3.5 font-medium text-[16px] text-white shadow-[0_4px_15px_rgba(247,106,0,0.2)] transition-all duration-300 hover:bg-[#f76a00]/90 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer"
              >
                Free Evaluation Kit
              </a>

              <a
                href="#configurator-section"
                onClick={scrollToConfigurator}
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-[16px] py-3.5 font-medium text-[16px] !text-black transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer"
              >
                Configure Own Kit
              </a>
            </div>
          </div>

          {/* Right Column: Kept empty to let the background cell mimic display cleanly on the right side */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />

        </div>
      </div>
    </section>
  );
}
