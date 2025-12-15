'use client';
import React, { useState } from 'react';
import Head from 'next/head';

// Updated PersonCard Component with specific styles
const PersonCard = ({ image, name, title }) => {
  return (
    <div className="framer-aTYCc framer-nvrgmi">
      <div className="framer-1p3pw81" />
      <div className="framer-180beoc">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
          style={{ aspectRatio: '1' }}
        />
      </div>
      <div className="framer-15lamvk">
        <div className="framer-16rnp7f">
          <h3
            className="framer-text"
            style={{
              '--font-selector':
                'Q1VTVE9NO0JyaWNvbGFnZSBHcm90ZXNxdWUgU2VtaUJvbGQ=',
              '--framer-font-family':
                '"Bricolage Grotesque SemiBold", "Bricolage Grotesque SemiBold Placeholder", sans-serif',
              '--framer-font-size': '20px',
              '--framer-line-height': '1.4em',
              '--framer-text-color': 'rgb(255, 255, 255)',
            }}
          >
            {name}
          </h3>
        </div>
        <div className="framer-14f2ulj">
          <p
            className="framer-text"
            style={{
              '--font-selector': 'R0Y7U2NoaWJzdGVkIEdyb3Rlc2stcmVndWxhcg==',
              '--framer-font-family':
                '"Schibsted Grotesk", "Schibsted Grotesk Placeholder", sans-serif',
              '--framer-line-height': '1.5em',
              '--framer-text-color': 'rgb(117, 117, 117)',
            }}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900 rounded-lg mb-4">
      <button
        className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
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
      <section className="py-16 px-6">
        <div className="max-w-full mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Adjudication Process Managers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <PersonCard
              image="https://framerusercontent.com/images/hTL5tg70U6k5YTs4ki31lR80U.jpg"
              name="Steve Vegvari"
              title="Writer and Host, Freelance"
            />
            <PersonCard
              image="https://framerusercontent.com/images/8M7r0nNayiTyF0joXUBhKEyaTJQ.jpg"
              name="Marcel Dee"
              title="CEO and Founder, A Gaming Network"
            />
          </div>
        </div>
      </section>

      {/* Selection Committee */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-full mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Selection Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PersonCard
              image="https://framerusercontent.com/images/5gMD6hIuqsW3ERqWYv1DGA6u4Q.jpg"
              name="Stephanie Greenall"
              title="Founder & CEO, Cake or Death inc."
            />
            <PersonCard
              image="https://framerusercontent.com/images/gCIWsa9QtKRtJmLKtltzrH1964.jpg"
              name="Chris Lamarucciola"
              title="Manager of Esports, Conestoga College"
            />
            <PersonCard
              image="https://framerusercontent.com/images/7bBKu8JpjrSWgsTqmEezHMKT6Bk.jpg"
              name="Veerender Singh Jubbal"
              title="Game Journalist"
            />
            <PersonCard
              image="https://framerusercontent.com/images/XdouMiYf0zlFkrxFaytATWtAeDA.jpg"
              name="Chris Zaiser"
              title="Writer & Editor, SophistiGamer"
            />
            <PersonCard
              image="https://framerusercontent.com/images/VyCyeWsvJK9HoWxgY7hIqVXp0o.jpg"
              name="Matt Sowinski"
              title="Writer & Host, Console Creatures"
            />
            <PersonCard
              image="https://framerusercontent.com/images/ICmvOnJn2we13ZF5K0iPVwGDRzc.jpg"
              name="Melissa Burns"
              title=""
            />
            <PersonCard
              image="https://framerusercontent.com/images/81lEKPzBwLPilmGmXvPjcgvW0M.png"
              name="François Savard"
              title="Game Studies Practitioner & President, Virtual Guardians Foundation"
            />
          </div>
        </div>
      </section>

      {/* Judging Committee */}
      <section className="py-16 px-6">
        <div className="max-w-full mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Judging Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PersonCard
              image="https://framerusercontent.com/images/naFmGRuxgBlT96k1JTxravelkI.jpeg"
              name="Brad Shankar,"
              title="Gaming Editor, MobileSyrup"
            />
            <PersonCard
              image="https://framerusercontent.com/images/nwfizcqyNQFUxke6SwWbF4IvJM0.jpg"
              name="Elaine Gusella"
              title="Game & Marketing Director, Artifact 5"
            />
            <PersonCard
              image="https://framerusercontent.com/images/HVkUMhWuYKtyyQtU7GcSPeyFtY.jpg"
              name="Russell Sng"
              title="Founder, ImmerSynth Inc"
            />
            <PersonCard
              image="https://framerusercontent.com/images/HMcluVUzO5zvt4NjYiDTqCtYgk.jpg"
              name="Raj Patel"
              title="Marketing & Communications Director"
            />
            <PersonCard
              image="https://framerusercontent.com/images/uZ0ditsdJ7AMl0TfkGZMFxcLX7g.png"
              name="Valerie Shih-Lau"
              title="Esports Marketing and Events Manager, St. Clair College"
            />
            <PersonCard
              image="https://framerusercontent.com/images/BTFml2DSYpTCs3P6LRda96Q1E.jpg"
              name="Rob Keyes"
              title="Editorial, PR, and Branding Director, ScreenRant"
            />
            <PersonCard
              image="https://framerusercontent.com/images/DDfweSmSm42oh5Sz6flYqTuhD0Y.jpg"
              name="Bobby Pashalidis"
              title="Editor, Console Creatures"
            />
            <PersonCard
              image="https://framerusercontent.com/images/JLuVyQjoPwV3vQxCOecdLiyAEk.jpg"
              name="Dayna Eileen"
              title="Executive Editor, CGMagazine"
            />
            <PersonCard
              image="https://framerusercontent.com/images/Dhm4L2J9q3khZmij21l0HgKaos.jpg"
              name="Brendan Frye"
              title="Editor in Chief, CGMagazine"
            />
            <PersonCard
              image="https://framerusercontent.com/images/4sCK8VW1RylaG3NvYKKP4vSDAU.jpeg"
              name="Antoine Clerc-Renaud"
              title="Video Game Historian, Entrepreneur"
            />
            <PersonCard
              image="https://framerusercontent.com/images/6DK7Dx9JEMtwlUOGTgx1iiunbs.jpg"
              name="Lenna Ly-Matz"
              title="Esports Team, Player and Event Management"
            />
            <PersonCard
              image="https://framerusercontent.com/images/mpYznZi5NlOKZ3osVNQr8XiFDE.jpg"
              name="Matthew Rondina"
              title="Editor in Chief, Dapper Tux"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="When and what time are the awards?"
              answer="The Canadian Game Awards will take place on November 15, 2025 at 7:00 PM EST."
            />
            <FAQItem
              question="Is the event open to the general public?"
              answer="Yes, the event is open to the public. Tickets can be purchased through our website."
            />
            <FAQItem
              question="How long is the gala?"
              answer="The gala typically lasts for approximately 3 hours, including the awards ceremony and after-party."
            />
            <FAQItem
              question="Who designed the trophy, and what does it represent?"
              answer="The trophy was designed by a team of Canadian artists and represents the excellence and innovation in Canadian game development."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-purple-800 to-purple-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img
                src="https://framerusercontent.com/images/QpfRERS028JTTMK15ucTYWGXDM.png"
                alt="Footer Logo"
                className="h-12"
              />
              <p className="text-gray-300 mt-2">
                The Canadian Game Awards © 2025 All Rights Reserved
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitch text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
