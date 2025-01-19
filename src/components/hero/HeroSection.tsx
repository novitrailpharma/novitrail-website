import React from 'react';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightSection from './RightSection';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row min-h-[600px] overflow-hidden">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </section>
  );
};

export default HeroSection;