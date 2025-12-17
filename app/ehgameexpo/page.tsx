import EhgameExpoHeroSection from '@/components/EhgameexpoHero';
import GameAwardsPage from '@/components/GameAwardsPage';
import GameshowPartners from '@/components/GameshowPartners';
import InlineFooter from '@/components/InlineFooter';
import TabletFooter from '@/components/TabletFooter';

export default function Ehgameexpo() {
  return (
    <section className="bg-gray-900">
      <EhgameExpoHeroSection />
      <GameAwardsPage />
      <GameshowPartners />
      <InlineFooter />
    </section>
  );
}
