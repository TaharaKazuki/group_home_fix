import { formatYen } from '@/lib/format';

export const LINKS = [
  { href: '/', name: 'ホーム' },
  { href: '/about', name: '私たちについて' },
  { href: '/schedule', name: 'スケジュール' },
  { href: '/equipment', name: '設備・料金など' },
  { href: '/questions', name: 'よくある質問' },
  { href: '/contact', name: 'お問い合わせ' },
];

//TODO carousel用の画像に書き換え
export const CAROUSEL_IMAGES = [
  {
    id: 0,
    imageSrc: '/assets/hero/hero_background_1.png',
  },
  {
    id: 1,
    imageSrc: '/assets/hero/hero_background_2.png',
  },
  {
    id: 2,
    imageSrc: '/assets/hero/hero_background_3.png',
  },
  {
    id: 3,
    imageSrc: '/assets/hero/hero_background_2.png',
  },
  {
    id: 4,
    imageSrc: '/assets/hero/hero_background_3.png',
  },
];

export const FEE_ITEMS = [
  {
    title: '家賃',
    desc: `${formatYen(37000)}円〜${formatYen(41000)}円`,
  },
  {
    title: '食費',
    desc: `朝 ${formatYen(350)}円/夜 ${formatYen(500)}円（各1食)`,
    subDesc: `合計 月${formatYen(25000)}円`,
  },
  {
    title: '水道光熱費',
    desc: `基本 ${formatYen(12000)}円/月`,
    subDesc: `※12月〜3月、7月〜9月は${formatYen(20000)}円/月`,
  },
  {
    title: '日用品費',
    desc: `${formatYen(3000)}円/月`,
  },
  {
    title: '合計',
    desc: `${formatYen(77500)}円〜${formatYen(81500)}円`,
    subDesc: `12〜3月、7月〜9月 ${formatYen(85500)}円〜${formatYen(89500)}円`,
  },
];

export const EQUIPMENT_ITEMS = [
  {
    desc: 'プライベート個室',
    imageSrc: '/assets/hero/hero_background_1.png',
  },
  {
    desc: 'Wi-Fi・冷暖房・部屋鍵を完備',
    imageSrc: '/assets/hero/hero_background_1.png',
  },
  {
    desc: '世話人も常駐しており安心です',
    imageSrc: '/assets/hero/hero_background_1.png',
  },
  {
    desc: '体験利用も可能です。※要予約',
    imageSrc: '/assets/hero/hero_background_1.png',
  },
];
