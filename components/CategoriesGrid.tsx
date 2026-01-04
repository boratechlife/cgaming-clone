'use client';

import { satoshi } from '@/app/layout';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const CategoriesGrid = () => {
  const pathname = usePathname();

  const categories = [
    { id: 'bestartdirection', name: 'Best Art Direction' },
    { id: 'bestgamedesign', name: 'Best Game Design' },
    { id: 'bestscore', name: 'Best Score/Soundtrack' },
    { id: 'bestperformance', name: 'Best Performance' },
    { id: 'bestnarrative', name: 'Best Narrative' },
    { id: 'bestaudiodesign', name: 'Best Audio Design' },
    { id: 'esportsplayer', name: 'Best Esports Player' },
    { id: 'esportsevent', name: 'Best Esports Event' },
    { id: 'esportscoach', name: 'Best Esports Coach' },
    { id: 'esportsorg', name: 'Best Esports and Gaming Organization' },
    { id: 'contentcreator', name: 'Best Content Creator/Show' },
    { id: 'beststreamer', name: 'Best Streamer' },
    { id: 'bestpersonality', name: 'Best Personality' },
    { id: 'bestpcgame', name: 'Best PC Game' },
    { id: 'bestconsolegame', name: 'Best Console Game' },
    { id: 'bestmobilegame', name: 'Best Mobile Game' },
    { id: 'bestvrgame', name: 'Best VR/AR Game' },
    { id: 'bestindiegame', name: 'Best Indie Game' },
    { id: 'studiooftheyear', name: 'Studio of the Year' },
    { id: 'gameoftheyear', name: 'Game of the Year' },
  ];

  const handleCategoryClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    categoryId: string
  ) => {
    const targetUrl = `/nominees#${categoryId}`;
    const isOnNomineesPage = pathname === '/nominees';

    if (isOnNomineesPage) {
      e.preventDefault();
      const element = document.getElementById(categoryId);
      if (element) {
        // Smooth scroll to the section
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Update URL without reloading
        window.history.pushState(null, '', targetUrl);

        // Add highlight effect
        element.classList.add('highlight-category');
        setTimeout(() => {
          element.classList.remove('highlight-category');
        }, 1500);
      }
    }
    // If not on nominees page, the Link component handles navigation normally
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          'linear-gradient(135deg, #5B2C91 0%, #3E1F6B  50%, #3E1F6B  100%)',
      }}
    >
      {/* Add highlight styles */}
      <style jsx global>{`
        .highlight-category {
          animation: highlightPulse 1.5s ease;
        }

        @keyframes highlightPulse {
          0% {
            background-color: rgba(139, 92, 246, 0.3);
          }
          50% {
            background-color: rgba(139, 92, 246, 0.1);
          }
          100% {
            background-color: transparent;
          }
        }
      `}</style>

      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((category) => {
              const targetUrl = `/nominees#${category.id}`;

              return (
                <Link
                  key={category.id}
                  href={targetUrl}
                  className={`group block ${satoshi.className}`}
                  style={{ textDecoration: 'none' }}
                  prefetch={true}
                  onClick={(e) => handleCategoryClick(e, category.id)}
                >
                  <div
                    className="h-40 flex items-center justify-center p-6 rounded-3xl transition-all duration-300 cursor-pointer"
                    style={{
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '2px solid rgba(167, 139, 250, 0.4)',
                      backdropFilter: 'blur(10px)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        'rgba(167, 139, 250, 0.8)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow =
                        '0 10px 30px rgba(139, 92, 246, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        'rgba(167, 139, 250, 0.4)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <h2
                      className="text-white text-center font-normal leading-tight"
                      style={{
                        fontSize: '26px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {category.name}
                    </h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
