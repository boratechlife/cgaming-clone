"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { manrope, satoshi } from "@/app/layout";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface FAQProps {
  faqData: FAQItem[];
}

const FAQ = ({ faqData }: FAQProps) => {
  const [faqs, setFaqs] = useState<FAQItem[]>(faqData);

  const toggleFAQ = (id: number) => {
    setFaqs(
      faqs.map((faq) => ({
        ...faq,
        isOpen: faq.id === id ? !faq.isOpen : false,
      }))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 tracking-tight ${satoshi.className}`}
          >
            Frequently Asked
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Questions
            </span>
          </h1>
          <p className={`text-gray-400 text-lg max-w-2xl ${manrope.className}`}>
            Find answers to common questions about the awards ceremony, event
            details, and more.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence>
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`
                    rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 
                    ${
                      faq.isOpen
                        ? "bg-[#171717] text-white shadow-lg"
                        : "bg-transparent hover:bg-[#171717] hover:text-white"
                    }
                  `}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className={`text-xl md:text-2xl font-semibold transition-colors ${
                        satoshi.className
                      } duration-300 ${
                        faq.isOpen
                          ? "text-white"
                          : "text-gray-200 hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: faq.isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${manrope.className} ${
                        faq.isOpen ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {faq.isOpen ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {faq.isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="pt-10 pb-4"
                        >
                          <p className="text-gray-300 text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400 text-center">
            Still have questions?{" "}
            <a
              href="mailto:info@awards.com"
              className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
