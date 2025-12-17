import React from 'react';

const CharityPartner = () => {
  const partner = {
    name: 'Surrey Place',
    url: 'https://www.surreyplace.ca/',
    image:
      'https://framerusercontent.com/images/c6BHrhK4mGb6nA5uD7U856aH8hM.jpg',
  };

  return (
    <div className="framer-NVjQy pt-[73px] py-0 pb-[30px] framer-1p2jxhv flex flex-col items-center gap-2.25 min-h-min overflow-hidden relative w-full">
      <div className="framer-1yzdy8q w-full text-center">
        <h2
          className="framer-text text-3xl lg:text-5xl font-medium tracking-tight text-white"
          style={{
            fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
            letterSpacing: '-1px',
            lineHeight: '1.25em',
          }}
        >
          Charity Partner:
        </h2>
      </div>

      <div className="framer-8gjpzu pt-[100px] lg:py-40 px-0 grid grid-cols-1 gap-6.5 justify-center w-full">
        <div
          className="framer-u76fki-container"
          style={{
            placeSelf: 'start',
            flex: '0 0 auto',
            height: '207px',
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
                alt={`${partner.name} logo – Charity Partner`}
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
      </div>
    </div>
  );
};

export default CharityPartner;
