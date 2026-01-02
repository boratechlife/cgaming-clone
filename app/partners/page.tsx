import AwardsPartners from "@/components/AwardsPartners";
import CharityPartner from "@/components/CharityPartner";
import CocktailPartners from "@/components/CocktailPartners";
import ExpoPartners from "@/components/ExpoPartners";
import InlineFooter from "@/components/InlineFooter";
import MediaPartners from "@/components/MediaPartners";
import OfficialMediaPartner from "@/components/OfficialMediaPartner";
import ProvincialPartners from "@/components/ProvincialPartners";
import TitlePartnerSection from "@/components/TitlePartnersSection";
import WorksSection from "@/components/WorksSection";

export default function Ehgameexpo() {
  return (
    <section className="bg-[#0d021b]">
      <WorksSection />
      <TitlePartnerSection />
      <AwardsPartners />
      <OfficialMediaPartner />
      <MediaPartners />
      <ExpoPartners />
      {/* <CocktailPartners /> */}
      <CharityPartner />
      <ProvincialPartners />
    </section>
  );
}
