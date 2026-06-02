"use client";

import React from "react";
import Link from "next/link";

export default function ProofMimicsSection() {
  const bulletItems = [
    "Lot 47 equals lot 48 equals lot 49.",
    "Up to 36 months of shelf life. Most products ship at room temperature.",
    "No biohazard. No BSL-2. No autoclave bag at the end.",
    'No donor variability. No supply fragility. No "we ran out."',
    "The same particle behaves the same way in Boston, Basel, and Tokyo.",
  ];

  const studyCards = [
    {
      title: "ARUP LABORATORIES",
      text: "ARUP Laboratories validated synthetic mast cell mimics co-developed with Slingshot for a high-sensitivity flow assay. They concluded the particles could function as a translatable reference standard across labs.",
      citation: "Davis et al., Cytometry Part B, 2024",
    },
    {
      title: "EUROPEAN MULTI-LABORATORY GROUP",
      text: "A European multi-laboratory group evaluated FlowCytes® and TBNK Mimic™ as TBNK quality controls across four cytometers. Scatter and fluorescence profiles matched fresh human blood on three of four platforms.",
      citation: "Waeckel et al., Medical Sciences, 2025",
    },
    {
      title: "CELLARES — CELL Q™ PLATFORM",
      text: "Cellares integrated ScatterBridge and TBNK Mimic controls into their Cell Q™ platform in October 2025, automated, multi-site QC for cell therapy manufacturing, running on the same reference particle at industrial scale.",
      citation: "October 2025 Integration",
    },
  ];

  return (
    <section className="bg-white text-[#0d0c0c] py-16 md:py-32 relative overflow-hidden border-t border-[#ded9d4]/30">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Row 1: Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-12">
          <div className="lg:col-span-5 select-text">
            <h2 className="font-heading font-semibold text-[#0d0c0c] md:leading-[56px] leading-[42px] tracking-[-0.02em] text-[34px] sm:text-4xl md:text-[48px] transition-all animate-fade-up">
              Proof of What <br />
              Mimics Can Do
            </h2>
          </div>
          <div className="lg:col-span-7 select-text">
            <p className="text-[#555350] font-sans text-sm leading-[24px] max-w-[620px] transition-all animate-fade-up">
              In a 2026 multi-platform validation,{" "}
              <strong className="font-medium text-[#0D0C0C]">
                TBNK Mimic™
              </strong>{" "}
              ran lymphocyte subsets at &le;5% CV across operators, instruments,
              and days, with intra-assay precision under 3% CV on every subset.
              Across three cytometer platforms &mdash; Cytek Aurora, Cytek
              Northern Lights, BD FACSLyric &mdash; and three commercial TBNK
              kits, the major lymphocyte populations held within 2.2% CV.
              (Gunturu et al., Cytometry Part A, 2026.)
            </p>
          </div>
        </div>

        {/* Row 2: 3 Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 select-text animate-fade-up">
          <div className="bg-[#0D0C0C0A] rounded-[14px] p-8 flex flex-col items-start border border-[#0D0C0C12] transition-all hover:translate-y-[-2px] hover:shadow-sm">
            <span className="font-heading font-bold text-[#f76a00] text-4xl sm:text-5xl lg:text-[56px] leading-none mb-4">
              &le;5%
            </span>
            <p className="text-[#555350] font-sans text-sm leading-[21.82px]">
              CV across operators, instruments, and days
            </p>
          </div>

          <div className="bg-[#0D0C0C0A] rounded-[14px] p-8 flex flex-col items-start border border-[#0D0C0C12] transition-all hover:translate-y-[-2px] hover:shadow-sm">
            <span className="font-heading font-bold text-[#f76a00] text-4xl sm:text-5xl lg:text-[56px] leading-none mb-4">
              2.2%
            </span>
            <p className="text-[#555350] font-sans text-sm leading-[21.82px]">
              CV across three cytometer platforms — Cytek Aurora, Northern
              Lights, BD FACSLyric
            </p>
          </div>

          <div className="bg-[#0D0C0C0A] rounded-[14px] p-8 flex flex-col items-start border border-[#0D0C0C12] transition-all hover:translate-y-[-2px] hover:shadow-sm">
            <span className="font-heading font-bold text-[#f76a00] text-4xl sm:text-5xl lg:text-[56px] leading-none mb-4">
              36 mo
            </span>
            <p className="text-[#555350] font-sans text-sm leading-[21.82px]">
              Shelf life. Most products ship at room temperature.
            </p>
          </div>
        </div>

        {/* Row 3: Subtitle block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start md:mb-12 mb-8 select-text">
          <div className="lg:col-span-7">
            <h3 className="font-heading font-semibold text-[#0d0c0c] md:leading-[40px] tracking-[-0.02em] text-[26px] sm:text-3xl md:text-[32px] transition-all animate-fade-up">
              The instrument didn&apos;t get better. <br />
              <span className="text-[#f76a00]">
                The reference stopped moving.
              </span>
            </h3>
          </div>
          <div className="lg:col-span-5 pt-2">
            <p className="text-[#555350] font-sans text-sm sm:text-base leading-[24px] transition-all animate-fade-up">
              Everything else follows from treating the reference as a
              manufacturing problem instead of a biology problem
            </p>
          </div>
        </div>

        {/* Row 4: Orange dash bullet list with dividers */}
        <div className="divide-y divide-[#DEDCDA] md:mb-24 mb-16 select-text animate-fade-up">
          {bulletItems.map((item, idx) => (
            <div
              key={idx}
              className="py-6 flex items-start gap-4 transition-colors hover:bg-[#f7f6f5]/30 px-2"
            >
              <span className="text-[#f76a00] font-bold text-lg select-none">
                &mdash;
              </span>
              <p className="text-[#555350] font-sans text-sm sm:text-base leading-[24px]">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Row 5: 3 Validation Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 select-text animate-fade-up">
          {studyCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#0D0C0C08] rounded-xl p-8 flex flex-col justify-between border border-[#DEDCDA] transition-all hover:translate-y-[-2px] hover:shadow-sm"
            >
              <div className="flex flex-col items-start mb-8">
                <span className="font-sans font-semibold text-[#f76a00] text-[14px] tracking-[1.52px] uppercase block mb-4">
                  {card.title}
                </span>
                <p className="text-[#555350] font-sans text-sm leading-[23.8px]">
                  {card.text}
                </p>
              </div>
              <span className="text-[#7B7B7B] font-sans font-medium text-xs block">
                {card.citation}
              </span>
            </div>
          ))}
        </div>

        {/* Row 6: Bottom Publications Link */}
        <div className="flex items-center justify-start select-text animate-fade-up">
          <Link
            href="/publications"
            className="group font-sans font-medium !underline !underline-offset-4 !text-[#f76a00] hover:text-[#f86902] transition-colors inline-flex items-center gap-2 text-[16px]"
          >
            <span>More Work Is On The Publications Page →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
