import Image from 'next/image';
import React from 'react';

const FoodSection = () => (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              ただ、
              <br className="block sm:hidden" />
              ちゃんと美味しいごはん
            </h3>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              地元の旬の食材でつくる素朴な料理
              <br />
              心をほどく味
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              夕食：BBQまたは炉端焼き（選択制）
              <br />
              朝食：郷土料理を中心とした家庭の味
              <br />
              持込みの日帰りBBQも可能（炭代1,000円）
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* カード1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/assets/images/stay/food/001.webp"
                  alt="朝食"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">朝食</h4>
                <p className="text-gray-600">
                  採れたての野菜と地元の食材を使った、体に優しい朝食です。
                </p>
              </div>
            </div>

            {/* カード2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/assets/images/stay/food/002.webp"
                  alt="夕食"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  伊万里牛メインのBBQ
                </h4>
                <p className="text-gray-600">
                  伊万里牛を中心に新鮮な地元食材を提供します。
                </p>
              </div>
            </div>

            {/* カード3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="relative w-full h-64">
                <Image
                  src="/assets/images/stay/food/003.webp"
                  alt="地元食材"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  囲炉裏で炉端焼き
                </h4>
                <p className="text-gray-600">
                  この土地で育った新鮮な食材の味をお楽しみください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default FoodSection;
