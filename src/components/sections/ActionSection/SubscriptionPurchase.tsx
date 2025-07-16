'use client';

import { SeasonalContent } from '@/data/seasonal-contents';
import { getEcSites } from '@/data/ec-sites';
import { Button } from '@/app/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import RandomDishImage from '../../layout/RandomDishImage';
import { useTranslations } from 'next-intl';

const ecSites = getEcSites();

interface SubscriptionPurchaseProps {
  currentContent: SeasonalContent;
}

const SubscriptionPurchase = ({
  currentContent,
}: SubscriptionPurchaseProps) => {
  const t = useTranslations('subscriptionPurchase');

  const filteredSites = ecSites.filter((site) => {
    if (
      currentContent.season === 'autumn' &&
      currentContent.phase === 'harvest1'
    ) {
      return site.id === 3; // 楽天のみ
    }
    return site.id === 2 || site.id === 3; // 楽天 & BASE
  });

  return (
    <div className="rounded-xl bg-white p-6">
      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          {currentContent.season !== 'off' && (
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
              {t('subscriptionDelivery')}
            </span>
          )}
        </div>
        <h3 className="mt-2 text-xl font-semibold">
          {currentContent.subscriptionInfo}
        </h3>
      </div>

      {currentContent.season !== 'off' && (
        <div
          className={`
            grid gap-3
            grid-cols-1
            ${filteredSites.length === 1 ? 'justify-center' : 'sm:grid-cols-2'}
          `}
        >
          {filteredSites.map((site) => (
            <Link
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                asChild
                variant="outline"
                className="cursor-pointer hover:shadow-md hover:opacity-90 transition w-full h-[120px] flex flex-col justify-center items-center text-xs text-center whitespace-normal break-words px-4 py-2 relative overflow-hidden"
              >
                <div className="flex flex-col items-center gap-1 relative z-10">
                  {/* 背景画像 */}
                  <div className="absolute top-[-130] left-[-100] z-10 w-60 h-60 rounded overflow-hidden opacity-20">
                    <Image
                      src={site.imagePath}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm mb-2 block relative z-10">
                    {site.name}
                  </span>
                  {site.badge.subscription && (
                    <span
                      className={`rounded px-2 py-0.5 text-xs ${site.color} relative z-10`}
                    >
                      {site.badge.subscription}
                    </span>
                  )}
                </div>
              </Button>
            </Link>
          ))}
        </div>
      )}

      <div className="space-y-4 mb-4 mt-4">
        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">{t('furusatoTitle')}</h4>
            <Link href="/furusato" passHref>
              <Button size="sm" variant="outline">
                {t('details')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
        <RandomDishImage className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SubscriptionPurchase;
