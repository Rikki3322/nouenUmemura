import Image from 'next/image';

import { Hammer, Mountain, Sparkles } from '@/components/icons/lucide-icons';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

const breadcrumbItems = [{ label: 'HOME', href: '/' }, { label: '農泊準備中' }];

const NohakuPage = () => (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:py-24 text-black">
      {/* パンくず */}
      <Breadcrumb items={breadcrumbItems} />

      {/* タイトル・リード */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold border-b border-black pb-4 mb-6">
          農泊ってなに？（準備中）
        </h1>
        <h2 className="text-lg leading-relaxed"></h2>
      </div>

      {/* セクション1 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <Mountain className="w-5 h-5 mr-2 text-green-600" />
          農泊＝農山漁村滞在型旅行
        </h2>
        <p className="leading-relaxed">
          農家や漁家などに宿泊し、その地域の生活や文化・自然を体験する滞在型の旅行のことです。
        </p>
      </div>

      {/* セクション2 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <Hammer className="w-5 h-5 mr-2 text-yellow-700" />
          農泊開業に向けて準備中！
        </h2>
        <p className="leading-relaxed">
          12月、アスパラはシーズンオフです。現在は農泊開業に向けて、田舎暮らしや自然遊び、
          <br />
          農業に興味のある方に楽しんでいただける体験を企画中です。
          <br />
          地元の美味しい食材を探したり、庭の整備をしたりと、毎日大忙しです。
        </p>
      </div>

      {/* セクション3 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <Sparkles className="w-5 h-5 mr-2 text-pink-600" />
          自然素材でリース作り体験
        </h2>
        <p>
          晴れた日は、庭や山で見つけたカズラやカラスウリで飾りを手作り。
          <br />
          束ねるだけでも素敵なリースができあがります。
          <br />
          材料探しから始めるリース作り体験、いかがですか？
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative rounded-lg shadow-lg w-full aspect-[5/6]">
          <Image
            src="/assets/images/nohaku/001.webp"
            alt="作品001"
            fill
            style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
          />
        </div>
        <div className="relative rounded-lg shadow-lg w-full aspect-[5/6] md:mt-8">
          <Image
            src="/assets/images/nohaku/002.webp"
            alt="作品002"
            fill
            style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
          />
        </div>
      </div>
    </section>
  );

export default NohakuPage;
