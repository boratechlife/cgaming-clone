'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import AboutHero from '@/components/AboutHero';
import Mission from '@/components/Mission';
import WhoWeAre from '@/components/WhoWeAre';

export default function Home() {
  return (
    <>
      <AboutHero />;
      <Mission />
      <WhoWeAre />
    </>
  );
}
