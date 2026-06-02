"use client";

import React from "react";
import Link from "next/link";

export default function TryItOutCta() {
  return (
    <section className="bg-[#0c0c0b] text-white py-20 md:py-32 relative overflow-hidden border-t border-white/5 mb-8">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] bg-gradient-radial from-orange-500/[0.04] to-transparent rounded-full blur-3xl pointer-events-none z-1"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center select-text">
        <div className="max-w-[538px] mx-auto flex flex-col items-center">
          {/* Main Title */}
          <h2 className="font-heading font-bold text-white leading-[56px] tracking-[-0.02em] text-[36px] sm:text-4xl md:text-[48px] mb-6 animate-fade-up">
            Try It Out
          </h2>

          {/* Subtext */}
          <p className="text-[#C6C3C0] font-sans text-sm sm:text-base md:text-[20px] leading-[24px] md:mb-12 mb-6 animate-fade-up">
            The fastest way to find out whether this changes anything for you is
            to run it next to whatever you&apos;re using now.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up-delay-1 w-full">
            <Link
              href="/sample-request"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#f76a00] px-6 py-3.5 font-medium text-base text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 active:scale-[0.98] shadow-lg shadow-orange-500/10"
            >
              Request Free Sample
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-8 py-3.5 font-medium text-base !text-[#0c0c0b] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Talk To Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
