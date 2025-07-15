'use client';

import React from 'react';
import Image from 'next/image'; // ✅ 追加
import { Gift } from '@/components/icons/lucide-icons';
import { SeasonType } from '@/data/season-config';
import { SeasonalContent } from '@/data/seasonal-contents';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

interface FinalPushSectionProps {
  seasonType: SeasonType;
  seasonal: SeasonalContent;
}

const FinalPushSection: React.FC<FinalPushSectionProps> = ({
  seasonType,
  seasonal,
}) => {
  const content = seasonal;

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-red-50 rounded p-6">
              <div className="flex justify-center items-center gap-3 mb-4 text-center">
                <Gift className="text-red-600" size={24} />
                <h2 className="sm:text-2xl text-xl font-bold text-red-600">
                  {content.finalPushMainMessage || '今だけの特別ボーナス'}
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center items-center gap-2 text-center">
                  <p className="text-gray-900">
                    {content.finalPushSubMessage || '限定オファー実施中'}
                  </p>
                </div>
                {/* 在庫警告文 */}
                {content.season !== 'off' && (
                  <div className="text-sm text-gray-600 text-center">
                    ※収穫量によって販売終了の場合があります
                  </div>
                )}
              </div>
            </div>

            <FadeInOnScroll>
              <Image
                src="/assets/images/border/001.png"
                alt="border01"
                width={1200} // ✅ 実画像に応じて調整
                height={80}
                className="w-full h-auto"
              />
            </FadeInOnScroll>

            <div className="text-center space-y-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  美味しい野菜を通じて、
                  <br />
                  お客様の食卓に笑顔を届けたい。
                </p>
                <p className="text-gray-700">
                  「美味しい！」の声で、
                  <br />
                  家族の会話が弾んでほしい。
                </p>
                <p className="text-gray-700">
                  私たちの愛情込めて育てたアスパラが、
                  <br />
                  あなたの大切な人との時間を、
                  <br />
                  より特別なものにしてくれたら、
                  <br />
                  こんなに嬉しいことはありません。
                </p>
              </div>

              <div>
                <p className="text-gray-900 font-bold text-lg mb-4">
                  🌱 うめむら農園 🌱
                </p>
                <a
                  href="#action"
                  className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors text-lg min-h-[48px]"
                >
                  この甘さを今すぐ体験する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalPushSection;
