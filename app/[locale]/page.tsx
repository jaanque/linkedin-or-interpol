"use client";

import { useState } from 'react';
import {useTranslations} from 'next-intl';
import Header from '../../components/Header';
import ImageCard from '../../components/ImageCard';
import Score from '../../components/Score';

const images = [
  { src: '/images/linkedin1.jpg', type: 'linkedin' },
  { src: '/images/interpol1.jpg', type: 'interpol' },
  // Add more images here
];

export default function Home() {
  const t = useTranslations('Home');
  const f = useTranslations('Footer');
  const [score, setScore] = useState(6);
  const [total, setTotal] = useState(7);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAnswer = (answer: 'linkedin' | 'interpol') => {
    if (images[currentImageIndex].type === answer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setTotal(total + 1);
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-6xl font-extrabold mb-2 text-balance">
          <span className="text-primary-blue">LinkedIn</span> ou <span className="text-primary-red">Interpol</span>
        </h1>
        <p className="text-gray-500 mb-8 text-lg">{t('subtitle')}</p>

        <div className="mb-8">
          <Score score={score} total={total} />
        </div>

        <div className="w-full max-w-sm">
          <ImageCard
            imageUrl={images[currentImageIndex].src}
            onLinkedInClick={() => handleAnswer('linkedin')}
            onInterpolClick={() => handleAnswer('interpol')}
          />
        </div>
      </main>
      <footer className="w-full text-center p-6 text-sm text-gray-500">
        <p>{f('title')}</p>
        <p className="mt-1">
          <span className="font-semibold">{f('legal')}</span>
        </p>
        <p className="mt-2">
          <a href="#" className="underline hover:text-primary-blue">{f('privacy')}</a> | <a href="#" className="underline hover:text-primary-blue">{f('terms')}</a>
        </p>
        <p className="mt-2">{f('copyright')}</p>
      </footer>
    </div>
  );
}
