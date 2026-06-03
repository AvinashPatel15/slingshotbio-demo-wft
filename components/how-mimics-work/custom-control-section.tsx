"use client";

import React from "react";
import Link from "next/link";

export function CustomControlSection() {
  return (
    <section className="bg-[#0d0c0c] text-white py-20 md:py-28 lg:py-32 relative overflow-hidden border-t border-white/5">
      <div
        className="absolute bottom-0 right-0 w-[35vw] h-[35vw] max-w-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Description & Button */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 animate-fade-up">
            <h2 className="font-heading font-semibold text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] md:leading-[56px] leading-[36px] tracking-[-1.8px] text-white mb-6">
              Custom Control In Weeks, <br />
              Not Months
            </h2>

            <p className="text-neutral-400 font-sans text-sm sm:text-[18px] leading-[28px] max-w-[540px] mb-10">
              Sourcing donor cells for a custom QC standard takes months.
              Sourcing, qualifying, and re-qualifying every time the donor pool
              turns over takes longer. We engineer custom mimics in weeks,
              manufactured to your specification under ISO 9001:2015, same
              scatter, same fluorescence, same antigen density, every lot, for
              up to three years.
            </p>

            <Link
              href="/sample-request"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#f76a00] hover:bg-[#f86902] px-4 py-3.5 font-medium text-base text-white shadow-[0_4px_14px_rgba(247,106,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Build What Assay Needs
            </Link>
          </div>

          {/* Right Column: Premium Stats Card Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full z-10 animate-fade-up-delay-1">
            <div className="box-border flex flex-col justify-between items-start p-0 mx-auto select-none overflow-hidden w-full max-w-[371px] h-[412px] border-[0.8px] border-[#3D3D3D] rounded-[14px] bg-[#0d0c0c] flex-none order-1 grow-0">

              <div className="flex flex-col justify-center items-center mx-auto w-full py-[28px] px-[24px] max-w-[369.4px] h-[136.8px] border-b-[0.8px] border-[#3D3D3D] flex-none order-0 self-stretch grow">

                <div className="flex flex-col items-start p-0 gap-[12px] w-full max-w-[321.4px] h-[76px] flex-none order-0 self-stretch grow-0">

                  <div className="flex flex-col justify-center items-center p-0 w-full max-w-[321.4px] h-[28px] flex-none order-0 self-stretch grow-0">

                    <div className="flex flex-row justify-between items-center p-0 w-full max-w-[321.4px] h-[28px] flex-none order-0 self-stretch grow-0">

                      <div className="flex flex-col items-start p-0 w-[117px] max-w-full h-[28px] flex-none order-0 grow-0">
                        <span className="font-heading font-bold text-[#F76A00] w-full h-[28px] text-[24px] leading-[28px] flex items-center tracking-[-1.28px] flex-none order-0 grow-0">
                          2–4 weeks
                        </span>
                      </div>

                      <span className="font-heading font-bold text-white capitalize w-[184px] max-w-full h-[20px] text-[16px] leading-[20px] flex items-end justify-end text-right flex-none order-1 grow-0">
                        Engineering turnaround
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <span className="font-heading font-medium text-[#C6C3C0] w-full max-w-[321.4px] h-[36px] text-[12px] leading-[18px] flex items-center flex-none order-1 self-stretch grow-0">
                    Skip months of donor sourcing and get assay-ready mimics in weeks.
                  </span>
                </div>

                {/* Hidden Container */}
                <div className="hidden flex-col items-start pb-[0.565px] w-[321px] h-[40.56px] flex-none order-2 self-stretch grow-0">
                  <span className="font-sans font-normal w-[321px] h-[40px] text-[14px] leading-[20px] flex items-center text-[rgba(255,255,255,0.28)] flex-none order-0 self-stretch grow-0">
                    From specification to delivery. Donor cell sourcing takes 3–6 months.
                  </span>
                </div>
              </div>


              <div className="flex flex-col justify-center items-center mx-auto w-full py-[28px] px-[24px] max-w-[369.4px] h-[136.8px] border-b-[0.8px] border-[#3D3D3D] flex-none order-1 self-stretch grow">

                <div className="flex flex-col items-start p-0 gap-[12px] w-full max-w-[321.4px] h-[76px] flex-none order-0 self-stretch grow-0">

                  <div className="flex flex-col justify-center items-center p-0 w-full max-w-[321.4px] h-[28px] flex-none order-0 self-stretch grow-0">

                    <div className="flex flex-row justify-between items-center p-0 w-full max-w-[321.4px] h-[28px] flex-none order-0 self-stretch grow-0">

                      <div className="flex flex-col items-start p-0 w-[75px] max-w-full h-[28px] flex-none order-0 grow-0">
                        <span className="font-heading font-bold text-[#F76A00] w-full h-[28px] text-[24px] leading-[28px] flex items-center tracking-[-1.28px] flex-none order-0 grow-0">
                          3 years
                        </span>
                      </div>

                      <span className="font-heading font-bold text-white capitalize w-[153px] max-w-full h-[20px] text-[16px] leading-[20px] flex items-center justify-end text-right flex-none order-1 grow-0">
                        Shelf Life, Same Lot
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <span className="font-heading font-medium text-[#C6C3C0] w-full max-w-[321.4px] h-[36px] text-[12px] leading-[18px] flex items-center flex-none order-1 self-stretch grow-0">
                    Reliable performance across studies, instruments, and time.
                  </span>
                </div>

                {/* Hidden Container */}
                <div className="hidden flex-col items-start pb-[0.565px] w-[321px] h-[40.56px] flex-none order-2 self-stretch grow-0">
                  <span className="font-sans font-normal w-[321px] h-[40px] text-[14px] leading-[20px] flex items-center text-[rgba(255,255,255,0.28)] flex-none order-0 self-stretch grow-0">
                    From specification to delivery. Donor cell sourcing takes 3–6 months.
                  </span>
                </div>
              </div>


              <div className="flex flex-col justify-center items-center mx-auto w-full py-[28px] px-[24px] max-w-[369.4px] h-[136.8px] flex-none order-2 self-stretch grow">

                <div className="flex flex-col items-start p-0 gap-[12px] w-full max-w-[321.4px] h-[76px] flex-none order-0 self-stretch grow-0">

                  <div className="flex flex-col justify-center items-center p-0 w-full max-w-[321.4px] h-[28px] flex-none order-0 self-stretch grow-0">
                    <div className="flex flex-row justify-between items-center p-0 w-full max-w-[321.4px] h-[28px] flex-none order-0 self-stretch grow-0">

                      <div className="flex flex-col items-start p-0 w-[41px] max-w-full h-[28px] flex-none order-0 grow-0">
                        <span className="font-heading font-bold text-[#F76A00] w-full h-[28px] text-[24px] leading-[28px] flex items-center tracking-[-1.28px] flex-none order-0 grow-0">
                          ISO
                        </span>
                      </div>

                      <span className="font-heading font-bold text-white capitalize w-[155px] max-w-full h-[20px] text-[16px] leading-[20px] flex items-center justify-end text-right flex-none order-1 grow-0">
                        9001:2015 Certified
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <span className="font-heading font-medium text-[#C6C3C0] w-full max-w-[321.4px] h-[36px] text-[12px] leading-[18px] flex items-center flex-none order-1 self-stretch grow-0">
                    Manufactured & certified under ISO 9001:2015 quality standards.
                  </span>
                </div>

                {/* Hidden Container */}
                <div className="hidden flex-col items-start pb-[0.565px] w-[321px] h-[40.56px] flex-none order-2 self-stretch grow-0">
                  <span className="font-sans font-normal w-[321px] h-[40px] text-[14px] leading-[20px] flex items-center text-[rgba(255,255,255,0.28)] flex-none order-0 self-stretch grow-0">
                    From specification to delivery. Donor cell sourcing takes 3–6 months.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
