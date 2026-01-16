import React from "react";

const GameshowPartners: React.FC = () => {
  return (
    <section className="framer-145bcqn relative bg-black flex flex-col items-center justify-start py-8 px-8 md:px-8 lg:px-8 xl:px-8">
      {/* Decorative line */}

      {/* Description/Heading */}
      <div className="framer-12p1q5k w-full relative text-center">
        <h3
          className="framer-text text-gray-300 text-center mb-4"
          style={{
            fontFamily: '"Onest", "Onest Placeholder", sans-serif',
            fontSize: "23px",
            lineHeight: "160%",
            textAlign: "center",
            color: "rgb(188, 188, 188)",
          }}
        >
          <span style={{ fontSize: "35px" }}>
            <br />
            <br />
            Eh! Game Showcase Partners
          </span>
        </h3>
      </div>

      {/* Partner Logo - MSI */}
      <a
        href="https://ca.msi.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="framer-11i62zi framer-1mrg7zi block w-64 md:w-80 lg:w-96 xl:w-96 h-48 md:h-56 lg:h-64 xl:h-64"
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <img
            src="/images/1Jqcun75YhOXKBaLuqwb28kTDk.avif?scale-down-to=512"
            alt="MSI logo"
            className="w-full h-full object-cover"
            width="444"
            height="198"
            loading="lazy"
          />
        </div>
      </a>
    </section>
  );
};

export default GameshowPartners;
