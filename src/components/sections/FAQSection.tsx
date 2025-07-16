'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { Button } from '@/app/ui/button';
import { ChevronDown, ChevronUp } from '@/components/icons/lucide-icons';

const FAQSection = () => {
  const t = useTranslations('FAQSection');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // 多言語対応済みの質問・回答を t() で取得
  const faqs = [
    {
      question: t('faqs.0.question'),
      answer: t('faqs.0.answer'),
    },
    {
      question: t('faqs.1.question'),
      answer: t('faqs.1.answer'),
    },
    {
      question: t('faqs.2.question'),
      answer: t('faqs.2.answer'),
    },
    {
      question: t('faqs.3.question'),
      answer: t('faqs.3.answer'),
    },
    {
      question: t('faqs.4.question'),
      answer: t('faqs.4.answer'),
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-base text-gray-700">{t('description')}</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded overflow-hidden shadow-sm border border-gray-100"
              >
                <Button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  variant="faqToggle"
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="text-green-600" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </Button>

                {openFAQ === index && (
                  <div className="px-4 pb-4">
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 mb-8">
              {t('contactPrompt.line1')}
              <br className="block sm:hidden" />
              {t('contactPrompt.line2')}
            </p>
            <Button
              asChild
              variant="cta"
              className="text-sm min-h-[40px]"
              aria-label={t('contactButtonLabel')}
            >
              <Link href="/contact">{t('contactButtonText')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
