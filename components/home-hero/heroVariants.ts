import type { ComponentType } from "react";
import { HomeHeroCinematic } from "./HomeHeroCinematic";
import { HomeHeroCertainty } from "./HomeHeroCertainty";
import { HomeHeroCertaintyLoop } from "./HomeHeroCertaintyLoop";
import { HomeHeroLivingProof } from "./HomeHeroLivingProof";
import { HomeHeroNaturalProof } from "./HomeHeroNaturalProof";
import { HomeHeroStrongTypography } from "./HomeHeroStrongTypography";

export type HomeHeroVariantId = "certainty" | "cinematic" | "strong-typography" | "certainty-loop" | "living-proof" | "natural-proof";

export type HomeHeroVariant = {
  id: HomeHeroVariantId;
  label: string;
  status: "day 1" | "day 2";
  description: string;
  Component: ComponentType;
};

export const homeHeroVariants: HomeHeroVariant[] = [
  {
    id: "certainty",
    label: "Certainty",
    status: "day 1",
    description: "Black typography-led hero from Figma node 101:9085 with full-width logo strip.",
    Component: HomeHeroCertainty,
  },
  {
    id: "cinematic",
    label: "Cinematic",
    status: "day 1",
    description: "Cinematic title scale intro that resolves into the same Figma certainty hero state.",
    Component: HomeHeroCinematic,
  },
  {
    id: "strong-typography",
    label: "Strong typography",
    status: "day 1",
    description: "Large typography-led hero from Figma node 99:8345 with staged typing and CTA reveal.",
    Component: HomeHeroStrongTypography,
  },
  {
    id: "certainty-loop",
    label: "Certainty Loop",
    status: "day 2",
    description: "Looping black typography hero with staged claim pairs and brand certainty resolve.",
    Component: HomeHeroCertaintyLoop,
  },
  {
    id: "living-proof",
    label: "Living Proof",
    status: "day 2",
    description: "Looping black typography hero with video-masked claim lines.",
    Component: HomeHeroLivingProof,
  },
  {
    id: "natural-proof",
    label: "Natural Proof",
    status: "day 2",
    description: "Looping video-background hero with centered claim lines.",
    Component: HomeHeroNaturalProof,
  },
];

export const defaultHomeHeroVariant = homeHeroVariants[0];

export function getHomeHeroVariant(id: string | null): HomeHeroVariant {
  return homeHeroVariants.find((variant) => variant.id === id) ?? defaultHomeHeroVariant;
}
