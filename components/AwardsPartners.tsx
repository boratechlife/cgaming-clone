import React from 'react';

const AwardsPartners = () => {
  const partners = [
    {
      name: 'TIFF',
      url: 'https://tiff.net/',
      image:
        'https://framerusercontent.com/images/UGpDThlQVeo64L7A9441w2I2ki4.png',
    },
    {
      name: 'Entertainment Software Association of Canada',
      url: 'https://theesa.ca/',
      image:
        'https://framerusercontent.com/images/VSoDIwALps7pFH4hUEhhmLEY0.png',
    },
    {
      name: 'Loto Québec',
      url: 'https://loteries.lotoquebec.com/fr/accueil',
      image:
        'https://framerusercontent.com/images/DQtaMioPXxnRAedrlRd3ED1m6c.png',
    },
    {
      name: 'Intel',
      url: 'https://www.intel.com/',
      image:
        'https://framerusercontent.com/images/NQBChkYQtlqc749YjrtOHJGDg.png',
    },
    {
      name: 'OverActive Media Group',
      url: 'https://overactive-media-group.prezly.com/',
      image:
        'https://framerusercontent.com/images/LK5j5HfHIB2SWKKz9G9yVULr0fs.png',
    },
    {
      name: 'Valnet',
      url: 'https://www.valnetinc.com/en/',
      image:
        'https://framerusercontent.com/images/qMnYhbmfaiXL6mXfqCTv9H6bA.png',
    },
    {
      name: 'MSI',
      url: 'https://ca.msi.com/',
      image:
        'https://framerusercontent.com/images/1Jqcun75YhOXKBaLuqwb28kTDk.png',
    },
    {
      name: 'Gameloft Montréal',
      url: 'https://www.gameloft.com/gameloft-studios/montreal',
      image:
        'https://framerusercontent.com/images/EVYtPqxWNlqaFARm7yQtpxDSN9g.png',
    },
  ];

  return (
    <div className="framer-NVjQy framer-3xy9jw flex flex-col items-center gap-2.5 min-h-min overflow-hidden relative w-full lg:px-40">
      <div className="framer-1w6ikmi w-full text-center">
        <h2
          className="framer-text text-2xl lg:text-4xl font-medium tracking-tight text-white"
          style={{
            fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
            letterSpacing: '-1px',
            lineHeight: '1.25em',
          }}
        >
          Awards Partners:
        </h2>
      </div>

      <div
        className="framer-11tnjez grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full relative"
        style={{ height: '425px' }}
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className="framer-bsif0l-container framer-1hdngbg-container framer-qzne4h-container framer-z0nomt-container framer-1j93mav-container framer-1abkrt9-container framer-p9x4lt-container framer-c2oefe-container"
            style={{
              placeSelf: 'start',
              flex: '0 0 auto',
              height: '200px',
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
                  alt={`${partner.name} logo – Awards Partner`}
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

export default AwardsPartners;
