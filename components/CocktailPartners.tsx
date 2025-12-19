import React from 'react';

const CocktailPartners = () => {
  const partners = [
    {
      name: 'AGN A Gaming Network',
      url: 'https://www.agamingnetwork.com/',
      image: '/images/7sjXy8OlDizGPBENcKd9M5bkBgc.avif',
      containerClass: 'framer-nahsmv-container',
      height: '237px',
      width: '400px',
      placeSelf: 'center end',
    },
    {
      name: 'SCREENRANT',
      url: 'https://screenrant.com/',
      image: '/images/CthaA89cx88sx7PBxIL01zJmNVc.avif',
      containerClass: 'framer-hd82r1-container',
      height: '275px',
      width: '100%',
      placeSelf: 'center',
    },
    {
      name: 'MobileSyrup',
      url: 'https://mobilesyrup.com/',
      image: '/images/nqnyIUgCEZ33FxJCDPe5sv58YE.avif',
      containerClass: 'framer-1x0mkff-container',
      height: '275px',
      width: '100%',
      placeSelf: 'center',
    },
    {
      name: 'Indie Game Reviewer',
      url: 'https://indiegamereviewer.com/',
      image: '/images/OE76Dh6x4mfkyil4NUUKwnlUOp0.avif',
      containerClass: 'framer-shcwj0-container',
      height: '275px',
      width: '350px',
      placeSelf: 'start',
    },
    {
      name: 'Canadian Podcast Awards',
      url: 'https://canpodawards.ca/',
      image: '/images/A09yCyAK37Musop3kvfWUKAvX0w.svg',
      containerClass: 'framer-9g2stb-container',
      height: '307px',
      width: '400px',
      placeSelf: 'center end',
    },
    {
      name: 'The Lodgge',
      url: 'https://thelodgge.com/',
      image: '/images/4C17mxCfwPiLs3YF1yF3azQpyD8.avif',
      containerClass: 'framer-1vwkx4s-container',
      height: '317px',
      width: '396px',
      placeSelf: 'end start',
    },
  ];

  return (
    <div
      className="framer-NVjQy framer-gb8t7v flex flex-col items-center gap-2.25 min-h-min overflow-hidden relative w-full"
      style={{ padding: '30px 0px' }}
    >
      <div className="framer-k1jjom w-full text-center">
        <h2
          className="framer-text text-3xl lg:text-5xl font-medium tracking-tight text-white"
          style={{
            fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
            letterSpacing: '-1px',
            lineHeight: '1.25em',
          }}
        >
          Cocktail Partners:
        </h2>
      </div>

      <div
        className="
    framer-1gjyoeo
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-0
    sm:gap-6
    w-full
    px-4
    sm:px-8
    lg:px-40
    pt-8
    lg:pt-24
  "
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className={`
    ${partner.containerClass}
    relative
    w-full
    max-w-full
    sm:max-w-[300px]
    lg:max-w-[400px]
    aspect-[4/3]
    mx-auto
  `}
          >
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="framer-LJD03 framer-ce27pg framer-v-ce27pg framer-14yq3ls block"
              style={{ width: '100%', height: '100%' }}
            >
              <div
                className="relative rounded-lg overflow-hidden"
                style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  inset: '0px',
                }}
              >
                <img
                  src={partner.image}
                  alt={`${partner.name} logo – Cocktail Partner`}
                  className="w-full h-full object-contain"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center center',
                    objectFit: 'contain',
                  }}
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocktailPartners;
