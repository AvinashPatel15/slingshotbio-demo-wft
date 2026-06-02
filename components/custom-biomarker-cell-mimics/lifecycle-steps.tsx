"use client";

import React from "react";
import Image from "next/image";

export default function LifecycleSteps() {
  const scrollToForm = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    const formSection = document.getElementById("evaluation-kit-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      num: 1,
      isActive: true,
      tag: "EVALUATION",
      title: "Free Sample Kit",
      description: "Receive TruCytes® matched to your application at no cost. Run head-to-head against your existing controls. No commitment required.",
      cta: "Request Free Kit",
      isOrangeCTA: true
    },
    {
      num: 2,
      isActive: true,
      tag: "CUSTOMIZATION",
      title: "Define Your Spec",
      description: "A dedicated Field Application Scientist works with you to define surface markers, fluorescence, size, and any special handling requirements.",
      cta: "Talk To A Scientist",
      isOrangeCTA: true
    },
    {
      num: 3,
      isActive: false,
      tag: "VALIDATION",
      title: "Pilot Batch & QC",
      description: "Pilot batch manufactured, full multi-parameter QC run, Certificate of Analysis provided — before any production commitment is made.",
      cta: "Download Example CoA",
      isOrangeCTA: false
    },
    {
      num: 4,
      isActive: false,
      tag: "PRODUCTION",
      title: "Ongoing Supply",
      description: "Seamless scale. Guaranteed lot-to-lot consistency. Dedicated account support for the life of your research program.",
      cta: "Discuss Volume Pricing",
      isOrangeCTA: false
    }
  ];

  return (
    <section className="bg-white text-[#0d0c0c] py-20 md:py-20 relative overflow-hidden">
      {/* Inline styles for capsule floating animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-badge {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float-badge {
          animation: float-badge 5s ease-in-out infinite;
        }
      ` }} />

      <div className="container mx-auto px-6 relative">

        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-20 animate-fade-up">
          <h2 className="font-heading font-semibold leading-[57px] tracking-[-0.03em] text-[36px] sm:text-4xl md:text-[48px] text-[#0d0c0c] mb-6">
            From First Sample To Full Production
          </h2>
          <p className="text-[#333130] font-sans text-sm sm:text-[18px] leading-[27px] max-w-[640px] mx-auto">
            Guided by Field Application Scientists at every stage. <br />
            Start with zero commitment and scale at your own pace.
          </p>
        </div>

        {/* Steps Timeline Grid Container */}
        <div className="relative mb-28">

          {/* Horizontal Connection Line (Desktop Only - mathematically positioned at center of w-14/h-14 circles) */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[2px] z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Vibrant orange line starting before Step 1 and ending 3/4 of the way between Step 2 and Step 3 */}
              <line x1="5%" y1="50%" x2="56.25%" y2="50%" stroke="#f76a00" strokeWidth="2.5" />
              {/* Muted grey line from 56.25% to 95% */}
              <line x1="56.25%" y1="50%" x2="95%" y2="50%" stroke="#dedcda" strokeWidth="2.5" />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center group h-full justify-between">

                <div className="flex flex-col items-center">
                  {/* Step Circle Bubble */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-heading font-bold text-[16px] mb-5 border transition-all duration-300 relative ${step.isActive
                      ? "bg-[#f76a00] text-white border-[#f76a00]"
                      : "bg-white text-[#9A9794] border-[#E4E1DC]"
                      }`}
                  >
                    <span className="relative z-10">{step.num}</span>
                    <div
                      className={`absolute inset-[-10px] rounded-full pointer-events-none transition-all duration-300 ${step.isActive ? "bg-[#f76a00]/10" : ""
                        }`}
                    />
                  </div>

                  {/* Uppercase Step Tag */}
                  <span
                    className={`text-[10px] font-heading font-semibold uppercase tracking-wider mb-2 transition-colors duration-300 ${step.isActive ? "text-[#f76a00]" : "text-[#78716c]"
                      }`}
                  >
                    {step.tag}
                  </span>

                  {/* Step Title */}
                  <h3 className="font-heading font-semibold text-[16px] md:text-[20px] text-[#0d0c0c] mb-3 leading-[21px]">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[#333130] font-sans text-[14px] leading-[22.1px] max-w-[280px] lg:max-w-none min-h-[64px] px-1">
                    {step.description}
                  </p>
                </div>

                {/* Step Pill Button CTA */}
                <div className="mt-5">
                  {step.isOrangeCTA ? (
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={scrollToForm}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          scrollToForm(e);
                        }
                      }}
                      className="inline-flex min-h-[38px] items-center justify-center rounded-full border border-[#f76a00] bg-white px-5 py-2 text-[16px] font-medium text-[#f76a00] transition-all duration-200 hover:bg-[#f76a00]/5 cursor-pointer active:scale-97 outline-none focus-visible:ring-2 focus-visible:ring-[#f76a00] focus-visible:ring-offset-1"
                    >
                      {step.cta}
                    </div>
                  ) : (
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={scrollToForm}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          scrollToForm(e);
                        }
                      }}
                      className="inline-flex min-h-[38px] items-center justify-center rounded-full border border-[#CCCAC5] bg-white px-5 py-2 text-[16px] font-medium text-[#4E4A47] transition-all duration-200 hover:bg-[#CCCAC5]/5 cursor-pointer active:scale-97 outline-none focus-visible:ring-2 focus-visible:ring-[#CCCAC5] focus-visible:ring-offset-1"
                    >
                      {step.cta}
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Catalog Promotion Card using custom-banner.png cover */}
        {/* <div className="rounded-[24px] overflow-hidden relative shadow-[0_12px_45px_rgba(0,0,0,0.06)] min-h-[300px] md:min-h-[280px] bg-[#040814] flex items-center p-8 md:p-12 lg:px-20 lg:py-16 border border-white/5">

          <div className="absolute right-0 top-0 bottom-0 w-[45%] z-0 select-none pointer-events-none hidden md:block">
            <Image
              src="/custom-banner.png"
              alt="Slingshot Bio catalog custom mimics vials"
              fill
              priority
              sizes="450px"
              className="object-cover object-right"
            />
          </div>

          <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-[#040814] via-[#040814]/90 to-transparent z-10 pointer-events-none" />

          <div className="hidden md:block absolute inset-0 z-20 pointer-events-none">
            <div
              className="absolute top-[40%] left-[57%] bg-[#131b2e]/80 border border-white/15 backdrop-blur-md text-[#e2e8f0] font-semibold py-1.5 px-4 rounded-full text-xs shadow-[0_4px_12px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#131b2e]/95 select-none cursor-default animate-float-badge pointer-events-auto"
              style={{ animationDelay: "0s" }}
            >
              CD47
            </div>

            <div
              className="absolute top-[23%] left-[69%] bg-[#131b2e]/80 border border-white/15 backdrop-blur-md text-[#e2e8f0] font-semibold py-1.5 px-4 rounded-full text-xs shadow-[0_4px_12px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#131b2e]/95 select-none cursor-default animate-float-badge pointer-events-auto"
              style={{ animationDelay: "1s" }}
            >
              CD122
            </div>

            <div
              className="absolute top-[34%] right-[8%] bg-[#131b2e]/80 border border-white/15 backdrop-blur-md text-[#e2e8f0] font-semibold py-1.5 px-4 rounded-full text-xs shadow-[0_4px_12px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#131b2e]/95 select-none cursor-default animate-float-badge pointer-events-auto"
              style={{ animationDelay: "2s" }}
            >
              CD14
            </div>

            <div
              className="absolute bottom-[36%] left-[62%] bg-[#131b2e]/80 border border-white/15 backdrop-blur-md text-[#e2e8f0] font-semibold py-1.5 px-4 rounded-full text-xs shadow-[0_4px_12px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#131b2e]/95 select-none cursor-default animate-float-badge pointer-events-auto"
              style={{ animationDelay: "1.5s" }}
            >
              EGFR
            </div>

            <div
              className="absolute bottom-[22%] left-[73%] bg-[#131b2e]/80 border border-white/15 backdrop-blur-md text-[#e2e8f0] font-semibold py-1.5 px-4 rounded-full text-xs shadow-[0_4px_12px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#131b2e]/95 select-none cursor-default animate-float-badge pointer-events-auto"
              style={{ animationDelay: "0.5s" }}
            >
              CD65
            </div>

            <div
              className="absolute bottom-[30%] right-[7%] bg-[#131b2e]/80 border border-white/15 backdrop-blur-md text-[#e2e8f0] font-semibold py-1.5 px-4 rounded-full text-xs shadow-[0_4px_12px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#131b2e]/95 select-none cursor-default animate-float-badge pointer-events-auto"
              style={{ animationDelay: "2.5s" }}
            >
              +200 more
            </div>
          </div>

          <div className="relative z-30 flex flex-col items-start text-left max-w-[500px]">
            <h3 className="font-heading font-semibold text-2xl sm:text-3xl md:text-[24px] text-white mb-8 leading-[1.2] tracking-tight">
              Looking for TruCytes Custom
              Biomarkers? <br />
              <span className="text-[#ffe2c2]">We&apos;ll engineer it.</span>
            </h3>

            <div className="flex flex-wrap gap-4">
              <div
                role="button"
                tabIndex={0}
                onClick={scrollToForm}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollToForm(e);
                  }
                }}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#f86402] px-8 py-3 font-medium text-sm text-white transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 active:scale-98 cursor-pointer shadow-lg shadow-orange-500/15 outline-none focus-visible:ring-2 focus-visible:ring-[#f86402] focus-visible:ring-offset-2"
              >
                View Applications
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={scrollToForm}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollToForm(e);
                  }
                }}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-8 py-3 font-medium text-sm text-[#040814] transition-all duration-300 hover:bg-white/95 hover:-translate-y-0.5 active:scale-98 cursor-pointer shadow-md shadow-white/5 outline-none focus-visible:ring-2 focus-visible:ring-[#f86402] focus-visible:ring-offset-2"
              >
                Request Evaluation Kit
              </div>
            </div>
          </div>

        </div> */}

      </div>
    </section>
  );
}
