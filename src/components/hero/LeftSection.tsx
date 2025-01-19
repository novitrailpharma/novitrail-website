import React from 'react';
import TypewriterText from "./TypewriterText";


const heroBackground = "/hero.png";

const LeftSection = () => {
  return (
    <div className="relative w-full lg:w-[70%] z-30">

      {/* Background section with SVG-based clip path */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-blend-overlay"
        style={{
          backgroundImage: `url(${heroBackground})`,
          clipPath: "url(#arcClipPath)",
          WebkitClipPath: "url(#arcClipPath)",
        }}
      >

        {/* SVG defining the clip path */}
        <svg width="0" height="0">
          <defs>
            <clipPath id="arcClipPath" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 H 1 Q 1 0.5 0.88 1 H 0 V 0 Z"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Content section */}
      <div className="relative h-full flex flex-col justify-center px-8 py-12">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          <span className="text-novitrail-blue">NOVI</span>
          <span className="text-novitrail-orange">TRAIL</span>
          <br />
          <span style={{ color: "#445354" }}>PHARMACEUTICALS</span>
        </h1>
        <TypewriterText />

      </div>
    </div>
  );
};

export default LeftSection;
