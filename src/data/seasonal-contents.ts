// src/data/seasonal-contents.ts
import type { Phase,Season } from './season-config';

export type SeasonalContent = {
  season: Season;
  phase: Phase;
  label: string;
  immediateTitle: string;
  scheduledTitle: string;
  subscriptionInfo: string;
  urgencyMainMessage: string;
  urgencySubMessage: string;
  finalPushMainMessage: string;
  finalPushSubMessage: string;
};
