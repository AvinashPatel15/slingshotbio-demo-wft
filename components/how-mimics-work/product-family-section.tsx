"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  ctaText: string;
  ctaLink: string;
  isCustom?: boolean;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "phenocytes",
    category: "IMMUNOPHENOTYPING",
    title: "PhenoCytes",
    description:
      "Biomarker and immunophenotyping controls. Engineered surface antigen epitopes with quantitatively tunable density. TBNK and CD34+are off the shelf options.",
    imageSrc: "/product.jpg",
    ctaText: "Explore",
    ctaLink: "/shop#phenocytes",
  },
  {
    id: "stimcytes",
    category: "FUNCTIONAL ASSAYS",
    title: "StimCytes",
    description:
      "Functional controls for cell activation and stimulation workflows.",
    imageSrc: "/product.jpg",
    ctaText: "Explore",
    ctaLink: "/shop#stimcytes",
  },
  {
    id: "quantcytes",
    category: "QUANTITATION",
    title: "QuantCytes",
    description:
      "Quantitative antigen density standards. Defined epitope counts per particle for biomarker quantitation.",
    imageSrc: "/product.jpg",
    ctaText: "Explore",
    ctaLink: "/shop#quantcytes",
  },
  {
    id: "scatterbridge",
    category: "SCATTER CALIBRATION",
    title: "ScatterBridge",
    description:
      "Scatter calibration across instruments. Same particle, same signal, every cytometer.",
    imageSrc: "/product.jpg",
    ctaText: "Explore",
    ctaLink: "/shop#scatterbridge",
  },
  {
    id: "flowcytes",
    category: "INSTRUMENT QC",
    title: "FlowCytes",
    description:
      "Instrument standardization, compensation, and spectral unmixing controls.",
    imageSrc: "/product.jpg",
    ctaText: "Explore",
    ctaLink: "/shop#flowcytes",
  },
  {
    id: "trucytes",
    category: "CUSTOM",
    title: "TruCytes",
    description:
      "Custom controls. Engineered to your specification in weeks, not months.",
    imageSrc: "/product.jpg",
    ctaText: "Configure Your Own",
    ctaLink: "/sample-request",
    isCustom: true,
  },
];

export function ProductFamilySection() {
  return (
    <section className="bg-[#faf9f6] text-[#0d0c0c] py-20 md:py-28 relative overflow-hidden border-t border-[#ded9d4]/40">
      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        {/* Header Block */}
        <div className="max-w-[720px] mb-12 md:mb-16 lg:mb-20 animate-fade-up">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] md:leading-[56px] leading-[36px] tracking-[-1.35px] text-[#0d0c0c] md:max-w-[400px]">
            The Slingshot <br className="sm:hidden" /> Product Family
          </h2>
          <p className="text-[#555350] font-sans text-sm sm:text-base md:text-lg leading-[27px] mt-4 sm:mt-5 max-w-[500px]">
            Six purpose-built cell mimics covering the full spectrum of
            cytometry workflows — off-the-shelf and fully custom.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fade-up-delay-1">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[16px] border border-[#DEDCDA] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Top half: Studio bottle display box */}
              <div className="h-[200px] sm:h-[220px] relative bg-gradient-to-b from-[#f5f3f0] to-[#e6e2de] border-b border-[#ded9d4]/40 overflow-hidden flex items-center justify-center select-none">
                {/* Subtle surface shadow below the bottle for premium 3D look */}
                <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 w-[70px] h-[8px] bg-black/10 rounded-full blur-[4px] opacity-75 group-hover:scale-105 group-hover:bg-black/15 transition-all duration-300" />

                <div className="relative w-full h-full transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 ease-out">
                  <Image
                    src={product.imageSrc}
                    alt={`${product.title} bottle product image`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover drop-shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
                  />
                </div>
              </div>

              {/* Bottom half: Metadata and description */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  {/* Category Tag */}
                  <span
                    className={`text-[12px] font-sans font-bold tracking-[1.4px] leading-[16px] mb-2 block uppercase ${product.isCustom ? "text-[#F76A00]" : "text-[#555350]"
                      }`}
                  >
                    {product.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-[#0D0C0C] text-[18px] md:text-[20px] leading-[24px] tracking-[-0.66px] mb-2">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#555350] font-sans text-[14px] leading-[18px] mb-6 min-h-[60px] sm:min-h-[72px]">
                    {product.description}
                  </p>
                </div>

                {/* CTA Link */}
                <Link
                  href={product.ctaLink}
                  className={`inline-flex items-center self-start !underline !underline-offset-2 text-[12px] font-sans font-medium !text-[#555350] transition-colors duration-200 gap-1.5 leading-[16px] tracking-[0.24px]`}
                >
                  <span>{product.ctaText}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.66663 11.3334L11.3333 4.66675M11.3333 10.6667V4.66675H5.33329"
                      stroke="#555350"
                      stroke-width="1.06667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
