export type ECInfo = {
  id: number;
  name: string; // 翻訳キー
  url: string;
  imagePath: string;
  badge: {
    immediate?: string; // 翻訳キー
    scheduled?: string; // 翻訳キー
    subscription?: string; // 翻訳キー
  };
  color: string;
  description: string; // 翻訳キー
};

export const getEcSites = (): ECInfo[] => [
  {
    id: 0,
    name: 'base.name',
    url: 'https://umemuranouen.base.ec/',
    imagePath: '/assets/images/ecSites/001.png',
    badge: {
      immediate: 'base.badge.immediate',
    },
    color: 'bg-blue-100 text-blue-800',
    description: 'base.description',
  },
  {
    id: 1,
    name: 'pokemaru.name',
    url: 'https://poke-m.com/producers/794979',
    imagePath: '/assets/images/ecSites/002.png',
    badge: {
      immediate: 'pokemaru.badge.immediate',
      scheduled: 'pokemaru.badge.scheduled',
    },
    color: 'bg-yellow-100 text-yellow-800',
    description: 'pokemaru.description',
  },
  {
    id: 2,
    name: 'tabechoku.name',
    url: 'https://www.tabechoku.com/producers/29043/products',
    imagePath: '/assets/images/ecSites/003.png',
    badge: {
      immediate: 'tabechoku.badge.immediate',
      scheduled: 'tabechoku.badge.scheduled',
      subscription: 'tabechoku.badge.subscription',
    },
    color: 'bg-green-100 text-green-800',
    description: 'tabechoku.description',
  },
  {
    id: 3,
    name: 'rakuten.name',
    url: 'https://item.rakuten.co.jp/f412058-imari/10001970/',
    imagePath: '/assets/images/ecSites/004.png',
    badge: {
      immediate: 'rakuten.badge.immediate',
      subscription: 'rakuten.badge.subscription',
    },
    color: 'bg-red-100 text-red-800',
    description: 'rakuten.description',
  },
];
