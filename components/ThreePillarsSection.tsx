import { inter } from '@/app/layout';
import React from 'react';

const ThreePillarsSection = () => {
  return (
    <a
      className="flex flex-col flex-none justify-center items-center gap-0 w-full h-min pt-[189px] px-4 lg:px-[60px] scroll-mt-10 relative overflow-visible bg-[#5630bf] no-underline"
      id="works"
      href="https://cgameawards.us18.list-manage.com/subscribe/post?u=b71f8ca57eab220be5354b8c0&id=77d43e63a9&f_id=00b6ade6f0"
      rel="noopener noreferrer"
    >
      <div className="contents hidden-8nmsqg hidden-1qql9d7">
        <div className="flex flex-col justify-start outline-none flex-shrink-0 whitespace-pre-wrap break-words flex-none w-[200%] max-w-[92%] h-auto relative">
          <h2
            className={`text-center ${inter.className}`}
            style={{
              fontSize: '62px',
              fontWeight: 500,
              letterSpacing: '-3px',
              lineHeight: '1.05em',
              color: '#ffffff',
            }}
          >
            <span style={{ display: 'inline-block' }}>The</span>{' '}
            <span style={{ display: 'inline-block' }}>Three</span>{' '}
            <span style={{ display: 'inline-block' }}>Pillars</span>{' '}
            <span style={{ display: 'inline-block' }}>of</span>{' '}
            <span style={{ display: 'inline-block' }}>the</span>{' '}
            <span style={{ display: 'inline-block' }}>CGA</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-[1280px] px-[60px] py-20 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          {/* Developers Pillar */}
          <div className="flex flex-col items-center gap-4 flex-1">
            <h4
              className="text-white text-center mb-2"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '36px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
              }}
            >
              Developers
            </h4>
            <p
              className="text-center max-w-[320px]"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: '1.6',
                color: '#b8b8ff',
              }}
            >
              Showcasing Canadian culture and talent, the CGAs celebrate the
              incredible depth and creativity present in hundreds of studios
              across the country.
            </p>
          </div>

          {/* Content Creators Pillar */}
          <div className="flex flex-col items-center gap-4 flex-1">
            <h4
              className="text-white text-center mb-2"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '36px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
              }}
            >
              Content Creators
            </h4>
            <p
              className="text-center max-w-[320px]"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: '1.6',
                color: '#b8b8ff',
              }}
            >
              Honoring the community builders who bring us together to share our
              passion for made-in-Canada gaming experiences.
            </p>
          </div>

          {/* Esports Pillar */}
          <div className="flex flex-col items-center gap-4 flex-1">
            <h4
              className="text-white text-center mb-2"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '36px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
              }}
            >
              Esports
            </h4>
            <p
              className="text-center max-w-[320px]"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: '1.6',
                color: '#b8b8ff',
              }}
            >
              Recognizing the excitement and skill of Canada's best players,
              coaches, and teams as they light up stages and inspire fans at
              home and across the globe.
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ThreePillarsSection;
