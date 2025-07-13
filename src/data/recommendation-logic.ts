import { Answers, AnswerKey } from '@/types/recommendation-types';
import { getEcSites } from '@/data/ec-sites';

export const questions: { id: AnswerKey; text: string }[] = [
  { id: 'subscription', text: '定期便を希望しますか？' },
  { id: 'gift', text: 'ギフト用ですか？' },
  { id: 'flexibleAmount', text: '分量を柔軟に相談しながら購入したいですか？' },
  { id: 'freeShipping', text: '送料無料を重視しますか？' },
  { id: 'points', text: 'ポイント還元（楽天ポイント）を重視しますか？' },
];

const sites = getEcSites();

export function recommendSite(answers: Answers) {
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
}
