import EventLocationSection from "@/components/EventLocationSection";
import FAQSection from "@/components/FAQSection";
import HeroVideo from "@/components/HeroVideo";
import MissionSection from "@/components/MissionSection";
import TabletFooter from "@/components/TabletFooter";
import ThreePillarsSection from "@/components/ThreePillarsSection";

export default function Home() {
  return (
    <section>
      <HeroVideo />
      <MissionSection />
      <ThreePillarsSection />
      <EventLocationSection />
      <FAQSection />
      <TabletFooter />
    </section>
  );
}
