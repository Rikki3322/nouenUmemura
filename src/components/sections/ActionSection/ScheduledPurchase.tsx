'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/app/ui/button';
import { getEcSites } from '@/data/ec-sites';
import { SeasonalContent } from '@/data/seasonal-contents';

import RandomDishImage from '../../layout/RandomDishImage';

const ecSites = getEcSites();

interface ScheduledPurchaseProps {
  currentContent: SeasonalContent;
}

const ScheduledPurchase = ({ currentContent }: ScheduledPurchaseProps) => {
  const t = useTranslations('homepage.scheduledPurchase');
  const ecT = useTranslations('ecSites'); // ecSites用の翻訳取得関数

  return (
    <div className="rounded-xl bg-white p-6">
      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          {currentContent.season !== 'off' && (
            <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
              {t('scheduledDelivery')}
            </span>
          )}
        </div>
        <h3 className="mt-2 text-xl font-semibold">
          {currentContent.scheduledTitle}
        </h3>
      </div>
      {currentContent.season !== 'off' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:justify-center gap-3 mb-4">
          {ecSites
            .filter((site) => site.id === 1 || site.id === 2) // フィルター
            .map((site) => (
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
                    {/* 背景画像（一部表示） */}
                    <div className="absolute top-[-130px] left-[-100px] z-10 w-60 h-60 rounded overflow-hidden opacity-20">
                      <Image
                        src={site.imagePath}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>

                    <span className="text-sm mb-2 block relative z-10">
                      {ecT(site.name)}
                    </span>

                    {site.badge.scheduled && (
                      <span
                        className={`rounded px-2 py-0.5 text-xs ${site.color} relative z-10`}
                      >
                        {ecT(site.badge.scheduled)}
                      </span>
                    )}
                  </div>
                </Button>
              </Link>
            ))}
        </div>
      )}

      <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center rounded-lg">
        <RandomDishImage className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ScheduledPurchase;
