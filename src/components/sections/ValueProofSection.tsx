'use client';

import Image from 'next/image';
import { Trophy, Star, Heart } from '@/components/icons/lucide-icons';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

const testimonials = [
  {
    text: '「北海道産より甘い！大きさと鮮度に驚き。茹でるだけで十分な美味しさでした。」',
    source: '（食べチョクご購入者様）',
    image: '/assets/images/valueProof/001.png',
  },
  {
    text: '「生で食べてみたらアスパラって甘い！感動して即リピート決定。」',
    source: '（ポケマルご購入者様）',
    image: '/assets/images/valueProof/002.png',
  },
  {
    text: '「シーズンが待ち遠しい！ 去年も買って大満足。太くて柔らかいのが最高。」',
    source: '（食べチョクご購入者様）',
    image: '/assets/images/valueProof/003.png',
  },
];

const ValueProofSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <FadeInOnScroll>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                確かな品質の証
              </h2>
            </FadeInOnScroll>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="text-yellow-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">権威ある実績</h3>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-gray-700">
                JA伊万里 ゆめいまりアスパラガス部門『最優秀賞』受賞
              </p>
              <p className="text-gray-700">
                2024年3月 野菜ソムリエサミット青果部門『金賞』受賞
              </p>
              <p className="text-gray-700">
                ホテルオークラJRハウステンボス「西九州美食紀行」井川総料理長特別メニュー採用
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="text-yellow-500" size={24} />
              <h3 className="text-xl font-bold text-gray-900">お客様の声</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <FadeInOnScroll key={i}>
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    {/* 背景画像 */}
                    <Image
                      src={t.image}
                      alt={`レビュー${i + 1}`}
                      fill
                      className="object-cover"
                    />
                    {/* シャドウレイヤー */}
                    <div className="absolute inset-0" />
                    {/* テキストレイヤー */}
                    <div
                      className="relative z-10 h-full flex flex-col justify-center p-4 items-center text-center"
                      style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
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
                      <p className="font-medium text-lg mb-2 text-[#e8f0ff]">
                        {t.text}
                      </p>
                      <p className="text-sm text-teal-50">{t.source}</p>
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
