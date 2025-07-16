'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import { Button } from '@/app/ui/button';
import { ChevronDown, ChevronUp } from '@/components/icons/lucide-icons';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // FAQ data
  const faqs = [
    {
      question: 'バスタオル、パジャマ、歯ブラシはありますか？',
      answer:
        '恐れ入りますが、バスタオル・パジャマ・歯ブラシはご持参をお願いしております。シャンプーやコンディショナーなどの基本的なアメニティはご用意しておりますので、どうぞご安心ください。',
    },
    {
      question: '飲み物は持ち込めますか？',
      answer:
        'はい、ご自由にお持ち込みいただけます。水とお茶をご用意しておりますが、アルコールやジュースなどお好みのものがございましたらお持ちください。お車で20分ほどの場所にコンビニもございますので、そちらもご利用いただけます。',
    },
    {
      question: 'お布団はどうすれば？',
      answer:
        'お好きなタイミングで、ゆっくりとご自身でお布団を敷いていただけます。ご自由におくつろぎください。',
    },
    {
      question: 'バリアフリーですか？',
      answer:
        '申し訳ありませんが、古民家の趣をそのまま残しているため、バリアフリーには対応しておりません。ご不便をおかけしますが、ご了承いただけますと幸いです。',
    },
    {
      question: '温泉はありますか？',
      answer:
        'お車で15分ほどの場所に「厳木温泉」がございます。地元でも人気の温泉で、ぜひお立ち寄りいただきたいスポットです。',
    },
    {
      question: '観光スポットは？',
      answer:
        '華やかな観光施設は少ないですが、四季折々の自然や、地元の酒蔵など、ゆったりとした時間の中で地域の魅力をお楽しみいただけます。',
    },
    {
      question: '食事の用意や後片付けは？',
      answer:
        'ホストとご一緒に、みんなで協力しながら準備や片付けを行っていただくスタイルです。旅の思い出として、ぜひお楽しみください。',
    },
    {
      question: 'アスパラの収穫体験の服装は？',
      answer:
        '畑では土の上を歩きますので、動きやすく汚れても大丈夫な服装・靴でお越しください。帽子やタオルもあると安心です！',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            よくあるご質問
          </h3>
          <p className="text-lg text-gray-600">
            お客様からよくいただく
            <br className="block sm:hidden" />
            ご質問にお答えします。
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
          <p className="text-gray-700 mb-3 text-sm">
            他にも質問がございましたら、お気軽にお問い合わせください。
          </p>
          <Button
            variant="cta"
            className="text-sm min-h-[40px]"
            aria-label="お問い合わせページへ"
          >
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
