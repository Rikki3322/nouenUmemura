'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const randomImages = [
  '/assets/images/action/dishes/001.png',
  '/assets/images/action/dishes/002.png',
  '/assets/images/action/dishes/003.png',
  '/assets/images/action/dishes/004.png',
  '/assets/images/action/dishes/005.png',
  '/assets/images/action/dishes/006.webp',
  '/assets/images/action/dishes/007.png',
  '/assets/images/action/dishes/008.png',
  '/assets/images/action/dishes/009.png',
  '/assets/images/action/dishes/010.png',
  '/assets/images/action/dishes/011.png',
  '/assets/images/action/dishes/012.webp',
  '/assets/images/action/dishes/013.png',
  '/assets/images/action/dishes/014.png',
  '/assets/images/action/dishes/015.png',
  '/assets/images/action/dishes/016.png',
  '/assets/images/action/dishes/017.webp',
  '/assets/images/action/dishes/018.png',
];

interface RandomDishImageProps {
  className?: string;
  alt?: string;
  heightClass?: string; // オプションで高さも調整可能
}

const getDifferentRandomImage = (exclude: string | null) => {
  const filtered = randomImages.filter((img) => img !== exclude);
  const index = Math.floor(Math.random() * filtered.length);
  return filtered[index];
};

const RandomDishImage = ({
  className = '',
  alt = '料理写真',
  heightClass = 'h-[300px]', // デフォルト高さ
}: RandomDishImageProps) => {
  const [randomImage, setRandomImage] = useState<string | null>(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      const newImage = getDifferentRandomImage(null);
      setRandomImage(newImage);
      hasMounted.current = true;
    } else {
      setRandomImage((prev) => getDifferentRandomImage(prev));
    }
  }, []);

  return (
    <div className={`relative w-full ${heightClass} ${className}`}>
      {randomImage ? (
        <Image
          src={randomImage}
          alt={alt}
          fill
          className="rounded-lg object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="bg-gray-100 flex items-center justify-center w-full h-full rounded-lg">
          <span className="text-sm text-gray-400">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default RandomDishImage;
