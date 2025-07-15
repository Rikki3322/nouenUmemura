'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from '@/components/icons/lucide-icons';
import Link from 'next/link';
import { Button } from '@/app/ui/button';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: '本当に生で食べられるの？',
      answer:
        'はい、ハウス栽培の「ウェルカム」という品種を使用しており、甘みがあってやわらかく、生でも美味しくお召し上がりいただけます。',
    },
    {
      question: '保存方法は？',
      answer:
        '袋に入れたまま、冷蔵庫で立てて保存してください。袋の底に1cmほど水を入れておくと、鮮度がより長持ちします。',
    },
    {
      question: '茹で時間は？',
      answer:
        '根元から15cmほどの部分の皮をピーラーで剥き、約30秒茹でてお召し上がりください。筋がなく、やわらかい食感が特徴です。',
    },
    {
      question: '支払い方法は？',
      answer:
        '各オンラインサイトでの決済に対応しています。LINEからのご注文の場合は、代金引換もご利用いただけます。',
    },
    {
      question: '配送について',
      answer:
        '朝採れのアスパラガスを丁寧に梱包し、順次発送いたします。詳しい配送スケジュールは、各オンラインサイトにてご確認いただけます。',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              よくあるご質問
            </h2>
            <p className="text-base text-gray-700">
              お客様からよくいただくご質問にお答えします。
            </p>
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
              他にも質問がございましたら、
              <br className="block sm:hidden" />
              お気軽にお問い合わせください。
            </p>
            <Button
              asChild
              variant="cta"
              className="text-sm min-h-[40px]"
              aria-label="お問い合わせページへ"
            >
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
