'use client';

import Image from 'next/image';
import { useLocale,useTranslations } from 'next-intl';

import { Hammer, Mountain, Sparkles } from '@/components/icons/lucide-icons';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

const NohakuPage = () => {
  const t = useTranslations('nohaku');
  const locale = useLocale();

  const breadcrumbItems = [
    { label: t('breadcrumb.home'), href: `/${locale}` }, // 修正
    { label: t('breadcrumb.nohaku') },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:py-24 text-black">
      {/* パンくず */}
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
          <Mountain className="w-5 h-5 mr-2 text-green-600" />
          {t('section1.title')}
        </h2>
        <p className="leading-relaxed">{t('section1.body')}</p>
      </div>

      {/* セクション2 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <Hammer className="w-5 h-5 mr-2 text-yellow-700" />
          {t('section2.title')}
        </h2>
        <p className="leading-relaxed whitespace-pre-line">
          {t('section2.body')}
        </p>
      </div>

      {/* セクション3 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <Sparkles className="w-5 h-5 mr-2 text-pink-600" />
          {t('section3.title')}
        </h2>
        <p className="whitespace-pre-line">{t('section3.body')}</p>
      </div>

      {/* 画像 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative rounded-lg shadow-lg w-full aspect-[5/6]">
          <Image
            src="/assets/images/nohaku/001.webp"
            alt={t('imageAlt.001')}
            fill
            style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
          />
        </div>
        <div className="relative rounded-lg shadow-lg w-full aspect-[5/6] md:mt-8">
          <Image
            src="/assets/images/nohaku/002.webp"
            alt={t('imageAlt.002')}
            fill
            style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
          />
        </div>
      </div>
    </section>
  );
};

export default NohakuPage;
