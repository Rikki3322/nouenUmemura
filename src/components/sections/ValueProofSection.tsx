'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { Heart, Star, Trophy } from '@/components/icons/lucide-icons';

const ValueProofSection = () => {
  const t = useTranslations('homepage.valueProof');

  const testimonials = [
    {
      text: t('testimonials.0.text'),
      source: t('testimonials.0.source'),
      image: '/assets/images/valueProof/001.png',
    },
    {
      text: t('testimonials.1.text'),
      source: t('testimonials.1.source'),
      image: '/assets/images/valueProof/002.png',
    },
    {
      text: t('testimonials.2.text'),
      source: t('testimonials.2.source'),
      image: '/assets/images/valueProof/003.png',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('title')}
              </h2>
            </FadeInOnScroll>
          </div>

          <div className="bg-yellow-50 rounded p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="text-yellow-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">
                {t('awards.title')}
              </h3>
            </div>
            <div className="space-y-2 text-center  sm:whitespace-normal whitespace-pre-line">
              <p className="text-gray-700">{t('awards.line1')}</p>
              <p className="text-gray-700">{t('awards.line2')}</p>
              <p className="text-gray-700">{t('awards.line3')}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded p-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="text-yellow-500" size={24} />
              <h3 className="text-xl font-bold text-gray-900">
                {t('customerVoice')}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <FadeInOnScroll key={i}>
                  <div className="relative h-64 rounded overflow-hidden">
                    <Image
                      src={t.image}
                      alt={`testimonial-${i + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0" />
                    <div
                      className="relative z-10 h-full flex flex-col justify-center p-4 items-center text-center"
                      style={{ textShadow: '2px 3px 5px rgba(0, 0, 0, 1)' }}
                    >
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(3)].map((_, i) => (
                          <Heart
                            key={i}
                            className="text-yellow-400"
                            size={16}
                          />
                        ))}
                      </div>
                      <p className="mb-2 text-gray-100">{t.text}</p>
                      <p className="text-sm text-gray-100">{t.source}</p>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProofSection;
