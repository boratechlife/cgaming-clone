"use client";
import React from "react";

import WhatWeDo from "@/components/about/WhatWeDo";
import WhyMatter from "@/components/about/WhyMatter";
import StoryOfCGAs from "@/components/about/StoryOfCGAs";
import WhatAreTheCGAs from "@/components/about/WhatAreTheCGAs";

export default function AboutPage() {
  return (
    <>
      <WhatAreTheCGAs />
      <StoryOfCGAs />
      <WhatWeDo />
      <WhyMatter />
    </>
  );
}
