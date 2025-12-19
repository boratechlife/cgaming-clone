import React from 'react';

const ProvincialPartners = () => {
  const partners = [
    {
      name: 'Digital Alberta',
      url: 'https://digitalalberta.com/',
      image: '/images/rmrnpE9KCIxlgZf3QkTaqGwUpec.avif',
      containerClass: 'framer-1wacicp-container',
      height: '165px',
      placeSelf: 'start',
    },
    {
      name: 'La Guilde du jeu vidéo du Québec',
      url: 'https://www.laguilde.quebec/',
      image: '/images/HYv2N7JvT5Gbo9rHzT5qhbxDKM.avif',
      containerClass: 'framer-s7iurk-container',
      height: '179px',
      placeSelf: 'start',
    },
    {
      name: 'Interactive Ontario',
      url: 'https://interactiveontario.com/',
      image: '/images/CSf7kU9YCIyyoWdwqMEviVdes.avif',
      containerClass: 'framer-zhtek6-container',
      height: '179px',
      placeSelf: 'start',
    },
    {
      name: 'DigiBC',
      url: 'https://digibc.org/',
      image: '/images/OPBw3JXDDhDnQX6uwYv45X6ceQ.avif',
      containerClass: 'framer-sc1632-container',
      height: '179px',
      placeSelf: 'start',
    },
  ];

  return (
    <div className="framer-NVjQy px-4 lg:px-[30px] py-[0px] pb-[73px] framer-j0hsf3 flex flex-col items-center gap-2.25 min-h-min overflow-hidden relative w-full">
      <div className="framer-1ojr5wz w-full text-center">
        <h2
          className="framer-text text-4xl lg:text-5xl font-medium tracking-tight text-white"
          style={{
            fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
            letterSpacing: '-1px',
            lineHeight: '1.25em',
          }}
        >
          Provincial Partners:
        </h2>
      </div>

      <div className="framer-1pc95b8 pt-[100px] lg:px-[160px] pb-0 grid grid-cols-1 lg:grid-cols-2 gap-6.5 justify-center w-full">
        {partners.map((partner, index) => (
          <div
            key={index}
            className={partner.containerClass}
            style={{
              placeSelf: partner.placeSelf,
              flex: '0 0 auto',
              height: partner.height,
              position: 'relative',
              width: '100%',
            }}
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
                  alt={`${partner.name} logo – Provincial Partner`}
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

export default ProvincialPartners;
