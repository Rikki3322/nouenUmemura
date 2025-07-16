'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { X } from '@/components/icons/lucide-icons';

const ProblemSection = () => {
  const t = useTranslations('problem');

  return (
    <section className="py-4 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* タイトル */}
          <div className="block px-2">
            <FadeInOnScroll>
              <h2 className="md:text-4xl text-2xl font-bold text-gray-900 leading-[2.5rem] text-center md:mb-5">
                {t('titleLine1')}
                <br className="block sm:hidden" />
                {t('titleLine2')}
                <br />
                {t('titleLine3')}
              </h2>
            </FadeInOnScroll>
          </div>

          <div className="relative w-full h-[300px] md:h-[400px] rounded overflow-hidden bg-white md:mb-5">
            <Image
              src="/assets/images/problem/001.webp"
              alt={t('imageAlt1')}
              fill
              style={{ objectFit: 'contain', borderRadius: '1rem' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* 見出し */}
          <div className="space-y-6 px-4 z-10 text-center mb-12">
            <p className="text-gray-700 sm:text-2xl text-xl sm:leading-[2.5rem]">
              {t('subtitle1.part1')}
              <span className="text-green-500">{t('subtitle1.highlight')}</span>
              {t('subtitle1.part2')}
              <br className="block sm:hidden" />
              {t('subtitle1.part3')}
            </p>
            <p className="text-gray-700 sm:text-2xl text-xl sm:leading-[2.5rem] mt-2">
              {t('subtitle2')}
            </p>
            <p className="text-gray-700 text-lg sm:leading-[2.5rem]">
              {t('subtitle3')}
            </p>
            <p className="text-gray-700 text-lg sm:leading-[2.5rem] mt-2">
              {t('subtitle4')}
            </p>
          </div>

          <div className="bg-gray-50 rounded p-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full mt-[2rem] px-4 md:px-0 max-w-4xl mx-auto">
              {/* テキストエリア：左側 */}
              <div className="w-full md:w-1/2 space-y-3 sm:text-lg text-base">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-start gap-2">
                    <X className="text-red-500 flex-shrink-0 mt-1" size={16} />
                    <p className="text-gray-700">{t(`complaint${num}`)}</p>
                  </div>
                ))}
              </div>

              {/* 画像エリア：右側 */}
              <FadeInOnScroll>
                <div className="hidden md:block relative w-full md:w-[267px] h-[400px] rounded overflow-hidden">
                  <Image
                    src="/assets/images/problem/002.png"
                    alt={t('imageAlt2')}
                    width={267}
                    height={400}
                    className="rounded"
                  />
                </div>
              </FadeInOnScroll>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full mt-[2rem] px-4 md:px-0 max-w-4xl mx-auto">
            {/* 画像エリア：左側 */}
            <FadeInOnScroll>
              <div className="hidden md:block relative w-full md:w-[267px] h-[400px] rounded overflow-hidden">
                <Image
                  src="/assets/images/problem/003.png"
                  alt={t('imageAlt3')}
                  width={267}
                  height={400}
                  className="rounded"
                />
              </div>
            </FadeInOnScroll>

            {/* テキストエリア：右側 */}
            <p className="text-gray-700 text-lg sm:leading-[2.5rem]">
              {t('conclusion1')}
              <br />
              <br />
              {t('conclusion2.part1')}
              <span className="text-green-500">
                {t('conclusion2.highlight')}
              </span>
              {t('conclusion2.part2')}
              <br />
              <br />
              {t('conclusion3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
