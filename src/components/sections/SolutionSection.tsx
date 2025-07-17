'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { Check } from '@/components/icons/lucide-icons';

const SolutionSection = () => {
  const t = useTranslations('homepage.solution');

  const benefits = [t('benefit1'), t('benefit2'), t('benefit3'), t('benefit4')];

  return (
    <section className="py-4 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="text-center mb-8">
            <FadeInOnScroll>
              <h2 className="md:text-4xl text-2xl font-bold text-gray-900 leading-[2.5rem] text-center md:mb-5">
                {t('title')}
              </h2>
            </FadeInOnScroll>
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 text-lg whitespace-pre-line">
              {t('intro')}
            </p>

            <div className="bg-gray-50 rounded p-6 mb-8">
              <div className="items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('benefitTitle')}
                </h3>
                <div className="space-y-3">
                  {benefits.map((text, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check
                        className="text-green-400 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="md:text-2xl text-xl text-gray-700 text-center font-medium leading-[2rem] sm:leading-[2.5rem]  whitespace-pre-line">
            {t('cta')}
          </p>
        </div>
      </div>

      {/* 画像セクション */}
      <div className="max-w-4xl mx-auto overflow-hidden">
        <div className="flex justify-center gap-2 mt-[2rem] mx-auto flex-wrap md:flex-nowrap">
          <div className="relative w-full md:w-[70%] h-[200px] md:h-[300px] rounded shadow overflow-hidden">
            <Image
              src="/assets/images/solution/001.png"
              alt="アスパラ"
              fill
              style={{ objectFit: 'cover' }} // ← borderRadius は不要
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>

          <div className="relative w-full md:w-[30%] h-[200px] md:h-[300px] rounded shadow overflow-hidden">
            <Image
              src="/assets/images/solution/002.webp"
              alt="アスパラ"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-[0.5rem] mx-auto flex-wrap md:flex-nowrap">
          <div className="relative w-full md:w-[30%] h-[200px] md:h-[300px] rounded shadow overflow-hidden">
            <Image
              src="/assets/images/solution/003.webp"
              alt="アスパラ"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
          <div className="relative w-full md:w-[70%] h-[200px] md:h-[300px] rounded shadow overflow-hidden">
            <Image
              src="/assets/images/solution/004.webp"
              alt="アスパラ"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
