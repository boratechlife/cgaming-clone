import React, { MouseEventHandler } from 'react';

// 1. Define the props interface
interface NominateButtonProps {
  /** The destination URL for the link (REQUIRED for an anchor tag) */
  href: string;
  /** The text displayed on the button (e.g., "NOMINATE YOUR GAME") */
  label?: string;
  /** Optional: The function to call *before* navigation occurs */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  /** Optional: Custom Tailwind CSS classes to merge with the default styling */
  className?: string;
  /** Optional: Opens the link in a new tab (defaults to true) */
  newTab?: boolean;
}

/**
 * A stylized link component that looks like a button, including an arrow icon and hover effects.
 */
export const NominateButton: React.FC<NominateButtonProps> = ({
  href,
  label = 'NOMINATE YOUR GAME', // Set a default value for the label
  onClick,
  className = '',
  newTab = true, // Default to opening in a new tab for external links
}) => {
  // Define target and rel attributes based on the newTab prop
  const target = newTab ? '_blank' : '_self';
  const rel = newTab ? 'noopener noreferrer' : undefined;

  // Combine default classes with any passed custom classes
  const baseClasses =
    'group relative flex items-center gap-3 px-8 py-5 bg-black text-white text-lg font-semibold tracking-wide ' +
    'overflow-hidden transition-all duration-300 hover:scale-105 no-underline'; // Added no-underline for link

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${className}`} // Apply combined classes
      target={target}
      rel={rel}
    >
      {/* Arrow icon */}
      <svg
        className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 17L17 7M17 7H7M17 7V17"
        />
      </svg>

      {/* Button text */}
      <span className="relative z-10">{label}</span>

      {/* Gradient overlay - appears on hover */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-teal-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-teal-400 to-teal-600 opacity-80 transition-all duration-300 group-hover:w-16 group-hover:h-16" />
    </a>
  );
};

export default NominateButton;
