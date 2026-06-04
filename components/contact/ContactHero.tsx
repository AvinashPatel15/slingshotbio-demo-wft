import React from "react";
import Image from "next/image";
import { TelephoneIcon, ScheduleCallIcon } from "../ui/icons";

export function ContactHero() {
  return (
    <section className="relative bg-[#0d0c0c] pt-[150px] pb-16 md:pt-[100px] md:pb-20 lg:pb-24 overflow-hidden border-b border-white/5">
      {/* Absolute Background Image representing custom-hero.png */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/custom-hero.png"
          alt="Starry background with glowing cell mimic globe"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center opacity-85"
        />
      </div>

      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 max-w-[1280px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          {/* Left Copy block */}
          <div className="max-w-[700px] text-left">
            <h1 className="text-[38px] sm:text-[46px] md:text-[72px] font-semibold md:leading-[72px] leading-[46px] tracking-tight text-white font-heading mb-6">
              <span className="text-[#f76a00]">Get Answers</span> From
              <br />
              Those Who Built It
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#C6C3C0] leading-[28px] max-w-[560px]">
              Every inquiry is personally handled by a Field Application Scientist with domain expertise.
            </p>
          </div>

          {/* Right speaking directly dark card */}
          <div className="w-full lg:w-auto shrink-0 relative z-20">
            <div className="bg-[#121110] border border-white/[0.08] backdrop-blur-[12px] rounded-[18px] w-full md:w-[256px] mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col">
              {/* Main Padded Content */}
              <div className="p-6 sm:p-7 flex flex-col items-center">
                <h3 className="text-white text-center text-[16px] font-bold mb-6 tracking-tight leading-[16px] font-heading">
                  Prefer To Speak Directly?
                </h3>

                <div className="flex flex-col gap-3.5 w-full">
                  <a
                    href="tel:+15107706806"
                    className="flex items-center font-heading justify-center gap-2.5 w-full h-[48px] rounded-full !bg-[#E8610A] px-5 font-semibold !text-white shadow-[0_0_24px_rgba(232,97,10,0.25)] hover:shadow-[0_0_28px_rgba(232,97,10,0.35)] transition-all duration-300 text-[15px] cursor-pointer text-nowrap"
                  >
                    <TelephoneIcon />
                    +1 (510) 770-6806
                  </a>

                  <div
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.preventDefault();
                      const formSection = document.getElementById("how-can-we-help-section");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        const formSection = document.getElementById("how-can-we-help-section");
                        if (formSection) {
                          formSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className="flex items-center font-heading justify-center gap-2.5 w-full h-[48px] rounded-full border border-white bg-transparent px-5 font-semibold text-white hover:bg-white/5 hover:border-white transition-all duration-300 text-[15px] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#f76a00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121110]"
                  >
                    <ScheduleCallIcon />
                    Schedule a Call
                  </div>
                </div>

                {/* Availability Indicator */}
                <div className="mt-5 flex items-center justify-center gap-2 text-[#00A727] text-[12px] font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 bg-[#00A727] rounded-full animate-pulse shrink-0" />
                  Currently Available
                </div>
              </div>

              {/* Footer Section */}
              <div className="border-t border-white/[0.08] bg-[#090908] py-4 text-center">
                <div className="text-[#C6C3C0] text-[12px] font-normal tracking-wide">
                  Mon&ndash;Fri &middot; 8AM &ndash; 6PM PT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

