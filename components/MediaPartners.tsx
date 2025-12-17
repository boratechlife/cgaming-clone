import React from 'react';

const MediaPartners = () => {
  const partners = [
    {
      name: 'AGN A Gaming Network',
      url: 'https://www.agamingnetwork.com/',
      image:
        'https://framerusercontent.com/images/7sjXy8OlDizGPBENcKd9M5bkBgc.png',
      containerClass: 'framer-1dzulis-container',
      height: '350px',
      width: '400px',
      placeSelf: 'center end',
    },
    {
      name: 'SCREENRANT',
      url: 'https://screenrant.com/',
      image:
        'https://framerusercontent.com/images/CthaA89cx88sx7PBxIL01zJmNVc.png',
      containerClass: 'framer-91wji5-container',
      height: '350px',
      width: '400px',
      placeSelf: 'center',
    },
    {
      name: 'MobileSyrup',
      url: 'https://mobilesyrup.com/',
      image:
        'https://framerusercontent.com/images/nqnyIUgCEZ33FxJCDPe5sv58YE.png',
      containerClass: 'framer-1whe28u-container',
      height: '400px',
      width: '350px',
      placeSelf: 'center start',
    },
    {
      name: 'Indie Game Reviewer',
      url: 'https://indiegamereviewer.com/',
      image:
        'https://framerusercontent.com/images/OE76Dh6x4mfkyil4NUUKwnlUOp0.png',
      containerClass: 'framer-59igao-container',
      height: '347px',
      width: '393px',
      placeSelf: 'start end',
    },
    {
      name: 'Canadian Podcast Awards',
      url: 'https://canpodawards.ca/',
      image:
        'https://framerusercontent.com/images/A09yCyAK37Musop3kvfWUKAvX0w.svg',
      containerClass: 'framer-u63hot-container',
      height: '347px',
      width: '331px',
      placeSelf: 'start center',
    },
    {
      name: 'The Lodgge',
      url: 'https://thelodgge.com/',
      image:
        'https://framerusercontent.com/images/4C17mxCfwPiLs3YF1yF3azQpyD8.png',
      containerClass: 'framer-tra9w5-container',
      height: '329px',
      width: '378px',
      placeSelf: 'start',
    },
  ];

  return (
    <div className="framer-NVjQy framer-1w6vnkm py-[30px] px-0 flex flex-col items-center gap-2.25 min-h-min overflow-hidden relative w-full">
      <div className="framer-1d9b6gp w-full text-center">
        <h2
          className="framer-text text-3xl lg:text-5xl font-medium tracking-tight text-white"
          style={{
            fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
            letterSpacing: '-1px',
            lineHeight: '1.25em',
          }}
        >
          Media Partners:
        </h2>
      </div>

      <div className="framer-1416a6o grid grid-cols-1 py-0 px-4 lg:px-40 lg:grid-cols-3 gap-6.25 justify-center w-full">
        {partners.map((partner, index) => (
          <div
            key={index}
            className={`
    ${partner.containerClass}
    relative
    w-full
    max-w-[260px]
    aspect-[4/3]
    sm:max-w-[300px]
    lg:max-w-[400px]
    lg:aspect-[4/3]
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
                  alt={`${partner.name} logo – Media Partner`}
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

export default MediaPartners;
