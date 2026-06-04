"use client";

import { BookMeeting } from "../ui/book-meeting";
import { GraphShell } from "./GraphShell";
import { ComparisonBlock } from "./ComparisonBlock";

export function ProblemSection() {
  return (
    <section className="section section--light problem-section">
      <div className="frame problem-frame">
        <div className="section-heading reveal">
          <p className="eyebrow">Comparative Reproducibility Study</p>
          <h2 className="text-heading-lg">Cell Mimics Prove to Be Superior to Biologic Controls</h2>
        </div>
        <div className="problem-divider" aria-hidden="true" />
        <ComparisonBlock />
        <GraphShell />
        <BookMeeting />
      </div>
    </section>
  );
}
