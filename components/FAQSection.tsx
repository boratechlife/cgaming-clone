import React from 'react';

const FAQSection = () => {
  const faqItems = [
    'When and what time are the awards?',
    'Is the event open to the general public?',
    'How long is the gala?',
    'Who designed the trophy, and what does it represent?',
  ];

  return (
    <div
      className="flex flex-col flex-none justify-center items-center gap-2.5 w-full h-min pt-[90px] pb-[200px] px-[60px] relative overflow-visible"
      data-framer-name="FAQ"
    >
      <div
        className="flex flex-col flex-none justify-center items-center gap-16 w-full h-min p-0 relative overflow-hidden"
        data-framer-name="Container"
      >
        <div
          className="flex flex-col flex-none justify-center items-center gap-6 w-full h-min p-0 relative overflow-hidden"
          data-framer-name="Heading"
        >
          <div className="contents hidden-8nmsqg hidden-1qql9d7 hidden-mvq4c1">
            <div className="flex-none w-auto h-auto relative">
              <a
                className="flex flex-row justify-center items-center gap-0 w-min h-min p-[1.3px] no-underline relative overflow-visible rounded-[33px] opacity-100 bg-gradient-to-b from-[#212121] to-[rgba(35,35,35,0.2)]"
                data-framer-name="Default"
              >
                <div className="flex flex-row flex-none justify-center items-center gap-[7px] w-min h-min p-[7px_20px] relative overflow-visible rounded-[33px] opacity-100 bg-[#050505]">
                  <div className="flex flex-col justify-start outline-none flex-shrink-0 whitespace-pre flex-none w-auto h-auto relative">
                    <p
                      className="text-center"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '14px',
                        lineHeight: '1em',
                        color: '#afafaf',
                      }}
                    >
                      Need to Know
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="contents hidden-8nmsqg hidden-1qql9d7 hidden-mvq4c1">
            <div className="flex flex-col justify-start outline-none flex-shrink-0">
              <h2
                className="capitalize"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '48px',
                  fontWeight: 500,
                  letterSpacing: '-1px',
                  lineHeight: '1.25em',
                  color: '#ffffff',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    opacity: 0.001,
                    filter: 'blur(10px)',
                    transform:
                      'translateX(0px) translateY(10px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)',
                  }}
                >
                  Frequently
                </span>{' '}
                <span
                  style={{
                    display: 'inline-block',
                    opacity: 0.001,
                    filter: 'blur(10px)',
                    transform:
                      'translateX(0px) translateY(10px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)',
                  }}
                >
                  Asked
                </span>{' '}
                <span
                  style={{
                    display: 'inline-block',
                    opacity: 0.001,
                    filter: 'blur(10px)',
                    transform:
                      'translateX(0px) translateY(10px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)',
                  }}
                >
                  Questions
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="contents hidden-8nmsqg hidden-1qql9d7 hidden-mvq4c1">
          <div className="flex-none w-auto h-auto relative">
            <div className="flex flex-col justify-center items-center gap-3.5 w-[854px] h-min p-0 relative overflow-hidden">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`framer-${
                    index === 0
                      ? 'o5ac6w'
                      : index === 1
                      ? 'd7ii7i'
                      : index === 2
                      ? '1gg03nh'
                      : '2vqt0r'
                  }-container`}
                  style={{ opacity: 1 }}
                >
                  <div
                    className="cursor-pointer flex flex-col justify-center items-center gap-0 w-[854px] h-min p-[18px_36px] relative overflow-hidden rounded-[20px]"
                    data-framer-name="Close"
                    data-highlight="true"
                    tabIndex={0}
                    style={{
                      backgroundColor: 'rgba(17, 17, 17, 0)',
                      willChange: 'transform',
                    }}
                  >
                    <div className="flex flex-col flex-none justify-center items-center gap-[30px] w-full h-min p-0 relative overflow-visible">
                      <div className="flex flex-row flex-none justify-between items-center w-full h-min p-0 relative overflow-visible">
                        <div className="flex flex-col justify-start outline-none flex-shrink-0 whitespace-pre-wrap break-words flex-none w-[94%] h-auto relative">
                          <h3
                            className="framer-text framer-styles-preset-fqipb"
                            data-styles-preset="ytN8uOJCY"
                            style={{
                              fontFamily: 'Satoshi, sans-serif',
                              fontWeight: 500,
                              fontSize: '18px',
                              letterSpacing: '-0.5px',
                              lineHeight: '1.5em',
                              color: 'rgb(133, 133, 133)',
                            }}
                          >
                            {item}
                          </h3>
                        </div>
                        <div className="flex-none w-6 h-6 relative">
                          <div style={{ display: 'contents' }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="rgb(133, 133, 133)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ width: '100%', height: '100%' }}
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
