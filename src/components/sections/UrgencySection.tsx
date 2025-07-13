'use client';

import React from 'react';
import { Gift, AlertTriangle } from '@/components/icons/lucide-icons';
import { SeasonType } from '@/data/season-config';
import { SeasonalContent } from '@/data/seasonal-contents';
import Image from 'next/image';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

interface UrgencySectionProps {
  seasonType: SeasonType;
  seasonal: SeasonalContent;
}

const UrgencySection: React.FC<UrgencySectionProps> = ({
  seasonType,
  seasonal,
}) => {
  const content = seasonal;

  return (
    <section className="py-4 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* 上の飾り */}
          <div className="flex justify-center w-full">
            <div className="flex w-[calc(245px*3)] h-[60px]">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="relative w-[245px] h-[60px]">
                  <Image
                    src="/assets/images/border/002.png"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="245px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 本体枠 */}
          <div className="bg-red-50 rounded-xl p-6 border border-red-100 mt-4">
            <FadeInOnScroll>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gift className="text-red-600" size={24} />
                <h2 className="text-2xl font-bold text-red-600">
                  {content.immediateTitle}
                </h2>
              </div>
            </FadeInOnScroll>

            <div className="space-y-4">
              {/* 季節によって変わる本文 */}
              <p className="text-gray-900 sm:text-lg text-center">
                {content.urgencyMainMessage}
              </p>

              {/* 白表示 */}
              <div className="bg-white rounded-lg p-4 border border-red-100">
                <p className="text-xl text-gray-900 font-semibold text-center">
                  {content.urgencySubMessage}
                </p>
              </div>

              {/* 在庫警告文 */}
              {content.season !== 'off' && (
                <div className="flex items-center justify-center gap-2 text-red-600">
                  <AlertTriangle size={16} />
                  <p className="sm:text-sm text-xs font-medium text-center">
                    収穫量によって販売終了の場合があります
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 下の飾り */}
          <div className="flex justify-center w-full">
            <div className="flex w-[calc(245px*3)] h-[60px]">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="relative w-[245px] h-[60px]">
                  <Image
                    src="/assets/images/border/002.png"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="245px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
