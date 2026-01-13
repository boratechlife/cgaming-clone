"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const ContactFormContent = () => {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState("General");
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Mapping for client reference (The form still sends to the central FormSubmit ID,
  // but the subject line will tell the receiver exactly where to route it)
  const inquiryMap: Record<string, string> = {
    Sponsor: "carl@canadiangameawards.ca",
    General: "info@canadiangameawards.ca",
    Volunteer: "cgameawards+volunteers@gmail.com",
    Exhibitor: "production@canadiangameawards.ca",
    Influencer: "cgameawards@gmail.com",
  };

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
    }
  }, [searchParams]);

  return (
    <div className="max-w-4xl w-full mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50"></div>
            <span className="relative bg-gray-900 px-6 py-2 rounded-full text-sm font-medium text-white border border-gray-700">
              Contact Us
            </span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Need assistance or information?
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Have questions, business opportunities, or other inquiries? Want to
          volunteer? We&apos;re here to support you and look forward to
          connecting with you.
        </p>
      </div>

      {/* Success/Error Messages */}
      {submitStatus.type && (
        <div
          className={`mb-8 p-4 rounded-xl border transition-all animate-in fade-in slide-in-from-top-2 ${
            submitStatus.type === "success"
              ? "bg-green-900/30 border-green-700 text-green-300"
              : "bg-red-900/30 border-red-700 text-red-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <p>{submitStatus.message}</p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl">
        <form
          action="https://formsubmit.co/d10eb42ca367ddc735c0331edabcddac"
          method="POST"
          onSubmit={(e) => {
            const form = e.currentTarget;
            const name = (form.elements.namedItem("name") as HTMLInputElement)
              ?.value;
            const email = (form.elements.namedItem("email") as HTMLInputElement)
              ?.value;
            const message = (
              form.elements.namedItem("message") as HTMLTextAreaElement
            )?.value;

            if (!name || !email || !message) {
              e.preventDefault();
              setSubmitStatus({
                type: "error",
                message: "Please fill in all required fields.",
              });
              return;
            }
            setIsSubmitting(true);
          }}
          className="space-y-6"
        >
          {/* Inquiry Dropdown */}
          <div className="space-y-3">
            <label
              htmlFor="inquiry"
              className="block text-gray-300 font-medium"
            >
              Inquiry Type *
            </label>
            <select
              id="inquiry"
              name="Inquiry_Type"
              value={selectedInquiry}
              onChange={(e) => setSelectedInquiry(e.target.value)}
              className="w-full bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
            >
              <option value="General">General Inquiry</option>
              <option value="Sponsor">Sponsorship Opportunities</option>
              <option value="Volunteer">Volunteer Application</option>
              <option value="Exhibitor">Exhibitor Information</option>
              <option value="Influencer">Influencer & Content Creator</option>
            </select>
          </div>

          {/* Hidden Subject Field - Dynamically updates based on selection */}
          <input
            type="hidden"
            name="_subject"
            value={`CGA Contact: ${selectedInquiry} (Route to: ${inquiryMap[selectedInquiry]})`}
          />

          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting the Canadian Game Awards! We have received your message and will get back to you shortly."
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value={`${
              typeof window !== "undefined"
                ? window.location.origin + window.location.pathname
                : ""
            }?success=true`}
          />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label htmlFor="name" className="block text-gray-300 font-medium">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 transition-all"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-3">
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="yourmail@provider.com"
                className="w-full bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 transition-all"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-3">
            <label
              htmlFor="message"
              className="block text-gray-300 font-medium"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="How can we help you?"
              rows={5}
              className="w-full bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              disabled={isSubmitting}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform group-hover:scale-[1.01]">
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center p-4 lg:p-8 lg:py-16">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <ContactFormContent />
      </Suspense>
    </div>
  );
};

export default ContactUs;
