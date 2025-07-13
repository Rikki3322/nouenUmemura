import React from 'react';
import { Check } from '@/components/icons/lucide-icons';
import Image from 'next/image';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

const SolutionSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="text-center mb-8">
            <FadeInOnScroll>
              <h2 className="sm:text-3xl text-2xl font-bold text-gray-900 mb-4">
                農家直販の佐賀県産アスパラを、もっと身近に。
              </h2>
            </FadeInOnScroll>
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 text-lg">
              うめむら農園では、市場には出回らない「新鮮なアスパラ」を直接お届けしています。
              <br />
              <br />
              朝採れを適切な温度管理のもとで保管し、鮮度を保ったまま出荷しております。
              スーパーには並ばないレベルの品質を、ご自宅で是非一度ご賞味ください。
            </p>

            {/* コンテンツ */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  具体的メリット：
                </h3>
                <div className="space-y-3">
                  {[
                    '高級レストランが買い占めるレベルのアスパラをあなたの食卓に',
                    '共選による品質のバラつきなし、安定の味と食感',
                    '市場を介さず直接届くから「鮮度が命」をそのまま実現',
                    '北海道産に負けない品質を、もっと身近な距離から（西日本の方）',
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check
                        className="text-green-400 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="md:text-2xl text-xl text-gray-700 text-center font-medium leading-[2rem] sm:leading-[2.5rem]">
            今こそ
            <br className="block sm:hidden" />
            「アスパラは農家直販しか勝たん！」
            <br />
            を体験してください。
            <br />
            <br />
            うめむら農園のアスパラを、
            <br className="block sm:hidden" />
            是非一度ご賞味ください。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto overflow-hidden">
        <div className="flex justify-center gap-2 mt-[2rem] mx-auto">
          <div className="relative w-full md:w-[70%] h-[auto] md:h-[300px] rounded shadow overflow-hidden">
            <Image
              src="/assets/images/solution/001.webp"
              alt="アスパラ"
              fill
              style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>
          <div className="relative w-full md:w-[30%] h-[auto] md:h-[300px] rounded shadow overflow-hidden">
            <Image
              src="/assets/images/solution/002.png"
              alt="アスパラ"
              fill
              style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-[0.5rem] mx-auto">
          <div className="relative w-full md:w-[30%] h-[auto] md:h-[300px] rounded shadow overflow-hidden">
            <Image
              src="/assets/images/solution/003.png"
              alt="アスパラ"
              fill
              style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
          <div className="relative w-full md:w-[70%] h-[auto] md:h-[300px] rounded shadow overflow-hidden">
            <Image
              src="/assets/images/solution/004.webp"
              alt="アスパラ"
              fill
              style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
