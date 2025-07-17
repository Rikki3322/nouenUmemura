'use client';
import Image from 'next/image';
import { useLocale,useTranslations } from 'next-intl';
import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@/app/ui/button';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { ArrowRight, Check } from '@/components/icons/lucide-icons';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { getEcSites } from '@/data/ec-sites';
import { questions, recommendSite } from '@/data/recommendation-logic';
import { AnswerKey, Answers } from '@/types/recommendation-types';

const sites = getEcSites();

const EcSitesPage: React.FC = () => {
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement | null>(null);

  const t = useTranslations('ecSites');
  const locale = useLocale();

  const handleChange = (key: AnswerKey, value: 'yes' | 'no') => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allAnswered = questions.every(
      ({ id }) => answers[id] === 'yes' || answers[id] === 'no'
    );
    if (allAnswered) {
      setShowResult(true);
    } else {
      alert(t('alertIncomplete'));
    }
  };

  useEffect(() => {
    if (showResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
      resultRef.current.focus();
    }
  }, [showResult]);

  const recommended = recommendSite(answers);

  const breadcrumbItems = [
    { label: t('breadcrumb.home'), href: `/${locale}` },
    { label: t('breadcrumb.current') },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:py-24 text-black">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mb-12">
        <h1 className="text-4xl font-bold border-b border-black pb-4 mb-6">
          {t('title')}
        </h1>
        <h2 className="text-lg leading-relaxed">{t('description')}</h2>
      </div>

      <section className="mb-12 p-6 border border-gray-300 rounded-lg shadow-sm bg-white">
        <h2 className="text-xl font-semibold mb-4">
          {t('form.title', { count: questions.length })}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-label={t('form.aria')}
        >
          {questions.map(({ id }) => (
            <div key={id}>
              <p className="mb-2 font-medium">{t(`questions.${id}`)}</p>
              <div className="flex gap-6">
                <label
                  className="inline-flex items-center cursor-pointer"
                  htmlFor={`${id}-yes`}
                >
                  <input
                    id={`${id}-yes`}
                    type="radio"
                    name={id}
                    value="yes"
                    checked={answers[id] === 'yes'}
                    onChange={() => handleChange(id, 'yes')}
                    className="mr-2"
                    required
                  />
                  {t('form.yes')}
                </label>
                <label
                  className="inline-flex items-center cursor-pointer"
                  htmlFor={`${id}-no`}
                >
                  <input
                    id={`${id}-no`}
                    type="radio"
                    name={id}
                    value="no"
                    checked={answers[id] === 'no'}
                    onChange={() => handleChange(id, 'no')}
                    className="mr-2"
                    required
                  />
                  {t('form.no')}
                </label>
              </div>
            </div>
          ))}
          <Button type="submit" className="mt-4 font-semibold" variant="cta">
            {t('form.submit')}
          </Button>
        </form>
      </section>

      <div
        ref={resultRef}
        tabIndex={-1}
        className={`mb-12 transition-all duration-300 ${
          !showResult ? 'min-h-[200px]' : ''
        }`}
        aria-live="polite"
      >
        {showResult && recommended && (
          <FadeInOnScroll>
            <section
              className="p-6 border border-green-400 rounded-lg bg-green-50"
              aria-label={t('result.aria')}
            >
              <h3 className="text-lg font-semibold mb-3">
                {t('result.title')}
              </h3>
              <p className="mb-2 font-medium text-green-700">
                {t(recommended.name)}
              </p>
              <p className="mb-4">{t(recommended.description)}</p>
              <a
                href={recommended.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
              >
                {t('result.viewSite')}
              </a>
            </section>
          </FadeInOnScroll>
        )}
      </div>

      <section>
        <Image
          src="/assets/images/border/003.png"
          alt="border03"
          width={1200}
          height={100}
          className="w-full h-auto"
        />
        <h2 className="text-xl font-semibold mb-6">{t('allSites.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sites.map((site) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-white group min-h-48 overflow-hidden"
            >
              <div className="absolute top-[-80px] left-[-60px] w-80 h-80 opacity-20 z-0 pointer-events-none">
                <Image
                  src={site.imagePath || '/assets/images/border/003.png'}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                {/* ✅ 翻訳関数を使う */}
                <h3 className="font-semibold text-lg mb-4">{t(site.name)}</h3>
                <p className="text-gray-700 mb-4">{t(site.description)}</p>

                <div className="text-gray-700 mb-12 space-y-1 text-sm">
                  {Object.entries(site.badge).map(([key, value]) => {
                    if (!value) return null;

                    // ✅ ラベルと値の両方を翻訳
                    const label = t(`badges.${key}`);
                    const badgeValue = t(value); // ← ここも翻訳キーなので t() が必要

                    return (
                      <div key={key} className="flex items-start gap-1.5">
                        <Check
                          className="text-green-400 flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span>
                          <span className="font-semibold">{label}：</span>
                          {badgeValue}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <span className="absolute bottom-4 left-6 inline-flex items-center text-green-600 font-semibold">
                {t('allSites.viewSite')}
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5 text-green-600" />
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default EcSitesPage;
