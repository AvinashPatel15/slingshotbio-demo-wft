"use client";

import React, { useState, useRef, useEffect } from "react";

type TabData = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  svgIcon: React.ReactNode;
};

const tabs: TabData[] = [
  {
    id: "assay",
    number: "01",
    title: "Assay Development",
    eyebrow: "APPLICATION 01",
    description: "Engineer custom controls for biomarker assays, immune monitoring, and novel endpoints. Standardize assays from translational research through pivotal trials, reduce operator variability, and enable clean transfers between research and GLP/GCP environments.",
    svgIcon: (
      <svg width="166" height="166" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M152.88 42.6543V123.345L83 163.689L13.1201 123.345V42.6543L83 2.30957L152.88 42.6543Z" stroke="#DDDBDA" stroke-width="4" />
        <circle cx="83.0011" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="68.2756" cy="65.5974" r="4.01613" fill="#FFDCC2" />
        <circle cx="68.2756" cy="97.7256" r="4.01613" fill="#FFDCC2" />
        <circle cx="97.7255" cy="97.7256" r="4.01613" fill="#FFDCC2" />
        <circle cx="97.7255" cy="65.5974" r="4.01613" fill="#FFDCC2" />
        <circle cx="50.873" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="107.096" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="58.9026" r="8.03226" fill="#FFDCC2" />
        <circle cx="50.873" cy="58.9026" r="8.03226" fill="#FFDCC2" />
        <circle cx="50.873" cy="107.096" r="8.03226" fill="#FFDCC2" />
        <circle cx="83.0011" cy="50.8714" r="8.03226" fill="#FFDCC2" />
        <circle cx="83.0011" cy="115.129" r="8.03226" fill="#FFDCC2" />
      </svg>

    ),
  },
  {
    id: "diagnostics",
    number: "02",
    title: "Laboratory Diagnostics",
    eyebrow: "APPLICATION 02",
    description: "Provide robust, shelf-stable cellular controls for clinical laboratory diagnostics. Calibrate flow cytometers across reference laboratories, manage instrument drift over multi-year clinical trials, and eliminate biological PBMC variability in diagnostic assays.",
    svgIcon: (
      <svg width="166" height="166" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M152.88 42.6543V123.345L83 163.689L13.1201 123.345V42.6543L83 2.30957L152.88 42.6543Z" stroke="#DDDBDA" stroke-width="4" />
        <circle cx="83.0011" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="68.2756" cy="65.5974" r="4.01613" fill="#FFDCC2" />
        <circle cx="68.2756" cy="97.7256" r="4.01613" fill="#FFDCC2" />
        <circle cx="97.7255" cy="97.7256" r="4.01613" fill="#FFDCC2" />
        <circle cx="97.7255" cy="65.5974" r="4.01613" fill="#FFDCC2" />
        <circle cx="50.873" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="107.096" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="58.9026" r="8.03226" fill="#FFDCC2" />
        <circle cx="50.873" cy="58.9026" r="8.03226" fill="#FFDCC2" />
        <circle cx="50.873" cy="107.096" r="8.03226" fill="#FFDCC2" />
        <circle cx="83.0011" cy="50.8714" r="8.03226" fill="#FFDCC2" />
        <circle cx="83.0011" cy="115.129" r="8.03226" fill="#FFDCC2" />
      </svg>

    ),
  },
  {
    id: "adoptive",
    number: "03",
    title: "Adoptive Cell Therapy",
    eyebrow: "APPLICATION 03",
    description: "Standardize CAR-T, TCR, and TIL therapeutic workflow controls. Monitor CD3, CD4, CD8, and custom biomarker expression levels with quantitative antigen density controls. Verify cell enumeration accuracy and viability throughout development and manufacturing.",
    svgIcon: (
      <svg width="166" height="166" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M152.88 42.6543V123.345L83 163.689L13.1201 123.345V42.6543L83 2.30957L152.88 42.6543Z" stroke="#DDDBDA" stroke-width="4" />
        <circle cx="83.0011" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="68.2756" cy="65.5974" r="4.01613" fill="#FFDCC2" />
        <circle cx="68.2756" cy="97.7256" r="4.01613" fill="#FFDCC2" />
        <circle cx="97.7255" cy="97.7256" r="4.01613" fill="#FFDCC2" />
        <circle cx="97.7255" cy="65.5974" r="4.01613" fill="#FFDCC2" />
        <circle cx="50.873" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="107.096" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="58.9026" r="8.03226" fill="#FFDCC2" />
        <circle cx="50.873" cy="58.9026" r="8.03226" fill="#FFDCC2" />
        <circle cx="50.873" cy="107.096" r="8.03226" fill="#FFDCC2" />
        <circle cx="83.0011" cy="50.8714" r="8.03226" fill="#FFDCC2" />
        <circle cx="83.0011" cy="115.129" r="8.03226" fill="#FFDCC2" />
      </svg>

    ),
  },
  {
    id: "drug",
    number: "04",
    title: "Drug Development",
    eyebrow: "APPLICATION 04",
    description: "Accelerate high-throughput drug screening and pharmacodynamics studies. Utilize synthetic mimics to model target receptor saturation, benchmark monoclonal antibody bindings, and maintain absolute stability across screening campaigns.",
    svgIcon: (
      <svg width="166" height="166" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M152.88 42.6543V123.345L83 163.689L13.1201 123.345V42.6543L83 2.30957L152.88 42.6543Z" stroke="#DDDBDA" stroke-width="4" />
        <circle cx="83.0011" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="68.2756" cy="65.5974" r="4.01613" fill="#FFDCC2" />
        <circle cx="68.2756" cy="97.7256" r="4.01613" fill="#FFDCC2" />
        <circle cx="97.7255" cy="97.7256" r="4.01613" fill="#FFDCC2" />
        <circle cx="97.7255" cy="65.5974" r="4.01613" fill="#FFDCC2" />
        <circle cx="50.873" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="107.096" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="58.9026" r="8.03226" fill="#FFDCC2" />
        <circle cx="50.873" cy="58.9026" r="8.03226" fill="#FFDCC2" />
        <circle cx="50.873" cy="107.096" r="8.03226" fill="#FFDCC2" />
        <circle cx="83.0011" cy="50.8714" r="8.03226" fill="#FFDCC2" />
        <circle cx="83.0011" cy="115.129" r="8.03226" fill="#FFDCC2" />
      </svg>

    ),
  },
  {
    id: "instrument",
    number: "05",
    title: "Instrument Performance",
    eyebrow: "APPLICATION 05",
    description: "Harmonize and standardize flow cytometers across global research networks. Match biological cell scattering index and size parameters, verify laser alignment, validate compensation/unmixing protocols, and run daily QA/QC with absolute reproducibility.",
    svgIcon: (
      <svg width="166" height="166" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M152.88 42.6543V123.345L83 163.689L13.1201 123.345V42.6543L83 2.30957L152.88 42.6543Z" stroke="#DDDBDA" stroke-width="4" />
        <circle cx="83.0011" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="68.2756" cy="65.5974" r="4.01613" fill="#FFDCC2" />
        <circle cx="68.2756" cy="97.7256" r="4.01613" fill="#FFDCC2" />
        <circle cx="97.7255" cy="97.7256" r="4.01613" fill="#FFDCC2" />
        <circle cx="97.7255" cy="65.5974" r="4.01613" fill="#FFDCC2" />
        <circle cx="50.873" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="83.001" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="107.096" r="8.03226" fill="#FFDCC2" />
        <circle cx="115.129" cy="58.9026" r="8.03226" fill="#FFDCC2" />
        <circle cx="50.873" cy="58.9026" r="8.03226" fill="#FFDCC2" />
        <circle cx="50.873" cy="107.096" r="8.03226" fill="#FFDCC2" />
        <circle cx="83.0011" cy="50.8714" r="8.03226" fill="#FFDCC2" />
        <circle cx="83.0011" cy="115.129" r="8.03226" fill="#FFDCC2" />
      </svg>

    ),
  },
];

export function WhyReplaceCellsSection() {
  const [activeTab, setActiveTab] = useState<string>("assay");
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  // Check scroll positions to show/hide dynamic gradient fades
  const checkScroll = () => {
    const container = tabsContainerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftFade(scrollLeft > 5);
    setShowRightFade(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    const container = tabsContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      // Run once initially and on resize
      checkScroll();
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);

    // Auto-scroll the clicked tab into view on mobile/tablet devices
    setTimeout(() => {
      const container = tabsContainerRef.current;
      if (!container) return;
      const activeButton = container.querySelector(`[data-tab-id="${tabId}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }, 50);
  };

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="bg-[#faf9f6] py-20 md:py-28 lg:py-32 border-t border-[#ded9d4]/60 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">

        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[56px] tracking-[-1.35px] text-[#0d0c0c] animate-fade-up">
              Why Cell Mimics <br className="hidden lg:inline" /> Replace Cells
            </h2>
          </div>

          {/* Right Column: Three Paragraphs of Body Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#7B7B7B] font-sans text-sm leading-[24px] max-w-[680px] animate-fade-up-delay-1">
            <p>
              Through the intersection of biochemistry, polymer chemistry and high-precision manufacturing, we have
              created synthetic cell mimics that behave similarly to real cells. The Slingshot platform is the world&apos;s
              first on demand, synthetic cell design platform to address the industry&apos;s reliance on and limitations
              around biologically-derived cellular controls.
            </p>
            <p>
              This breakthrough technology creates synthetic cell mimics that match the optical, fluorescence and
              biochemical features of biological cells. The result is the ideal cell control, achieved without sacrificing
              performance or consistency.
            </p>
            <p>
              Synthetic cell mimics are shelf stable and can be created on-demand and at scale. Slingshot&apos;s
              technology decreases costs, shortens development timelines and increases accessibility to cell-like
              controls. Our cutting-edge technology platform can be used in a range of applications including:
            </p>
          </div>
        </div>

        {/* Unified Tab Component Container */}
        <div className="w-full border border-[#ded9d4] bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(31,24,18,0.02)] animate-fade-up-delay-2">

          {/* Relative wrapper for dynamic scroll fade indicators */}
          <div className="relative">
            {/* Left Dynamic Scroll Fade */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#f7f6f5] to-transparent pointer-events-none z-10 transition-opacity duration-300 lg:hidden ${showLeftFade ? "opacity-100" : "opacity-0"
                }`}
            />

            {/* Right Dynamic Scroll Fade */}
            <div
              className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#f7f6f5] to-transparent pointer-events-none z-10 transition-opacity duration-300 lg:hidden ${showRightFade ? "opacity-100" : "opacity-0"
                }`}
            />

            {/* Tab Headers Row */}
            <div
              ref={tabsContainerRef}
              className="flex overflow-x-auto lg:grid lg:grid-cols-5 border-b border-[#ded9d4] bg-[#f7f6f5] scrollbar-none [scrollbar-width:none]"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <div
                    key={tab.id}
                    role="button"
                    tabIndex={0}
                    data-tab-id={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleTabClick(tab.id);
                      }
                    }}
                    className={`flex-grow shrink-0 lg:shrink flex flex-col items-start p-5 border-r border-[#ded9d4] last:border-r-0 text-left min-w-[200px] lg:min-w-0 transition-all cursor-pointer relative ${isActive
                      ? "bg-white text-[#0d0c0c]"
                      : "bg-[#f7f6f5] hover:bg-[#ebeae8] text-neutral-500"
                      }`}
                  >
                    <span className={`text-[12px] font-bold tracking-[1.2px] leading-[16px] mb-1.5 uppercase ${isActive ? "text-[#f76a00]" : "text-neutral-400"
                      }`}>
                      {tab.number}
                    </span>
                    <span className={`text-[14px] font-heading  leading-[16px] ${isActive ? "text-[#0d0c0c] font-bold" : "text-neutral-600 font-medium"
                      }`}>
                      {tab.title}
                    </span>

                    {/* Bottom Active Orange Underline */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f76a00]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tab Active Content Area */}
          <div className="p-8 sm:p-12 md:p-14 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

              {/* Left Content Column */}
              <div className="md:col-span-7 flex flex-col items-start">
                <span className="text-[12px] font-bold text-[#f76a00] uppercase tracking-[1.26px] leading-[14px] mb-3">
                  {currentTab.eyebrow}
                </span>

                <h3 className="font-heading font-bold text-[26px] sm:text-[28px] text-[#0d0c0c] leading-[32px] tracking-[-0.7px] mb-5">
                  {currentTab.title}
                </h3>

                <p className="text-[#555350] font-sans text-sm leading-[24px]">
                  {currentTab.description}
                </p>
              </div>

              {/* Right Illustration Column */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                {currentTab.svgIcon}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
