"use client";

import React from "react";
import { RedCrossIcon, GreenCheckIcon } from "../ui/icons";

export default function SameControlSection() {
  return (
    <section className="bg-[#0c0c0b] text-white py-20 md:py-32 relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-[10vw] w-[35vw] h-[35vw] max-w-[500px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none z-1"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="max-w-[720px] md:mb-16 mb-10 select-text animate-fade-up">
          <h2 className="font-heading font-semibold text-white leading-[1.2] tracking-[-0.02em] text-[28px] sm:text-4xl md:text-[48px] transition-all">
            The Same Control. Every Site. <br />
            Every Instrument. Every Year.
          </h2>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch select-text animate-fade-up">
          {/* Left Card: Donor Blood Controls */}
          <div className="bg-[#191919] rounded-[24px] p-6 md:p-8 flex flex-col justify-between transition-all">
            <div>
              <h3 className="font-heading font-bold text-white text-xl md:text-[24.8px] mb-6">
                Donor Blood Controls
              </h3>

              {/* Graphic container showing left half of reproduc-card.png */}
              <div className="w-full overflow-hidden rounded-xl bg-white aspect-[1.8/1] relative mb-8 select-none">
                <img
                  src="/reproduc-card.png"
                  alt="Donor blood controls flow cytometry scatter plots showing variance between Donor 1, Donor 2, Donor 3, Donor 4"
                  className="absolute left-0 top-0 h-full w-full object-contain"
                  draggable="false"
                />
              </div>

              {/* Bullet list with Red Cross icons */}
              <ul className="mb-8">
                <li className="flex items-center gap-3.5 border-b border-[#FFFFFF0D] py-4">
                  <RedCrossIcon />

                  <span className="text-[#C6C3C0] font-sans text-[16px] leading-[20.16px]">
                    30/90-day expiration
                  </span>
                </li>
                <li className="flex items-center gap-3.5 border-b border-[#FFFFFF0D] py-4">
                  <RedCrossIcon />
                  <span className="text-[#C6C3C0] font-sans text-[16px] leading-[20.16px]">
                    Cold chain required
                  </span>
                </li>
                <li className="flex items-center gap-3.5 border-b border-[#FFFFFF0D] py-4">
                  <RedCrossIcon />
                  <span className="text-[#C6C3C0] font-sans text-[16px] leading-[20.16px]">
                    Biohazard. BSL-2. Autoclave bag at the end.
                  </span>
                </li>
                <li className="flex items-center gap-3.5 border-b border-[#FFFFFF0D] py-4">
                  <RedCrossIcon />
                  <span className="text-[#C6C3C0] font-sans text-[16px] leading-[20.16px]">
                    Lot 47 &mdash; discontinued.
                  </span>
                </li>
              </ul>
            </div>

            {/* Stylized Center Phrase */}
            <div className="py-2 text-center select-text">
              <span className="font-heading text-[#C6C3C0] md:text-[24px] text-[20px] block font-semibold leading-7">
                &ldquo;Same Sample Can&apos;t Run Twice&rdquo;
              </span>
            </div>
          </div>

          {/* Right Card: SlingShot Cell Mimics */}
          <div className="bg-[#191919] rounded-[24px] p-6 md:p-8 flex flex-col justify-between transition-all">
            <div>
              <h3 className="font-heading font-bold text-[#F76A00] text-xl md:text-[24.8px] mb-6">
                SlingShot Cell Mimics
              </h3>

              {/* Graphic container showing right half of reproduc-card.png */}
              <div className="w-full overflow-hidden rounded-xl bg-white aspect-[1.8/1] relative mb-8 select-none">
                <img
                  src="/reproduc-card.png"
                  alt="Donor blood controls flow cytometry scatter plots showing variance between Donor 1, Donor 2, Donor 3, Donor 4"
                  className="absolute left-0 top-0 h-full w-full object-contain"
                  draggable="false"
                />
              </div>

              {/* Bullet list with Green Check icons */}
              <ul className="mb-8">
                <li className="flex items-center gap-3.5 border-b border-[#FFFFFF0D] py-4">
                  <GreenCheckIcon />

                  <span className="text-[#C6C3C0] font-sans text-[16px] leading-[20.16px]">
                    36-month shelf life
                  </span>
                </li>
                <li className="flex items-center gap-3.5 border-b border-[#FFFFFF0D] py-4">
                  <GreenCheckIcon />

                  <span className="text-[#C6C3C0] font-sans text-[16px] leading-[20.16px]">
                    Ships at room temperature
                  </span>
                </li>
                <li className="flex items-center gap-3.5 border-b border-[#FFFFFF0D] py-4">
                  <GreenCheckIcon />

                  <span className="text-[#C6C3C0] font-sans text-[16px] leading-[20.16px]">
                    Non-biohazardous
                  </span>
                </li>
                <li className="flex items-center gap-3.5 border-b border-[#FFFFFF0D] py-4">
                  <GreenCheckIcon />

                  <span className="text-[#C6C3C0] font-sans text-[16px] leading-[20.16px]">
                    Lot 47 = Lot 48 = Lot 49.
                  </span>
                </li>
              </ul>
            </div>

            {/* Stylized Center Phrase */}
            <div className="py-2 text-center select-text">
              <span className="font-heading md:text-[24px] text-[20px] block font-semibold leading-7">
                &ldquo;A Reference That Doesn&apos;t Change&rdquo;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
