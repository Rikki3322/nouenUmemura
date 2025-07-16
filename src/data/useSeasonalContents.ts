import { useLocale } from 'next-intl';

import type { SeasonalContent } from './seasonal-contents';
import { seasonalContents_en } from './seasonal-contents.en';
import { seasonalContents_ja } from './seasonal-contents.ja';

export const useSeasonalContents = (): SeasonalContent[] => {
  const locale = useLocale();
  return locale === 'en' ? seasonalContents_en : seasonalContents_ja;
};
