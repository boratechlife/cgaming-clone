import EventLocationSection from '@/components/EventLocationSection';
import FAQ from '@/components/Faq';
import HeroVideo from '@/components/HeroVideo';
import ThreePillarsSection from '@/components/ThreePillarsSection';
import TicketCTA from '@/components/TicketCTA';

const awardsFAQData: any[] = [
  {
    id: 1,
    question: 'When and what time are the awards?',
    answer:
      'The Canadian Game Awards ceremony is scheduled to take place in Spring 2025. Exact timing and broadcast details will be announced shortly through our newsletter and social media channels.',
    isOpen: true,
  },
  {
    id: 2,
    question: 'Is the event open to the general public?',
    answer:
      'The gala is primarily an industry event celebrating the best in Canadian gaming. However, a limited number of tickets may be released to the public, and the entire ceremony will be available to stream online for fans worldwide.',
    isOpen: false,
  },
  {
    id: 3,
    question: 'How long is the gala?',
    answer:
      'The main awards ceremony typically runs for approximately 2 to 3 hours, featuring category presentations, developer spotlights, and special industry tributes.',
    isOpen: false,
  },
  {
    id: 4,
    question: 'Who designed the trophy, and what does it represent?',
    answer:
      'The CGA trophy is a custom-designed piece of art that symbolizes the intersection of technology and creativity. It represents the pinnacle of achievement for Canadian developers, content creators, and esports professionals.',
    isOpen: false,
  },
];

export default function Home() {
  return (
    <section>
      <HeroVideo />
      <TicketCTA />
      <ThreePillarsSection />
      <EventLocationSection />
      <FAQ faqData={awardsFAQData} />
      <TicketCTA />
    </section>
  );
}
