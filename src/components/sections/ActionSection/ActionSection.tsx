'use client';

import { useState } from 'react';
import { SeasonType } from '@/data/season-config';
import { SeasonalContent } from '@/data/seasonal-contents';

import TabSelector, { TabType } from './TabSelector';
import ImmediatePurchase from './ImmediatePurchase';
import ScheduledPurchase from './ScheduledPurchase';
import SubscriptionPurchase from './SubscriptionPurchase';
import OrderOptions from './OrderOptions';
import Image from 'next/image';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

interface ActionSectionProps {
  seasonType: SeasonType;
  seasonal: SeasonalContent;
}

const ActionSection: React.FC<ActionSectionProps> = ({
  seasonType,
  seasonal,
}) => {
  const content = seasonal;
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
    <section className="bg-white py-16" id="action">
      <div className="container mx-auto px-4">
        <FadeInOnScroll>
          <h2 className="mb-6 text-center text-3xl font-bold">食べてみる</h2>
        </FadeInOnScroll>

        {/* タブ切り替え */}
        <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />

        {/* 購入方法コンテンツ */}
        <div className="mb-12 max-w-2xl mx-auto">{renderContent()}</div>

        {/* 共通オプション */}
        <OrderOptions />
      </div>

      {/* 商品画像（absolute + relative版） */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/assets/images/border/003.png"
            alt="border03"
            width={1200}
            height={100}
            className="w-full h-auto"
          />
          <div className="flex flex-col md:flex-row justify-center gap-4 w-full mt-[2rem] px-4">
            {/* 1枚目 */}
            <div className="relative w-full aspect-square rounded shadow overflow-hidden">
              <Image
                src="/assets/images/action/001.webp"
                alt="package001"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* 2枚目 */}
            <div className="relative w-full aspect-square rounded shadow overflow-hidden">
              <Image
                src="/assets/images/action/002.png"
                alt="package002"
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
