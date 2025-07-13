'use client';

import { useState } from 'react';
import { SeasonType, SeasonConfigItem } from '@/data/season-config';
import { seasonalContents, SeasonalContent } from '@/data/seasonal-contents';
import UrgencySection from '@/components/sections/UrgencySection';
import FinalPushSection from '@/components/sections/FinalPushSection';
import ActionSection from '@/components/sections/ActionSection/ActionSection';

// 例：season-config の配列をインポートしてください
import { seasonConfig } from '@/data/season-config';

const DebugSeasonPage = () => {
  const today = new Date();
  const [simulatedMonth, setSimulatedMonth] = useState<number>(
    today.getMonth() + 1
  );

  // 月ごとの最大日数（今回は月だけ使うなら不要かも）
  const getDaysInMonth = (month: number): number =>
    new Date(2000, month, 0).getDate();

  // 月からシーズン設定を探す
  const currentSeasonConfig: SeasonConfigItem | undefined = seasonConfig.find(
    (item) => item.month === simulatedMonth
  );

  // シーズン設定があれば、seasonalContentsから該当するものを探す
  const currentSeasonalContent: SeasonalContent | undefined =
    currentSeasonConfig
      ? seasonalContents.find(
          (content) =>
            content.season === currentSeasonConfig.season &&
            content.phase === currentSeasonConfig.phase
        )
      : undefined;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🌿 季節シミュレーター</h1>

      {/* 月セレクトのみ */}
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
              season: currentSeasonConfig!.season,
              phase: currentSeasonConfig!.phase,
            }}
            seasonal={currentSeasonalContent}
          />
          <ActionSection
            seasonType={{
              season: currentSeasonConfig!.season,
              phase: currentSeasonConfig!.phase,
            }}
            seasonal={currentSeasonalContent}
          />
          <FinalPushSection
            seasonType={{
              season: currentSeasonConfig!.season,
              phase: currentSeasonConfig!.phase,
            }}
            seasonal={currentSeasonalContent}
          />
        </div>
      )}
    </div>
  );
};

export default DebugSeasonPage;
