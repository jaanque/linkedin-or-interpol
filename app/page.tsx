"use client";

import { useState } from 'react';
import Header from '../components/Header';
import ImageCard from '../components/ImageCard';
import Score from '../components/Score';

const images = [
  { src: '/images/linkedin1.jpg', type: 'linkedin' },
  { src: '/images/interpol1.jpg', type: 'interpol' },
  // Add more images here
];

export default function Home() {
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
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-bold mb-2">
          <span className="text-blue-600">LinkedIn</span> ou <span className="text-red-600">Interpol</span>
        </h1>
        <p className="text-gray-600 mb-6">¿Profesional o Criminal? ¡Tú decides!</p>

        <Score score={score} total={total} />

        <div className="mt-8">
          <ImageCard
            imageUrl={images[currentImageIndex].src}
            onLinkedInClick={() => handleAnswer('linkedin')}
            onInterpolClick={() => handleAnswer('interpol')}
          />
        </div>
      </main>
      <footer className="w-full text-center p-4 text-xs text-gray-500">
        <p>LinkedIn o Interpol - Un Juego de Deducción - Versión 1.0</p>
        <p>
          <span className="font-bold">Aviso legal:</span> Este sitio web es un juego de adivinanzas satírico y educativo.
        </p>
        <p>
          <a href="#" className="underline">Política de Privacidad</a> <a href="#" className="underline">Términos de Servicio</a>
        </p>
        <p>© 2025 Thebrainfox. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
