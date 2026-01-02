"use client";
import React, { useState } from "react";
import Head from "next/head";
import InlineFooter from "@/components/InlineFooter";

// Defined Interface for PersonCard
interface PersonCardProps {
  image: string;
  name: string;
  title: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ image, name, title }) => {
  return (
    <div className="group bg-gray-800 rounded-xl p-5 transition-all duration-300 hover:bg-gray-750 hover:transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">{title}</p>
      </div>
    </div>
  );
};

// ManagerCard component with distinct styling
const ManagerCard: React.FC<PersonCardProps> = ({ image, name, title }) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02] border border-gray-700">
      <div className="relative w-72 h-72 mb-8 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/30" />
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-3">{name}</h3>
        <p className="text-blue-300 text-lg font-medium">{title}</p>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span>Adjudication Process Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Committee Section Header Component
const CommitteeHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-6">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500"></div>
        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
          Industry Experts
        </span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500"></div>
      </div>
      <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Judging Committee
      </h2>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
        Our esteemed committee comprises industry leaders, creators, and
        innovators who bring decades of collective experience to ensure every
        submission receives fair, comprehensive, and expert evaluation.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-gray-300">Final Evaluation</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-gray-300">Award Decisions</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
          <span className="text-gray-300">Expert Review</span>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const committeeMembers = [
    {
      image: "/images/adjudication/naFmGRuxgBlT96k1JTxravelkI.avif",
      name: "Brad Shankar",
      title: "Gaming Editor, MobileSyrup",
    },
    {
      image: "/images/adjudication/nwfizcqyNQFUxke6SwWbF4IvJM0.avif",
      name: "Elaine Gusella",
      title: "Game & Marketing Director, Artifact 5",
    },
    {
      image: "/images/adjudication/HVkUMhWuYKtyyQtU7GcSPeyFtY.avif",
      name: "Russell Sng",
      title: "Founder, ImmerSynth Inc",
    },
    {
      image: "/images/adjudication/HMcluVUzO5zvt4NjYiDTqCtYgk.avif",
      name: "Raj Patel",
      title: "Marketing & Communications Director",
    },
    {
      image: "/images/adjudication/uZ0ditsdJ7AMl0TfkGZMFxcLX7g.avif",
      name: "Valerie Shih-Lau",
      title: "Esports Marketing and Events Manager, St. Clair College",
    },
    {
      image: "/images/adjudication/BTFml2DSYpTCs3P6LRda96Q1E.avif",
      name: "Rob Keyes",
      title: "Editorial, PR, and Branding Director, ScreenRant",
    },
    {
      image: "/images/adjudication/DDfweSmSm42oh5Sz6flYqTuhD0Y.jpg",
      name: "Bobby Pashalidis",
      title: "Editor, Console Creatures",
    },
    {
      image: "/images/adjudication/JLuVyQjoPwV3vQxCOecdLiyAEk.jpg",
      name: "Dayna Eileen",
      title: "Executive Editor, CGMagazine",
    },
    {
      image: "/images/adjudication/Dhm4L2J9q3khZmij21l0HgKaos.avif",
      name: "Brendan Frye",
      title: "Editor in Chief, CGMagazine",
    },
    {
      image: "/images/adjudication/4sCK8VW1RylaG3NvYKKP4vSDAU.avif",
      name: "Antoine Clerc-Renaud",
      title: "Video Game Historian, Entrepreneur",
    },
    {
      image: "/images/adjudication/6DK7Dx9JEMtwlUOGTgx1iiunbs.jpg",
      name: "Lenna Ly-Matz",
      title: "Esports Team, Player and Event Management",
    },
    {
      image: "/images/adjudication/mpYznZi5NlOKZ3osVNQr8XiFDE.avif",
      name: "Matthew Rondina",
      title: "Editor in Chief, Dapper Tux",
    },
    {
      image: "/images/adjudication/5gMD6hIuqsW3ERqWYv1DGA6u4Q.avif",
      name: "Stephanie Greenall",
      title: "Founder & CEO, Cake or Death inc.",
    },
    {
      image: "/images/adjudication/gCIWsa9QtKRtJmLKtltzrH1964.jpg",
      name: "Chris Lamarucciola",
      title: "Manager of Esports, Conestoga College",
    },
    {
      image: "/images/adjudication/7bBKu8JpjrSWgsTqmEezHMKT6Bk.avif",
      name: "Veerender Singh Jubbal",
      title: "Game Journalist",
    },
    {
      image: "/images/adjudication/XdouMiYf0zlFkrxFaytATWtAeDA.avif",
      name: "Chris Zaiser",
      title: "Writer & Editor, SophistiGamer",
    },
    {
      image: "/images/adjudication/VyCyeWsvJK9HoWxgY7hIqVXp0o.avif",
      name: "Matt Sowinski",
      title: "Writer & Host, Console Creatures",
    },
    {
      image: "/images/adjudication/ICmvOnJn2we13ZF5K0iPVwGDRzc.avif",
      name: "Melissa Burns",
      title: "Founder & CEO of Esport Canada",
    },
    {
      image: "/images/adjudication/81lEKPzBwLPilmGmXvPjcgvW0M.avif",
      name: "François Savard",
      title:
        "Game Studies Practitioner & President, Virtual Guardians Foundation",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
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
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Meet The Committee
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Adjudication Committee
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            The Canadian Games Awards adjudication committee consists of
            distinguished industry leaders and experts who champion Canadian
            creativity and innovation in gaming. Their collective expertise
            ensures that excellence receives the recognition it deserves.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">19</div>
              <div className="text-gray-400">Industry Experts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2</div>
              <div className="text-gray-400">Process Managers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                100%
              </div>
              <div className="text-gray-400">Dedicated to Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Adjudication Process Managers Section */}
      <section className="py-20 px-6 lg:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Process <span className="text-blue-400">Leadership</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our Adjudication Process Managers ensure the integrity and
              fairness of the entire evaluation process, overseeing procedures
              and maintaining our rigorous standards.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-12 max-w-5xl mx-auto">
            <ManagerCard
              image="/images/adjudication/hTL5tg70U6k5YTs4ki31lR80U.avif"
              name="Steve Vegvari"
              title="Writer and Host, Freelance"
            />
            <ManagerCard
              image="/images/adjudication/8M7r0nNayiTyF0joXUBhKEyaTJQ.avif"
              name="Marcel Dee"
              title="CEO and Founder, A Gaming Network"
            />
          </div>
        </div>
      </section>

      {/* Judging Committee Section */}
      <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <CommitteeHeader />

          {/* Committee Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {committeeMembers.map((member, index) => (
              <PersonCard
                key={index}
                image={member.image}
                name={member.name}
                title={member.title}
              />
            ))}
          </div>

          {/* Committee Stats Footer */}
          <div className="mt-20 pt-12 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Commitment to Excellence
                </h3>
                <p className="text-gray-300 max-w-2xl">
                  Each committee member brings unique expertise and perspective,
                  ensuring comprehensive evaluation across all game development
                  disciplines.
                </p>
              </div>

              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">19</div>
                  <div className="text-gray-400 text-sm">Committee Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-gray-400 text-sm">
                    Years Avg. Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-gray-400 text-sm">
                    Companies Represented
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
