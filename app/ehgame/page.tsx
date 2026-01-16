import FAQ from "@/components/Faq";
import GameAwardsPage from "@/components/GameAwardsPage";
import GameshowPartners from "@/components/GameshowPartners";
import type { FAQItem } from "@/components/Faq";
import EhgameExpoHeroSection from "@/components/EhgameexpoHero";

export default function Ehgameexpo() {
  // First, create your FAQ data from the content
  const ehGameFAQData: FAQItem[] = [
    {
      id: 1,
      question: "What is Eh! Game and what does it do?",
      answer:
        "Eh! Game is a Canadian initiative focused on celebrating, showcasing, and supporting video game development across the country. Through live events, showcases, awards, educational programming, and digital platforms, Eh! Game helps Canadian games reach new audiences, supports discovery for players and press, and creates opportunities for learning, conversation, and industry connection. Its initiatives include public showcases, panels, talks, game jams, and collaborations designed to highlight the creativity, talent, and impact of Canadian game development.",
      isOpen: true,
    },
    {
      id: 2,
      question: "Who can participate in Eh! Game events?",
      answer:
        "Eh! Game events are designed for a wide audience, including game developers, publishers, students, industry professionals, content creators, partners, and players. Some events are industry focused, while others are open to the general public. We welcome local developers to share their game—you can request to be an exhibitor at https://zfrmz.ca/b3X3zhsIG6vFGZr7vMi9. For all other details, keep an eye on emails.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What types of games does Eh! Game showcase?",
      answer:
        "Eh! Game showcases a wide range of games created or supported by Canadian studios, from indie projects to large scale productions. This includes original IPs, co-development work, work-for-hire contributions, experimental projects, and commercial releases at different stages of development.",
      isOpen: false,
    },
    {
      id: 4,
      question: "How can studios, partners, or sponsors get involved?",
      answer:
        "Studios, partners, and sponsors can get involved by showcasing games, participating in events, supporting initiatives, or collaborating on special projects. Eh! Game works closely with partners to create meaningful, visible, and impactful collaborations tailored to different goals and audiences.",
      isOpen: false,
    },
    {
      id: 5,
      question: "Why is Eh! Game important for the Canadian industry?",
      answer:
        "Canada is a global leader in game development, yet Canadian creators are often under-recognized at home. Eh! Game exists to strengthen visibility, recognition, and pride in Canadian game development, while building stronger connections between creators, industry, and the public.",
      isOpen: false,
    },
  ];

  return (
    <section className="bg-gray-900">
      <EhgameExpoHeroSection />
      <GameAwardsPage />
      <GameshowPartners />

      <FAQ faqData={ehGameFAQData} />
    </section>
  );
}
