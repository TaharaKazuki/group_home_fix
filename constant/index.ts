import { formatYen } from '@/lib/format';

export const ABOUT_SECTION_DESC = `サンプル文章が入ります\nサンプル文章が入りますサンプル文章が入ります\nサンプル文章が入りますサンプル文章が入ります\nサンプル文章が入ります。`;

export const LINK = {
  HOME: '/',
  ABOUT: '/about',
  LIFE: '/life',
  EQUIPMENT: '/equipment',
  QUESTIONS: '/questions',
  CONTACT: '/contact',
};

export const LINKS = [
  { href: LINK.HOME, name: 'ホーム' },
  { href: LINK.ABOUT, name: '私たちについて' },
  { href: LINK.LIFE, name: '暮らし' },
  { href: LINK.EQUIPMENT, name: '設備・料金' },
  { href: LINK.QUESTIONS, name: 'よくある質問' },
  { href: LINK.CONTACT, name: 'お問い合わせ' },
];

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
    desc: '体験利用も可能です ※要予約',
    imageSrc: '/assets/hero/hero_background_1.png',
  },
];

export const FAQ_LIST = [
  {
    question: '夜勤スタッフはいますか？',
    answer: '常駐しておりますので、夜が不安な方も安心してお過ごし頂けます。',
  },
  {
    question: '入居にかかる費用はどうなってますか？',
    answer:
      '保証金や敷金はいただきません。ただし、カーテンとエアコン以外はご準備頂く必要がございます。',
  },
  {
    question: '家族や友人は部屋に泊めても大丈夫ですか？',
    answer: 'ご家族（親と兄弟）であれば1泊だけ宿泊することが可能です。',
  },
  {
    question: '薬の飲み忘れが心配なのですが？',
    answer: 'スタッフが服用を管理します。ご安心ください。',
  },
  {
    question: 'ペットの衛生面は問題ありませんか？',
    answer: '動物看護師と連携しておりますのでご安心ください。',
  },
  {
    question: 'ペットと一緒に散歩できますか？',
    answer: 'A.もちろん可能です。一緒にでかけましょう！',
  },
];

export const LIFE_ITEMS = [
  {
    title: 'WALK',
    subTitle: 'お散歩',
    description: `外出のきっかけとして動物と一緒にお散歩。\n動物も入居者様も充実した時間を\n過ごすことができるのがイキシアならではの特徴です。`,
    imageSrc: '/assets/hero/hero_background_1.png',
  },
  {
    title: 'SUPPORT',
    subTitle: 'サポート',
    description: `市役所・病院など、一人で行くのが不安な方でも\nスタッフが同行しますのでご安心ください。`,
    imageSrc: '/assets/hero/hero_background_1.png',
  },
  {
    title: 'COMMUNITY',
    subTitle: 'コミュニティ',
    description: `入居者様同士で仲良くなって、遊園地などに遊びに行かれることも。\nイキシアでの暮らしを通じて、新しい出会いと楽しい思い出が生まれます。`,
    imageSrc: '/assets/hero/hero_background_1.png',
  },
  {
    title: 'MONEY MANAGEMENT',
    subTitle: '金銭管理のお手伝い',
    description: `お小遣い帳作成のを通して金銭管理のお手伝いも行っております。（希望の方のみ）\n※金銭を直接お預かりする事は行っておりません。`,
    imageSrc: '/assets/hero/hero_background_1.png',
  },
  {
    title: 'WORKING',
    subTitle: 'お仕事について',
    description: `働く場所を見つけるサポートを実施しております。\n就職先、決定後も安心して就業していただけるようにアフターフォローもおこなっております。`,
    imageSrc: '/assets/hero/hero_background_1.png',
  },
  {
    title: 'MEETING',
    subTitle: 'ミーティング',
    description: `毎月1度、『入居者会議』を行っております。\n入居者の皆様が気持ちよく共同生活を送れるように\nみんなで話し合います。`,
    imageSrc: '/assets/hero/hero_background_1.png',
  },
];
