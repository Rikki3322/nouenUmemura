'use client';

import { useState } from 'react';
import { seasonConfig, SeasonConfigItem } from '@/data/season-config';
import { seasonalContents_ja } from '@/data/seasonal-contents.ja';
import type { SeasonalContent } from '@/data/seasonal-contents';
import UrgencySection from '@/components/sections/UrgencySection';
import ActionSection from '@/components/sections/ActionSection/ActionSection';
import FinalPushSection from '@/components/sections/FinalPushSection';

const DebugSeasonPage = () => {
  const today = new Date();
  const [simulatedMonth, setSimulatedMonth] = useState<number>(
    today.getMonth() + 1
  );

  // 該当月の seasonConfig を取得
  const currentSeasonConfig: SeasonConfigItem | undefined = seasonConfig.find(
    (item) => item.month === simulatedMonth
  );

  // 日本語の seasonal contents を使用
  const seasonalContents: SeasonalContent[] = seasonalContents_ja;

  // 該当する SeasonalContent を取得
  const currentSeasonalContent: SeasonalContent | undefined =
    currentSeasonConfig
      ? seasonalContents.find(
          (content) =>
            content.season === currentSeasonConfig.season &&
            content.phase === currentSeasonConfig.phase
        )
      : seasonalContents.find((content) => content.season === 'off'); // フォールバックとして off を表示

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🌿 季節シミュレーター</h1>

      {/* 月セレクト */}
      <div className="flex items-center gap-4">
        <label htmlFor="month" className="font-medium">
          表示したい月：
        </label>
        <select
          id="month"
          value={simulatedMonth}
          onChange={(e) => setSimulatedMonth(Number(e.target.value))}
          className="border border-gray-300 rounded px-3 py-1"
        >
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}月
            </option>
          ))}
        </select>
      </div>

      <p className="text-gray-600">
        現在のシーズンタイプ:{' '}
        <strong>{currentSeasonalContent?.label ?? '該当なし'}</strong>
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
