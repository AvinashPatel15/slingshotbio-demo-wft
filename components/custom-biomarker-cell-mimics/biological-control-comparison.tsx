"use client";

import React from "react";

export default function BiologicalControlComparison() {
  const scrollToConfigurator = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    const configSection = document.getElementById("configurator-section");
    if (configSection) {
      configSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      title: "Fully Synthetic",
      isOrangeTitle: false,
      description: "No donor sourcing. No IRB complexity. No cold chain dependency.",
      icon: (
        <svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.3188 12.7217V35.2773L20.7847 46.5557L1.25049 35.2773V12.7217L20.7847 1.44336L40.3188 12.7217Z" stroke="#333130" stroke-width="2.5" />
        </svg>

      )
    },
    {
      title: "Custom to Specification",
      isOrangeTitle: true,
      description: "Any surface marker, particle size, rigidity, or assay format. Your exact panel.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.25" y="1.25" width="45.5" height="45.5" rx="22.75" stroke="#F76A00" stroke-width="2.5" />
          <circle cx="24.0003" cy="24.0001" r="2.32258" fill="#F76A00" />
          <circle cx="19.7423" cy="18.9677" r="1.16129" fill="#F76A00" />
          <circle cx="19.7423" cy="28.2582" r="1.16129" fill="#F76A00" />
          <circle cx="28.258" cy="28.2582" r="1.16129" fill="#F76A00" />
          <circle cx="28.258" cy="18.9677" r="1.16129" fill="#F76A00" />
          <circle cx="14.7103" cy="24.0001" r="2.32258" fill="#F76A00" />
          <circle cx="33.2904" cy="24.0001" r="2.32258" fill="#F76A00" />
          <circle cx="33.2904" cy="30.9678" r="2.32258" fill="#F76A00" />
          <circle cx="33.2904" cy="17.0322" r="2.32258" fill="#F76A00" />
          <circle cx="14.7103" cy="17.0322" r="2.32258" fill="#F76A00" />
          <circle cx="14.7103" cy="30.9678" r="2.32258" fill="#F76A00" />
          <circle cx="24.0003" cy="14.7097" r="2.32258" fill="#F76A00" />
          <circle cx="24.0003" cy="33.2903" r="2.32258" fill="#F76A00" />
        </svg>

      )
    },
    {
      title: "Ambient Stable",
      isOrangeTitle: false,
      description: "Ships and stores without cold chain. Designed for multi-site research programmes.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.4824 1.25L46.75 21.5176V26.4824L26.4824 46.75H21.5176L1.25 26.4824V21.5176L21.5176 1.25H26.4824Z" stroke="#333130" stroke-width="2.5" />
        </svg>

      )
    },
    {
      title: "Lot Identical Performance",
      isOrangeTitle: false,
      description: "Every batch manufactured to the same specification. Run your gating templates unchanged.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_3306)">
            <path d="M47.25 0.75H0.75V12H47.25V0.75Z" stroke="#333130" stroke-width="2.5" stroke-miterlimit="10" />
            <path d="M47.25 12H0.75V24H47.25V12Z" stroke="#333130" stroke-width="2.5" stroke-miterlimit="10" />
            <path d="M47.25 24H0.75V35.25H47.25V24Z" stroke="#333130" stroke-width="2.5" stroke-miterlimit="10" />
            <path d="M47.25 35.25H0.75V47.25H47.25V35.25Z" stroke="#333130" stroke-width="2.5" stroke-miterlimit="10" />
          </g>
          <defs>
            <clipPath id="clip0_1_3306">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>

      )
    }
  ];

  return (
    <section className="bg-white text-[#0d0c0c] py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: 2x2 Feature Grid (No cards, minimalist text layouts on plain background) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start text-left transition-all duration-300"
              >
                <div className="mb-2">
                  {feature.icon}
                </div>
                <h3 className={`font-heading font-semibold text-nowrap text-[24px] mt-2 mb-2 leading-[28px] ${feature.isOrangeTitle ? "text-[#f76a00]" : "text-[#0d0c0c]"
                  }`}>
                  {feature.title}
                </h3>
                <p className="text-[#7B7B7B] font-sans text-[14px] leading-[18px] max-w-[270px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Title & Structured Copy */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-6 text-left">
            <h2 className="font-heading font-semibold leading-[57px] tracking-[-0.03em] text-[38px] sm:text-5xl md:text-[48px] text-[#0d0c0c] mb-8">
              Biological Control Vary <br />
              TruCytes<sup className="text-[0.45em] top-[-0.55em] font-normal">®</sup> Don&apos;t
            </h2>
            <div className="space-y-8 text-[#333130] font-sans text-[18px] leading-[27px]">
              <p>
                Traditional biomarker controls introduce inherent variability donor variation, cold-chain degradation, ethical procurement barriers, and batch-to-batch inconsistency that inflates your error bars and slows your research.
              </p>
              <p>
                TruCytes® Custom Biomarker Controls are precision-engineered synthetic cell mimics that enhance consistency, accuracy, and scalability for your specific research needs. Every lot is manufactured to your specification and verified by multi-parameter flow cytometry before shipment.
              </p>
            </div>

            {/* Pill CTAs matching mockup button designs */}
            <div className="mt-10 flex flex-wrap items-center gap-4 w-full">
              <div
                role="button"
                tabIndex={0}
                onClick={scrollToConfigurator}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollToConfigurator(e);
                  }
                }}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f76a00] px-10 py-[15px] font-medium text-[16px] text-white transition-all duration-300 hover:bg-[#f76a00]/90 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#f76a00] focus-visible:ring-offset-2"
              >
                Read Research Paper
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={scrollToConfigurator}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollToConfigurator(e);
                  }
                }}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#F0F0F0] px-[41px] py-[15px] font-medium text-[16px] text-[#0d0c0c] transition-all duration-300 hover:bg-[#dedcda]/60 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#f76a00] focus-visible:ring-offset-2"
              >
                Configure Own
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
