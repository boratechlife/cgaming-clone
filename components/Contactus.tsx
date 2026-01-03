'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// 1. Move the logic into a sub-component
const ContactFormContent = () => {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
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
          Have questions, business opportunities, or other inquiries? We're here
          to support you and look forward to connecting with you.
        </p>
      </div>

      {/* Success/Error Messages */}
      {submitStatus.type && (
        <div
          className={`mb-8 p-4 rounded-xl border transition-all animate-in fade-in slide-in-from-top-2 ${
            submitStatus.type === 'success'
              ? 'bg-green-900/30 border-green-700 text-green-300'
              : 'bg-red-900/30 border-red-700 text-red-300'
          }`}
        >
          <div className="flex items-center gap-3">
            {submitStatus.type === 'success' ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
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
            const name = (form.elements.namedItem('name') as HTMLInputElement)
              ?.value;
            const email = (form.elements.namedItem('email') as HTMLInputElement)
              ?.value;
            const message = (
              form.elements.namedItem('message') as HTMLTextAreaElement
            )?.value;

            if (!name || !email || !message) {
              e.preventDefault();
              setSubmitStatus({
                type: 'error',
                message: 'Please fill in all required fields.',
              });
              return;
            }

            setIsSubmitting(true);
            setSubmitStatus({ type: null, message: '' });
          }}
          className="space-y-8"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Contact Form Message - Canadian Game Awards"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting the Canadian Game Awards! We have received your message and will get back to you within 1-2 business days."
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value={`${
              typeof window !== 'undefined'
                ? window.location.origin + window.location.pathname
                : ''
            }?success=true`}
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: 'none' }} />

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
            <label htmlFor="email" className="block text-gray-300 font-medium">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="yourmail@mailprovider.com"
              className="w-full bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 transition-all"
              disabled={isSubmitting}
            />
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
              placeholder="Your message..."
              rows={6}
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
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform group-hover:scale-[1.01] group-active:scale-[0.99]">
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// 2. Main component wraps the content in Suspense
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
