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
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#f76a00] hover:bg-[#f86902] px-8 py-4 font-medium text-base text-white shadow-[0_4px_14px_rgba(247,106,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Build What Assay Needs
            </Link>
          </div>

          {/* Right Column: Premium Stats Card Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full z-10 animate-fade-up-delay-1">
            <div className="w-full max-w-[450px] rounded-[20px] border border-[#262422] shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Row 1 */}
              <div className="p-6 sm:p-8 border-b border-[#262422]">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="text-[24px] font-heading font-bold text-[#f76a00] tracking-[-1.28px] leading-[28px] shrink-0">
                    2–4 weeks
                  </span>
                  <span className="text-white font-heading font-semibold text-xs xs:text-sm sm:text-[15px] md:text-base leading-[20px] text-right">
                    Engineering Turnaround
                  </span>
                </div>
                <p className="text-neutral-400 font-sans text-xs leading-[18px]">
                  Skip months of donor sourcing and get assay-ready mimics in
                  weeks.
                </p>
              </div>

              {/* Row 2 */}
              <div className="p-6 sm:p-8 border-b border-[#262422]">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="text-[24px] font-heading font-bold text-[#f76a00] tracking-[-1.28px] leading-[28px] shrink-0">
                    3 years
                  </span>
                  <span className="text-white font-heading font-semibold text-xs xs:text-sm sm:text-[15px] md:text-base leading-[20px] text-right">
                    Shelf Life, Same Lot
                  </span>
                </div>
                <p className="text-neutral-400 font-sans text-xs leading-[18px]">
                  Reliable performance across studies, instruments, and time.
                </p>
              </div>

              {/* Row 3 */}
              <div className="p-6 sm:p-8">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="text-[24px] font-heading font-bold text-[#f76a00] tracking-[-1.28px] leading-[28px] shrink-0">
                    ISO
                  </span>
                  <span className="text-white font-heading font-semibold text-xs xs:text-sm sm:text-[15px] md:text-base leading-[20px] text-right">
                    9001:2015 Certified
                  </span>
                </div>
                <p className="text-neutral-400 font-sans text-xs leading-[18px]">
                  Manufactured & certified under ISO 9001:2015 quality
                  standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
