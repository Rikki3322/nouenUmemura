'use client';

import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import CarouselInfiniteScroll from '@/components/animations/CarouselInfiniteScroll';
import CarouselSingleSlide from '@/components/animations/CarouselSingleSlide';
import {
  Bath,
  CircleParking,
  CookingPot,
  KeyRound,
  WashingMachine,
  Wifi,
} from '@/components/icons/lucide-icons';

const amenitiesImages = [
  '/assets/images/stay/amenities/001.webp',
  '/assets/images/stay/amenities/002.webp',
  '/assets/images/stay/amenities/003.webp',
  '/assets/images/stay/amenities/004.webp',
  '/assets/images/stay/amenities/005.webp',
  '/assets/images/stay/amenities/006.webp',
  '/assets/images/stay/amenities/007.webp',
  '/assets/images/stay/amenities/008.webp',
  '/assets/images/stay/amenities/009.webp',
  '/assets/images/stay/amenities/010.webp',
  '/assets/images/stay/amenities/011.webp',
];

const AmenitiesSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = useTranslations('stay.amenities');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % amenitiesImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const amenities = [
    {
      icon: <Bath className="text-amber-600" size={32} />,
      title: t('items.bathroom.title'),
      description: t.raw('items.bathroom.description'),
    },
    {
      icon: <CookingPot className="text-amber-600" size={32} />,
      title: t('items.kitchen.title'),
      description: t.raw('items.kitchen.description'),
    },
    {
      icon: <WashingMachine className="text-amber-600" size={32} />,
      title: t('items.laundry.title'),
      description: t.raw('items.laundry.description'),
    },
    {
      icon: <Wifi className="text-amber-600" size={32} />,
      title: t('items.wifi.title'),
      description: t('items.wifi.description'),
    },
    {
      icon: <CircleParking className="text-amber-600" size={32} />,
      title: t('items.parking.title'),
      description: t('items.parking.description'),
    },
    {
      icon: <KeyRound className="text-amber-600" size={32} />,
      title: t('items.checkin.title'),
      description: t.raw('items.checkin.description'),
    },
  ];

  return (
    <section className="bg-white py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-relaxed">
            {t('heading.line1')}
            <br className="block sm:hidden" />
            {t('heading.line2')}
          </h3>
          <p className="text-lg text-gray-600">
            {t('description.line1')}
            <br className="block sm:hidden" />
            {t('description.line2')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {amenities.map(({ icon, title, description }, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                {icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
              <p className="text-gray-600 text-sm whitespace-pre-line">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <CarouselInfiniteScroll
            images={amenitiesImages}
            animationDurationSec={70}
          />
        </div>

        <div className="lg:hidden mt-8">
          <CarouselSingleSlide
            images={amenitiesImages}
            autoSlideIntervalMs={2000}
          />
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
