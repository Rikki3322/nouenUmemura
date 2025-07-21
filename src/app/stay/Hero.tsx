'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/app/ui/button';
import { Calendar } from '@/components/icons/lucide-icons';

const HeroSection = () => {
  const t = useTranslations('stay.hero');

  return (
    <section id="hero" className="bg-white mb-10">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row items-center md:items-stretch gap-2">
        {/* 左側：画像（2/3幅） */}
        <div className="w-full md:w-1/2 h-[90vh] max-h-[600px] relative overflow-hidden rounded-lg">
          <Image
            src="/assets/images/stay/hero2.webp"
            alt={t('imageAlt')}
            width={800}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* 右側：テキスト（1/3幅） */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('heading')}
          </h2>
          <p className="text-lg md:text-xl text-gray-900 mt-4">
            {t('description')}
          </p>
          <div className="mt-10 md:mt-20 flex justify-center">
            <Button className="gap-2" asChild variant="cta" size="lg">
              <a
                href="https://www.booking.com/hotel/jp/nong-jia-min-su-umemura.ja.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar size={20} />
                {t('button')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
