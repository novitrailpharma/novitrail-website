'use client';

import Image from "next/image";

// Use all 8 product images located in public/novi_products/1.png ... 8.png
const products = Array.from({length: 8}, (_, i) => `/novi_products/${i + 1}.png`);


import React, {useEffect, useState} from 'react';
import {ChevronRight} from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const diff = startX - touch.clientX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        }
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };

    document.addEventListener('touchmove', handleTouchMove);
  };

  return (
  <div className="relative h-full group select-none">
      <div
        className="h-full"
        onTouchStart={handleTouchStart}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={product}
              alt={`Product image ${index + 1}`}
              className="w-full h-full object-contain"
              width={800}
              height={800}
              priority={index === currentIndex}
            />
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg
                 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800"/>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;