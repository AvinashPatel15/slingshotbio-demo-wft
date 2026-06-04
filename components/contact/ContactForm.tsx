import React from "react";
import { concerns } from "@/content/contact";
import { CheckmarkIcon, TelephoneIcon } from "../ui/icons";

type ContactFormProps = {
  isSubmitted: boolean;
  selectedConcern: string | null;
  setSelectedConcern: (concern: string) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
};

export function ContactForm({
  isSubmitted,
  selectedConcern,
  setSelectedConcern,
  handleSubmit,
}: ContactFormProps) {
  const getButtonText = () => {
    if (!selectedConcern) return "Select Your Concern";
    if (selectedConcern === "Evaluation Kit") return "Request Evaluation Kit";
    if (selectedConcern === "Technical Support") return "Submit Support Request";
    if (selectedConcern === "Partnerships") return "Contact Partnerships";
    if (selectedConcern === "Pricing") return "Request Pricing Details";
    return "Send Message";
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-[14px] p-8 md:p-12 border border-[#E4E1DC] flex flex-col items-center justify-center text-center min-h-[280px] md:min-h-[300px]">
        <div className="w-[60px] h-[60px] bg-[#00A727] rounded-full flex items-center justify-center mb-6 shadow-sm">
          <CheckmarkIcon className="text-white" />
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
          <TelephoneIcon />
          +1 (510) 770-6806
        </a>
      </div>
    );
  }

  return (
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
          <div className="text-center mt-6 md:mt-8 text-[12px] underline font-semibold font-heading text-[#9A9794] flex items-center justify-center gap-2 leading-4">
            Reply &lt;2 business days · Unsubscribe anytime
          </div>
        </div>
      </form>
    </div>
  );
}
