import EventLocationSection from "@/components/EventLocationSection";
import FAQ from "@/components/Faq";
import FAQSection from "@/components/FAQSection";
import HeroVideo from "@/components/HeroVideo";
import MissionSection from "@/components/MissionSection";
import TabletFooter from "@/components/TabletFooter";
import ThreePillarsSection from "@/components/ThreePillarsSection";

const awardsFAQData: any[] = [
  {
    id: 1,
    question: "When And What Time Are The Awards?",
    answer:
      "The awards ceremony will take place on February 15, 2025, starting at 8 PM EST.",
    isOpen: true,
  },
  {
    id: 2,
    question: "Is The Event Open To The General Public?",
    answer:
      "Yes, the event is open to the general public. Tickets can be purchased through our official website starting January 15, 2025.",
    isOpen: false,
  },
  {
    id: 3,
    question: "How Long Is The Gala?",
    answer:
      "The gala is expected to last approximately 3 hours, including the awards ceremony, performances, and reception.",
    isOpen: false,
  },
  {
    id: 4,
    question: "Who Designed The Trophy, And What Does It Represent?",
    answer:
      "The trophy was designed by renowned artist Maria Chen. It represents artistic excellence and features a helix design symbolizing continuous growth and innovation in the industry.",
    isOpen: false,
  },
];

export default function Home() {
  return (
    <section>
      <HeroVideo />
      {/* <MissionSection /> */}
      <ThreePillarsSection />
      <EventLocationSection />
      <FAQ faqData={awardsFAQData} />
    </section>
  );
}
