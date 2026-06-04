import React from "react";
import { FeatureAmbientIcon, FeatureCustomIcon, FeatureIdenticalIcon, FeatureSyntheticIcon } from "../components/ui/icons";

export const biologicalControlFeatures = [
  {
    title: "Fully Synthetic",
    isOrangeTitle: false,
    description: "No donor sourcing. No IRB complexity. No cold chain dependency.",
    icon: <FeatureSyntheticIcon />
  },
  {
    title: "Custom to Specification",
    isOrangeTitle: true,
    description: "Any surface marker, particle size, rigidity, or assay format. Your exact panel.",
    icon: <FeatureCustomIcon />
  },
  {
    title: "Ambient Stable",
    isOrangeTitle: false,
    description: "Ships and stores without cold chain. Designed for multi-site research programmes.",
    icon: <FeatureAmbientIcon />
  },
  {
    title: "Lot Identical Performance",
    isOrangeTitle: false,
    description: "Every batch manufactured to the same specification. Run your gating templates unchanged.",
    icon: <FeatureIdenticalIcon />
  }
];

export const lifecycleSteps = [
  {
    num: 1,
    isActive: true,
    tag: "EVALUATION",
    title: "Free Sample Kit",
    description: "Receive TruCytes® matched to your application at no cost. Run head-to-head against your existing controls. No commitment required.",
    cta: "Request Free Kit",
    isOrangeCTA: true
  },
  {
    num: 2,
    isActive: true,
    tag: "CUSTOMIZATION",
    title: "Define Your Spec",
    description: "A dedicated Field Application Scientist works with you to define surface markers, fluorescence, size, and any special handling requirements.",
    cta: "Talk To A Scientist",
    isOrangeCTA: true
  },
  {
    num: 3,
    isActive: false,
    tag: "VALIDATION",
    title: "Pilot Batch & QC",
    description: "Pilot batch manufactured, full multi-parameter QC run, Certificate of Analysis provided — before any production commitment is made.",
    cta: "Download Example CoA",
    isOrangeCTA: false
  },
  {
    num: 4,
    isActive: false,
    tag: "PRODUCTION",
    title: "Ongoing Supply",
    description: "Seamless scale. Guaranteed lot-to-lot consistency. Dedicated account support for the life of your research program.",
    cta: "Discuss Volume Pricing",
    isOrangeCTA: false
  }
];
