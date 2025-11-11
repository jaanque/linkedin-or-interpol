"use client";

import { useState } from 'react';
import ImageCard from '../components/ImageCard';
import Buttons from '../components/Buttons';
import Score from '../components/Score';

const images = [
  { src: '/images/linkedin1.jpg', type: 'linkedin' },
  { src: '/images/interpol1.jpg', type: 'interpol' },
  // Add more images here
];

export default function Home() {
  const [score, setScore] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAnswer = (answer: 'linkedin' | 'interpol') => {
    if (images[currentImageIndex].type === answer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">LinkedIn or Interpol?</h1>

      <div className="mb-8">
        <ImageCard imageUrl={images[currentImageIndex].src} />
      </div>

      <div className="mb-8">
        <Buttons
          onLinkedInClick={() => handleAnswer('linkedin')}
          onInterpolClick={() => handleAnswer('interpol')}
        />
      </div>

      <Score score={score} />
    </main>
  );
}
