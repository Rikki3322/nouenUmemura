'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

// 静的インポート（blur対応）
import border001 from '@/../public/assets/images/border/001.png';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { Gift } from '@/components/icons/lucide-icons';
import { SeasonType } from '@/data/season-config';
import { SeasonalContent } from '@/data/seasonal-contents';

interface FinalPushSectionProps {
  seasonType: SeasonType;
  seasonal: SeasonalContent;
}

const FinalPushSection: React.FC<FinalPushSectionProps> = ({
  seasonType,
  seasonal,
}) => {
  const t = useTranslations('homepage.finalPushSection');
  const content = seasonal;

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-red-50 rounded p-6">
              <div className="flex justify-center items-center gap-3 mb-4 text-center">
                <Gift className="text-red-600" size={24} />
                <h2 className="sm:text-2xl text-xl font-bold text-red-600 sm:whitespace-normal whitespace-pre-line">
                  {content.finalPushMainMessage || t('defaultMain')}
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center items-center gap-2 text-center">
                  <p className="text-gray-900">
                    {content.finalPushSubMessage || t('defaultSub')}
                  </p>
                </div>
                {content.season !== 'off' && (
                  <div className="text-sm text-gray-600 text-center">
                    {t('stockWarning')}
                  </div>
                )}
              </div>
            </div>

            <FadeInOnScroll>
              <Image
                src={border001}
                alt="border01"
                width={1200}
                height={80}
                className="w-full h-auto"
                placeholder="blur"
              />
            </FadeInOnScroll>

            <div className="text-center space-y-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  {t('message1')}
                  <br />
                  {t('message2')}
                </p>
                <p className="text-gray-700">
                  {t('message3')}
                  <br />
                  {t('message4')}
                </p>
                <p className="text-gray-700">
                  {t('message5')}
                  <br />
                  {t('message6')}
                  <br />
                  {t('message7')}
                  <br />
                  {t('message8')}
                </p>
              </div>

              <div>
                <p className="text-gray-900 font-bold text-lg mb-4">
                  🌱 {t('farmName')} 🌱
                </p>
                <a
                  href="#action"
                  className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors text-lg min-h-[48px]"
                >
                  {t('cta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalPushSection;
