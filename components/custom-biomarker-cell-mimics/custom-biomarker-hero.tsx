"use client";

import React from "react";

export default function CustomBiomarkerHero() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formSection = document.getElementById("evaluation-kit-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full bg-[#000000] bg-cover bg-center flex flex-col items-center justify-center py-12 px-6 md:px-12 xl:p-0 xl:h-[560px]  xl:mx-auto"
      style={{
        backgroundImage: "url('/custom-hero.png')",
      }}
    >
      <div className="frame h-full relative">
        <div className="w-full max-w-[643px] flex flex-col gap-8 xl:gap-0 xl:absolute xl:left-0 xl:top-[114.11px] xl:w-[643px] xl:h-[332px] xl:justify-between xl:items-start">
          <div className="w-full flex flex-col gap-8 xl:gap-[32px] xl:w-[643px] xl:h-[232px] xl:justify-between xl:items-start">
            <h1 className="text-white font-heading font-semibold flex items-center xl:w-[643px] xl:h-[144px] text-[36px] sm:text-[48px] xl:text-[72px] leading-[1.1] xl:leading-[72px] tracking-[-1px] xl:tracking-[-1.8px]">
              Custom TruCytes® Biomarker Controls
            </h1>
            <p className="text-[#C6C3C0] font-sans flex items-center xl:w-[643px] xl:h-[56px] text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px]">
              Precision-engineered cell mimics built to your exact specifications—for rare indications, novel targets, and complex multi-biomarker panels.
            </p>
          </div>
          <div className="flex flex-row items-center xl:w-[173px] xl:h-[52px]">
            <a
              href="#evaluation-kit-form-section"
              onClick={scrollToForm}
              className="flex flex-row justify-center items-center bg-[#F76A00] rounded-full shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#ff7b1a] active:scale-95 transition-all duration-200"
              style={{
                padding: "14px 16px",
                gap: "10px",
                width: "173px",
                height: "52px",
              }}
            >
              <span
                className="font-sans font-medium text-[16px] leading-[24px] flex items-center justify-center text-center text-white"
                style={{
                  width: "141px",
                  height: "24px",
                }}
              >
                Request a Meeting
              </span>
            </a>
          </div>
        </div>
        <div
          className="w-full max-w-[371px] mt-8 xl:mt-0 xl:absolute xl:right-0 xl:top-[114.11px] xl:w-[371px] xl:h-[255.2px] flex flex-col items-start bg-[rgba(13,12,12,0.2)] border-[0.8px] border-[#3D3D3D] rounded-[14px]"
          style={{
            boxSizing: "border-box",
            backdropFilter: "blur(5.35px)",
          }}
        >
          <div
            className="flex flex-col justify-center items-center border-b-[0.8px] border-[#3D3D3D]"
            style={{
              padding: "28px 24px",
              width: "100%",
              maxWidth: "369.4px",
              height: "84.8px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex flex-col items-start gap-3 w-full max-w-[321.4px] h-[28px]">
              <div className="flex flex-col justify-center items-center w-full h-[28px]">
                <div className="flex flex-row justify-between items-center w-full h-[28px]">
                  <div
                    className="flex flex-col items-start w-[156px] h-[28px]"
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    <span className="font-heading font-bold text-[24px] leading-[28px] tracking-[-1.28px] text-[#F76A00] flex items-center w-[156px] h-[28px]">
                      ISO 9001:2015
                    </span>
                  </div>
                  <span
                    className="font-heading font-bold text-[16px] leading-[20px] text-white flex items-end capitalize w-[70px] h-[20px]"
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    Certified
                  </span>
                </div>
              </div>
              <div style={{ display: "none" }} className="w-[321px] h-[40.56px]">
                <span className="font-sans font-normal text-[14px] leading-[20px] text-[rgba(255,255,255,0.28)] flex items-center w-[321px] h-[40px]">
                  From specification to delivery. Donor cell sourcing takes 3–6 months.
                </span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center border-b-[0.8px] border-[#3D3D3D]"
            style={{
              padding: "28px 24px",
              width: "100%",
              maxWidth: "369.4px",
              height: "84.8px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex flex-col items-start gap-3 w-full max-w-[321.4px] h-[28px]">
              <div className="flex flex-col justify-center items-center w-full h-[28px]">
                <div className="flex flex-row justify-between items-center w-full h-[28px]">
                  <div
                    className="flex flex-col items-start w-[76px] h-[28px]"
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    <span className="font-heading font-bold text-[24px] leading-[28px] tracking-[-1.28px] text-[#F76A00] flex items-center w-[76px] h-[28px]">
                      &lt;10 CV
                    </span>
                  </div>
                  <span
                    className="font-heading font-bold text-[16px] leading-[20px] text-white flex items-center capitalize w-[89px] h-[20px]"
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    Lot-to-Lot
                  </span>
                </div>
              </div>
              <div style={{ display: "none" }} className="w-[321px] h-[40.56px]">
                <span className="font-sans font-normal text-[14px] leading-[20px] text-[rgba(255,255,255,0.28)] flex items-center w-[321px] h-[40px]">
                  From specification to delivery. Donor cell sourcing takes 3–6 months.
                </span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            style={{
              padding: "28px 24px",
              width: "100%",
              maxWidth: "369.4px",
              height: "84px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex flex-col items-start gap-3 w-full max-w-[321.4px] h-[28px]">
              <div className="flex flex-col justify-center items-center w-full h-[28px]">
                <div className="flex flex-row justify-between items-center w-full h-[28px]">
                  <div
                    className="flex flex-col items-start w-[203px] h-[28px]"
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    <span className="font-heading font-bold text-[24px] leading-[28px] tracking-[-1.28px] text-[#F76A00] flex items-center w-[203px] h-[28px]">
                      Non-Biohazardous
                    </span>
                  </div>
                  <span
                    className="font-heading font-bold text-[16px] leading-[20px] text-white flex items-center capitalize w-[72px] h-[20px]"
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    Materials
                  </span>
                </div>
              </div>
              <div style={{ display: "none" }} className="w-[321px] h-[40.56px]">
                <span className="font-sans font-normal text-[14px] leading-[20px] text-[rgba(255,255,255,0.28)] flex items-center w-[321px] h-[40px]">
                  From specification to delivery. Donor cell sourcing takes 3–6 months.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
