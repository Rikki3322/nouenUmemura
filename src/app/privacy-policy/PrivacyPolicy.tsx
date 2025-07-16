import Link from 'next/link';

import { Breadcrumb } from '@/components/layout/Breadcrumb';

const breadcrumbItems = [
  { label: 'HOME', href: '/' },
  { label: 'プライバシーポリシー' },
];

const PrivacyPolicy = () => (
    <main className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:py-24 text-black">
      {/* パンくず */}
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-3xl font-bold mb-20 border-b border-black pb-4">
        プライバシーポリシー
      </h1>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">基本方針</h2>
        <p>
          当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、
          個人情報に関する法令を遵守し、当サイトで取扱う個人情報の取得、利用、管理を適正に行います。
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">個人情報の定義</h2>
        <p>
          本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、
          すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
          特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を
          識別することができることとなるものを含みます。）、もしくは個人識別符号が含まれる情報を意味するものとします。
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">適用範囲</h2>
        <p>
          本プライバシーポリシーは、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">個人情報の利用目的</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>ご本人確認のため</li>
          <li>お問い合わせ、コメント等の確認・回答のため</li>
          <li>メールマガジン・DM・各種お知らせ等の配信・送付のため</li>
          <li>キャンペーン・アンケート・モニター・取材等の実施のため</li>
          <li>サービスの提供・改善・開発・マーケティングのため</li>
          <li>
            お客さまの承諾・申込みに基づく、提携事業者・団体等への個人情報の提供のため
          </li>
          <li>利用規約等で禁じている行為などの調査のため</li>
          <li>その他個別に承諾いただいた目的</li>
        </ul>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">事業者情報</h2>
        <p>
          販売業者：梅村農園
          <br />
          住所：〒849-5251 佐賀県伊万里市大川町大川野1375-2
          <br />
          代表者：梅村 真治（ウメムラ シンジ）
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">個人情報の管理</h2>
        <p>
          当サイトは、個人情報の正確性及び安全確保のために、セキュリティ対策を徹底し、
          個人情報の漏洩、改ざん、不正アクセスなどの危険については、必要かつ適切なレベルの安全対策を実施します。
        </p>
        <p>
          当サイトは、第三者に重要な情報を読み取られたり、改ざんされたりすることを防ぐために、SSLによる暗号化を使用しております。
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">個人情報の第三者提供</h2>
        <p>
          当サイトは、以下を含む正当な理由がある場合を除き、個人情報を第三者に提供することはありません。
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>ご本人の同意がある場合</li>
          <li>法令に基づく場合</li>
          <li>人の生命・身体・財産の保護に必要な場合</li>
          <li>公衆衛生・児童の健全育成に必要な場合</li>
          <li>
            国の機関等の法令の定める事務への協力の場合（税務調査、統計調査等）
          </li>
        </ul>
        <p>
          当サイトでは、利用目的の達成に必要な範囲内において、他の事業者へ個人情報を委託することがあります。
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          個人情報に関するお問い合わせ
        </h2>
        <p>
          開示、訂正、利用停止等のお申し出があった場合には、所定の方法に基づき対応致します。
          具体的な方法については、個別にご案内しますので、当サイトの「特定商取引法に基づく表記」内にある連絡先へご連絡いただくか、
          ショップページ内のお問い合わせフォームよりお問い合わせください。
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">Cookie（クッキー）</h2>
        <p>
          Cookie（クッキー）は、利用者のサイト閲覧履歴を、利用者のコンピュータに保存しておく仕組みです。
        </p>
        <p>
          利用者はCookie（クッキー）を無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
          ただし、Cookie（クッキー）を拒否した場合、当サイトのいくつかのサービス・機能が正しく動作しない場合があります。
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">アクセス解析</h2>
        <p>
          当サイトでは、サイトの分析と改善のためにGoogleが提供している「Google
          アナリティクス」を利用しています。
          このサービスは、トラフィックデータの収集のためにCookie（クッキー）を使用しています。
          トラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          コメント・お問い合わせフォーム
        </h2>
        <p>
          当サイトでは、コメント・お問い合わせフォームに表示されているデータ、そしてスパム検出に役立てるための
          IPアドレスやブラウザのユーザーエージェント文字列等を収集します。
        </p>
        <p>
          メールアドレスから作成される匿名化されたハッシュ文字列は、あなたが「Gravatar」サービスを使用中かどうか確認するため
          同サービスに提供されることがあります。
        </p>
        <p>
          同サービスのプライバシーポリシーは、
          <a
            href="https://automattic.com/privacy/"
            target="_blank"
            className="underline text-blue-600" rel="noreferrer"
          >
            https://automattic.com/privacy/
          </a>{' '}
          をご覧ください。
        </p>
        <p>
          なお、コメントが承認されると、プロフィール画像がコメントとともに一般公開されます。
        </p>
        <p>適正に個人情報を取得し、偽りその他不正の手段により取得しません。</p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">
          他サイトからの埋め込みコンテンツ
        </h2>
        <p>
          当サイトには、埋め込みコンテンツ（動画、画像、投稿など）が含まれます。
          他サイトからの埋め込みコンテンツは、訪問者がそのサイトを訪れた場合とまったく同じように振る舞います。
        </p>
        <p>
          これらのサイトは、あなたのデータの収集、Cookie（クッキー）の使用、サードパーティによる追加トラッキングの埋め込み、
          埋め込みコンテンツとのやりとりの監視を行うことがあります。
        </p>
        <p>
          アカウントを使ってそのサイトにログイン中の場合、埋め込みコンテンツとのやりとりのトラッキングも含まれます。
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">免責事項</h2>
        <p>
          当サイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、
          正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
        <p>
          当サイトからリンクやバナーなどによって他のサイトに移動した場合、
          移動先サイトで提供される情報、サービス等について一切の責任を負いません。
        </p>
        <p>
          当サイトで掲載している料金表記について、予告なく変更されることがあります。
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">著作権・肖像権</h2>
        <p>
          当サイトで掲載しているすべてのコンテンツ（文章、画像、動画、音声、ファイル等）の著作権・肖像権等は
          当サイト所有者または各権利所有者が保有し、許可なく無断利用（転載、複製、譲渡、二次利用等）することを禁止します。
        </p>
        <p>
          また、コンテンツの内容を変形・変更・加筆修正することも一切認めておりません。
        </p>
        <p>
          各権利所有者におかれましては、万一掲載内容に問題がございましたら、
          ご本人様よりお問い合わせください。迅速に対応いたします。
        </p>
      </section>

      <section className="mb-20 text-base leading-8">
        <h2 className="text-xl font-semibold mb-2">リンク</h2>
        <p>
          当サイトは原則リンクフリーです。リンクを行う場合の許可や連絡は不要です。
          引用する際は、引用元の明記と該当ページへのリンクをお願いします。
        </p>
      </section>
    </main>
  );

export default PrivacyPolicy;
