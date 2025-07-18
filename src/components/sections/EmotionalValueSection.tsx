'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import CarouselInfiniteScroll from '@/components/animations/CarouselInfiniteScroll';
import CarouselSingleSlide from '@/components/animations/CarouselSingleSlide';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { Heart } from '@/components/icons/lucide-icons';

const IMAGES = [
  '/assets/images/emotionalValue/002.webp',
  '/assets/images/emotionalValue/003.webp',
  '/assets/images/emotionalValue/004.webp',
  '/assets/images/emotionalValue/005.webp',
  '/assets/images/emotionalValue/006.webp',
  '/assets/images/emotionalValue/007.webp',
  '/assets/images/emotionalValue/008.webp',
  '/assets/images/emotionalValue/009.webp',
  '/assets/images/emotionalValue/010.webp',
  '/assets/images/emotionalValue/011.webp',
  '/assets/images/emotionalValue/012.webp',
  '/assets/images/emotionalValue/013.webp',
  '/assets/images/emotionalValue/014.webp',
  '/assets/images/emotionalValue/015.webp',
  '/assets/images/emotionalValue/016.webp',
  '/assets/images/emotionalValue/017.webp',
  '/assets/images/emotionalValue/018.webp',
  '/assets/images/emotionalValue/019.webp',
];

const EmotionalValueSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = useTranslations('homepage.emotionalValue');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <FadeInOnScroll>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="text-green-500" size={24} />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-relaxed">
                {t('title.line1')}
                <br />
                {t('title.line2')}
              </h2>
              <Heart className="text-green-500" size={24} />
            </div>
          </FadeInOnScroll>
        </div>

        <div className="rounded p-6 space-y-4">
          <Image
            src="/assets/images/emotionalValue/001.webp"
            alt="プロフィール"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded shadow"
            priority
          />
          <p className="text-gray-700 text-lg">{t('body.0')}</p>
          <p className="text-gray-700 text-lg">{t('body.1')}</p>
          <p className="text-gray-700 text-lg">{t('body.2')}</p>
        </div>

        {/* Desktop: infinite scroll */}
        <div className="hidden lg:block">
          <CarouselInfiniteScroll images={IMAGES} animationDurationSec={90} />
        </div>

        {/* Mobile: single image carousel with dots */}
        <div className="lg:hidden mt-8">
          <CarouselSingleSlide images={IMAGES} autoSlideIntervalMs={1500} />
        </div>
      </div>
    </section>
  );
};

export default EmotionalValueSection;
