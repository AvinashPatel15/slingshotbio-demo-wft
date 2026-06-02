import type { Metadata } from "next";
import HowMimicsWorkClient from "@/components/how-mimics-work/how-mimics-work-client";

export const metadata: Metadata = {
  title: "How Mimics Work - Slingshot Bio",
  description: "Learn how Slingshot Bio's synthetic cell mimics behave like real cells, offering precision flow cytometry controls that last for up to three years.",
};

export default function HowMimicsWorkPage() {
  return <HowMimicsWorkClient />;
}
