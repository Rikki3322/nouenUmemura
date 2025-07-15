'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Award,
  MessageCircle,
  ShoppingBasket,
} from '@/components/icons/lucide-icons';
import { Button } from '@/app/ui/button';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('hero');

  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowVideo(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      <div className="sm:h-screen flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* 左テキスト（PC） */}
        <div className="hidden sm:flex flex-1 justify-end pr-4">
          <div className="max-w-sm text-white text-right space-y-4">
            <FadeInOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {t('title.line1')}
                <br />
                <span className="text-green-300">{t('title.highlight')}</span>
                <br />
                <span className="text-3xl md:text-3xl">{t('title.line3')}</span>
              </h1>
            </FadeInOnScroll>
            <p className="text-lg text-white/90 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>

        {/* 中央：動画 or ポスター */}
        <div
          ref={videoRef}
          className="w-full aspect-[9/16] sm:w-[360px] sm:aspect-[9/16] relative z-10"
        >
          {showVideo ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/assets/images/hero-poster.jpg"
            >
              <source
                src="/assets/videos/umemuranouen_compressed.mp4"
                type="video/mp4"
              />
              <source src="/assets/videos/hero.webm" type="video/webm" />
            </video>
          ) : (
            <div className="hidden sm:block w-full h-full relative">
              <Image
                src="/assets/images/hero-poster.jpg"
                alt="アスパラガスの動画ポスター"
                fill
                className="object-cover"
                sizes="360px"
              />
            </div>
          )}
        </div>

        {/* 右テキスト（PC） */}
        <div className="hidden sm:flex flex-1 justify-start pl-4">
          <div className="max-w-sm text-white flex flex-col gap-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-3 py-2 rounded-full w-fit border border-white/20">
              <Award size={16} className="text-amber-300" />
              <span className="font-semibold text-sm">{t('award')}</span>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="#action"
                className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-all flex items-center justify-center space-x-2 min-h-[40px]"
              >
                <ShoppingBasket size={16} />
                <span>{t('cta.tasteNow')}</span>
              </a>
              <a
                href="https://line.me/R/ti/p/@890kprkl?oat_content=url"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-all flex items-center justify-center space-x-2 min-h-[40px]"
              >
                <MessageCircle size={16} />
                <span>{t('cta.orderViaLine')}</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                <span>{t('trust.morningShipping')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                <span>{t('trust.directFromFarm')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* モバイル用テキスト */}
        <div className="sm:hidden mt-6 px-4 text-center text-white space-y-4">
          <h1 className="text-2xl font-bold text-white leading-tight">
            {t('title.line1')}
            <br />
            <span className="text-green-300">{t('title.highlight')}</span>
            <br />
            <span className="text-xl">{t('title.line3')}</span>
          </h1>
          <p className="text-base text-white/90 leading-relaxed">
            {t('description')}
          </p>

          <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full w-fit mx-auto border border-white/20">
            <Award size={16} className="text-amber-300" />
            <span className="font-semibold text-sm">{t('award')}</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Button
              variant="cta"
              className="flex items-center space-x-2 min-h-[40px]"
            >
              <ShoppingBasket size={16} />
              <span>{t('cta.tasteNow')}</span>
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 flex items-center space-x-2 min-h-[40px] hover:bg-white/20 transition-all"
            >
              <MessageCircle size={16} />
              <span>{t('cta.orderViaLine')}</span>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80 mt-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>{t('trust.morningShipping')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>{t('trust.directFromFarm')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 満足度 */}
      <div className="mt-6 sm:mt-0 sm:absolute sm:bottom-8 sm:right-8 bg-white/10 backdrop-blur-sm p-3 rounded border border-white/20 w-fit ml-auto mr-4 mb-4">
        <div className="text-center">
          <div className="text-xl font-bold text-white">4.9/5</div>
          <div className="text-xs text-white/80">{t('satisfaction')}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
