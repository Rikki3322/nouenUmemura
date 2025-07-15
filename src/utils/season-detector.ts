import { seasonConfig, type SeasonType } from '@/data/season-config';
import { seasonalContents_ja } from '@/data/seasonal-contents.ja'; // ← ローカライズ不要な用途なので日本語で固定

/**
 * 現在の日付から SeasonType を取得（month ベース）
 */
export const getCurrentSeasonType = (date: Date = new Date()): SeasonType => {
  const month = date.getMonth() + 1; // 1〜12

  // 月に該当する seasonConfig を検索
  const config = seasonConfig.find((item) => item.month === month);

  return config
    ? { season: config.season, phase: config.phase }
    : { season: 'off', phase: 'off' };
};

/**
 * 現在の季節コンテンツを取得（日本語固定）
 */
export const getCurrentSeasonalContent = () => {
  const { season, phase } = getCurrentSeasonType();
  const content = seasonalContents_ja.find(
    (item) => item.season === season && item.phase === phase
  );

  return content ?? seasonalContents_ja.find((item) => item.season === 'off')!;
};
