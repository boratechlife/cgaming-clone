"use client";

import React from "react";

interface NomineeCardProps {
  title: string;
  studio?: string;
  imageUrl: string;
  link: string;
  isWinner?: boolean;
}

const NomineeCard: React.FC<NomineeCardProps> = ({
  title,
  studio,
  imageUrl,
  link,
  isWinner,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {/* Image */}
      <div
        className={`relative w-full aspect-square overflow-hidden rounded-xl mb-4 transition-all duration-300 ${
          isWinner ? "grayscale-0" : "grayscale group-hover:grayscale-0"
        }`}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h5 className="text-white text-[22px] font-semibold leading-tight mb-1">
        {title}
      </h5>

      {/* Subtitle */}
      {studio && (
        <p className="text-gray-400 text-[16px] leading-snug">{studio}</p>
      )}
    </a>
  );
};

export default NomineeCard;
