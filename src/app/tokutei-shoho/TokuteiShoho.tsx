import Link from 'next/link';

import { Breadcrumb } from '@/components/layout/Breadcrumb';

const breadcrumbItems = [
  { label: 'HOME', href: '/' },
  { label: '特定商取引法に基づく表記' },
];

const TokuteiShohoPage = () => (
  <>
    <main className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:py-24 text-black">
      {/* パンくず */}
      <Breadcrumb items={breadcrumbItems} />

      <h1 className="text-3xl font-bold mb-6 border-b border-black">
        特定商取引法に基づく表記
      </h1>

      <table className="table-auto w-full text-left border border-gray-300">
        <tbody>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2 w-1/3">販売業者</th>
            <td className="p-2">うめむら農園</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">代表責任者</th>
            <td className="p-2">梅村 真治（ウメムラ シンジ）</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">所在地</th>
            <td className="p-2">〒849-5251 佐賀県伊万里市大川町大川野1375-2</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">電話番号</th>
            <td className="p-2">
              080-5242-6581
              <p className="text-sm">
                ※お客様専用のため、営業の電話はご遠慮ください。
              </p>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">電話受付時間</th>
            <td className="p-2">10:00～17:00</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">営業時間</th>
            <td className="p-2">10:00～17:00</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">定休日</th>
            <td className="p-2">不定休</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th className="bg-gray-100 p-2">メールアドレス</th>
            <td className="p-2">info@umemuranouen.com</td>
          </tr>
          <tr>
            <th className="bg-gray-100 p-2">サイトURL</th>
            <td className="p-2">
              <a
                href="https://umemuranouen.com"
                target="_blank"
                className="text-blue-600 underline" rel="noreferrer"
              >
                https://umemuranouen.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </>
);

export default TokuteiShohoPage;
