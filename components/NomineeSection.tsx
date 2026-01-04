'use client';
import React from 'react';
import NomineeCard from './NomineeCard';

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
  categoryTitle,
  categoryId,
  categoryDescription,
  nominees,
}) => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto" id={categoryId}>
      {/* Header Content */}
      <div className="mb-10 space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {categoryTitle}
        </h2>
        <p className="text-neutral-400 max-w-2xl text-lg">
          {categoryDescription}
        </p>
      </div>

      {/* Nominees Grid: Responsive Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {nominees.map((nominee) => (
          <NomineeCard
            key={nominee.id}
            id={nominee.id}
            title={nominee.title}
            studio={nominee.studio}
            imageUrl={nominee.imageUrl}
            link={nominee.link}
            isWinner={nominee.isWinner}
          />
        ))}
      </div>
    </section>
  );
};

export default NomineeSection;
