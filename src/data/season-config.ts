export type Season = 'spring' | 'summer' | 'autumn' | 'off';
export type Phase = 'harvest1' | 'harvest2' | 'off';

export type SeasonType = {
  season: Season;
  phase: Phase;
};

export type SeasonConfigItem = {
  month: number; // 月（1〜12）
  season: Season; // シーズン名
  phase: Phase; // 収穫期フェーズ
  immediateAvailable: boolean; // 即納可能
  scheduledAvailable: boolean; // 納期指定可能
  subscriptionAvailable: boolean; // 定期購入可能
};

export const seasonConfig: SeasonConfigItem[] = [
  {
    month: 1,
    season: 'off',
    phase: 'off',
    immediateAvailable: false,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
  {
    month: 2,
    season: 'spring',
    phase: 'harvest1',
    immediateAvailable: true,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
  {
    month: 3,
    season: 'spring',
    phase: 'harvest1',
    immediateAvailable: true,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
  {
    month: 4,
    season: 'spring',
    phase: 'harvest2',
    immediateAvailable: true,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
  {
    month: 5,
    season: 'spring',
    phase: 'harvest2',
    immediateAvailable: true,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
  {
    month: 6,
    season: 'summer',
    phase: 'harvest1',
    immediateAvailable: true,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
  {
    month: 7,
    season: 'summer',
    phase: 'harvest1',
    immediateAvailable: true,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
  {
    month: 8,
    season: 'summer',
    phase: 'harvest2',
    immediateAvailable: true,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
  {
    month: 9,
    season: 'summer',
    phase: 'harvest2',
    immediateAvailable: true,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
  {
    month: 10,
    season: 'autumn',
    phase: 'harvest1',
    immediateAvailable: true,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
  {
    month: 11,
    season: 'off',
    phase: 'off',
    immediateAvailable: false,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
  {
    month: 12,
    season: 'off',
    phase: 'off',
    immediateAvailable: false,
    scheduledAvailable: true,
    subscriptionAvailable: true,
  },
];
