"use client";

import React from "react";

const customizationCards = [
  {
    number: "01",
    title: "Single or Multiple Proteins",
    description: "Incorporate one or more rare or targeted biomarkers on a single TruCyte to replicate complex cellular phenotypes."
  },
  {
    number: "02",
    title: "Distinct Populations",
    description: "Model heterogeneous cell environments by defining distinct populations within a single sample."
  },
  {
    number: "03",
    title: "Variable Expression Levels",
    description: "Fine-tune biomarker expression to reflect high, low, or intermediate intensities, enabling more accurate and nuanced assay development."
  },
  {
    number: "04",
    title: "Surface & Intracellular Biomarkers",
    description: "Include both surface and intracellular markers to mimic dynamic cellular pathways with greater biological fidelity."
  },
  {
    number: "05",
    title: "Rare or Novel Proteins",
    description: "Access non-commercial proteins through our expertise in isolation and incorporation, ensuring even the most niche biomarkers are within reach."
  },
  {
    number: "06",
    title: "Size and Morphology Control",
    description: "Select TruCyte dimensions and morphology to match specific cell types lymphocytes, monocytes, granulocytes, and more."
  }
];

export default function UnparalleledCustomization() {
  return (
    <section className="relative w-full bg-[#0C0C0C] py-12 xl:py-[112px] xl:h-[910px] flex flex-col justify-center items-center gap-10 sm:gap-24">
      <div className="frame flex flex-col gap-6 xl:gap-[15px] xl:h-[163px] mb-12 xl:mb-[88px] shrink-0">
        <div className="flex flex-row items-center gap-[10px] ">
          <div className="w-[20px] h-[1.5px] bg-[#F76A00] rounded-[2px]" />
          <span className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.4px] uppercase text-[#F76A00]">
            Product Capabilities
          </span>
        </div>
        <div className="w-full flex flex-col xl:flex-row justify-between items-start gap-6 xl:gap-[20px] xl:h-[132px]">
          <h2 className="text-[#FFFFFF] font-heading font-semibold text-[32px] sm:text-[40px] leading-[1.1] sm:leading-[44px] tracking-[-0.96px] xl:w-[535px] xl:h-[132px] flex items-center">
            Unparalleled Customization. Reliable Results Across Every Therapy Area.
          </h2>
          <p className="text-[#727272] font-heading font-normal text-[16px] leading-[24px] xl:w-[460px] xl:h-[120px] flex items-center">
            Slingshot Biosciences' patented technology accelerates discovery and clinical workflows. Our precision-engineered TruCyte™ biomarker cell mimics replicate specific cellular phenotypes for advanced research, diagnostic, and therapeutic applications.
          </p>
        </div>
      </div>
      <div
        className="frame bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.07)] rounded-[14px] overflow-hidden grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        style={{
          boxSizing: "border-box",
        }}
      >
        {customizationCards.map((card) => (
          <div
            key={card.number}
            className="w-full h-[216px] bg-[#141414] border-b-[0.5px] border-b-[rgba(255,255,255,0.07)] flex flex-col justify-center items-start"
            style={{
              padding: "36px 32px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex flex-col gap-[14px] w-full">
              <span className="font-sans font-medium text-[11px] leading-[14px] tracking-[0.88px] text-[#FF6600] uppercase w-full h-[14px] flex items-center">
                {card.number}
              </span>
              <div className="flex flex-col gap-[13px] w-full">
                <h3 className="text-[#FFFFFF] font-heading font-semibold text-[20px] leading-[19px] tracking-[-0.217px] w-full flex items-center">
                  {card.title}
                </h3>
                <p className="text-[rgba(255,255,255,0.38)] font-sans font-normal text-[16px] leading-[22px] w-full flex items-center">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
