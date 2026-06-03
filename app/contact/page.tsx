"use client";

import { LogoStrip } from "@/components/ui/prototype-logo-strip";
import React, { useState } from "react";
import Image from "next/image";

const concerns = [
  "Evaluation Kit",
  "Technical Support",
  "Partnerships",
  "Pricing",
];

const nextSteps = [
  {
    number: "01",
    title: "Message received",
    copy: "Lands directly with the team - no bots, no ticketing, no auto-routing.",
    label: "Immediate",
    active: true,
  },
  {
    number: "02",
    title: "Scientist takes ownership",
    copy: "A Field Application Scientist with relevant domain expertise is assigned to your inquiry.",
    label: "Within hours",
  },
  {
    number: "03",
    title: "You hear back",
    copy: "A personal, substantive response, not a template. Urgent?",
    label: "Call Us Directly",
    isButton: true,
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getButtonText = () => {
    if (!selectedConcern) return "Select Your Concern";
    if (selectedConcern === "Evaluation Kit") return "Request Evaluation Kit";
    if (selectedConcern === "Technical Support") return "Submit Support Request";
    if (selectedConcern === "Partnerships") return "Contact Partnerships";
    if (selectedConcern === "Pricing") return "Request Pricing Details";
    return "Send Message";
  };

  return (
    <main className="contact-page min-h-screen bg-[#fcfbfa]">

      {/* 1. Dark Full-Width Hero Banner (Now at the top!) */}
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
              <div className="bg-[#121110] border border-white/[0.08] backdrop-blur-[12px] rounded-[18px] w-full max-w-[256px] mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col">

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
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7967 10.7552L13.4172 11.1325C13.4172 11.1325 12.515 12.0296 10.0525 9.58102C7.59002 7.13252 8.49217 6.23549 8.49217 6.23549L8.73117 5.99783C9.32 5.41238 9.3755 4.47244 8.86175 3.78625L7.81097 2.38258C7.17515 1.53328 5.94655 1.42109 5.21779 2.14571L3.90979 3.44628C3.54844 3.80558 3.30629 4.27134 3.33566 4.78803C3.41078 6.10987 4.00884 8.95393 7.34605 12.2722C10.885 15.791 14.2056 15.9308 15.5635 15.8043C15.993 15.7643 16.3665 15.5455 16.6675 15.2462L17.8513 14.0692C18.6504 13.2746 18.4251 11.9124 17.4027 11.3567L15.8106 10.4912C15.1392 10.1263 14.3214 10.2334 13.7967 10.7552Z" fill="white" />
                      </svg>


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
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66699 10.0004C1.66699 6.85771 1.66699 5.28637 2.6433 4.31005C3.61962 3.33374 5.19096 3.33374 8.33366 3.33374H11.667C14.8097 3.33374 16.3811 3.33374 17.3573 4.31005C18.3337 5.28637 18.3337 6.85771 18.3337 10.0004V11.6671C18.3337 14.8097 18.3337 16.3812 17.3573 17.3574C16.3811 18.3337 14.8097 18.3337 11.667 18.3337H8.33366C5.19096 18.3337 3.61962 18.3337 2.6433 17.3574C1.66699 16.3812 1.66699 14.8097 1.66699 11.6671V10.0004Z" stroke="white" stroke-width="1.25" />
                        <path d="M5.83301 3.33374V2.08374" stroke="white" stroke-width="1.25" stroke-linecap="round" />
                        <path d="M14.167 3.33374V2.08374" stroke="white" stroke-width="1.25" stroke-linecap="round" />
                        <path d="M2.08301 7.5H17.9163" stroke="white" stroke-width="1.25" stroke-linecap="round" />
                        <path d="M14.9997 14.1671C14.9997 14.6273 14.6266 15.0004 14.1663 15.0004C13.7061 15.0004 13.333 14.6273 13.333 14.1671C13.333 13.7068 13.7061 13.3337 14.1663 13.3337C14.6266 13.3337 14.9997 13.7068 14.9997 14.1671Z" fill="white" />
                        <path d="M14.9997 10.8333C14.9997 11.2936 14.6266 11.6667 14.1663 11.6667C13.7061 11.6667 13.333 11.2936 13.333 10.8333C13.333 10.3731 13.7061 10 14.1663 10C14.6266 10 14.9997 10.3731 14.9997 10.8333Z" fill="white" />
                        <path d="M10.8337 14.1671C10.8337 14.6273 10.4606 15.0004 10.0003 15.0004C9.54008 15.0004 9.16699 14.6273 9.16699 14.1671C9.16699 13.7068 9.54008 13.3337 10.0003 13.3337C10.4606 13.3337 10.8337 13.7068 10.8337 14.1671Z" fill="white" />
                        <path d="M10.8337 10.8333C10.8337 11.2936 10.4606 11.6667 10.0003 11.6667C9.54008 11.6667 9.16699 11.2936 9.16699 10.8333C9.16699 10.3731 9.54008 10 10.0003 10C10.4606 10 10.8337 10.3731 10.8337 10.8333Z" fill="white" />
                        <path d="M6.66667 14.1671C6.66667 14.6273 6.29357 15.0004 5.83333 15.0004C5.3731 15.0004 5 14.6273 5 14.1671C5 13.7068 5.3731 13.3337 5.83333 13.3337C6.29357 13.3337 6.66667 13.7068 6.66667 14.1671Z" fill="white" />
                        <path d="M6.66667 10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333C5 10.3731 5.3731 10 5.83333 10C6.29357 10 6.66667 10.3731 6.66667 10.8333Z" fill="white" />
                      </svg>


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

      {/* 2. Logo Strip Section (Grayscale / Now placed in the middle below Hero) */}
      {/* <div
        className="bg-white border-b border-[#e8e4e0] py-5 overflow-hidden relative"
        style={
          {
            "--logo-strip-height": "64px",
            "--logo-strip-gap": "80px",
          } as React.CSSProperties
        }
      >
        <LogoStrip className="opacity-35 grayscale" />
      </div> */}

      {/* 3. Main Content Grid (Light Background) */}
      <section id="how-can-we-help-section" className="py-14 md:py-24 bg-[#F7F6F5]">
        <div className="mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.32fr)_minmax(330px,420px)] gap-8 lg:gap-10 items-start">

            {/* Left Column: Form Card or Success Card */}
            {isSubmitted ? (
              <div className="bg-white rounded-[14px] p-8 md:p-12 border border-[#E4E1DC] flex flex-col items-center justify-center text-center min-h-[280px] md:min-h-[300px]">
                <div className="w-[60px] h-[60px] bg-[#00A727] rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-[28px] md:text-[24px] font-bold text-[#0F0E0D] font-heading mb-2 tracking-tight leading-tight">
                  We Received Your Message
                </h2>
                <p className="text-[#A09D99] text-[14px] mb-10 max-w-[420px] leading-[18px]">
                  Our team will soon reach out to address your concerns. If it&apos;s urgent, call us on the number below.
                </p>
                <a
                  href="tel:+15107706806"
                  className="w-full max-w-[456px] h-[52px] md:h-[56px] rounded-full bg-[#E8610A] font-semibold font-heading !text-white transition-all duration-300 flex items-center justify-center gap-2.5 text-[15px]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7967 10.7552L13.4172 11.1325C13.4172 11.1325 12.515 12.0296 10.0525 9.58102C7.59002 7.13252 8.49217 6.23549 8.49217 6.23549L8.73117 5.99783C9.32 5.41238 9.3755 4.47244 8.86175 3.78625L7.81097 2.38258C7.17515 1.53328 5.94655 1.42109 5.21779 2.14571L3.90979 3.44628C3.54844 3.80558 3.30629 4.27134 3.33566 4.78803C3.41078 6.10987 4.00884 8.95393 7.34605 12.2722C10.885 15.791 14.2056 15.9308 15.5635 15.8043C15.993 15.7643 16.3665 15.5455 16.6675 15.2462L17.8513 14.0692C18.6504 13.2746 18.4251 11.9124 17.4027 11.3567L15.8106 10.4912C15.1392 10.1263 14.3214 10.2334 13.7967 10.7552Z" fill="white" />
                  </svg>

                  +1 (510) 770-6806
                </a>
              </div>
            ) : (
              <div className="bg-white rounded-[14px] p-6 xs:p-8 md:p-10 border border-[#E4E1DC]">
                <h2 className="text-[18px] md:text-[24px] font-bold text-[#111111] tracking-tight leading-[24px] mb-3 font-heading">
                  How Can We Help?
                </h2>
                <p className="text-[#A09D99] text-[14px] leading-[16px] font-normal mb-8 md:mb-10">
                  Select a reason below we&apos;ll tailor the form for you
                </p>

                {/* Concern Selector (Accessible Divs to Bypass Button Resets) */}
                <div className="mb-8 md:mb-10">
                  <div className="text-[11px] md:text-[12px] font-heading font-semibold text-[#9A9794] uppercase tracking-[0.99px] mb-3">
                    I&apos;M REACHING OUT ABOUT
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {concerns.map((concern) => (
                      <div
                        key={concern}
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedConcern(concern)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSelectedConcern(concern);
                          }
                        }}
                        className={`h-[38px] md:h-[40px] px-5 rounded-full border text-[14px] flex items-center justify-center leading-none transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#f76a00] focus-visible:ring-offset-1 ${selectedConcern === concern
                          ? "border-[#f76a00] text-[#f76a00] bg-[#fff5ee] font-medium shadow-[0_2px_8px_rgba(247,106,0,0.08)]"
                          : "border-[#DEDCDA] text-[#555350] bg-[#ffffff] hover:border-[#a8a3a0] hover:bg-[#faf9f6]"
                          }`}
                      >
                        {concern}
                      </div>
                    ))}
                  </div>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    if (selectedConcern) {
                      handleSubmit(e);
                    }
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] font-semibold font-heading text-[#9A9794] uppercase tracking-[0.99px] mb-2.5">
                        FIRST NAME *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Jane"
                        className="w-full h-[50px] md:h-[54px] px-4 md:px-5 rounded-[8px] border border-[#E4E1DC] bg-white focus:outline-none focus:border-[#f76a00] focus:ring-1 focus:ring-[#f76a00] hover:border-[#c5c0bb] transition-all placeholder:text-[#9A9794] text-[#9A9794] text-[14px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold font-heading text-[#9A9794] uppercase tracking-[0.99px] mb-2.5">
                        LAST NAME *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Smith"
                        className="w-full h-[50px] md:h-[54px] px-4 md:px-5 rounded-[8px] border border-[#E4E1DC] bg-white focus:outline-none focus:border-[#f76a00] focus:ring-1 focus:ring-[#f76a00] hover:border-[#c5c0bb] transition-all placeholder:text-[#9A9794] text-[#9A9794] text-[14px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold font-heading text-[#9A9794] uppercase tracking-[0.99px] mb-2.5">
                      EMAIL*
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jsmith@university.edu"
                      className="w-full h-[50px] md:h-[54px] px-4 md:px-5 rounded-[8px] border border-[#E4E1DC] bg-white focus:outline-none focus:border-[#f76a00] focus:ring-1 focus:ring-[#f76a00] hover:border-[#c5c0bb] transition-all placeholder:text-[#9A9794] text-[#9A9794] text-[14px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold font-heading text-[#9A9794] uppercase tracking-[0.99px] mb-2.5">
                      INSTITUTION / COMPANY*
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="University of..."
                      className="w-full h-[50px] md:h-[54px] px-4 md:px-5 rounded-[8px] border border-[#E4E1DC] bg-white focus:outline-none focus:border-[#f76a00] focus:ring-1 focus:ring-[#f76a00] hover:border-[#c5c0bb] transition-all placeholder:text-[#9A9794] text-[#9A9794] text-[14px]"
                    />
                  </div>

                  {/* Submit Button (Accessible Div to Bypass Button Resets) */}
                  <div className="pt-3 md:pt-4">
                    <div
                      role="button"
                      tabIndex={selectedConcern ? 0 : -1}
                      onClick={(e) => {
                        if (selectedConcern) {
                          handleSubmit(e);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          if (selectedConcern) {
                            handleSubmit(e);
                          }
                        }
                      }}
                      className={`w-full h-[52px] md:h-[56px] rounded-full font-semibold text-[16px] flex items-center justify-center transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#f76a00] focus-visible:ring-offset-2 ${selectedConcern
                        ? "bg-[#E8610A] text-white shadow-[0_8px_20px_rgba(247,106,0,0.2)] hover:bg-[#e05e00] hover:shadow-[0_8px_24px_rgba(247,106,0,0.3)] cursor-pointer"
                        : "bg-[#DEDCDA] text-[#9A9794] cursor-not-allowed"
                        }`}
                    >
                      {getButtonText()}
                    </div>
                    <div className="text-center mt-6 md:mt-8 text-[12px] font-semibold font-heading text-[#a09b97] flex items-center justify-center gap-2">
                      <span className="underline decoration-[#a09b97] underline-offset-4 cursor-pointer hover:text-[#f76a00] hover:decoration-[#f76a00] transition-colors">
                        Reply &lt;2 business days
                      </span>{" "}
                      <span>&middot;</span>{" "}
                      <span className="underline decoration-[#a09b97] underline-offset-4 cursor-pointer hover:text-[#f76a00] hover:decoration-[#f76a00] transition-colors">
                        Unsubscribe anytime
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Right Column: Next Steps, Contact Info, Headquarters */}
            <div className="space-y-6">

              {/* What Happens Next Card */}
              <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-[#E2DDD7]">
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#111111] tracking-tight mb-1.5 font-heading">
                  What Happens Next?
                </h3>
                <p className="text-[#A09D99] text-[14px] mb-8 leading-relaxed">
                  Learn what happens after you send us a message
                </p>

                <div className="relative pl-3">

                  {nextSteps.map((step, index) => (
                    <div
                      key={step.number}
                      className={`relative flex gap-5 ${index < nextSteps.length - 1 ? "mb-9" : ""}`}
                    >
                      <div className="flex flex-col items-center shrink-0 relative w-[26px]">
                        <div
                          className={`w-[26px] h-[26px] rounded-full flex items-center justify-center font-bold text-[12px] shrink-0 z-10 ring-[6px] ring-white mt-0.5 ${step.active
                            ? "bg-[#E8610A] text-white"
                            : "bg-white border border-[#ded9d4] text-[#9a9691]"
                            }`}
                        >
                          {step.number}
                        </div>
                        {index < nextSteps.length - 1 && (
                          <div className="w-px bg-[#e2ddd8] absolute top-4 bottom-[-40px] left-1/2 -translate-x-1/2 z-0" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-[16px] font-semibold font-heading text-[#0F0E0D] mb-1">
                          {step.title}
                        </h4>
                        <p className="text-[#A09D99] text-[12px] leading-[16px] mb-3.5 pr-2">
                          {step.copy}
                        </p>
                        {step.isButton ? (
                          <a
                            href="tel:+15107706806"
                            className="inline-flex bg-[#FDE7D8] !text-[#E8610A] border border-[#FBC8A7] text-[12px] font-medium px-4 py-1 rounded-full transition-all duration-200 cursor-pointer"
                          >
                            {step.label}
                          </a>
                        ) : (
                          <div className="inline-flex bg-[#FDE7D8] !text-[#E8610A] border border-[#FBC8A7] text-[12px] font-medium px-4 py-1 rounded-full ">
                            {step.label}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Sales Card */}
              <div className="bg-white rounded-[18px] border border-[#E2DDD7] relative overflow-hidden group flex flex-col">
                <div className="absolute right-0 bottom-0 w-44 h-44 bg-[#f76a00]/5 rounded-full blur-3xl group-hover:bg-[#f76a00]/10 transition-colors duration-500 pointer-events-none" />

                {/* Card Header (Full-width divider layout) */}
                <div className="px-6 py-4 flex items-center gap-2 border-b border-[#e8e4e0] bg-white">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00024 16.4999C13.1423 16.4999 16.5002 13.142 16.5002 8.99988C16.5002 4.85774 13.1423 1.49988 9.00024 1.49988C4.85811 1.49988 1.50024 4.85774 1.50024 8.99988C1.50024 10.1997 1.78196 11.3336 2.28284 12.3393C2.41595 12.6065 2.46025 12.912 2.38308 13.2003L1.93638 14.8699C1.74246 15.5946 2.4055 16.2576 3.13026 16.0638L4.79979 15.6171C5.08819 15.5399 5.39365 15.5842 5.66089 15.7173C6.66652 16.2182 7.80047 16.4999 9.00024 16.4999Z" stroke="#E8610A" stroke-width="1.35" />
                    <path d="M6.00024 7.875H12.0002" stroke="#E8610A" stroke-width="1.125" stroke-linecap="round" />
                    <path d="M6.00024 10.4999H10.1252" stroke="#E8610A" stroke-width="1.125" stroke-linecap="round" />
                  </svg>


                  <h4 className="font-semibold font-heading text-[#9A9794] text-[16px] leading-[20px] tracking-tight">
                    Contact Sales
                  </h4>
                </div>

                {/* Card Content */}
                <div className="px-6 py-6 space-y-3.5 relative z-10 grow">
                  <div className="text-[14px] font-normal leading-relaxed text-[#0D0C0C]">
                    <span className="font-medium underline decoration-[#111111] underline-offset-4">
                      Phone:
                    </span>{" "}
                    +1 510 770 6806
                  </div>
                  <div className="text-[14px] font-normal leading-relaxed text-[#0D0C0C]">
                    <span className="font-medium underline decoration-[#111111] underline-offset-4">
                      Email:
                    </span>{" "}
                    <a
                      href="mailto:sales@slingshotbio.com"
                      className="hover:text-[#f76a00] transition-colors"
                    >
                      sales@slingshotbio.com
                    </a>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="py-4 border-t border-[#e8e4e0] text-center relative z-10 mt-auto bg-white rounded-b-[24px]">
                  <a
                    href="tel:+15107706806"
                    className="!text-[#F76A00] font-semibold text-[14px] !underline decoration-[#f76a00] underline-offset-4 hover:no-underline transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Headquarters Card */}
              <div className="bg-white rounded-[18px] border border-[#e8e4e0] shadow-[0_12px_40px_rgba(31,24,18,0.03)] relative overflow-hidden group flex flex-col">
                <div className="absolute right-0 bottom-0 w-44 h-44 bg-[#f76a00]/5 rounded-full blur-3xl group-hover:bg-[#f76a00]/10 transition-colors duration-500 pointer-events-none" />

                {/* Card Header (Full-width divider layout) */}
                <div className="px-6 py-4 flex items-center gap-1 border-b border-[#e8e4e0] bg-white">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4.5C7.34314 4.5 6 5.84314 6 7.5C6 9.15683 7.34314 10.5 9 10.5C10.6568 10.5 12 9.15683 12 7.5C12 5.84314 10.6568 4.5 9 4.5ZM9 6C8.17155 6 7.5 6.67157 7.5 7.5C7.5 8.32845 8.17155 9 9 9C9.82845 9 10.5 8.32845 10.5 7.5C10.5 6.67157 9.82845 6 9 6Z" fill="#E8610A" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.31758 16.9468C8.40443 17.0065 8.47358 17.0525 8.52195 17.0841L8.60153 17.1354C8.84498 17.2878 9.15457 17.2881 9.39802 17.1357L9.47812 17.0841C9.52642 17.0525 9.59557 17.0065 9.68242 16.9468C9.85612 16.8275 10.1014 16.6531 10.3943 16.4281C10.979 15.9791 11.7601 15.3241 12.5435 14.5002C14.0893 12.8746 15.75 10.4794 15.75 7.63635C15.75 5.81536 15.0428 4.06563 13.7789 2.77296C12.5144 1.47972 10.7957 0.75 9 0.75C7.20428 0.75 5.48561 1.47972 4.2211 2.77296C2.95716 4.06563 2.25 5.81536 2.25 7.63635C2.25 10.4794 3.91075 12.8746 5.45648 14.5002C6.23995 15.3241 7.02102 15.9791 7.60567 16.4281C7.89862 16.6531 8.14388 16.8275 8.31758 16.9468ZM9 2.25C7.6131 2.25 6.27955 2.8133 5.29361 3.82164C4.30712 4.83055 3.75 6.20244 3.75 7.63635C3.75 9.90053 5.08925 11.9372 6.54352 13.4666C7.26005 14.2201 7.97895 14.8235 8.51933 15.2384C8.70345 15.3799 8.86613 15.4988 9 15.5938C9.13387 15.4988 9.29655 15.3799 9.48067 15.2384C10.021 14.8235 10.7399 14.2201 11.4565 13.4666C12.9107 11.9372 14.25 9.90053 14.25 7.63635C14.25 6.20244 13.6929 4.83055 12.7063 3.82164C11.7205 2.8133 10.3869 2.25 9 2.25Z" fill="#E8610A" />
                  </svg>

                  <h4 className="font-semibold font-heading text-[#9A9794] text-[16px] leading-[20px] tracking-tight">
                    Headquarters
                  </h4>
                </div>

                {/* Card Content */}
                <div className="px-6 py-6 space-y-2 relative z-10 grow">
                  <div className="text-[14px] font-normal text-[#0D0C0C] mb-1">
                    California, USA
                  </div>
                  <div className="text-[14px] font-normal leading-relaxed text-[#0D0C0C]">
                    1250 45th St, Suite 150 Emeryville, CA 94608
                  </div>
                </div>

                {/* Card Footer */}
                <div className="py-4 border-t border-[#e8e4e0] text-center relative z-10 mt-auto bg-white rounded-b-[24px]">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1250%2045th%20St%2C%20Suite%20150%20Emeryville%2C%20CA%2094608"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!text-[#F76A00] font-semibold text-[14px] !underline decoration-[#f76a00] underline-offset-4 hover:no-underline transition-all duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
