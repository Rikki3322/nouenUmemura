'use client';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % amenitiesImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-relaxed">
            暮らすように泊まる、
            <br className="block sm:hidden" />
            農家の宿
          </h3>
          <p className="text-lg text-gray-600">
            八幡岳を望む静かな場所で、
            <br className="block sm:hidden" />
            &quot;ちょうどいい&quot;農家の宿です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Bath className="text-amber-600" size={32} />,
              title: 'バスルーム・トイレ',
              description:
                'シャワー・ボディソープ・シャンプー\nドライヤー・ウォシュレット付き水洗トイレ',
            },
            {
              icon: <CookingPot className="text-amber-600" size={32} />,
              title: 'キッチン',
              description:
                '冷蔵庫・電子レンジ・電気ケトル\nフライパン・鍋・皿・コップ・トング・箸\nまな板・包丁・カセットコンロ・ダイニングテーブル',
            },
            {
              icon: <WashingMachine className="text-amber-600" size={32} />,
              title: 'ランドリー・リネン',
              description: '洗濯機・物干し・フェイスタオル・布団5組まで',
            },
            {
              icon: <Wifi className="text-amber-600" size={32} />,
              title: 'インターネット',
              description: '無料Wi-Fi',
            },
            {
              icon: <CircleParking className="text-amber-600" size={32} />,
              title: '駐車場',
              description: '敷地内に2台分の駐車場有り',
            },
            {
              icon: <KeyRound className="text-amber-600" size={32} />,
              title: 'チェックイン',
              description:
                'チェックイン 16:00\n（19時以降はご連絡ください）\nチェックアウト 10:00',
            },
          ].map(({ icon, title, description }, idx) => (
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

        {/* Desktop: Infinite scroll carousel */}
        <div className="hidden lg:block">
          <CarouselInfiniteScroll
            images={amenitiesImages}
            animationDurationSec={70}
          />
        </div>

        {/* Mobile: Single image carousel with dots */}
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
