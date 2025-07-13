import React from 'react';
import { X } from '@/components/icons/lucide-icons';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import Image from 'next/image';

const ProblemSection = () => {
  return (
    <section className="py-4 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* タイトル */}
          <div className="block px-2">
            <FadeInOnScroll>
              <h2 className="md:text-4xl text-2xl font-bold text-gray-900 leading-[2.5rem] text-center md:mb-5">
                ”高品質のアスパラは
                <br className="block sm:hidden" />
                北海道だけ”
                <br />
                と思っていませんか？
              </h2>
            </FadeInOnScroll>
          </div>

          <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-white md:mb-5">
            <Image
              src="/assets/images/problem/001.webp"
              alt="収穫の画像"
              fill
              style={{ objectFit: 'contain', borderRadius: '1rem' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* 見出し */}
          <div className="space-y-6 px-4 z-10 text-center mb-12">
            <p className="text-gray-700 sm:text-2xl text-xl sm:leading-[2.5rem]">
              実は、<span className="text-green-500">佐賀</span>
              にもあるんです、
              <br className="block sm:hidden" />
              極上のアスパラ！
            </p>
            <p className="text-gray-700 sm:text-2xl text-xl sm:leading-[2.5rem] mt-2">
              しかも驚くほど新鮮で甘くてみずみずしいんです。
            </p>
            <p className="text-gray-700 text-lg sm:leading-[2.5rem]">
              お客様の中には、今まで北海道からアスパラを取り寄せていたという方がけっこういらっしゃいます。
            </p>
            <p className="text-gray-700 text-lg sm:leading-[2.5rem] mt-2">
              配送に3日、送料2千円、1kg5千円 で購入していたそうです！
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full mt-[2rem] px-4 md:px-0 max-w-4xl mx-auto">
              {/* テキストエリア：左側 */}
              <div className="w-full md:w-1/2 space-y-3 sm:text-lg text-base">
                <div className="flex items-start gap-2">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={16} />
                  <p className="text-gray-700">
                    「スーパーのアスパラは新鮮じゃないし、すぐに傷んでしまう」
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={16} />
                  <p className="text-gray-700">「北海道産しか信頼できない」</p>
                </div>
                <div className="flex items-start gap-2">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={16} />
                  <p className="text-gray-700">
                    「佐賀にアスパラ農家なんてあるの？」
                  </p>
                </div>
              </div>

              {/* 画像エリア：右側 */}
              <FadeInOnScroll>
                <div className="hidden md:block relative w-full md:w-[267px] h-[400px] rounded overflow-hidden">
                  <Image
                    src="/assets/images/problem/002.png"
                    alt="sample"
                    width={267}
                    height={400}
                    className="rounded"
                  />
                </div>
              </FadeInOnScroll>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full mt-[2rem] px-4 md:px-0 max-w-4xl mx-auto">
            {/* 画像エリア：左側 */}
            {/* スマホでは非表示、md以上で表示 */}
            <FadeInOnScroll>
              <div className="hidden md:block relative w-full md:w-[267px] h-[400px] rounded overflow-hidden">
                <Image
                  src="/assets/images/problem/003.png"
                  alt="sample"
                  width={267}
                  height={400}
                  className="rounded"
                />
              </div>
            </FadeInOnScroll>

            {/* テキストエリア：右側 */}
            <p className="text-gray-700 text-lg sm:leading-[2.5rem]">
              そんなお困りごとをお持ちではありませんか？
              <br />
              <br />
              実は、佐賀県はアスパラの生産量
              <span className="text-green-500">全国2位</span>
              なんです。
              <br />
              <br />
              農家が直販しているケースがまだ多くないために、
              その実力を知られていないだけなんです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
