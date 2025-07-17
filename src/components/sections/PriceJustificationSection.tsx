'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import {
  Droplets,
  Leaf,
  Package,
  Sun,
  Trophy,
  User,
} from '@/components/icons/lucide-icons';

const PriceJustificationSection = () => {
  const t = useTranslations('homepage.priceJustification');

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                {t('title.line1')}
                <span className="text-green-600">{t('title.highlight')}</span>
                <br />
                {t('title.line2')}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
                {t('description')}
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 左カラム：特徴一覧 */}
            <div className="bg-gray-50 rounded p-6">
              <div className="space-y-4">
                {[
                  {
                    icon: <Leaf className="text-emerald-600" size={20} />,
                    title: t('features.soil.title'),
                    text: t('features.soil.text'),
                  },
                  {
                    icon: <Droplets className="text-blue-600" size={20} />,
                    title: t('features.water.title'),
                    text: t('features.water.text'),
                  },
                  {
                    icon: <Sun className="text-amber-600" size={20} />,
                    title: t('features.temperature.title'),
                    text: t('features.temperature.text'),
                  },
                  {
                    icon: <User className="text-green-600" size={20} />,
                    title: t('features.love.title'),
                    text: t('features.love.text'),
                  },
                  {
                    icon: <Package className="text-orange-600" size={20} />,
                    title: t('features.shipping.title'),
                    text: t('features.shipping.text'),
                  },
                  {
                    icon: <Trophy className="text-yellow-600" size={20} />,
                    title: t('features.award.title'),
                    text: t('features.award.text'),
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右カラム：説明 */}
            <div className="bg-green-50 rounded p-6 leading-relaxed">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-8">
                  {t('quality.title')}
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  {t('quality.subtitle')}
                </p>
                <p className="text-gray-700 mb-2 text-left whitespace-pre-line">
                  {t('quality.body')}
                </p>
              </div>
            </div>
          </div>

          {/* 画像群（レスポンシブ統一） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="relative w-full aspect-square rounded shadow overflow-hidden"
              >
                <Image
                  src={`/assets/images/priceJusification/00${num}.jpg`}
                  alt={`price-justification-${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceJustificationSection;
