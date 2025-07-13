'use client';

import { seasonalContents } from '@/data/seasonal-contents';
import { getEcSites } from '@/data/ec-sites';
import { Button } from '@/app/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import RandomDishImage from '../../layout/RandomDishImage';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

type SeasonalContent = (typeof seasonalContents)[number];

const ecSites = getEcSites();

interface ImmediatePurchaseProps {
  currentContent: SeasonalContent;
}

const ImmediatePurchase = ({ currentContent }: ImmediatePurchaseProps) => {
  return (
    <div className="rounded-2xl bg-white p-6">
      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          {currentContent.season !== 'off' && (
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
              すぐにお届け
            </span>
          )}
        </div>
        <h3 className="mt-2 text-xl font-semibold">
          {currentContent.immediateTitle}
        </h3>
      </div>
      {currentContent.season !== 'off' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 mb-4">
          {ecSites.map((site) => (
            <FadeInOnScroll key={site.id}>
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
                    {/* 背景画像（一部を表示） */}
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
                    {site.badge.immediate && (
                      <span
                        className={`rounded px-2 py-0.5 text-xs ${site.color} relative z-10`}
                      >
                        {site.badge.immediate}
                      </span>
                    )}
                  </div>
                </Button>
              </Link>
            </FadeInOnScroll>
          ))}
        </div>
      )}
      <FadeInOnScroll>
        <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center rounded-lg">
          <RandomDishImage className="w-full h-full object-cover" />
        </div>
      </FadeInOnScroll>
    </div>
  );
};

export default ImmediatePurchase;
