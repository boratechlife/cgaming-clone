'use client';
import React from 'react';

interface NomineeCardProps {
  title: string;
  id: string;
  studio?: string;
  imageUrl: string;
  link: string;
  isWinner?: boolean;
}

const NomineeCard: React.FC<NomineeCardProps> = ({
  title,
  id,
  studio,
  imageUrl,
  link,
  isWinner,
}) => {
  return (
    <a
      href={link}
      className="group relative flex flex-col w-full outline-none"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* THE BOX: Constant grey background, subtle lift on hover */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#1a1a1a] border border-neutral-800 transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-black/50 group-hover:border-neutral-700">
        {/* LOGO WRAPPER: Centers and constrains the image */}
        <div className="relative flex h-full w-full items-center justify-center p-12">
          <img
            src={imageUrl}
            alt={title}
            className="
              max-h-full max-w-full object-contain
              /* INITIAL STATE: Grey, 60% opacity, slightly smaller */
              filter grayscale opacity-60 scale-95
              transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
              /* HOVER STATE: Vivid color, full opacity, grows larger */
              group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
            "
          />
        </div>

        {/* Premium Winner Badge */}
        {isWinner && (
          <div className="absolute top-4 right-4 z-20 bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black text-[9px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-widest">
            Winner
          </div>
        )}
      </div>

      {/* Typography: Minimalist and Clean */}
      <div className="mt-5 space-y-0.5 transition-transform duration-300 group-hover:translate-x-1">
        <h3 className="text-neutral-100 text-[13px] font-semibold tracking-wide uppercase">
          {title}
        </h3>
        {studio && (
          <p className="text-neutral-300 text-xs font-normal">{studio}</p>
        )}
      </div>
    </a>
  );
};

export default NomineeCard;
