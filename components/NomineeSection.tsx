'use client';

import React from 'react';
import Image from 'next/image';
import NomineeCard from './NomineeCard';
import { karla } from '@/app/layout';

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
      <div className="max-w-8xl mx-auto">
        {/* Header Content */}
        <div className={`mb-16 text-center ${karla.className}`}>
          <h1 className="text-7xl font-semibold leading-[1.05em] tracking-[-3px] text-white mb-6">
            {categoryTitle}
          </h1>
          <p className="text-lg leading-[1.6em]  text-gray-300 max-w-4xl mx-auto">
            {categoryDescription}
          </p>
        </div>

        {/* Nominees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-5 gap-6 lg:gap-10">
          {nominees.map((nominee) => (
            <NomineeCard key={nominee.id} {...nominee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NomineeSection;
