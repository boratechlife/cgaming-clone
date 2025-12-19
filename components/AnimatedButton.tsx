import React from 'react';

interface AnimatedButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  size = 'md',
  text = 'Sign up for tickets',
  className = '',
}) => {
  const sizeConfig = {
    sm: { parentW: 180, parentH: 40, childSize: 20 },
    md: { parentW: 228, parentH: 53, childSize: 25 },
    lg: { parentW: 280, parentH: 65, childSize: 30 },
    xl: { parentW: 340, parentH: 78, childSize: 35 },
  };

  const config = sizeConfig[size] || sizeConfig.md;

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: `${config.parentW}px`,
        height: `${config.parentH}px`,
      }}
    >
      {/* 1. Animation Base Layer - Pure Black */}
      <div className="absolute inset-0 bg-black rounded-lg">
        <div
          className="absolute"
          style={{
            width: `${config.childSize}px`,
            height: `${config.childSize}px`,
            background:
              'radial-gradient(80% 80% at 50% 50%, rgb(77, 183, 185) 0%, rgba(255, 255, 255, 0) 100%)',
            borderRadius: '50%',
            boxShadow: '0 0 60px 25px rgba(77, 183, 185, 0.7)',
            animation: 'moveCorners 3s linear infinite',
            zIndex: 10,
          }}
        />
      </div>

      {/* 2. Top Panel - Now perfectly flush with top, bottom, and left */}
      <div
        className="absolute top-0 left-0 w-[95%] h-full z-20 rounded-l-lg flex overflow-hidden"
        style={{ backgroundColor: 'rgb(13, 13, 13)' }}
      >
        <button
          className="w-full h-full bg-transparent text-white border-none font-semibold cursor-pointer font-sans text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 p-0 m-0"
          style={{ isolation: 'isolate' }}
        >
          {/* Icon Stack */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Search Icon (Bottom Layer) */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(69, 22, 130)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 0.8 }}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>

            {/* Arrow Icon (Top Layer) */}
            <svg
              className="absolute w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
          <span>{text}</span>
        </button>
      </div>

      {/* Global Keyframes */}
      <style>{`
        @keyframes moveCorners {
          0%, 100% { transform: translate(0, 0); }
          25%  { transform: translate(${
            config.parentW - config.childSize
          }px, 0); }
          50%  { transform: translate(${config.parentW - config.childSize}px, ${
        config.parentH - config.childSize
      }px); }
          75%  { transform: translate(0, ${
            config.parentH - config.childSize
          }px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedButton;
