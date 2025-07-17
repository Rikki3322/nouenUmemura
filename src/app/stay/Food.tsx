'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

const FoodSection = () => {
  const t = useTranslations('stay.food');

  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t('title.line1')}
              <br className="block sm:hidden" />
              {t('title.line2')}
            </h3>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {t('description.main')}
              <br />
              {t('description.sub')}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('details.dinner')}
              <br />
              {t('details.breakfast')}
              <br />
              {t('details.bringYourOwn')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/assets/images/stay/food/001.webp"
                  alt={t('cards.breakfast.title')}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {t('cards.breakfast.title')}
                </h4>
                <p className="text-gray-600">
                  {t('cards.breakfast.description')}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/assets/images/stay/food/002.webp"
                  alt={t('cards.bbq.title')}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {t('cards.bbq.title')}
                </h4>
                <p className="text-gray-600">{t('cards.bbq.description')}</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="relative w-full h-64">
                <Image
                  src="/assets/images/stay/food/003.webp"
                  alt={t('cards.irori.title')}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {t('cards.irori.title')}
                </h4>
                <p className="text-gray-600">{t('cards.irori.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodSection;
