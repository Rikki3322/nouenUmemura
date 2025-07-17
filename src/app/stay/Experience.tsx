'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Calendar, Users } from '@/components/icons/lucide-icons';

const ExperienceSection = () => {
  const t = useTranslations('stay.experience');

  return (
    <div className="bg-white">
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 leading-relaxed">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h3>
            <p className="text-lg text-gray-600">{t('season')}</p>
            <p className="text-lg text-gray-600">{t('subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Asparagus Harvesting */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/images/stay/experience/001.webp"
                  alt={t('asparagus.alt')}
                  fill
                  className="object-cover filter saturate-110 brightness-95"
                />
                <div className="absolute inset-0 bg-[#fefae0]/20" />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('asparagus.title')}
                </h4>
                <p className="text-gray-600 mb-4">{t('asparagus.body')}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-2" />
                  <span>{t('asparagus.period')}</span>
                </div>
              </div>
            </div>

            {/* BBQ Experience */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/images/stay/experience/002.webp"
                  alt={t('bbq.alt')}
                  fill
                  className="object-cover filter saturate-110 brightness-95"
                />
                <div className="absolute inset-0 bg-[#fefae0]/20" />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('bbq.title')}
                </h4>
                <p className="text-gray-600 mb-4">{t('bbq.body')}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users size={16} className="mr-2" />
                  <span>{t('bbq.note')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
