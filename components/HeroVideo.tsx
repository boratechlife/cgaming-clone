import React from 'react';
import Image from 'next/image';

const HeroVideo: React.FC = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center font-sans dark:bg-black">
      {/* Mobile: Show image */}
      <div className="block md:hidden w-full h-full">
        <div
          data-framer-background-image-wrapper="true"
          style={{
            position: 'absolute',
            borderRadius: 'inherit',
            inset: '0px',
          }}
        >
          <Image
            src="https://framerusercontent.com/images/Q2JDdpf4rnQVVOFoAuqL7HkFY.jpg?width=1024&height=683"
            alt=""
            width={1024}
            height={683}
            sizes="calc(100vw + 420px)"
            className="block w-full h-full rounded-none object-cover object-center"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              borderRadius: 'inherit',
              objectPosition: 'center center',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* Large screens: Show video */}
      <div className="hidden md:block w-full h-full">
        <video
          src="/videos/CdshOvGFhAxGtEtsnFbvCP3VTI.mp4"
          preload="auto"
          playsInline={true}
          autoPlay={true}
          loop={true}
          muted={true}
          className="cursor-auto w-full h-full rounded-none block object-cover object-center"
        />
      </div>
    </div>
  );
};

export default HeroVideo;
