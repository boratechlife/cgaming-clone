'use client';
import EventFeatureSection from '@/components/EventFeatureSection';
import EventLocationSection from '@/components/EventLocationSection';
import FAQ from '@/components/Faq';
import HeroVideo from '@/components/HeroVideo';
import ThreePillarsSection from '@/components/ThreePillarsSection';
import TicketCTA from '@/components/TicketCTA';

const awardsFAQData: any[] = [
  {
    id: 1,
    question: 'What is the gala about?',
    answer:
      'What began as an industry-focused initiative has grown into its sixth edition as a national celebration of Canadian games. The Canadian Game Awards (CGA) recognize and highlight Canada’s position on the global stage as a leader in interactive entertainment, bringing together developers, creators, esports professionals, and the wider gaming community. Learn more about the story and mission of the CGAs here: https://cga.ca/about',
    isOpen: true,
  },
  {
    id: 2,
    question: 'When and what time is the gala?',
    answer:
      'The Canadian Game Awards take place on February 21, 2026, as a full-day event in Toronto. The day begins with the Eh! Game Showcase at 11:00 AM (ET), followed by the Canadian Game Awards ceremony in the evening at 8:00 PM (ET). For the latest updates and schedule details, follow our official social channels.',
    isOpen: false,
  },
  {
    id: 3,
    question: 'Is the event open to the general public?',
    answer:
      'The Eh! Game Showcase is open and free for all attendees, offering an opportunity to play and explore Canadian-made games during the day. The Canadian Game Awards ceremony is a ticketed, in-person event with a limited number of seats available. It is designed to bring fans and industry professionals together in a shared celebration. For fans worldwide, the full ceremony will also be available to stream online via Twitch: https://twitch.tv/canadiangameawards',
    isOpen: false,
  },
  {
    id: 4,
    question: 'How long is the gala?',
    answer:
      'The Canadian Game Awards are part of a full day dedicated to Canadian games. The awards ceremony itself runs for approximately 2–3 hours, featuring category presentations, developer spotlights, and special tributes. The Eh! Game Showcase takes place earlier in the day and runs for approximately six hours, with a break in the evening before the ceremony.',
    isOpen: false,
  },
  {
    id: 5,
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
      <EventFeatureSection />
      <ThreePillarsSection />
      <EventLocationSection />
      <FAQ faqData={awardsFAQData} />
      <TicketCTA />
    </section>
  );
}
