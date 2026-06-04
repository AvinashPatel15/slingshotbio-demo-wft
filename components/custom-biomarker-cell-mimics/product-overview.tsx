"use client";

import React from "react";

export default function ProductOverview() {
  return (
    <section className="relative w-full bg-[#FFFFFF] py-12 xl:py-24">
      <div className="frame relative xl:h-[310px] flex flex-col xl:block gap-8">
        <div className="flex flex-row items-center xl:absolute xl:left-0 xl:top-0 xl:w-[157.78px] xl:h-[14px] gap-2">
          <div className="w-[20px] h-[1.5px] bg-[#F76A00] rounded-[2px]" />
          <span className="font-sans font-medium text-[10.5px] leading-[14px] tracking-[1.365px] uppercase text-[#F76A00]">
            Process Overview
          </span>
        </div>
        <h2 className="text-[#0D0D0D] font-heading font-semibold text-[32px] sm:text-[40px] xl:text-[44px] leading-[1.2] xl:leading-[58px] tracking-[-1px] xl:tracking-[-1.54px] xl:absolute xl:left-0 xl:top-[30.11px] xl:w-[453px] xl:h-[104px] flex items-center">
          Designing and Building Your Custom TruCyte®
        </h2>
        <div className="w-full xl:max-w-[487px] xl:absolute xl:right-0 xl:top-[30px] flex flex-col gap-[26px]">
          <div className="w-full flex flex-col gap-6">
            <p className="text-[#333130] font-sans font-normal text-[16px] leading-[27px] flex items-center">
              Our commercial and R&D teams work alongside your scientists under a structured project management framework delivering your Custom TruCyte on time, on budget, and to a defined quality standard.
            </p>
            <p className="text-[#333130] font-sans font-normal text-[16px] leading-[27px] flex items-center">
              With more than 100 custom mimic designs completed, our process is proven. Expect maximum efficiency through design and build, and optimal quality at delivery.
            </p>
          </div>
          <div
            className="w-full h-[51px] bg-[rgba(255,102,0,0.06)] border border-[rgba(255,102,0,0.18)] rounded-[8px] flex items-center justify-center"
            style={{
              padding: "14px 20px",
              boxSizing: "border-box",
            }}
          >
            <span className="font-heading font-semibold text-[16px] leading-[23px] text-[#F76A00] flex items-center gap-2">
              ✦ &nbsp;100+ custom mimic designs completed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
