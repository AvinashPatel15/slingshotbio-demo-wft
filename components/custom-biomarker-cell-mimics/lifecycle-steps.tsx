"use client";

import React from "react";

export default function LifecycleSteps() {
  return (
    <section className="relative w-full bg-[#FFFFFF]">
      <div className="frame border-t border-[#E4E3E0] flex flex-col">
        <div
          className="w-full border-b border-[#E4E3E0] flex flex-col xl:flex-row justify-between items-start gap-4 xl:gap-0"
          style={{
            padding: "20px 0px",
            boxSizing: "border-box",
          }}
        >
          <div className="relative w-full xl:w-[217px] h-[31px] flex flex-row items-center xl:block shrink-0">
            <span className="font-sans font-medium text-[24px] leading-[31px] tracking-[0.48px] text-[#F76A00] xl:absolute xl:left-0 xl:top-0 xl:w-[27px] xl:h-[31px] flex items-center">
              01
            </span>
            <h3 className="font-heading font-semibold text-[24px] leading-[21px] tracking-[-0.4px] text-[#0D0D0D] ml-6 xl:ml-0 xl:absolute xl:left-[100px] xl:top-[5px] xl:w-[117px] xl:h-[21px] flex items-center">
              Evaluation
            </h3>
          </div>
          <p className="text-[#333130] font-sans font-normal text-[16px] sm:text-[18px] leading-[25px] w-full xl:w-[678px] xl:h-[100px] flex items-center">
            Begin with a no-cost consultation with our Business Development Executive and Field Application Scientists. We guide you through a structured design process to define the precise specifications, functionality, and performance targets for your ideal TruCyte.
          </p>
        </div>
        <div
          className="w-full border-b border-[#E4E3E0] flex flex-col xl:flex-row justify-between items-start gap-4 xl:gap-0"
          style={{
            padding: "24px 0px",
            boxSizing: "border-box",
          }}
        >
          <div className="relative w-full xl:w-[264px] h-[56px] flex flex-row items-start xl:block shrink-0">
            <span className="font-sans font-medium text-[24px] leading-[31px] tracking-[0.48px] text-[#F76A00] xl:absolute xl:left-0 xl:top-[4px] xl:w-[32px] xl:h-[31px] flex items-center mt-1 xl:mt-0">
              02
            </span>
            <h3 className="font-heading font-semibold text-[24px] leading-[28px] tracking-[-0.4px] text-[#0D0D0D] ml-6 xl:ml-0 xl:absolute xl:left-[100px] xl:top-0 xl:w-[164px] xl:h-[56px] flex items-center">
              Feasibility & Customization
            </h3>
          </div>
          <p className="text-[#333130] font-sans font-normal text-[16px] sm:text-[18px] leading-[25px] w-full xl:w-[678px] xl:h-[100px] flex items-center">
            Once you commit to proceed, our R&D team assesses feasibility, maps decision-gating milestones, and delivers objective data along with a complete risk assessment, cost estimate, and timeline for development. You'll enter the Scale-Up phase fully prepared.
          </p>
        </div>
        <div
          className="w-full border-b border-[#E4E3E0] flex flex-col xl:flex-row justify-between items-start gap-4 xl:gap-0"
          style={{
            padding: "36px 0px",
            boxSizing: "border-box",
          }}
        >
          <div className="relative w-full xl:w-[231px] h-[56px] flex flex-row items-start xl:block shrink-0">
            <span className="font-sans font-medium text-[24px] leading-[31px] tracking-[0.48px] text-[#F76A00] xl:absolute xl:left-0 xl:top-0 xl:w-[32px] xl:h-[31px] flex items-center mt-1 xl:mt-0">
              03
            </span>
            <h3 className="font-heading font-semibold text-[24px] leading-[28px] tracking-[-0.4px] text-[#0D0D0D] ml-[68px] xl:ml-0 xl:absolute xl:left-[100px] xl:top-0 xl:w-[131px] xl:h-[56px] flex items-center">
              Scale-Up & Validation
            </h3>
          </div>
          <p className="text-[#333130] font-sans font-normal text-[16px] sm:text-[18px] leading-[25px] w-full xl:w-[678px] xl:h-[75px] flex items-center">
            Rigorous verification and validation processes establish the foundation for successful adoption. Dedicated Field Application Support ensures a smooth, confident transition to large-scale production.
          </p>
        </div>
        <div
          className="w-full flex flex-col xl:flex-row justify-between items-start gap-4 xl:gap-0"
          style={{
            padding: "35px 0px",
            boxSizing: "border-box",
          }}
        >
          <div className="relative w-full xl:w-[227px] h-[30.61px] flex flex-row items-center xl:block shrink-0">
            <span className="font-sans font-medium text-[24px] leading-[31px] tracking-[0.48px] text-[#F76A00] xl:absolute xl:left-0 xl:top-0 xl:w-[32px] xl:h-[30.61px] flex items-center">
              04
            </span>
            <h3 className="font-heading font-semibold text-[24px] leading-[21px] tracking-[-0.4px] text-[#0D0D0D] ml-[68px] xl:ml-0 xl:absolute xl:left-[100px] xl:top-0 xl:w-[127px] xl:h-[20.73px] flex items-center">
              Production
            </h3>
          </div>
          <p className="text-[#333130] font-sans font-normal text-[16px] sm:text-[18px] leading-[25px] w-full xl:w-[688.02px] xl:h-[68px] flex items-center">
            Production scales as your needs grow. Lot sizes are adjusted to match demand, inventory replenishment intervals are scheduled in advance, and ongoing training and on-site support remain available throughout your deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
