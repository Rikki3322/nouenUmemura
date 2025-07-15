import { useLocale } from 'next-intl';
import { seasonalContents_ja } from './seasonal-contents.ja';
import { seasonalContents_en } from './seasonal-contents.en';
import type { SeasonalContent } from './seasonal-contents';

export const useSeasonalContents = (): SeasonalContent[] => {
  const locale = useLocale();
  return locale === 'en' ? seasonalContents_en : seasonalContents_ja;
};
