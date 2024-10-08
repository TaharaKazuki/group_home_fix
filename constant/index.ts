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

export const FAQ_LIST = [
  {
    question: 'Q1.夜勤スタッフはいますか？',
    answer: 'A.はい、常駐しており夜が不安な方も安心してお過ごし頂けます',
  },
  {
    question: 'Q2.入居にかかる費用はどうなってますか？',
    answer:
      'A.保証金や敷金はいただきません。ただし、カーテンとエアコン以外はご準備頂く必要がございます。',
  },
  {
    question: 'Q3.家族や友人は部屋に泊めても大丈夫ですか？',
    answer: 'A.ご家族（親と兄弟）であれば1泊だけ宿泊することが可能です。',
  },
  {
    question: 'Q4.薬の飲み忘れが心配なのですが？',
    answer: 'A.スタッフが服用を管理します。ご安心ください。',
  },
  {
    question: 'Q5.ペットの衛生面は問題ありませんか？',
    answer: 'A.動物看護師と連携しておりますのでご安心ください。',
  },
  {
    question: 'Q6.ペットと一緒に散歩できますか？',
    answer: 'A.はい、もちろんです。一緒にでかけましょう！',
  },
];
