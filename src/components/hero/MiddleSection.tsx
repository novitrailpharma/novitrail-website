'use client';

import React from 'react';

const MiddleSection = () => {
  return (
    <div
      className="hidden lg:block w-[20%] bg-white opacity-30 shadow-xl z-20 -ml-[10%]"
      style={{
        clipPath: "url(#arcClipPathMiddle)",
        WebkitClipPath: "url(#arcClipPathMiddle)",
      }}
    >
      {/* SVG defining the clip path */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="arcClipPathMiddle" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 H 1 Q 1 0.5 0.23 1 H 0 V 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="h-full bg-gradient-to-r from-novitrail-orange/50 to-novitrail-blue/30" />
    </div>
  );
};

export default MiddleSection;