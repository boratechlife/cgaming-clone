import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="framer-1fqfjqy relative flex flex-col items-center justify-center bg-blue-600 h-[588px] z-2"
      style={
        {
          padding: '42px 0px 0px',
          '--border-bottom-width': '1px',
          '--border-color': '#545454',
          '--border-left-width': '0px',
          '--border-right-width': '0px',
          '--border-style': 'solid',
          '--border-top-width': '0px',
        } as React.CSSProperties
      }
      data-border="true"
    >
      <section
        className="framer-17m46ak relative flex items-center justify-center w-full"
        style={{ padding: '115px 96px 115px 130px' }}
      >
        <div className="framer-1qd1tz1 flex flex-col items-start justify-start gap-6 w-full">
          <div
            className="framer-1h0owa7 relative"
            style={{ width: '576px', whiteSpace: 'pre-wrap' }}
          >
            <h1
              className="framer-text text-white font-semibold leading-tight"
              style={{
                fontFamily: '"Karla", "Karla Placeholder", sans-serif',
                fontSize: '72px',
                fontWeight: '600',
                letterSpacing: '-3px',
                lineHeight: '1.05em',
                textAlign: 'left',
              }}
            >
              About "Canadian Game Awards"
            </h1>
          </div>
          <div className="framer-dkqpha flex flex-col items-start justify-start gap-9 w-full">
            <div
              className="framer-tu42vg relative"
              style={{
                maxWidth: '600px',
                width: '601px',
                whiteSpace: 'pre-wrap',
                textWrap: 'balance',
              }}
            >
              <p
                className="framer-text"
                style={{
                  fontFamily: '"Karla", "Karla Placeholder", sans-serif',
                  fontSize: '18px',
                  letterSpacing: '-0.07em',
                  lineHeight: '1.6em',
                  textAlign: 'left',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  The
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  Canadian
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  Game
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  Awards
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  are
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  back!
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  Join
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  us
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  at
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  the
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  prestigious
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  TIFF
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  Lightbox
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  on
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  February
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  15th
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  as
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  we
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  celebrate
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  the
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  very
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  best
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  of
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  the
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  Canadian
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  gaming
                </span>{' '}
                <span
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  scene.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="framer-183vvog-container  absolute -z-10 hidden-uqdvms hidden-1svd07t">
        <video
          src="/videos/SW98RkaeO79SEfSU86gJLxDqXE.mp4"
          loop
          preload="auto"
          autoPlay={true}
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            cursor: 'auto',
            width: '100%',
            height: '100%',
            borderRadius: '0px',
            display: 'block',
            objectFit: 'cover',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            objectPosition: '50% 50%',
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
