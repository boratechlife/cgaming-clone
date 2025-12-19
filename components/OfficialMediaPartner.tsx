import React from 'react';

const OfficialMediaPartner = () => {
  return (
    <div
      className="framer-NVjQy framer-1026bmz flex flex-col items-center gap-2.25 min-h-min overflow-hidden relative w-full"
      style={{ padding: '73px 0px 30px' }}
    >
      <div className="framer-15214o8 w-full text-center">
        <h2
          className="framer-text text-2xl lg:text-4xl font-medium tracking-tight text-white"
          style={{
            fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
            letterSpacing: '-1px',
            lineHeight: '1.25em',
          }}
        >
          Official Media Partner:
        </h2>
      </div>

      <div className="framer-6urnkf py-0  px-4 lg:px-40 grid grid-cols-1 gap-6.5 justify-center w-full">
        <div
          className="framer-af2r9z-container place-self-start flex h-[157px] lg:h-[207px] relative w-full"
          style={{
            flex: '0 0 auto',
          }}
        >
          <a
            href="https://screenrant.com/"
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
                src="/images/VZMraHXkD4ZhHAooepxno4tn9Q.avif"
                alt="SCREENRANT logo – Official Media Partner"
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
                width="1080"
                height="490"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfficialMediaPartner;
