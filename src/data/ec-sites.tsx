export type ECInfo = {
  id: number;
  name: string;
  url: string;
  imagePath: string;
  badge: {
    immediate?: string; // 即納
    scheduled?: string; // 納期指定
    subscription?: string; // 定期購買
  };
  color: string;
  description: string;
};

export const getEcSites = (): ECInfo[] => [
  {
    id: 0,
    name: 'BASE',
    url: 'https://umemuranouen.base.ec/',
    imagePath: '/assets/images/ecSites/001.png',
    badge: {
      immediate:
        '発送は順次（獲れたてを当日中に発送）お届け時間のみ指定できます。',
      scheduled: undefined,
      subscription: undefined,
    },
    color: 'bg-blue-100 text-blue-800',
    description:
      'チルドゆうパック60サイズの冷蔵でお届け。のし紙・メッセージカードお入れできます。',
  },
  {
    id: 1,
    name: 'ポケマル',
    url: 'https://poke-m.com/producers/794979',
    imagePath: '/assets/images/ecSites/002.png',
    badge: {
      immediate: '注文から発送まで1～3日',
      scheduled: 'お届け日指定',
      subscription: undefined,
    },
    color: 'bg-yellow-100 text-yellow-800',
    description:
      'ポケマル提携のヤマト冷蔵便でのお届け。ポケマルクーポン利用可。',
  },
  {
    id: 2,
    name: '食べチョク',

    url: 'https://www.tabechoku.com/producers/29043/products',
    imagePath: '/assets/images/ecSites/003.png',
    badge: {
      immediate: 'すぐに出荷',
      scheduled: '日付指定お届け',
      subscription: '一部商品が定期購入の対象です',
    },
    color: 'bg-green-100 text-green-800',
    description:
      '通常の注文と定期購入（一部商品）があります。ヤマト運輸クール便（冷蔵）でお届け',
  },
  {
    id: 3,
    name: '楽天市場（ふるさと納税）',

    url: 'https://item.rakuten.co.jp/f412058-imari/10001970/',
    imagePath: '/assets/images/ecSites/004.png',
    badge: {
      immediate: '発送可能時期より順次発送予定',
      scheduled: undefined,
      subscription: '入金確認から2～3週間後に伊万里市から発送',
    },
    color: 'bg-red-100 text-red-800',
    description: '500gの1回購入または1kgの1回or4回購入。送料は無料です。',
  },
];
