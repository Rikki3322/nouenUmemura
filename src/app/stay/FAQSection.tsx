'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { Button } from '@/app/ui/button';
import { ChevronDown, ChevronUp } from '@/components/icons/lucide-icons';

const FAQSection = () => {
  const t = useTranslations('stay.FAQSection');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = t.raw('faqs') as { question: string; answer: string }[];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h3>
          <p className="text-lg text-gray-600">
            {t('description.line1')}
            <br className="block sm:hidden" />
            {t('description.line2')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
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
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-700 mb-3 text-sm">{t('contactPrompt')}</p>
          <Button
            variant="cta"
            className="text-sm min-h-[40px]"
            aria-label={t('contactCtaLabel')}
          >
            <Link href="/contact">{t('contactButton')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
