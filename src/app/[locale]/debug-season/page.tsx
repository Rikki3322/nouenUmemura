'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

import ActionSection from '@/components/sections/ActionSection/ActionSection';
import FinalPushSection from '@/components/sections/FinalPushSection';
import UrgencySection from '@/components/sections/UrgencySection';
import { seasonConfig, SeasonConfigItem } from '@/data/season-config';
import type { SeasonalContent } from '@/data/seasonal-contents';
import { seasonalContents_ja } from '@/data/seasonal-contents.ja';
import { seasonalContents_en } from '@/data/seasonal-contents.en'; // ← 英語版が必要

const DebugSeasonPage = () => {
  const t = useTranslations('debugSeason');
  const locale = useLocale();

  const today = new Date();
  const [simulatedMonth, setSimulatedMonth] = useState<number>(
    today.getMonth() + 1
  );

  const currentSeasonConfig: SeasonConfigItem | undefined = seasonConfig.find(
    (item) => item.month === simulatedMonth
  );

  const seasonalContents: SeasonalContent[] =
    locale === 'ja' ? seasonalContents_ja : seasonalContents_en;

  const currentSeasonalContent: SeasonalContent | undefined =
    currentSeasonConfig
      ? seasonalContents.find(
          (content) =>
            content.season === currentSeasonConfig.season &&
            content.phase === currentSeasonConfig.phase
        )
      : seasonalContents.find((content) => content.season === 'off');

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">{t('title')}</h1>

      {/* 月セレクト */}
      <div className="flex items-center gap-4">
        <label htmlFor="month" className="font-medium">
          {t('label')}
        </label>
        <select
          id="month"
          value={simulatedMonth}
          onChange={(e) => setSimulatedMonth(Number(e.target.value))}
          className="border border-gray-300 rounded px-3 py-1"
        >
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
              {locale === 'ja' ? '月' : ''}
            </option>
          ))}
        </select>
      </div>

      <p className="text-gray-600">
        {t('seasonType')}{' '}
        <strong>{currentSeasonalContent?.label ?? t('notFound')}</strong>
      </p>

      {currentSeasonalContent && (
        <div className="space-y-4 border-t pt-4">
          <h2 className="text-xl font-semibold">
            💡 {currentSeasonalContent.label}
          </h2>
          <UrgencySection
            seasonType={{
              season: currentSeasonalContent.season,
              phase: currentSeasonalContent.phase,
            }}
            seasonal={currentSeasonalContent}
          />
          <ActionSection
            seasonType={{
              season: currentSeasonalContent.season,
              phase: currentSeasonalContent.phase,
            }}
            seasonal={currentSeasonalContent}
          />
          <FinalPushSection
            seasonType={{
              season: currentSeasonalContent.season,
              phase: currentSeasonalContent.phase,
            }}
            seasonal={currentSeasonalContent}
          />
        </div>
      )}
    </div>
  );
};

export default DebugSeasonPage;
