"use client";

import React from "react";

export default function ProductFamilyGrid() {
  const products = [
    {
      num: "01",
      title: "ScatterBridge",
      desc: "instrument standardization and harmonization across sites.",
      badge: "STANDARDIZATION",
    },
    {
      num: "02",
      title: "FlowCytes",
      desc: "synthetic WBC scatter mimics for gating and panel setup.",
      badge: "PANEL SETUP",
    },
    {
      num: "03",
      title: "SpectraComp",
      desc: "single-stain controls for spectral unmixing and conventional compensation.",
      badge: "SPECTRAL",
    },
    {
      num: "04",
      title: "ViaComp",
      desc: "viability controls that bind both DNA-intercalating and amine-reactive dyes.",
      badge: "VIABILITY",
    },
    {
      num: "05",
      title: "TruCytes Family",
      desc: "TBNK Mimic™ and CD34+ Stem Cell Mimic™ — biomarker-defined references for assay verification and longitudinal QC.",
      badge: "LONGITUDINAL QC",
    },
    {
      num: "06",
      title: "StimCytes · QuantCytes · PhenoCytes",
      desc: "for functional, quantitative, and immunophenotyping work.",
      badge: "IMMUNOPHENOTYPING",
    },
  ];

  return (
    <section className="bg-white text-[#0d0c0c] py-16 md:py-28 relative overflow-hidden border-t border-[#ded9d4]/30">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="max-w-[620px] mb-14 select-text animate-fade-up">
          <h2 className="font-heading font-semibold text-[#0d0c0c] md:leading-[56px] leading-[36px] tracking-[-0.02em] text-[36px] sm:text-4xl md:text-[48px] transition-all">
            The Product Family, <br />
            By The Job It Does.
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 select-text animate-fade-up">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#F7F6F5] rounded-[16px] p-8 flex flex-col justify-between items-start border border-[#00000014] min-h-[250px] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-sm"
            >
              <div className="w-full flex flex-col items-start mb-6">
                <span className="font-sans font-medium text-[#9A9794] text-[10.4px] tracking-wider block mb-4">
                  {p.num}
                </span>
                <h3 className="font-heading font-bold text-[#0d0c0c] text-xl md:text-[20px] leading-[24.96px] mb-3">
                  {p.title}
                </h3>
                <p className="text-[#9A9794] font-sans text-sm leading-[20px] max-w-[280px] lg:max-w-none">
                  {p.desc}
                </p>
              </div>

              {/* Tag / Badge at the bottom left */}
              <span className="bg-[#f76a00] text-white font-sans text-[12px] font-semibold px-2.5 py-[3px] rounded tracking-wider uppercase inline-block">
                {p.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
