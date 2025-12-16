import EventLocationSection from '@/components/EventLocationSection';
import FAQ from '@/components/Faq';
import FAQSection from '@/components/FAQSection';
import HeroVideo from '@/components/HeroVideo';
import MissionSection from '@/components/MissionSection';
import TabletFooter from '@/components/TabletFooter';
import ThreePillarsSection from '@/components/ThreePillarsSection';

export default function Home() {
  return (
    <section>
      <HeroVideo />
      <MissionSection />
      <ThreePillarsSection />
      <EventLocationSection />
      <FAQ />
      <TabletFooter />
    </section>
  );
}
