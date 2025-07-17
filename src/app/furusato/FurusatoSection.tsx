'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

import {
  BookAlert,
  Heart,
  Leaf,
  Megaphone,
  ThumbsUp,
} from '@/components/icons/lucide-icons';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

const FurusatoPage = () => {
  const t = useTranslations('furusato');
  const locale = useLocale();

  const breadcrumbItems = [
    { label: t('breadcrumb.home'), href: `/${locale}` },
    { label: t('breadcrumb.furusato') },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:py-24 text-black">
      <Breadcrumb items={breadcrumbItems} />

      {/* タイトル・リード */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold border-b border-black pb-4 mb-6">
          {t('title')}
        </h1>
        <h2 className="text-lg leading-relaxed">{t('lead')}</h2>
      </div>

      {/* セクション1 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <Leaf className="w-5 h-5 mr-2 text-green-600" />
          {t('section1.title')}
        </h2>
        <p className="leading-relaxed whitespace-pre-line">
          {t('section1.body')}
        </p>
      </div>

      {/* セクション2 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <ThumbsUp className="w-5 h-5 mr-2 text-amber-600" />
          {t('section2.title')}
        </h2>
        <p className="leading-relaxed whitespace-pre-line">
          {t.rich('section2.body', {
            link: (chunks) => (
              <a
                href="https://www.soumu.go.jp/main_sosiki/jichi_zeisei/czaisei/czaisei_seido/furusato/about/"
                className="underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>

      {/* セクション3 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <Heart className="w-5 h-5 mr-2 text-red-600" />
          {t('section3.title')}
        </h2>
        <p className="leading-relaxed">{t('section3.body')}</p>
      </div>

      {/* セクション4 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <Megaphone className="w-5 h-5 mr-2 text-blue-600" />
          {t('section4.title')}
        </h2>
        <ul className="list-disc list-inside ml-4 leading-relaxed">
          {t.raw('section4.items').map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* セクション5 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <BookAlert className="w-5 h-5 mr-2 text-violet-600" />
          {t('section5.title')}
        </h2>
        <ul className="list-disc list-inside ml-4 leading-relaxed">
          {t.raw('section5.items').map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 画像 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-4">
        {['003', '001', '002'].map((num) => (
          <div
            key={num}
            className="relative aspect-square w-full md:w-1/3 max-w-[300px] rounded-lg shadow-lg mx-auto"
          >
            <Image
              src={`/assets/images/furusato/${num}.webp`}
              alt={`ふるさと納税${num}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="pt-8">
        <a
          href="https://item.rakuten.co.jp/f412058-imari/10001970/"
          className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  );
};

export default FurusatoPage;
