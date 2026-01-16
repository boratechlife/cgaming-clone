import AwardsPartners from "@/components/AwardsPartners";
import CharityPartner from "@/components/CharityPartner";
import CocktailPartners from "@/components/CocktailPartners";
import ExpoPartners from "@/components/ExpoPartners";
import FAQ from "@/components/Faq";
import InlineFooter from "@/components/InlineFooter";
import MediaPartners from "@/components/MediaPartners";
import OfficialMediaPartner from "@/components/OfficialMediaPartner";
import ProvincialPartners from "@/components/ProvincialPartners";
import TitlePartnerSection from "@/components/TitlePartnersSection";
import WorksSection from "@/components/WorksSection";
const awardsFAQData: any[] = [
  {
    id: 1,
    question: "How can I be a sponsor?",
    answer: (
      <span>
        How can I be a sponsor?{" "}
        <a
          href="https://zfrmz.ca/s0Kel0JkFv5GXo2WpZH3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Request to be a sponsor
        </a>
        .
      </span>
    ),
    isOpen: false,
  },
  {
    id: 2,
    question: "Where do I find more information about sponsorships?",
    answer: (
      <span>
        Where do I find more information about sponsorships? View our{" "}
        <a
          href="https://www.canva.com/design/DAGr1AqrdyM/Bx4Q006CR2uB8LL2L8ok-g/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          sponsorship deck
        </a>{" "}
        or contact us to learn more.
      </span>
    ),
    isOpen: false,
  },
];
export default function Ehgameexpo() {
  return (
    <section className="bg-[#0d021b]">
      <WorksSection />
      <TitlePartnerSection />
      <AwardsPartners />
      <OfficialMediaPartner />
      <MediaPartners />
      <ExpoPartners />

      <CharityPartner />
      <ProvincialPartners />
      <FAQ faqData={awardsFAQData} />
    </section>
  );
}
