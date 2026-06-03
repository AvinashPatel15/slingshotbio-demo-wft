"use client";

import React, { useState, useEffect } from "react";

interface FormProps {
  prefilledAntigens: string[];
  prefilledExpression: string;
}

export default function EvaluationKitForm({ prefilledAntigens, prefilledExpression }: FormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [primaryApplication, setPrimaryApplication] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!firstName.trim()) tempErrors.firstName = "First name is required";
    if (!lastName.trim()) tempErrors.lastName = "Last name is required";
    if (!company.trim()) tempErrors.company = "Institution / Company is required";

    if (!email.trim()) {
      tempErrors.email = "Institutional email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!primaryApplication) {
      tempErrors.primaryApplication = "Please select your primary application workflow";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate standard submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  return (
    <section id="evaluation-kit-form-section" className="bg-[#faf9f6] text-[#0d0c0c] py-20 md:py-28 relative overflow-hidden">

      {/* Background decoration elements */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Copy Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="font-heading font-semibold leading-[57px] tracking-[-0.02em] text-[36px] sm:text-4xl md:text-[48px] text-[#0d0c0c] mb-6">
              Free Evaluation Kit. <br />
              Zero Payment.
            </h2>
            <p className="text-[#333130] font-sans text-base md:text-[18px] leading-[27px] mb-10 max-w-[520px]">
              A Field Application Scientist will reply within 2 business days with a TruCytes® sample matched to your application. No sales calls, no pressure — just science.
            </p>

            {/* Checklist Items with custom border separators */}
            <ul className="w-full max-w-[480px] border-t border-[#dedcda]/40">
              {[
                "Complimentary sample kit — no credit card required",
                "Direct access to a Field Application Scientist",
                "Full Certificate of Analysis included",
                "ISO 13485 supply chain documentation on request"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 py-4 border-b border-[#E4E1DC]">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E8F5EE] text-[#1A6B4A] shrink-0">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#555350] font-sans text-[14px] font-medium leading-[24px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Form Container Card */}
          <div className="lg:col-span-6 w-full max-w-[580px] mx-auto relative z-20">
            <div className="bg-white border border-[#E4E1DC] rounded-[14px] p-8 md:px-8 md:pt-8 md:pb-6 shadow-[0_15px_45px_rgba(0,0,0,0.02)] transition-all duration-300 relative min-h-[500px] flex flex-col justify-center">

              {/* Form Success State */}
              {isSuccess ? (
                <div className="text-center py-10 animate-fade-up flex flex-col items-center">
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-6 border border-emerald-500/20 shadow-inner">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 animate-pulse">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.748-5.25z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#0d0c0c] mb-3">
                    Request Submitted Successfully!
                  </h3>
                  <p className="text-[#4e4a47] font-sans text-sm md:text-base leading-relaxed max-w-[380px] mx-auto">
                    Thank you! A Field Application Scientist will review your request and reply within 2 business days to coordinate your custom sample shipment.
                  </p>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setIsSuccess(false)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsSuccess(false);
                      }
                    }}
                    className="mt-8 inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#dedcda] bg-white px-6 py-2.5 font-semibold text-xs text-[#4e4a47] hover:bg-[#faf9f6] transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#f76a00] focus-visible:ring-offset-2"
                  >
                    Reset Form
                  </div>
                </div>
              ) : (
                /* Main Form Fields */
                <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">

                  {/* Name Fields Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-heading font-semibold text-[#9A9794] uppercase leading-[18px] tracking-[0.99px] mb-1.5">First Name *</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={`w-full bg-white border border-[#E4E1DC] rounded-[8px] px-4 py-3 text-[14px] font-sans focus:outline-none focus:ring-1 focus:ring-[#f76a00] placeholder-[#a8a29e] ${errors.firstName ? "border-red-500 bg-red-50/20" : "border-[#dedcda] placeholder:text-[15px]"
                          }`}
                        placeholder="Jane"
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1 font-sans">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-[11px] font-heading font-semibold text-[#9A9794] uppercase leading-[18px] tracking-[0.99px] mb-1.5">Last Name *</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={`w-full bg-white border border-[#E4E1DC] rounded-[8px] px-4 py-3 text-[14px] font-sans focus:outline-none focus:ring-1 focus:ring-[#f76a00] placeholder-[#a8a29e] ${errors.lastName ? "border-red-500 bg-red-50/20" : "border-[#dedcda] placeholder:text-[15px]"
                          }`}
                        placeholder="Smith"
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1 font-sans">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Institutional Email */}
                  <div>
                    <label className="block text-[11px] font-heading font-semibold text-[#9A9794] uppercase leading-[18px] tracking-[0.99px] mb-1.5">Institutional Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full bg-white border border-[#E4E1DC] rounded-[8px] px-4 py-3 text-[14px] font-sans focus:outline-none focus:ring-1 focus:ring-[#f76a00] placeholder-[#a8a29e] ${errors.email ? "border-red-500 bg-red-50/20" : "border-[#dedcda] placeholder:text-[15px]"
                        }`}
                      placeholder="jsmith@university.edu"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 font-sans">{errors.email}</p>}
                  </div>

                  {/* Institution / Company */}
                  <div>
                    <label className="block text-[11px] font-heading font-semibold text-[#9A9794] uppercase leading-[18px] tracking-[0.99px] mb-1.5">Institution / Company *</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={`w-full bg-white border border-[#E4E1DC] rounded-[8px] px-4 py-3 text-[14px] font-sans focus:outline-none focus:ring-1 focus:ring-[#f76a00] placeholder-[#a8a29e] ${errors.company ? "border-red-500 bg-red-50/20" : "border-[#dedcda] placeholder:text-[15px]"
                        }`}
                      placeholder="University of..."
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1 font-sans">{errors.company}</p>}
                  </div>

                  {/* Primary Application */}
                  <div>
                    <label className="block text-[11px] font-heading font-semibold text-[#9A9794] uppercase leading-[18px] tracking-[0.99px] mb-1.5">Primary Application</label>
                    <div className="relative">
                      <select
                        value={primaryApplication}
                        onChange={(e) => setPrimaryApplication(e.target.value)}
                        className={`w-full bg-white border border-[#E4E1DC] rounded-[8px] px-4 py-3  leading-[19px] font-sans focus:outline-none focus:ring-1 focus:ring-[#f76a00] cursor-pointer appearance-none selection:text-[15px] ${errors.primaryApplication ? "border-red-500 bg-red-50/20" : "border-[#dedcda]"
                          }`}
                      >
                        <option value="">Select your workflow</option>
                        <option value="flow-cytometry">Flow Cytometry Calibration</option>
                        <option value="assay-standardization">Assay Standardisation</option>
                        <option value="immunotherapy">Immunotherapy Research</option>
                        <option value="other">Other Workflow</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#78716c]">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    {errors.primaryApplication && <p className="text-red-500 text-xs mt-1 font-sans">{errors.primaryApplication}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <div
                      role="button"
                      tabIndex={isSubmitting ? -1 : 0}
                      onClick={(e) => {
                        if (!isSubmitting) {
                          handleSubmit(e);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          if (!isSubmitting) {
                            handleSubmit(e);
                          }
                        }
                      }}
                      className={`w-full inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#f76a00] px-7 py-3.5 font-semibold text-[13px] text-white shadow-[0_4px_15px_rgba(247,106,0,0.15)] transition-all duration-300 hover:shadow-[0_8px_22px_rgba(247,106,0,0.25)] hover:-translate-y-0.5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#f76a00] focus-visible:ring-offset-2 ${isSubmitting ? "opacity-50 cursor-not-allowed hover:translate-y-0" : ""
                        }`}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        "Request Evaluation Kit"
                      )}
                    </div>
                  </div>

                  {/* Soft response timing notice */}
                  <p className="text-center text-[11px] leading-[18.7px] text-[#9A9794] font-heading font-medium">
                    Reply &lt;2 business days · No commitment
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
