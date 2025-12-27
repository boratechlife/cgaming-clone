'use client';

import React, { useState } from 'react';

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center p-4 lg:p-8">
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
            Have questions, business opportunities, or other inquiries? We're
            here to support you and look forward to connecting with you.
          </p>
        </div>

        {/* Success/Error Messages */}
        {submitStatus.type && (
          <div
            className={`mb-8 p-4 rounded-xl border ${
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
              setIsSubmitting(true);
              setSubmitStatus({ type: null, message: '' });

              // Client-side validation
              const form = e.currentTarget;
              const name = (form.elements.namedItem('name') as HTMLInputElement)
                ?.value;
              const email = (
                form.elements.namedItem('email') as HTMLInputElement
              )?.value;
              const message = (
                form.elements.namedItem('message') as HTMLTextAreaElement
              )?.value;

              if (!name || !email || !message) {
                e.preventDefault();
                setSubmitStatus({
                  type: 'error',
                  message: 'Please fill in all required fields.',
                });
                setIsSubmitting(false);
                return;
              }
            }}
            className="space-y-8"
          >
            {/* FormSubmit Configuration */}
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
                typeof window !== 'undefined' ? window.location.origin : ''
              }/contact?success=true`}
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            {/* Name Field */}
            <div className="space-y-3">
              <label htmlFor="name" className="block text-gray-300 font-medium">
                Name *
              </label>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl blur-sm"></div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="relative w-full bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-3">
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium"
              >
                Email *
              </label>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl blur-sm"></div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="yourmail@mailprovider.com"
                  className="relative w-full bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-3">
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium"
              >
                Message *
              </label>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl blur-sm"></div>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message..."
                  rows={6}
                  className="relative w-full bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Additional Fields (Optional) */}
            <div className="hidden">
              <input type="hidden" name="_cc" value="" />
              <input
                type="hidden"
                name="_cc"
                value="admin@canadiangameawards.ca"
              />{' '}
              {/* Add CC emails if needed */}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity disabled:opacity-50"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform group-hover:scale-[1.02] group-active:scale-[0.98] disabled:transform-none">
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
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

        {/* Contact Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400">info@canadiangameawards.ca</p>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+1 (XXX) XXX-XXXX</p>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Response Time</h3>
            <p className="text-gray-400">Within 24-48 hours</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Messages will be sent directly to info@canadiangameawards.ca. We
            typically respond within 1-2 business days.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Powered by Formsubmit - No spam, guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
