'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import AboutHero from '@/components/AboutHero';
import Mission from '@/components/Mission';
import WhoWeAre from '@/components/WhoWeAre';
import Contactus from '@/components/Contactus';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#0d021b] text-white">
        <Contactus />
      </div>
    </>
  );
}
