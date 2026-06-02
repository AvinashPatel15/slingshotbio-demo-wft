"use client";

import React from "react";
import Link from "next/link";

export function LetsTalkSection() {
  return (
    <section className="bg-[#0d0c0c] text-white mb-10 py-24 md:py-32 relative overflow-hidden flex flex-col items-center justify-center text-center border-t border-white/5">
      {/* Premium subtle background glow centered behind the heading block */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[65vw] max-w-[720px] bg-gradient-radial from-orange-500/8 via-orange-500/1 to-transparent rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-[1000px] relative z-10 flex flex-col items-center">

        {/* Animated Heading */}
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] md:leading-[56px] tracking-[2.04px] text-white max-w-[860px] mb-4 animate-fade-up">
          What Cell Mimic Do You Need, <br className="hidden sm:inline" />
          Or <span className="text-[#F76A00]">Instrument Calibrate?</span>
        </h2>

        {/* Animated Subheading */}
        <p className="text-[#C6C3C0] font-sans text-sm sm:text-base md:text-[20px] leading-[24px] max-w-[500px] mb-12 animate-fade-up-delay-1">
          We can show you how it&apos;s done.
        </p>

        {/* Let's Talk Pill Button */}
        <div className="animate-fade-up-delay-2">
          <Link
            href="/contact"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#F76A00] px-10 py-4 font-medium text-base leading-[24px] text-white shadow-[inset_0_-1px_0_rgba(255,206,168,0.14),0_8px_20px_rgba(248,100,2,0.25),0_0_0_1px_rgba(248,132,56,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 active:scale-98"
          >
            Let&apos;s Talk
          </Link>
        </div>

      </div>
    </section>
  );
}
