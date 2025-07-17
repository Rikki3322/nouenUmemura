'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import action001 from '@/../public/assets/images/action/001.webp';
import action002 from '@/../public/assets/images/action/002.png';
// 静的インポート（blur対応）
import border003 from '@/../public/assets/images/border/003.png';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { SeasonType } from '@/data/season-config';
import { SeasonalContent } from '@/data/seasonal-contents';

import ImmediatePurchase from './ImmediatePurchase';
import OrderOptions from './OrderOptions';
import ScheduledPurchase from './ScheduledPurchase';
import SubscriptionPurchase from './SubscriptionPurchase';
import TabSelector, { TabType } from './TabSelector';

interface ActionSectionProps {
  seasonType: SeasonType;
  seasonal: SeasonalContent;
}

const ActionSection: React.FC<ActionSectionProps> = ({
  seasonType,
  seasonal,
}) => {
  const t = useTranslations('homepage.action');
  const [activeTab, setActiveTab] = useState<TabType>('immediate');

  const renderContent = () => {
    switch (activeTab) {
      case 'immediate':
        return <ImmediatePurchase currentContent={seasonal} />;
      case 'scheduled':
        return <ScheduledPurchase currentContent={seasonal} />;
      case 'subscription':
        return <SubscriptionPurchase currentContent={seasonal} />;
      default:
        return <ImmediatePurchase currentContent={seasonal} />;
    }
  };

  return (
    <section className="bg-white py-12 md:py-16" id="action">
      <div className="container mx-auto px-4">
        <FadeInOnScroll>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">
            {t('title')}
          </h2>
        </FadeInOnScroll>

        {/* タブ切り替え */}
        <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />

        {/* 購入方法コンテンツ */}
        <div className="mb-12 max-w-2xl mx-auto">{renderContent()}</div>

        {/* 共通オプション */}
        <OrderOptions />
      </div>

      {/* 商品画像とボーダー装飾 */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Image
            src={border003}
            alt="border03"
            width={1200}
            height={80}
            className="w-full h-auto mt-8"
            placeholder="blur"
          />

          <div className="flex flex-col md:flex-row justify-center gap-4 w-full mt-8">
            {/* 1枚目 */}
            <div className="relative w-full md:w-1/2 aspect-square rounded shadow overflow-hidden">
              <Image
                src={action001}
                alt="package001"
                placeholder="blur"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* 2枚目 */}
            <div className="relative w-full md:w-1/2 aspect-square rounded shadow overflow-hidden">
              <Image
                src={action002}
                alt="package002"
                placeholder="blur"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
