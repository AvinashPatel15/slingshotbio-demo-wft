import React from "react";
import { nextSteps } from "@/content/contact";
import { ContactSalesIcon, HeadquartersIcon } from "../ui/icons";

export function ContactSidebar() {
  return (
    <div className="space-y-6">
      {/* What Happens Next Card */}
      <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-[#E2DDD7]">
        <h3 className="text-[20px] md:text-[24px] font-bold text-[#111111] leading-6 tracking-tight mb-1.5 font-heading">
          What Happens Next?
        </h3>
        <p className="text-[#A09D99] text-[14px] mb-8 leading-relaxed">
          Learn what happens after you send us a message
        </p>

        <div className="relative pl-3">
          {nextSteps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex gap-5 ${index < nextSteps.length - 1 ? "mb-9" : ""
                }`}
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
                <h4 className="text-[16px] font-semibold font-heading leading-5 text-[#0F0E0D] mb-1">
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
                  <div className="inline-flex leading-4 bg-[#FDE7D8] !text-[#E8610A] border border-[#FBC8A7] text-[12px] font-medium px-4 py-1 rounded-full ">
                    {step.label}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" h-[1px] bg-[#E2DDD7] w-full"></div>

      {/* Contact Sales Card */}
      <div className="bg-white rounded-[18px] border border-[#E2DDD7] relative overflow-hidden group flex flex-col">
        <div className="absolute right-0 bottom-0 w-44 h-44 bg-[#f76a00]/5 rounded-full blur-3xl group-hover:bg-[#f76a00]/10 transition-colors duration-500 pointer-events-none" />

        <div className=" relative">
          {/* Gradient */}
          <div
            className="pointer-events-none"
            style={{
              position: "absolute",
              width: "140px",
              height: "140px",
              right: "-50.4px",
              bottom: "-50.39px",
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, rgba(232, 97, 10, 0.16) 0%, rgba(232, 97, 10, 0) 65%)",
              flex: "none",
              order: 1,
              flexGrow: 0,
              zIndex: 1,
            }}
          />
          {/* Card Header (Full-width divider layout) */}
          <div className="mx-6 pt-4 pb-2 flex items-center gap-2 border-b border-[#e8e4e0] bg-white">
            <ContactSalesIcon />
            <h4 className="font-semibold font-heading text-[#9A9794] text-[16px] leading-[20px] tracking-tight">
              Contact Sales
            </h4>
          </div>

          {/* Card Content */}
          <div className="px-6 py-6 space-y-3.5 relative z-10 grow">
            <div className="text-[14px] font-normal leading-[18px] text-[#0D0C0C]">
              <span className="font-medium underline decoration-[#111111] underline-offset-4">
                Phone:
              </span>{" "}
              +1 510 770 6806
            </div>
            <div className="text-[14px] font-normal leading-[18px] text-[#0D0C0C]">
              <span className="font-medium underline decoration-[#111111] underline-offset-4 leading-[18px]">
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
        <div className=" relative">
          {/* Gradient */}
          <div
            className="pointer-events-none"
            style={{
              position: "absolute",
              width: "140px",
              height: "140px",
              right: "-50.4px",
              bottom: "-50.39px",
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, rgba(232, 97, 10, 0.16) 0%, rgba(232, 97, 10, 0) 65%)",
              flex: "none",
              order: 1,
              flexGrow: 0,
              zIndex: 1,
            }}
          />
          {/* Card Header (Full-width divider layout) */}
          <div className="mx-6 pt-4 pb-2 flex items-center gap-1 border-b border-[#e8e4e0] bg-white">
            <HeadquartersIcon />
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
  );
}
