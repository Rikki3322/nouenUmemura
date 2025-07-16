'use client';

import React from 'react';
import {
  Check,
  FileText,
  Send,
  ShieldCheck,
} from '@/components/icons/lucide-icons';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { useTranslations } from 'next-intl';

const RiskReductionSection = () => {
  const t = useTranslations('riskReduction');

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* セクションタイトル */}
          <FadeInOnScroll>
            <div className="flex justify-center items-center gap-2 mb-8">
              <ShieldCheck className="text-green-600" size={24} />
              <h2 className="text-3xl font-bold text-gray-900">{t('title')}</h2>
            </div>
          </FadeInOnScroll>

          {/* 保証カード */}
          <div className="bg-green-50 rounded p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 鮮度保証 */}
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="text-green-600" size={20} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('freshness.title')}
                  </h3>
                </div>
                <p className="text-gray-700 text-base sm:text-sm">
                  {t('freshness.description')}
                </p>
              </div>

              {/* 保存方法 */}
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="text-green-600" size={20} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('storage.title')}
                  </h3>
                </div>
                <p className="text-gray-700 text-base sm:text-sm">
                  {t('storage.description')}
                </p>
              </div>

              {/* サポート */}
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Send className="text-green-600" size={20} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('support.title')}
                  </h3>
                </div>
                <p className="text-gray-700 text-base sm:text-sm">
                  {t('support.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskReductionSection;
