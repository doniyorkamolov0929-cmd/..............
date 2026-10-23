export interface PoemCard {
  id: string;
  title: string;
  subtitle: string;
  stanzas: string[];
  emotionalNote: string;
  themeColor: string;
  bgGradient: string;
  accentGlow: string;
  bgImage: string;
}

export const PRESENT_POEMS: PoemCard[] = [
  {
    id: 'poem-1',
    title: "Ko'zlaringga Boqsam — Dunyo To'xtaydi",
    subtitle: "Aynan shu lahzada, sening nigohing qarshisida",
    stanzas: [
      "Ko'zlaringga boqsam, to'xtaydi zamon,\nShu on butun olam unut bo'ladi.\nQalbimda yashaydi birgina darmon —\nSening tabassuming quyosh bo'ladi.",
      "Kechagi kun o'tdi, ertaga pinhon,\nMenga aynan hozir, shu daming kerak.\nSeni deb urmoqda bu telba yurak,\nSen mening borlig'im, ey aziz inson!"
    ],
    emotionalNote: "Zilolam, sening bitta nigohing oldida butun dunyoning dabdabasi hech narsaga arzimaydi.",
    themeColor: "from-rose-500 to-amber-500",
    bgGradient: "from-rose-950/40 via-zinc-950 to-zinc-900",
    accentGlow: "shadow-rose-900/40 border-rose-500/50",
    bgImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 'poem-2',
    title: "Zilolam, Har Nafasimda Sensan",
    subtitle: "Yuragimning har bir zarbida aytilayotgan nom",
    stanzas: [
      "Ismingni aytaman pichirlab dildan,\nIsming qalb tubiga o'yilgan tumor.\nHech narsa istamam shon yo iqboldan,\nMenga sening mehring, bir kulging xumor.",
      "Aynan hozir, mana shu nafasda,\nSeni butun vujud, qonimla sevdim.\nShu damda bu yurak faqat seniki,\nMening baxtim sensan — shuni men bildim!"
    ],
    emotionalNote: "Mening ismim Doniyor, va mening bu dunyodagi eng katta boyligim — sening kulgingdir.",
    themeColor: "from-amber-400 to-rose-400",
    bgGradient: "from-amber-950/30 via-zinc-950 to-zinc-900",
    accentGlow: "shadow-amber-950/40 border-amber-500/50",
    bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 'poem-3',
    title: "Shu Lahzadagi Cheksiz Sevgi",
    subtitle: "Vaqt to'xtasin, faqat biz qolaylik",
    stanzas: [
      "Kerakmas menga hech boshqa bir xayol,\nQo'llaring kaftimda tursa bas, jonim.\nSen bilan har bir on so'nmas bir hilol,\nSen bilan nurafshon har bitta onim.",
      "Zilolam, sevgilim, yagona malak,\nDoniyorning yuragi faqat senga taxt.\nSeni hozir, shu dam sevishning o'zi —\nTangrim menga bergan eng oliyjanob baxt!"
    ],
    emotionalNote: "Bizga ertangi kunning nima bo'lishi muhim emas, chunki hozir sen borsan va men sening yoningdaman.",
    themeColor: "from-rose-600 to-pink-500",
    bgGradient: "from-pink-950/30 via-zinc-950 to-zinc-900",
    accentGlow: "shadow-pink-950/40 border-pink-500/50",
    bgImage: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85",
  }
];

export const PRESENT_CONFESSION_POINTS = [
  {
    icon: "Heart",
    title: "Shu Soniyadagi Qalb Urishi",
    text: "Men seni ertaga yoki qachondir emas, aynan shu daqiqada, har bir tomirimdagi hayajon bilan sevaman.",
  },
  {
    icon: "Sparkles",
    title: "Sening Bugungi Tabassuming",
    text: "Sening bitta jilmayishing — mening bugungi barcha charchoqlarimni yuvib ketuvchi eng buyuk mo'jizadir.",
  },
  {
    icon: "Flame",
    title: "So'nmas Qaynoq Tuyg'u",
    text: "Qalbimdagi bu olov shunchaki so'zlar emas, bu Doniyorning Zilolaga bo'lgan tirik va alangali muhabbatidir.",
  }
];
