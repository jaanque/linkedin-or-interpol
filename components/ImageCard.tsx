"use client";

import Image from 'next/image';
import {useTranslations} from 'next-intl';

type ImageCardProps = {
  imageUrl: string;
  onLinkedInClick: () => void;
  onInterpolClick: () => void;
};

export default function ImageCard({ imageUrl, onLinkedInClick, onInterpolClick }: ImageCardProps) {
  const t = useTranslations('Home');

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 flex flex-col items-center w-full max-w-sm animate-fade-in transform transition-transform duration-500 hover:scale-105">
      <div className="w-72 h-72 relative mb-6 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt="Game image"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="flex gap-4 w-full">
        <button
          onClick={onLinkedInClick}
          className="bg-primary-blue hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg w-full transition-transform transform hover:scale-105"
        >
          {t('linkedin')}
        </button>
        <button
          onClick={onInterpolClick}
          className="bg-primary-red hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg w-full transition-transform transform hover:scale-105"
        >
          {t('interpol')}
        </button>
      </div>
    </div>
  );
}
