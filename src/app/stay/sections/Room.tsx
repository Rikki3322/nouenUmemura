'use client';

import React, { useEffect,useState } from 'react';

import CarouselInfiniteScroll from '@/components/animations/CarouselInfiniteScroll';
import CarouselSingleSlide from '@/components/animations/CarouselSingleSlide';

const roomImages = [
  '/assets/images/stay/room/001.webp',
  '/assets/images/stay/room/002.webp',
  '/assets/images/stay/room/003.webp',
  '/assets/images/stay/room/004.webp',
  '/assets/images/stay/room/005.webp',
  '/assets/images/stay/room/006.webp',
  '/assets/images/stay/room/007.webp',
  '/assets/images/stay/room/008.webp',
  '/assets/images/stay/room/009.webp',
  '/assets/images/stay/room/010.webp',
  '/assets/images/stay/room/011.webp',
  '/assets/images/stay/room/012.webp',
  '/assets/images/stay/room/013.webp',
  '/assets/images/stay/room/014.webp',
];

const RoomSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % roomImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-relaxed">
            懐かしさと静けさ満ちる
            <br />
            日本の家
          </h3>
          <p className="text-lg text-gray-600">
            ほのかな木の薫りに包まれる、旅館のような広さと日本家屋の心地よさ。
          </p>
          <p className="text-gray-600 mt-2">
            【6畳＋8畳の二間続き和室】＋【6畳の和室】（エアコン完備）をご自由にご利用いただけます。
          </p>
        </div>

        {/* Desktop: Infinity scroll carousel */}
        <div className="hidden lg:block">
          <CarouselInfiniteScroll
            images={roomImages}
            animationDurationSec={70}
          />
        </div>

        {/* Mobile: Carousel with dots */}
        <div className="lg:hidden mt-8">
          <CarouselSingleSlide images={roomImages} autoSlideIntervalMs={2000} />
        </div>
      </div>
    </section>
  );
};

export default RoomSection;
