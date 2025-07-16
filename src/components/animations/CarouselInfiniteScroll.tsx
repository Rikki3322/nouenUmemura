'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface CarouselInfiniteScrollProps {
  images: string[];
  imageWidth?: number;
  imageHeight?: number;
  animationDurationSec?: number;
  className?: string;
}

const CarouselInfiniteScroll: React.FC<CarouselInfiniteScrollProps> = ({
  images,
  imageWidth = 376,
  imageHeight = 282,
  animationDurationSec = 50,
  className = '',
}) => {
  const totalImages = images.length * 2;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group w-screen ml-[calc(-50vw+50%)] overflow-hidden ${className}`}
      aria-label="Infinite scroll image carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: '100vw' }}
    >
      <div className="h-[282px] overflow-hidden relative">
        <div
          className={`scroll-infinity-list flex ${isHovered ? 'paused' : ''}`}
          style={{
            width: `${imageWidth * totalImages}px`,
            height: '100%',
            animationDuration: `${animationDurationSec}s`,
          }}
        >
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden mr-3 last:mr-0 flex-shrink-0"
              style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                fill
                sizes={`${imageWidth}px`}
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollInfinite {
          0% {
            transform: translateX(0);
          }
          100% {
            /* translateXは全幅分左に移動だが100%で指定することでズレ防止 */
            transform: translateX(-50%);
          }
        }
        .scroll-infinity-list {
          animation-name: scrollInfinite;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-play-state: running;
          animation-fill-mode: forwards;
          animation-direction: normal;
          /* animation-durationはインラインstyleで設定 */
          will-change: transform;
        }
        .scroll-infinity-list.paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default CarouselInfiniteScroll;
