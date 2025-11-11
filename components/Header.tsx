"use client";

import {useTranslations} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';

export default function Header() {
  const t = useTranslations('Header');
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newPath = pathname.replace(/\/(en|es|fr)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <select
            onChange={handleChange}
            className="border-gray-300 rounded-md py-2 px-3 focus:ring-primary-blue focus:border-primary-blue transition"
          >
            <option value="en">{t('language', {locale: 'en'})}</option>
            <option value="es">{t('language', {locale: 'es'})}</option>
            <option value="fr">{t('language', {locale: 'fr'})}</option>
          </select>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>{t('filter1.bw')} <input type="radio" name="filter1" className="ml-1" /></span>
            <span>{t('filter1.shrek')} <input type="radio" name="filter1" className="ml-1" /></span>
            <span>{t('filter1.saturate')} <input type="radio" name="filter1" className="ml-1" /></span>
            <span>{t('filter1.sepia')} <input type="radio" name="filter1" className="ml-1" /></span>
            <span className="font-medium text-primary-blue">{t('filter1.none')} <input type="radio" name="filter1" defaultChecked className="ml-1" /></span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{t('filter2.blur')} <input type="radio" name="filter2" className="ml-1" /></span>
            <span>{t('filter2.random')} <input type="radio" name="filter2" className="ml-1" /></span>
            <span className="font-medium text-primary-blue">{t('filter2.none')} <input type="radio" name="filter2" defaultChecked className="ml-1" /></span>
          </div>
        </div>
      </div>
    </header>
  );
}
