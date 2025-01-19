'use client';

import { useState, useEffect } from 'react';

const words = ['Manufacturer', 'Marketer', 'Distributor', 'Exporter'];
const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_TIME = 2000;

export default function TypewriterText() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setIsPaused(true);
        }
      }
    }, isPaused ? PAUSE_TIME : isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, isPaused]);

  return (
    <p className="text-2xl md:text-3xl text-gray-700 font-semibold mt-4">
      Pharmaceutical{' '}
      <span className="inline-block min-w-[11ch] text-novitrail-blue">
        {text}
        <span className="animate-pulse text-novitrail-orange">|</span>
      </span>
    </p>
  );
}