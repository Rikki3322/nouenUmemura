import { getEcSites } from '@/data/ec-sites';
import { AnswerKey, Answers } from '@/types/recommendation-types';

// i18n対応：textを削除し、IDだけ保持する静的な質問リスト
export const questions: { id: AnswerKey }[] = [
  { id: 'subscription' },
  { id: 'gift' },
  { id: 'flexibleAmount' },
  { id: 'freeShipping' },
  { id: 'points' },
];

const sites = getEcSites();

// 回答に基づくおすすめサイトロジック
export const recommendSite = (answers: Answers) => {
  const rakuten = sites.find((site) => site.name.includes('楽天'));
  const tabechoku = sites.find((site) => site.name === '食べチョク');
  const base = sites.find((site) => site.name === 'BASE');
  const pokemaru = sites.find((site) => site.name === 'ポケマル');

  if (answers.freeShipping === 'yes' && rakuten) return rakuten;
  if (answers.subscription === 'yes' && tabechoku) return tabechoku;
  if (answers.flexibleAmount === 'yes' && tabechoku) return pokemaru;
  if (answers.gift === 'yes' && tabechoku) return tabechoku;
  if (answers.points === 'yes' && rakuten) return rakuten;

  return base ?? sites[0];
};
