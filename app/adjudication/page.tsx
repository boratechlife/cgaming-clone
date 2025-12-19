"use client";
import React, { useState } from "react";
import Head from "next/head";
import FAQ from "@/components/Faq";
import InlineFooter from "@/components/InlineFooter";

// 1. Defined Interface for PersonCard
interface PersonCardProps {
  image: string;
  name: string;
  title: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ image, name, title }) => {
  return (
    <div className="framer-aTYCc framer-nvrgmi">
      <div className="framer-1p3pw81" />
      <div className="framer-180beoc">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
          style={{ aspectRatio: "1" }}
        />
      </div>
      <div className="framer-15lamvk">
        <div className="framer-16rnp7f">
          <h3
            className="framer-text"
            style={
              {
                "--font-selector":
                  "Q1VTVE9NO0JyaWNvbGFnZSBHcm90ZXNxdWUgU2VtaUJvbGQ=",
                "--framer-font-family":
                  '"Bricolage Grotesque SemiBold", "Bricolage Grotesque SemiBold Placeholder", sans-serif',
                "--framer-font-size": "20px",
                "--framer-line-height": "1.4em",
                "--framer-text-color": "rgb(255, 255, 255)",
              } as React.CSSProperties
            } // Cast to allow custom CSS properties
          >
            {name}
          </h3>
        </div>
        <div className="framer-14f2ulj">
          <p
            className="framer-text"
            style={
              {
                "--font-selector": "R0Y7U2NoaWJzdGVkIEdyb3Rlc2stcmVndWxhcg==",
                "--framer-font-family":
                  '"Schibsted Grotesk", "Schibsted Grotesk Placeholder", sans-serif',
                "--framer-line-height": "1.5em",
                "--framer-text-color": "rgb(117, 117, 117)",
              } as React.CSSProperties
            }
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

// 2. Defined Interface for FAQItem
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-gray-900 rounded-lg mb-4">
      <button
        className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Canadian Game Awards - Committee</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Meet the Adjudication Committee
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The adjudication committee of the Canadian Games Awards is made up
            of passionate industry leaders and experts who embody the creativity
            and talent of Canadian gaming. Their dedication ensures that
            excellence in game development is celebrated nationwide.
          </p>
        </div>
      </section>

      {/* Adjudication Process Managers */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-full mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Adjudication Process Managers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <PersonCard
              image="/images/adjudication/hTL5tg70U6k5YTs4ki31lR80U.avif"
              name="Steve Vegvari"
              title="Writer and Host, Freelance"
            />
            <PersonCard
              image="/images/adjudication/8M7r0nNayiTyF0joXUBhKEyaTJQ.avif"
              name="Marcel Dee"
              title="CEO and Founder, A Gaming Network"
            />
          </div>
        </div>
      </section>

      {/* Selection Committee */}
      <section className="py-16 px-6 lg:px-20 bg-gray-800">
        <div className="max-w-full mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Selection Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PersonCard
              image="/images/adjudication/5gMD6hIuqsW3ERqWYv1DGA6u4Q.avif"
              name="Stephanie Greenall"
              title="Founder & CEO, Cake or Death inc."
            />
            <PersonCard
              image="/images/adjudication/gCIWsa9QtKRtJmLKtltzrH1964.jpg"
              name="Chris Lamarucciola"
              title="Manager of Esports, Conestoga College"
            />
            <PersonCard
              image="/images/adjudication/7bBKu8JpjrSWgsTqmEezHMKT6Bk.avif"
              name="Veerender Singh Jubbal"
              title="Game Journalist"
            />
            <PersonCard
              image="/images/adjudication/XdouMiYf0zlFkrxFaytATWtAeDA.avif"
              name="Chris Zaiser"
              title="Writer & Editor, SophistiGamer"
            />
            <PersonCard
              image="/images/adjudication/VyCyeWsvJK9HoWxgY7hIqVXp0o.avif"
              name="Matt Sowinski"
              title="Writer & Host, Console Creatures"
            />
            <PersonCard
              image="/images/adjudication/ICmvOnJn2we13ZF5K0iPVwGDRzc.avif"
              name="Melissa Burns"
              title=""
            />
            <PersonCard
              image="/images/adjudication/81lEKPzBwLPilmGmXvPjcgvW0M.avif"
              name="François Savard"
              title="Game Studies Practitioner & President, Virtual Guardians Foundation"
            />
          </div>
        </div>
      </section>

      {/* Judging Committee */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-full mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Judging Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PersonCard
              image="/images/adjudication/naFmGRuxgBlT96k1JTxravelkI.avif"
              name="Brad Shankar,"
              title="Gaming Editor, MobileSyrup"
            />
            <PersonCard
              image="/images/adjudication/nwfizcqyNQFUxke6SwWbF4IvJM0.avif"
              name="Elaine Gusella"
              title="Game & Marketing Director, Artifact 5"
            />
            <PersonCard
              image="/images/adjudication/HVkUMhWuYKtyyQtU7GcSPeyFtY.avif"
              name="Russell Sng"
              title="Founder, ImmerSynth Inc"
            />
            <PersonCard
              image="/images/adjudication/HMcluVUzO5zvt4NjYiDTqCtYgk.avif"
              name="Raj Patel"
              title="Marketing & Communications Director"
            />
            <PersonCard
              image="/images/adjudication/uZ0ditsdJ7AMl0TfkGZMFxcLX7g.avif"
              name="Valerie Shih-Lau"
              title="Esports Marketing and Events Manager, St. Clair College"
            />
            <PersonCard
              image="/images/adjudication/BTFml2DSYpTCs3P6LRda96Q1E.avif"
              name="Rob Keyes"
              title="Editorial, PR, and Branding Director, ScreenRant"
            />
            <PersonCard
              image="/images/adjudication/DDfweSmSm42oh5Sz6flYqTuhD0Y.jpg"
              name="Bobby Pashalidis"
              title="Editor, Console Creatures"
            />
            <PersonCard
              image="/images/adjudication/JLuVyQjoPwV3vQxCOecdLiyAEk.jpg"
              name="Dayna Eileen"
              title="Executive Editor, CGMagazine"
            />
            <PersonCard
              image="/images/adjudication/Dhm4L2J9q3khZmij21l0HgKaos.avif"
              name="Brendan Frye"
              title="Editor in Chief, CGMagazine"
            />
            <PersonCard
              image="/images/adjudication/4sCK8VW1RylaG3NvYKKP4vSDAU.avif"
              name="Antoine Clerc-Renaud"
              title="Video Game Historian, Entrepreneur"
            />
            <PersonCard
              image="/images/adjudication/6DK7Dx9JEMtwlUOGTgx1iiunbs.jpg"
              name="Lenna Ly-Matz"
              title="Esports Team, Player and Event Management"
            />
            <PersonCard
              image="/images/adjudication/mpYznZi5NlOKZ3osVNQr8XiFDE.avif"
              name="Matthew Rondina"
              title="Editor in Chief, Dapper Tux"
            />
          </div>
        </div>
      </section>

      <FAQ />
      <InlineFooter />
    </div>
  );
}
