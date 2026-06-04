import type { ProductItem } from "./types";

export const products: ProductItem[] = [
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
