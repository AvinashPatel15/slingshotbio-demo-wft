"use client";

import React, { useState } from "react";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="contact-page min-h-screen bg-[#fcfbfa]">
      <ContactHero />

      <section id="how-can-we-help-section" className="py-14 md:py-24 bg-[#F7F6F5]">
        <div className="mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.32fr)_minmax(330px,420px)] gap-8 lg:gap-10 items-start">
            <ContactForm
              isSubmitted={isSubmitted}
              selectedConcern={selectedConcern}
              setSelectedConcern={setSelectedConcern}
              handleSubmit={handleSubmit}
            />
            <ContactSidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
