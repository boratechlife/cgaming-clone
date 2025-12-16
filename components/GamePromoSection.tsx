import React from "react";

interface GamePromoSectionProps {
  heading: string;
  supportingText: string;
  imageUrl: string;
  imageAlt: string;
  headingSize?: string;
  headingWeight?: number;
  reverseLayout?: boolean; // New prop to control layout order
}

const GamePromoSection: React.FC<GamePromoSectionProps> = ({
  heading,
  supportingText,
  imageUrl,
  imageAlt,
  headingSize = "52px",
  headingWeight = 500,
  reverseLayout = false, // Default to original layout (text left, image right)
}) => {
  return (
    <div className="grid grid-cols-2 gap-[120px] w-full h-min relative overflow-visible">
      {/* Content column - position controlled by reverseLayout prop */}
      <div
        className={`flex flex-col items-start justify-start gap-[32px] w-full h-full relative overflow-visible ${
          reverseLayout ? "order-2" : "order-1" // Move to right when reversed
        }`}
      >
        {/* Heading */}
        <div className="flex flex-col justify-start outline-none flex-shrink-0 w-full h-auto relative">
          <h2
            className="text-white"
            style={{
              fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
              fontSize: headingSize,
              fontWeight: headingWeight,
              letterSpacing: "-1px",
              lineHeight: "1.25em",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              wordWrap: "break-word",
            }}
          >
            {heading}
          </h2>
        </div>

        {/* Supporting text */}
        <div className="flex flex-col justify-start outline-none flex-shrink-0 w-full h-auto relative">
          <p
            className="text-[#afafaf]"
            style={{
              fontFamily: '"Karla", "Karla Placeholder", sans-serif',
              fontSize: "18px",
              letterSpacing: "-0.07em",
              lineHeight: "1.6em",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              wordWrap: "break-word",
            }}
          >
            {supportingText}
          </p>
        </div>
      </div>

      {/* Image column - position controlled by reverseLayout prop */}
      <div
        className={`rounded-[25px] w-full h-full relative ${
          reverseLayout ? "order-1" : "order-2" // Move to left when reversed
        }`}
      >
        <div className=" inset-0 rounded-[25px] h-[300px]">
          <img
            decoding="async"
            width="2500"
            height="1667"
            sizes="max((min(100vw - 120px, 1280px) - 240px) / 2, 50px)"
            srcSet={`${imageUrl}?scale-down-to=512 512w, ${imageUrl}?scale-down-to=1024 1024w, ${imageUrl}?scale-down-to=2048 2048w, ${imageUrl} 2500w`}
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-[300px] object-cover object-center"
            style={{ display: "block", borderRadius: "inherit" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GamePromoSection;
