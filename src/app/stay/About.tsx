'use client';

import Image from 'next/image';
import React from 'react';

import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { Instagram } from '@/components/icons/lucide-icons';

import { useTranslations } from 'next-intl';

const AboutSection = () => {
  const t = useTranslations('stay.about');

  // 方法1: unknown経由の型アサーション（推奨）
  //const paragraphs = t('paragraphs', { returnObjects: true }) as unknown as string[];

  // 方法2: より安全な型ガード付きアプローチ（最も推奨）
  // const rawParagraphs = t('paragraphs', { returnObjects: true });
  // const paragraphs: string[] = Array.isArray(rawParagraphs)
  //   ? rawParagraphs.filter((item): item is string => typeof item === 'string')
  //   : [];

  // 方法3: 個別にキーを指定してアクセス（最も型安全）
  const paragraphs = [
    t('paragraphs.0'),
    t('paragraphs.1'),
    t('paragraphs.2'),
    // 必要な分だけ追加
  ].filter(Boolean); // 空文字列や未定義を除外

  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* テキストコンテンツ */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {t('mainTitle')}
            </h3>

            <p className="text-xl text-gray-700 leading-relaxed">
              {t('subTitle')}
            </p>

            <div className="text-base text-gray-600 leading-relaxed space-y-4">
              {paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>

          {/* 画像コンテンツ */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-start">
            {/* 左画像 */}
            <FadeInOnScroll className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/assets/images/stay/about/001.webp"
                  alt={t('imgAlt1')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeInOnScroll>

            {/* 右画像 */}
            <FadeInOnScroll className="w-full md:w-1/2 md:mt-12">
              <div className="relative aspect-[3/4] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/assets/images/stay/about/002.webp"
                  alt={t('imgAlt2')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
