"use client";

import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [color, setColor] = useState('bg-novitrail-blue');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => prevColor === 'bg-novitrail-blue' ? 'bg-novitrail-orange' : 'bg-novitrail-blue');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className={`w-8 h-8 ${color} rounded-full animate-ping`}></div>
    </div>
  );
};

export default Loading;