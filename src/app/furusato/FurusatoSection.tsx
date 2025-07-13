'use client';

import Image from 'next/image';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import {
  Leaf,
  Heart,
  BookAlert,
  ThumbsUp,
  Megaphone,
} from '@/components/icons/lucide-icons';

const breadcrumbItems = [
  { label: 'HOME', href: '/' },
  { label: 'ふるさと納税' },
];

const FurusatoPage = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:py-24 text-black">
      {/* パンくず */}
      <Breadcrumb items={breadcrumbItems} />

      {/* タイトル・リード */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold border-b border-black pb-4 mb-6">
          ふるさと納税でうめむら農園を応援しよう
        </h1>
        <h2 className="text-lg leading-relaxed">
          寄付でアスパラが届く！税金もお得に。地域とあなたが元気になる仕組みです。
        </h2>
      </div>

      {/* セクション1 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <Leaf className="w-5 h-5 mr-2 text-green-600" />
          ふるさと納税ってなに？
        </h2>
        <p className="leading-relaxed">
          「応援したい地域」に寄付する制度で、寄付のお礼として地元の特産品が届きます。
          <br />
          伊万里市のうめむら農園では、新鮮なアスパラガスを返礼品としてお届けしています。
        </p>
      </div>

      {/* セクション2 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <ThumbsUp className="w-5 h-5 mr-2 text-amber-600" />
          節税しながらアスパラがもらえる！
        </h2>
        <p className="leading-relaxed">
          一般的に自治体に寄附をした場合、確定申告によってその寄附金額の一部が所得税及び住民税から控除されます。
          <br />
          ですが、ふるさと納税では原則として自己負担額の2,000円を除いた全額が控除の対象となります。
          <br />
          ※控除上限には個人差があります。
          <br />
          詳細については、
          <a
            href="https://www.soumu.go.jp/main_sosiki/jichi_zeisei/czaisei/czaisei_seido/furusato/about/"
            className="underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            総務省のポータルサイト
          </a>
          にてご確認ください。
        </p>
      </div>

      {/* セクション3 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <Heart className="w-5 h-5 mr-2 text-red-600" />
          小さな寄付が地域の力に
        </h2>
        <p className="leading-relaxed">
          寄付は農業支援や地域活性化に使われます。「おいしい」と「やさしい」を両立する選択肢です。
        </p>
      </div>

      {/* セクション4 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <Megaphone className="w-5 h-5 mr-2 text-blue-600" />
          返礼品ラインナップ
        </h2>
        <ul className="list-disc list-inside ml-4 leading-relaxed">
          <li>容量500g×1回お届け</li>
          <li>容量1kg×1回または4回お届け</li>
        </ul>
      </div>

      {/* セクション5 */}
      <div className="mb-12">
        <h2 className="flex items-center text-xl font-semibold mb-3">
          <BookAlert className="w-5 h-5 mr-2 text-violet-600" />
          商品の詳細
        </h2>
        <ul className="list-disc list-inside ml-4 leading-relaxed">
          <li>5月中旬まで春芽 / 5月下旬以降は夏芽をお届けします。</li>
          <li>
            1回お届け：S・Mサイズ中心ですが、時期によりそれ以上のサイズも入ります。
            <br />
            （極太Lサイズ以上：2月～3月中旬、Lサイズ：5月中旬～7月頃）
          </li>
          <li>4回お届け：M・L・2L・3Lサイズのミックスです。</li>
          <li>
            アスパラの太さと本数は収穫時期によって異なります。
            <br />
            （春芽：太めで本数控えめ、夏芽・秋芽：細めで本数豊富）
          </li>
          <li>
            10月以降のお申し込みは
            <span className="text-red-500">翌年発送</span>
            のご予約となります。
          </li>
        </ul>
      </div>

      {/* 画像 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-4">
        {['003', '001', '002'].map((num) => (
          <div
            key={num}
            className="relative aspect-square w-full md:w-1/3 max-w-[300px] rounded-lg shadow-lg mx-auto"
          >
            <Image
              src={`/assets/images/furusato/${num}.webp`}
              alt={`ふるさと納税${num}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="pt-8">
        <a
          href="https://item.rakuten.co.jp/f412058-imari/10001970/"
          className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          寄付してアスパラを受け取る
        </a>
      </div>
    </section>
  );
};

export default FurusatoPage;
