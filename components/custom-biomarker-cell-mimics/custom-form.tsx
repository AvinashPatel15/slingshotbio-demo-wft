"use client";

import React, { useState } from "react";
import { SmallCheckIcon, PulsingCheckIcon } from "../ui/icons";

interface FormField {
  _key?: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  width?: string;
  options?: string[];
}

interface ConcernItem {
  label: string;
  buttonText: string;
  defaultMessage?: string | null;
  active?: boolean;
  successTitle?: string;
  successDescription?: string;
}

interface CustomFormProps {
  title?: string;
  description?: string;
  checklist?: string[];
  submitButtonText?: string;
  concernsFieldName?: string;
  concerns?: ConcernItem[];
  formFields?: FormField[];
  selectedConcern?: string;
}

const defaultChecklist = [
  "Complimentary sample kit — no credit card required",
  "Direct access to a Field Application Scientist",
  "Full Certificate of Analysis included",
  "ISO 13485 supply chain documentation on request",
];

const defaultConcerns: ConcernItem[] = [
  {
    label: "Evaluation Kit",
    buttonText: "Request Evaluation Kit",
    active: true,
    successTitle: "Request Submitted Successfully!",
    successDescription: "Thank you! A Field Application Scientist will review your request and reply within 2 business days to coordinate your custom sample shipment.",
  },
  {
    label: "Technical Support",
    buttonText: "Submit Support Request",
    successTitle: "Support Request Submitted!",
    successDescription: "Thank you! A Field Application Scientist will review your technical support request and reply within 2 business days.",
  },
  {
    label: "Partnerships",
    buttonText: "Contact Partnerships",
    successTitle: "Partnership Request Received!",
    successDescription: "Thank you! Our team will review your partnership inquiry and reply within 2 business days.",
  },
  {
    label: "Pricing",
    buttonText: "Request Pricing Details",
    successTitle: "Pricing Request Received!",
    successDescription: "Thank you! A Field Application Scientist will review your pricing request and reply within 2 business days with pricing details.",
  },
];

const defaultFormFields: FormField[] = [
  {
    name: "firstname",
    label: "First Name *",
    type: "text",
    placeholder: "Jane",
    required: true,
    width: "half",
  },
  {
    name: "lastname",
    label: "Last Name *",
    type: "text",
    placeholder: "Smith",
    required: true,
    width: "half",
  },
  {
    name: "email",
    label: "Institutional Email *",
    type: "email",
    placeholder: "jsmith@university.edu",
    required: true,
    width: "full",
  },
  {
    name: "company",
    label: "Institution / Company *",
    type: "text",
    placeholder: "University of...",
    required: true,
    width: "full",
  },
  {
    name: "message",
    label: "Write a message *",
    type: "textarea",
    placeholder: "Write your primary application workflow or details here...",
    required: true,
    width: "full",
  },
];

export default function CustomForm({
  title = "Build Your Own Customised TruCytes",
  description = "A Field Application Scientist will reply within 2 business days with a TruCytes® sample matched to your application. No sales calls, no pressure — just science.",
  checklist = defaultChecklist,
  submitButtonText = "Request Evaluation Kit",
  concernsFieldName = "concern",
  concerns = defaultConcerns,
  formFields = defaultFormFields,
  selectedConcern: selectedConcernProp,
}: CustomFormProps) {
  // Determine active concern (find concern matching selectedConcernProp, fallback to active, fallback to first concern option)
  const activeConcernItem = concerns?.find((c) => c.label === selectedConcernProp) || concerns?.find((c) => c.active) || concerns?.[0];
  const activeConcern = activeConcernItem?.label || null;

  const displaySuccessTitle = activeConcernItem?.successTitle || "Request Submitted Successfully!";
  const displaySuccessDescription = activeConcernItem?.successDescription || "Thank you! A Field Application Scientist will review your request and reply within 2 business days to coordinate your custom sample shipment.";

  const [selectedConcern, setSelectedConcern] = useState<string | null>(activeConcern);

  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const field of formFields) {
      if (field.name) {
        initial[field.name] = "";
      }
    }
    // Set initial concern and default message if applicable
    if (activeConcern) {
      const concernsKey = concernsFieldName || "concern";
      initial[concernsKey] = activeConcern;

      const foundConcern = concerns.find((c) => c.label === activeConcern);
      if (foundConcern?.defaultMessage) {
        initial.message = foundConcern.defaultMessage;
      }
    }
    return initial;
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getButtonText = () => {
    if (selectedConcern) {
      const foundConcern = concerns.find((c) => c.label === selectedConcern);
      if (foundConcern?.buttonText) {
        return foundConcern.buttonText;
      }
    }
    return submitButtonText;
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    for (const field of formFields) {
      if (!field.name) continue;
      const value = (formData[field.name] || "").trim();
      const cleanLabel = field.label ? field.label.replace(/\s*\*+$/, "") : field.name;

      if (field.required && !value) {
        tempErrors[field.name] = `${cleanLabel} is required`;
      } else if (field.type === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
        tempErrors[field.name] = "Please enter a valid email address";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate standard submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const handleReset = () => {
    const initial: Record<string, string> = {};
    for (const field of formFields) {
      if (field.name) {
        initial[field.name] = "";
      }
    }
    if (activeConcern) {
      const concernsKey = concernsFieldName || "concern";
      initial[concernsKey] = activeConcern;

      const foundConcern = concerns.find((c) => c.label === activeConcern);
      if (foundConcern?.defaultMessage) {
        initial.message = foundConcern.defaultMessage;
      }
    }
    setFormData(initial);
    setErrors({});
    setSelectedConcern(activeConcern);
    setIsSuccess(false);
  };

  const isButtonDisabled = isSubmitting || !selectedConcern;

  return (
    <section id="custom-form-section" className="relative w-full bg-[#faf9f6] text-[#0d0c0c] py-20 md:py-28 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="frame relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Copy Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {title && (
              <h2 className="font-heading font-semibold leading-[1.2] sm:leading-[57px] tracking-[-0.96px] text-[36px] sm:text-4xl md:text-[48px] text-[#0d0c0c] mb-6">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-[#333130] font-sans text-base md:text-[18px] leading-[27px] mb-10 max-w-[520px]">
                {description}
              </p>
            )}

            {/* Checklist Items with custom border separators */}
            {checklist && checklist.length > 0 && (
              <ul className="w-full max-w-[480px] border-t border-[#dedcda]/40">
                {checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 py-4 border-b border-[#E4E1DC]">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E8F5EE] text-[#1A6B4A] shrink-0">
                      <SmallCheckIcon className="w-3 h-3" />
                    </div>
                    <span className="text-[#555350] font-sans text-[14px] font-medium leading-[24px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column: Form Container Card */}
          <div className="lg:col-span-6 w-full max-w-[580px] mx-auto relative z-20">
            <div className="bg-white border border-[#E4E1DC] rounded-[14px] p-8 md:px-8 md:pt-8 md:pb-6 shadow-[0_15px_45px_rgba(0,0,0,0.02)] transition-all duration-300 relative min-h-[500px] flex flex-col justify-center">
              {/* Form Success State */}
              {isSuccess ? (
                <div className="text-center py-10 animate-fade-up flex flex-col items-center">
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-6 border border-emerald-500/20 shadow-inner">
                    <PulsingCheckIcon className="w-10 h-10 animate-pulse" />
                  </div>
                  {displaySuccessTitle && (
                    <h3 className="font-heading font-bold text-2xl text-[#0d0c0c] mb-3">
                      {displaySuccessTitle}
                    </h3>
                  )}
                  {displaySuccessDescription && (
                    <p className="text-[#4e4a47] font-sans text-sm md:text-base leading-relaxed max-w-[380px] mx-auto">
                      {displaySuccessDescription}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-8 inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#dedcda] bg-white px-6 py-2.5 font-semibold text-xs text-[#4e4a47] hover:bg-[#faf9f6] transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#f76a00] focus-visible:ring-offset-2"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                /* Main Form Fields */
                <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {formFields.map((field) => {
                      if (!field.name) return null;
                      const isHalf = field.width === "half";
                      const id = field.name;
                      const hasError = !!errors[field.name];

                      return (
                        <div
                          key={field.name}
                          className={isHalf ? "col-span-1" : "col-span-1 sm:col-span-2"}
                        >
                          <label
                            htmlFor={id}
                            className="block text-[11px] font-heading font-semibold text-[#9A9794] uppercase leading-[18px] tracking-[0.99px] mb-1.5"
                          >
                            {field.label}
                          </label>

                          {field.type === "textarea" ? (
                            <textarea
                              id={id}
                              value={formData[field.name] || ""}
                              onChange={(e) =>
                                setFormData({ ...formData, [field.name]: e.target.value })
                              }
                              placeholder={field.placeholder}
                              rows={4}
                              className={`w-full bg-white border rounded-[8px] px-4 py-3 text-[14px] leading-[19px] font-sans focus:outline-none focus:ring-1 focus:ring-[#f76a00] resize-none ${
                                hasError
                                  ? "border-red-500 bg-red-50/20"
                                  : "border-[#dedcda]"
                              }`}
                              disabled={isSubmitting}
                            />
                          ) : field.type === "select" ? (
                            <div className="relative">
                              <select
                                id={id}
                                value={formData[field.name] || ""}
                                onChange={(e) =>
                                  setFormData({ ...formData, [field.name]: e.target.value })
                                }
                                className={`w-full bg-white border rounded-[8px] px-4 py-3 text-[14px] font-sans focus:outline-none focus:ring-1 focus:ring-[#f76a00] appearance-none ${
                                  hasError
                                    ? "border-red-500 bg-red-50/20"
                                    : "border-[#dedcda]"
                                }`}
                                disabled={isSubmitting}
                              >
                                <option value="" disabled hidden>
                                  {field.placeholder || "Select an option"}
                                </option>
                                {field.options?.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[#9A9794]">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                          ) : field.type === "checkbox" ? (
                            <div className="flex items-center gap-2 py-1">
                              <input
                                id={id}
                                type="checkbox"
                                checked={formData[field.name] === "true"}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [field.name]: e.target.checked ? "true" : "false",
                                  })
                                }
                                className="h-4 w-4 rounded border-[#dedcda] text-[#f76a00] focus:ring-[#f76a00]"
                                disabled={isSubmitting}
                              />
                              <label htmlFor={id} className="text-sm font-sans text-[#555350]">
                                {field.placeholder || "Agree"}
                              </label>
                            </div>
                          ) : field.type === "radio" ? (
                            <div className="flex flex-col gap-2">
                              {field.options?.map((opt) => (
                                <div key={opt} className="flex items-center gap-2">
                                  <input
                                    id={`${id}-${opt}`}
                                    name={field.name}
                                    type="radio"
                                    value={opt}
                                    checked={formData[field.name] === opt}
                                    onChange={(e) =>
                                      setFormData({ ...formData, [field.name]: e.target.value })
                                    }
                                    className="h-4 w-4 border-[#dedcda] text-[#f76a00] focus:ring-[#f76a00]"
                                    disabled={isSubmitting}
                                  />
                                  <label htmlFor={`${id}-${opt}`} className="text-sm font-sans text-[#555350]">
                                    {opt}
                                  </label>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <input
                              id={id}
                              type={field.type || "text"}
                              value={formData[field.name] || ""}
                              onChange={(e) =>
                                setFormData({ ...formData, [field.name]: e.target.value })
                              }
                              className={`w-full bg-white border border-[#E4E1DC] rounded-[8px] px-4 py-3 text-[14px] font-sans focus:outline-none focus:ring-1 focus:ring-[#f76a00] placeholder-[#a8a29e] ${
                                hasError
                                  ? "border-red-500 bg-red-50/20"
                                  : "border-[#dedcda] placeholder:text-[15px]"
                              }`}
                              placeholder={field.placeholder}
                              disabled={isSubmitting}
                            />
                          )}

                          {hasError && (
                            <p className="text-red-500 text-xs mt-1 font-sans">
                              {errors[field.name]}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isButtonDisabled}
                      className={`w-full inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#f76a00] px-7 py-3.5 font-semibold text-[13px] text-white shadow-[0_4px_15px_rgba(247,106,0,0.15)] transition-all duration-300 hover:shadow-[0_8px_22px_rgba(247,106,0,0.25)] hover:-translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-[#f76a00] focus-visible:ring-offset-2 ${
                        isButtonDisabled
                          ? "opacity-50 cursor-not-allowed hover:translate-y-0"
                          : "cursor-pointer"
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        getButtonText()
                      )}
                    </button>
                  </div>

                  {/* Soft response timing notice */}
                  <p className="text-center text-[11px] leading-[18.7px] text-[#9A9794] font-heading font-medium">
                    Reply &lt;2 business days · No commitment
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
