import type { ContactNextStep } from "./types";

export const concerns = [
  "Evaluation Kit",
  "Technical Support",
  "Partnerships",
  "Pricing",
];

export const nextSteps: ContactNextStep[] = [
  {
    number: "01",
    title: "Message received",
    copy: "Lands directly with the team - no bots, no ticketing, no auto-routing.",
    label: "Immediate",
    active: true,
  },
  {
    number: "02",
    title: "Scientist takes ownership",
    copy: "A Field Application Scientist with relevant domain expertise is assigned to your inquiry.",
    label: "Within hours",
  },
  {
    number: "03",
    title: "You hear back",
    copy: "A personal, substantive response, not a template. Urgent?",
    label: "Call Us Directly",
    isButton: true,
  },
];
