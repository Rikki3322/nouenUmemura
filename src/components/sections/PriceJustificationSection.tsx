import React from 'react';
import Image from 'next/image';
import {
  Droplets,
  User,
  Package,
  Trophy,
  Leaf,
  Sun,
} from '@/components/icons/lucide-icons';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

const PriceJustificationSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                スーパーのアスパラとは
                <span className="text-green-600">別格</span>
                <br />
                筋なしで濃厚な甘み
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
                そのまま食べても、さっと茹でても、炒めても。
                <br className="hidden sm:block" />
                どんな調理法でも甘みと食感を楽しめるアスパラです。
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="space-y-4">
                {/* 以下アイコンとテキストのセクションは変更なし */}
                <div className="flex items-start gap-3">
                  <Leaf
                    className="text-emerald-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      微生物が息づくふかふかの土
                    </h3>
                    <p className="text-gray-700 text-sm">
                      伊万里牛の堆肥で育てた、根がのびのび育つふかふかの土です。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Droplets
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      多層の岩が育む透き通るような軟水
                    </h3>
                    <p className="text-gray-700 text-sm">
                      地層をくぐった湧水が、やさしく根を潤し、味に深みを与えます。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sun
                    className="text-amber-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      寒暖差の恵み
                    </h3>
                    <p className="text-gray-700 text-sm">
                      昼夜の寒暖差が甘みを凝縮し、筋のない柔らかな食感を生み出します。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User
                    className="text-green-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      手間ひまかけた愛情栽培
                    </h3>
                    <p className="text-gray-700 text-sm">
                      夫婦で大切に育て続けた結果、金賞を受賞
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Package
                    className="text-orange-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      収穫後即冷蔵・最短配送
                    </h3>
                    <p className="text-gray-700 text-sm">
                      鮮度を保ったまま、直接お届けします
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Trophy
                    className="text-yellow-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      金賞受賞の確かな品質
                    </h3>
                    <p className="text-gray-700 text-sm">
                      野菜ソムリエサミット2024年金賞受賞
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 leading-relaxed">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-8">
                  スーパーのアスパラとは
                  <br />
                  品質が全く違います
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  農家から直送だからこそできる
                  <br />
                  <span className="text-green-600">最高の品質</span>を実現
                </p>
                <p className="text-gray-700 mb-2 text-left">
                  大切なのは、誰の手で、どんなふうに届けられるか。
                  <br />
                  収穫したてのアスパラはとても繊細で、水や空気に触れるだけで鮮度が落ちてしまいます。
                  <br />
                  <br />
                  うめむら農園では、朝採れを適切な温度管理のもとで保管し、鮮度を保ったままその日のうちに発送します。
                  <br />
                  <br />
                  最小限の処理とスピードが、価格以上の価値を生み出しているのです。
                </p>
              </div>
            </div>
          </div>

          {/* 画像群 */}
          <div className="flex flex-col md:flex-row gap-4 w-full mt-8">
            <div className="relative w-full md:w-1/2 aspect-square rounded shadow overflow-hidden">
              <Image
                src="/assets/images/priceJusification/001.jpg"
                alt="riskreduction"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="relative w-full md:w-1/2 aspect-square rounded shadow overflow-hidden">
              <Image
                src="/assets/images/priceJusification/002.jpg"
                alt="riskreduction"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full mt-4">
            <div className="relative w-full md:w-1/2 aspect-square rounded shadow overflow-hidden">
              <Image
                src="/assets/images/priceJusification/003.jpg"
                alt="riskreduction"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="relative w-full md:w-1/2 aspect-square rounded shadow overflow-hidden">
              <Image
                src="/assets/images/priceJusification/004.jpg"
                alt="riskreduction"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceJustificationSection;
