"use client";

import React, { useState, useEffect } from "react";

export default function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // 1. Scroll listener to show the bar after scrolling past the Hero
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 2. IntersectionObserver to hide the bar when the actual form section is in viewport
    const formElement = document.getElementById("evaluation-kit-form-section");
    let observer: IntersectionObserver | null = null;

    if (formElement) {
      observer = new IntersectionObserver(
        ([entry]) => {
          // If the form is visible in the viewport, hide the sticky bar
          if (entry.isIntersecting) {
            setIsVisible(false);
          } else {
            // Only show if we are also scrolled past the Hero
            if (window.scrollY > 450) {
              setIsVisible(true);
            }
          }
        },
        {
          root: null,
          threshold: 0.1, // trigger when at least 10% of the form is visible
        }
      );
      observer.observe(formElement);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer && formElement) {
        observer.unobserve(formElement);
      }
    };
  }, []);

  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formSection = document.getElementById("evaluation-kit-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isClosed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-t border-[#E4E1DC] shadow-[0_-8px_30px_rgba(0,0,0,0.05)] transition-all duration-500 ease-in-out py-4 sm:py-5 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      {/* Left Column: Premium Text */}
      <div className="text-center sm:text-left">
        <p className="font-heading text-[16px] text-[#4e4a47] font-semibold leading-normal">
          Ready to eliminate variability?{" "}
          <span className="text-[#F76A00] font-medium">
            Your evaluation kit is free.
          </span>
        </p>
      </div>

      {/* Right Column: Actions and Close button */}
      <div className="flex flex-row items-center p-0 gap-[10px] w-[363.6px] h-[40.39px] flex-none order-1 grow-0 shrink-0">
        {/* Close Icon button */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsClosed(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsClosed(true);
            }
          }}
          className="flex flex-col justify-center items-center p-[4.8px] w-[20.6px] h-[23.6px] flex-none order-0 grow-0 shrink-0 cursor-pointer text-[#9e9e9e] hover:text-[#0d0c0c] transition-colors outline-none focus-visible:ring-1 focus-visible:ring-[#f76a00] rounded"
          aria-label="Close promotion bar"
        >
          <span className="w-[11px] h-[14px] font-['Zapf_Dingbats'] font-normal text-[14.4px] leading-[14px] flex items-center justify-center text-center flex-none order-0 grow-0 shrink-0">
            ✕
          </span>
        </div>

        {/* Configure Button */}
        <a
          href="#evaluation-kit-form-section"
          onClick={handleScrollToForm}
          className="box-border flex flex-row items-center pt-[8px] px-[18px] pb-[9.39px] w-[166px] h-[40.39px] border border-[#dedcda] rounded-full flex-none order-1 grow-0 shrink-0 bg-white transition-all duration-200 cursor-pointer active:scale-98 hover:border-[#0d0c0c]"
        >
          <span className="w-[128px] h-[21px] font-sans font-medium text-[15px] leading-[20px] text-[#0d0c0c] flex items-center flex-none order-0 grow-0 shrink-0">
            Configure Own Kit
          </span>
        </a>

        {/* Request Button */}
        <a
          href="#evaluation-kit-form-section"
          onClick={handleScrollToForm}
          className="flex flex-row items-center pt-[9px] px-[20px] pb-[10.39px] w-[157px] h-[40.39px] bg-[#f76a00] rounded-full flex-none order-2 grow-0 shrink-0 transition-all duration-200 cursor-pointer active:scale-98 hover:bg-[#f76a00]/90 shadow-[0_4px_12px_rgba(247,106,0,0.15)]"
        >
          <span className="h-[21px] font-sans font-semibold text-[15px] leading-[20px] tracking-[-0.12px] text-white flex items-center flex-none order-0 grow-0 shrink-0">
            Request Free Kit
          </span>
        </a>
      </div>
    </div>
  );
}
