import React from "react";
import { AppIcon } from "@/components/ui/icons";

export type TabData = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  svgIcon: React.ReactNode;
};

export const tabs: TabData[] = [
  {
    id: "assay",
    number: "01",
    title: "Assay Development",
    eyebrow: "APPLICATION 01",
    description: "Engineer custom controls for biomarker assays, immune monitoring, and novel endpoints. Standardize assays from translational research through pivotal trials, reduce operator variability, and enable clean transfers between research and GLP/GCP environments.",
    svgIcon: <AppIcon />
  },
  {
    id: "diagnostics",
    number: "02",
    title: "Laboratory Diagnostics",
    eyebrow: "APPLICATION 02",
    description: "Provide robust, shelf-stable cellular controls for clinical laboratory diagnostics. Calibrate flow cytometers across reference laboratories, manage instrument drift over multi-year clinical trials, and eliminate biological PBMC variability in diagnostic assays.",
    svgIcon: <AppIcon />
  },
  {
    id: "adoptive",
    number: "03",
    title: "Adoptive Cell Therapy",
    eyebrow: "APPLICATION 03",
    description: "Standardize CAR-T, TCR, and TIL therapeutic workflow controls. Monitor CD3, CD4, CD8, and custom biomarker expression levels with quantitative antigen density controls. Verify cell enumeration accuracy and viability throughout development and manufacturing.",
    svgIcon: <AppIcon />
  },
  {
    id: "drug",
    number: "04",
    title: "Drug Development",
    eyebrow: "APPLICATION 04",
    description: "Accelerate high-throughput drug screening and pharmacodynamics studies. Utilize synthetic mimics to model target receptor saturation, benchmark monoclonal antibody bindings, and maintain absolute stability across screening campaigns.",
    svgIcon: <AppIcon />
  },
  {
    id: "instrument",
    number: "05",
    title: "Instrument Performance",
    eyebrow: "APPLICATION 05",
    description: "Harmonize and standardize flow cytometers across global research networks. Match biological cell scattering index and size parameters, verify laser alignment, validate compensation/unmixing protocols, and run daily QA/QC with absolute reproducibility.",
    svgIcon: <AppIcon />
  },
];
