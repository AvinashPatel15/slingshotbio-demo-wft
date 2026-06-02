import type { Metadata } from "next";
import ReproducibilityClient from "@/components/reproducibility/reproducibility-client";

export const metadata: Metadata = {
  title: "Reproducibility - Slingshot Bio",
  description: "A Reference That Doesn't Change. For two decades, the field has poured money into better lasers, more detectors, smarter unmixing. The instruments became great. The reproducibility didn't.",
};

export default function ReproducibilityPage() {
  return <ReproducibilityClient />;
}
