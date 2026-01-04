'use client';
import React from 'react';
import Image from 'next/image'; // Assuming Next.js, or use <img>

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
      className="group relative flex flex-col w-full transition-transform duration-300 hover:-translate-y-2"
      target="_blank"
    >
      {/* Image Container: Fixed Aspect Ratio */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-900 shadow-lg">
        {/* Layer 1: Blurred background to fill empty space */}
        <div
          className="absolute inset-0 scale-110 opacity-40 blur-2xl"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Layer 2: The actual Image (Contained) */}
        <div className="relative z-10 flex h-full w-full items-center justify-center p-4">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Winner Badge */}
        {isWinner && (
          <div className="absolute top-3 right-3 z-20 bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-md">
            Winner
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="mt-4 space-y-1">
        <h3 className="text-white font-medium leading-tight group-hover:text-yellow-500 transition-colors">
          {title}
        </h3>
        {studio && <p className="text-neutral-400 text-sm">{studio}</p>}
      </div>
    </a>
  );
};

export default NomineeCard;
