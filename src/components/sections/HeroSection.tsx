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

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowVideo(true);
            observer.disconnect(); // 一度読み込めばOK
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
      {/* LCP対象：先に表示する画像 */}
      <Image
        src="/assets/images/hero-poster.jpg"
        alt="アスパラガスの背景画像"
        width={360}
        height={640}
        priority
        className="block sm:hidden object-cover w-full h-full"
      />

      <div className="sm:h-screen flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* Left Text */}
        <div className="hidden sm:flex flex-1 justify-end pr-4">
          <div className="max-w-sm text-white text-right space-y-4">
            <FadeInOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                生で食べて
                <br />
                <span className="text-green-300">びっくり！</span>
                <br />
                <span className="text-3xl md:text-3xl">濃厚なうまみと甘み</span>
              </h1>
            </FadeInOnScroll>
            <p className="text-lg text-white/90 leading-relaxed">
              湧き水と寒暖差が育んだ、
              <br />
              スーパーでは出会えない極上のアスパラ
            </p>
          </div>
        </div>

        {/* 中央動画またはポスター */}
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
            <Image
              src="/assets/images/hero-poster.jpg"
              alt="アスパラガスの動画"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 360px"
            />
          )}
        </div>

        {/* Right Text（sm以上）*/}
        <div className="hidden sm:flex flex-1 justify-start pl-4">
          <div className="max-w-sm text-white flex flex-col gap-6">
            {/* Award Badge */}
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-3 py-2 rounded-full w-fit border border-white/20">
              <Award size={16} className="text-amber-300" />
              <span className="font-semibold text-sm">
                野菜ソムリエサミット金賞受賞
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              {/* 今すぐ味わうボタン */}
              <a
                href="#action"
                className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-all flex items-center justify-center space-x-2 min-h-[40px]"
              >
                <ShoppingBasket size={16} />
                <span>今すぐ味わう</span>
              </a>
              {/* LINEで注文ボタン */}
              <a
                href="https://line.me/R/ti/p/@890kprkl?oat_content=url"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-all flex items-center justify-center space-x-2 min-h-[40px]"
              >
                <MessageCircle size={16} />
                <span>LINE で注文</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                <span>朝採れ即日発送</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                <span>生産者直送</span>
              </div>
            </div>
          </div>
        </div>

        {/* モバイル用テキスト&CTA */}
        <div className="sm:hidden mt-6 px-4 text-center text-white space-y-4">
          <h1 className="text-2xl font-bold text-white leading-tight">
            生で食べて
            <br />
            <span className="text-green-300">びっくり！</span>
            <br />
            <span className="text-xl">まるでフルーツの甘さ</span>
          </h1>
          <p className="text-base text-white/90 leading-relaxed">
            湧き水と寒暖差が育んだ、
            <br />
            スーパーでは出会えない極上の甘みアスパラ
          </p>
          <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full w-fit mx-auto border border-white/20">
            <Award size={16} className="text-amber-300" />
            <span className="font-semibold text-sm">
              野菜ソムリエサミット金賞受賞
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Button
              variant="cta"
              className="flex items-center space-x-2 min-h-[40px]"
            >
              <ShoppingBasket size={16} />
              <span>今すぐ味わう</span>
            </Button>

            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 flex items-center space-x-2 min-h-[40px] hover:bg-white/20 transition-all"
            >
              <MessageCircle size={16} />
              <span>LINE で注文</span>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80 mt-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>朝採れ即日発送</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>生産者直送</span>
            </div>
          </div>
        </div>
      </div>

      {/* Satisfaction Rating */}
      <div className="mt-6 sm:mt-0 sm:absolute sm:bottom-8 sm:right-8 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 w-fit ml-auto mr-4 mb-4">
        <div className="text-center">
          <div className="text-xl font-bold text-white">4.9/5</div>
          <div className="text-xs text-white/80">お客様満足度</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
