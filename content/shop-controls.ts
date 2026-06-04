import type { ProductStep } from "./types";

export const tagMotion = [
  { delay: -6.6, driftX: -8, driftY: 7, exitX: 5, exitY: -4 },
  { delay: -18.2, driftX: 6, driftY: -6, exitX: -4, exitY: 5 },
  { delay: -10.4, driftX: -5, driftY: -8, exitX: 4, exitY: 6 },
  { delay: -2.8, driftX: 8, driftY: 5, exitX: -6, exitY: -3 },
  { delay: -14.7, driftX: -7, driftY: 4, exitX: 5, exitY: -5 },
  { delay: -23.5, driftX: 5, driftY: 8, exitX: -3, exitY: -6 },
  { delay: -4.1, driftX: 7, driftY: -7, exitX: -5, exitY: 4 },
  { delay: -27.6, driftX: -6, driftY: 6, exitX: 4, exitY: -4 },
  { delay: -12.1, driftX: -7, driftY: -5, exitX: 6, exitY: 4 },
  { delay: -20.8, driftX: 8, driftY: 6, exitX: -5, exitY: -4 },
  { delay: -8.9, driftX: 5, driftY: -8, exitX: -4, exitY: 6 },
  { delay: -25.2, driftX: -6, driftY: 5, exitX: 5, exitY: -5 },
  { delay: -16.3, driftX: 7, driftY: 4, exitX: -6, exitY: -3 },
  { delay: -0.9, driftX: -5, driftY: -7, exitX: 4, exitY: 5 },
  { delay: -29.2, driftX: 6, driftY: 7, exitX: -5, exitY: -4 },
  { delay: -11.7, driftX: -8, driftY: -4, exitX: 6, exitY: 3 },
  { delay: -21.9, driftX: 7, driftY: -5, exitX: -4, exitY: 5 },
  { delay: -5.4, driftX: -6, driftY: 8, exitX: 5, exitY: -6 },
  { delay: -24.1, driftX: 5, driftY: 6, exitX: -4, exitY: -5 },
  { delay: -15.1, driftX: -7, driftY: -6, exitX: 5, exitY: 4 },
] as const;

export const productStepLabels: Record<ProductStep["id"], [string, string]> = {
  "instrument-standardization": ["Instrument Standardization &", "Harmonization"],
  "spectral-unmixing": ["Spectral Unmixing &", "Compensation"],
  immunophenotyping: ["Immunophenotyping", "Controls"],
  "quantitative-antigen-density": ["Quantitative Antigen", "Density"],
};
