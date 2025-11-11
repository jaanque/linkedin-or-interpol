"use client";

import {useTranslations} from 'next-intl';

type ScoreProps = {
  score: number;
  total: number;
};

export default function Score({ score, total }: ScoreProps) {
  const t = useTranslations('Home');

  return (
    <div className="text-xl">
      <span className="font-bold">{t('score')}: {score}</span>
      <span className="text-gray-500 ml-4">{t('total')}: {total}</span>
    </div>
  );
}
