'use client';

import { satoshi } from '@/app/layout';

const CategoriesGrid = () => {
  const categories = [
    { id: 'bestartdirection', name: 'Best Art Direction' },
    { id: 'bestgamedesign', name: 'Best Game Design' },
    { id: 'bestscore', name: 'Best Score/Soundtrack' },
    { id: 'bestnarrative', name: 'Best Narrative' },
    { id: 'bestperformance', name: 'Best Performance' },
    { id: 'bestaudiodesign', name: 'Best Audio Design' },
    { id: 'bestinnovation', name: 'Best Technology or Innovation' },
    { id: 'bestdebutindie', name: 'Best Debut Indie Game' },
    { id: 'bestdebutstudio', name: 'Best Debut Studio' },
    { id: 'mostinnovativestudio', name: 'Most Innovative Studio' },
    { id: 'esportsplayer', name: 'Esports Player' },
    { id: 'esportsorg', name: 'Esports Org' },
  ];

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          'linear-gradient(135deg, #5B2C91 0%, #3E1F6B 50%, #2D1554 100%)',
      }}
    >
      <div className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className={`group block ${satoshi.className}`}
                style={{ textDecoration: 'none' }}
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
