import React from 'react';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import Image from 'next/image';
import { Instagram } from '@/components/icons/lucide-icons';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* テキストコンテンツ */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              「かかぁの夢が詰まったこの家に、
              <br />
              また人が集まるように」
            </h3>

            <p className="text-xl text-gray-700 leading-relaxed">
              おばあちゃんの夢を受け継いで――
              <br />
              「農家民宿うめむら」ができるまで
            </p>

            <div className="text-base text-gray-600 leading-relaxed space-y-4">
              <p>
                かつてこの家は、笑い声とお酒の歌であふれていました。
                <br />
                おじいちゃんはお酒と歌が大好き。おばあちゃんは、働き者で料理がとびきり上手。
              </p>

              <p>
                「将来はこの家を、地域の人のための介護施設にしたい」
                <br />
                そんな思いを込めて、ふたりが建てたこだわりの日本家屋は、長らく人が集まる場として使われてきました。
                <br />
                けれどある日、おばあちゃんがアルツハイマーを患い、施設で暮らすことに。
                <br />
                残されたおじいちゃんは、「かかぁの夢が詰まったこの家を、なんとか活かしてほしい」と、口癖のように言うようになりました。
              </p>

              <p>
                その言葉に背中を押されて、私はこの家を民宿にしようと決意しました。
                <br />
                旅人を迎える宿として、もう一度、人が集まり、笑顔がこぼれる場所にしたいと。
                <br />
                「農家民宿うめむら」には、そんな家族の願いが込められています。
              </p>

              <p>
                ここで過ごす時間が、訪れる方にとっても、やさしい記憶となりますように。
              </p>
            </div>
          </div>

          {/* 画像コンテンツ */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-start">
            {/* 左画像 */}
            <FadeInOnScroll className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/assets/images/stay/about/001.webp"
                  alt="古民家の外観1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeInOnScroll>

            {/* 右画像 */}
            <FadeInOnScroll className="w-full md:w-1/2 md:mt-12">
              <div className="relative aspect-[3/4] rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/assets/images/stay/about/002.webp"
                  alt="古民家の外観2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
