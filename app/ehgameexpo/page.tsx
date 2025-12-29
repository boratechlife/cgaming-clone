import EhgameExpoHeroSection from "@/components/EhgameexpoHero";
import FAQ from "@/components/Faq";
import GameAwardsPage from "@/components/GameAwardsPage";
import GameshowPartners from "@/components/GameshowPartners";
import InlineFooter from "@/components/InlineFooter";
import TabletFooter from "@/components/TabletFooter";
import type { FAQItem } from "@/components/Faq";

export default function Ehgameexpo() {
  // First, create your FAQ data from the content
  const ehGameFAQData: FAQItem[] = [
    {
      id: 1,
      question: "What is EH! Game?",
      answer:
        "EH! Game is an initiative focused on showcasing and supporting Canadian video game development through events, awards, showcases, educational programming, and digital platforms.",
      isOpen: true,
    },
    {
      id: 2,
      question: "Who can participate in EH! Game events?",
      answer:
        "EH! Game events are designed for a wide audience, including game developers, publishers, students, industry professionals, content creators, partners, and players. Some events are industry-focused, while others are open to the public.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What types of games does EH! Game showcase?",
      answer:
        "EH! Game showcases a wide range of games, from indie projects to large-scale productions. This includes original IPs, co-development work, work-for-hire contributions, experimental games, and commercial releases created or supported by Canadian studios.",
      isOpen: false,
    },
    {
      id: 4,
      question: "How does EH! Game support game discovery?",
      answer:
        "EH! Game supports discovery through live showcases, curated selections, digital platforms, media content, interviews, and partnerships that help Canadian games reach players, press, and industry decision-makers.",
      isOpen: false,
    },
    {
      id: 5,
      question: "Does EH! Game offer educational or industry programming?",
      answer:
        "Yes. EH! Game produces panels, talks, game jam, and discussions on topics such as game development, business, publishing, technology, accessibility, and the future of the industry in Canada.",
      isOpen: false,
    },
    {
      id: 6,
      question: "How can studios, partners, or sponsors get involved?",
      answer:
        "Studios, partners, and sponsors can get involved by participating in events, showcasing games, supporting initiatives, or collaborating on special projects. EH! Game works closely with partners to create meaningful, visible, and impactful collaborations.",
      isOpen: false,
    },
    {
      id: 7,
      question: "Why is EH! Game important for the Canadian industry?",
      answer:
        "Canada is a global leader in game development, yet Canadian creators are often under-recognized at home. EH! Game exists to strengthen visibility, recognition, and pride in Canadian game development, while building stronger connections across the industry.",
      isOpen: false,
    },
  ];

  return (
    <section className="bg-gray-900">
      <EhgameExpoHeroSection />
      <GameAwardsPage />
      <GameshowPartners />

      <FAQ faqData={ehGameFAQData} />
      <InlineFooter />
    </section>
  );
}
