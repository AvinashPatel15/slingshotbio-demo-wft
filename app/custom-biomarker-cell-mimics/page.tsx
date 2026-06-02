import type { Metadata } from "next";
import CustomBiomarkerClient from "@/components/custom-biomarker-cell-mimics/custom-biomarker-client";

export const metadata: Metadata = {
  title: "Custom TruCytes Biomarker Controls - Slingshot Bio",
  description: "Engineer custom cell mimics matching your exact specification in weeks, not months. Configure your custom surface antigens, expression levels, and room-temperature stability.",
};

export default function CustomBiomarkerPage() {
  return <CustomBiomarkerClient />;
}
