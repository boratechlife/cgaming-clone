import React from 'react';

const ExpoPartners = () => {
  const partners = [
    {
      name: 'City of Toronto',
      url: 'https://www.toronto.ca/',
      image: '/images/9T5taSmSffnn8GIAVEIcUxwYnOk.avif',
    },
    {
      name: 'MSI',
      url: 'https://ca.msi.com/',
      image: '/images/1Jqcun75YhOXKBaLuqwb28kTDk.avif',
    },
    {
      name: 'Intel',
      url: 'https://www.intel.com/',
      image: '/images/fGFfHMPDHyHbHowQgcvzVQnjT4A.avif',
    },
  ];

  return (
    <div className="framer-NVjQy py-[30px] px-0 framer-b1p6um flex flex-col items-center gap-2.25 min-h-min overflow-hidden relative w-full">
      <div className="framer-1f1r2h4 w-full text-center">
        <h2
          className="framer-text text-2xl lg:text-5xl font-medium tracking-tight text-white"
          style={{
            fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
            letterSpacing: '-1px',
            lineHeight: '1.25em',
          }}
        >
          Eh! Game Expo Partners:
        </h2>
      </div>

      <div className="framer-1yw1tr4 py-0 mt-4 px-4 lg:px-40 grid grid-cols-1 lg:grid-cols-3 gap-6.5 justify-center w-full">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="framer-110bz69-container place-items-start h-[175px] lg:h-[275px] w-full  framer-12202r-container framer-lve5jz-container"
          >
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="framer-LJD03 framer-ce27pg framer-v-ce27pg framer-14yq3ls block"
              style={{ width: '100%', height: '100%' }}
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={partner.image}
                  alt={`${partner.name} logo – Eh! Game Expo Partner`}
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

export default ExpoPartners;
