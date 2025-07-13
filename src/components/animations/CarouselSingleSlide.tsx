'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface CarouselSingleSlideProps {
  images: string[];
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  autoSlideIntervalMs?: number;
}

const CarouselSingleSlide: React.FC<CarouselSingleSlideProps> = ({
  images,
  imageWidth = 376,
  imageHeight = 282,
  className = '',
  autoSlideIntervalMs = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.4, // 40%見えたら発火
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // 自動スライド開始・停止
  useEffect(() => {
    if (isInView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoSlideIntervalMs);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isInView, autoSlideIntervalMs, images.length]);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <div className={className} ref={containerRef}>
      <div
        className="relative rounded-lg overflow-hidden shadow-2xl"
        style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
      >
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          loading="eager"
          priority={true}
        />
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Show image ${index + 1}`}
            tabIndex={0}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSingleSlide;
