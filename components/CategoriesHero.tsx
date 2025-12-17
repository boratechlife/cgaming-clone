// components/CategoriesHero.tsx
import Image from 'next/image';

const CategoriesHero = () => {
  return (
    <div
      className="relative w-full h-max lg:h-[90vh] border-b border-gray-800"
      id="top"
      name="Hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/DKG5rKOUrS4N3On0M02zJn1EiY.jpg"
          alt="Hero background"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Hero Content */}
      <section
        className="relative py-20 lg:py-auto z-10 flex flex-col items-center justify-center lg:min-h-screen px-4 lg:py-20"
        id="hero-section"
        name="Hero Section"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="font-karla font-semibold text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
              <span className="inline-block">Categories</span>
            </h1>
          </div>

          {/* Description Text */}
          <div className="max-w-3xl mx-auto">
            <p className="font-karla text-lg md:text-xl text-white leading-relaxed tracking-tight">
              <span className="inline-block">Discover</span>{' '}
              <span className="inline-block">16</span>{' '}
              <span className="inline-block">categories</span>{' '}
              <span className="inline-block">celebrating</span>{' '}
              <span className="inline-block">the</span>{' '}
              <span className="inline-block">best</span>{' '}
              <span className="inline-block">in</span>{' '}
              <span className="inline-block">Canadian</span>{' '}
              <span className="inline-block">gaming</span>{' '}
              <span className="inline-block">at</span>{' '}
              <span className="inline-block">the</span>{' '}
              <span className="inline-block">Canadian</span>{' '}
              <span className="inline-block">Game</span>{' '}
              <span className="inline-block">Awards,</span>{' '}
              <span className="inline-block">where</span>{' '}
              <span className="inline-block">we</span>{' '}
              <span className="inline-block">honor</span>{' '}
              <span className="inline-block">exceptional</span>{' '}
              <span className="inline-block">talent</span>{' '}
              <span className="inline-block">and</span>{' '}
              <span className="inline-block">recognize</span>{' '}
              <span className="inline-block">the</span>{' '}
              <span className="inline-block">outstanding</span>{' '}
              <span className="inline-block">achievements</span>{' '}
              <span className="inline-block">of</span>{' '}
              <span className="inline-block">this</span>{' '}
              <span className="inline-block">year's</span>{' '}
              <span className="inline-block">nominees.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesHero;
