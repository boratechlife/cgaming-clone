import React from 'react';

// 1. Define the shape of the props for the component
interface GameShowCardProps {
  // Card link and image details
  href?: string; // Made optional
  imageSrc?: string; // Made optional
  imageAlt?: string; // Made optional

  // Text content
  dates?: string; // Made optional
  deadline?: string; // Made optional

  // A place for a custom button component or element
  NominateButton?: React.ReactNode; // Made optional
}

// Placeholder component for the NominateButton default value
const DefaultNominateButton = () => (
  <a
    href="/nominate"
    className="px-8 py-5 bg-teal-600 text-white font-bold rounded-lg no-underline hover:bg-teal-700 transition"
  >
    Default Nominate Action
  </a>
);

/**
 * A card component displaying a game show or event, including an image link, dates, and an action button.
 * @param {GameShowCardProps} props - The props for the component.
 */
export const GameShowCard: React.FC<GameShowCardProps> = ({
  // 2. Define default values in the destructuring assignment
  href = '#',
  imageSrc = 'https://via.placeholder.com/1198x337/101010/FFFFFF?text=Event+Image+Placeholder', // Placeholder image
  imageAlt = 'Default Event Image',
  dates = 'Dates: To be announced',
  deadline = 'Applications Deadline: Check Website',
  NominateButton = <DefaultNominateButton />, // Use the placeholder component as the default button
}) => {
  return (
    // The main container for the card
    <div className="flex flex-col items-center gap-10 max-w-full mx-auto p-4">
      {/* Image Link Section */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full max-w-full h-[337px] relative no-underline overflow-hidden rounded-lg shadow-xl"
      >
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition duration-300 hover:scale-[1.03]"
          />
        </div>
      </a>

      {/* Content Section (Dates, Deadline, Button) */}
      <div className="flex flex-col gap-10 w-full">
        {/* Dates Heading */}
        <div
          className="flex flex-col justify-start outline-none flex-shrink-0"
          data-framer-name="Heading"
          data-framer-component-type="RichTextContainer"
        >
          {/* Display the dates prop (or default value) */}
          <h2 className="text-white text-center text-[52px] font-medium leading-[1.25] tracking-[-1px] font-satoshi">
            {dates}
          </h2>
        </div>

        {/* Applications Deadline Heading */}
        <div
          className="flex flex-col justify-start outline-none flex-shrink-0"
          data-framer-name="Heading"
          data-framer-component-type="RichTextContainer"
        >
          {/* Display the deadline prop (or default value) */}
          <h2 className="text-white text-center text-[52px] font-medium leading-[1.25] tracking-[-1px] font-satoshi">
            {deadline}
          </h2>
        </div>

        {/* Nominate Button Container */}
        <div className="w-max content-center mx-auto">
          {/* Display the NominateButton prop (or default button) */}
          {NominateButton}
        </div>
      </div>
    </div>
  );
};
