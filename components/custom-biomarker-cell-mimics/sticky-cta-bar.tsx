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
      <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end">
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
          className="text-[#9E9E9E] hover:text-[#0d0c0c] transition-colors p-1.5 cursor-pointer text-2xl font-light shrink-0 leading-none mr-1 outline-none focus-visible:ring-1 focus-visible:ring-[#f76a00] rounded"
          aria-label="Close promotion bar"
        >
          ×
        </div>

        {/* Configure Button */}
        <a
          href="#evaluation-kit-form-section"
          onClick={handleScrollToForm}
          className="flex-1 sm:flex-none inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#DEDCDA] bg-white px-5 sm:px-6 py-2.5 font-medium text-[15px] text-[#0d0c0c] transition-all duration-200 cursor-pointer text-center whitespace-nowrap active:scale-98"
        >
          Configure Own Kit
        </a>

        {/* Request Button */}
        <a
          href="#evaluation-kit-form-section"
          onClick={handleScrollToForm}
          className="flex-1 sm:flex-none inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#F76A00] px-5 sm:px-6 py-2.5 font-medium text-[15px] !text-white transition-all duration-200 cursor-pointer text-center whitespace-nowrap active:scale-98 shadow-[0_4px_12px_rgba(247,106,0,0.15)]"
        >
          Request Free Kit
        </a>
      </div>
    </div>
  );
}
