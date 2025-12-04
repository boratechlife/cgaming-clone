"use client";

import React from "react";
import Image from "next/image";

interface Nominee {
  id: string;
  title: string;
  studio?: string;
  imageUrl: string;
  link: string;
  isWinner?: boolean;
}

interface NomineeSectionProps {
  categoryId: string;
  categoryTitle: string;
  categoryDescription: string;
  nominees: Nominee[];
}

const NomineeSection: React.FC<NomineeSectionProps> = ({
  categoryId,
  categoryTitle,
  categoryDescription,
  nominees,
}) => {
  return (
    <div
      id={categoryId}
      className="w-full  from-purple-700 via-purple-600 to-indigo-600 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="mb-16 text-center">
          <h1 className="text-7xl font-semibold leading-[1.05em] tracking-[-3px] text-white mb-6">
            {categoryTitle.split(" ").map((word, index) => (
              <span key={index} className="inline-block">
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-lg leading-[1.6em] tracking-[-0.07em] text-gray-300 max-w-4xl mx-auto">
            {categoryDescription}
          </p>
        </div>

        {/* Nominees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {nominees.map((nominee) => (
            <a
              key={nominee.id}
              href={nominee.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-[10px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div
                className={`relative w-full aspect-square overflow-hidden rounded-[10px] transition-all duration-300 ${
                  nominee.isWinner
                    ? "grayscale-0"
                    : "grayscale group-hover:grayscale-0"
                }`}
              >
                <img
                  src={nominee.imageUrl}
                  alt={nominee.title}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                />
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h5 className="text-white text-2xl font-semibold leading-[120%] tracking-[-1px] mb-2">
                  {nominee.title}
                </h5>
                {nominee.studio && (
                  <p className="text-gray-400 text-lg leading-[140%] tracking-[-0.3px]">
                    {nominee.studio}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NomineeSection;
