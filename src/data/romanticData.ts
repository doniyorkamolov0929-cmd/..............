import { RomanticMemory, LoveReason, LovePromise, TimelineEvent } from '../types';

export const DONIYOR_CONFESSION = {
  title: "Zilolam — Qalbimdagi Eng Go'zal Mo''jizam",
  subtitle: "Doniyor tomonidan yagona sevgilisi Zilolaga bag'ishlangan cheksiz sevgi izhori",
  date: "2026-yil",
  leadQuote: "«Dunyo minglab go'zalliklarga to'la bo'lishi mumkin, ammo mening butun koinotim faqat sening ko'zlaringda jamlangan, Zilolam...»",
  letterParagraphs: [
    "Azizim, mehribonim va yagona sevgilim Zilola... Bu so'zlarni qalbimning eng chuqur va toza burchaklaridan, har bir nafasingga bo'lgan cheksiz muhabbatim bilan yozmoqdaman. Hayotimga kirib kelganingdan beri men baxt nimaligini, chinakam sevgi qanday kuchga ega ekanini his qildim.",
    "Sening birgina mayin kulging butun dunyoning tashvishlarini unutdirishga qodir. Sening nigohingda men tinchlik, orom va bepoyon mehrni ko'raman. Mening ismim Doniyor, va mening bu dunyodagi eng buyuk faxrim — seni sevish, senga vafodor bo'lish va har kuningni bayramga aylantirishdir.",
    "Biz bosib o'tgan har bir yo'l, birga orzu qilgan har bir tun, gaplashib to'ymagan har bir daqiqa men uchun eng muqaddas xazinadir. Sen shunchaki sevgilim emassan — sen mening yuragim urishining sababchisisan, hayotimning ma'nosi, kelajagimning eng nurli orzusisann.",
    "Zilolam, men senga butun umrim davomida va'da beraman: qo'lingni hech qachon qo'yib yubormayman, ko'zlaring faqat quvonchdan yoshlanadi, va qalbim faqat sen deb uradi. Seni butun borlig'im bilan, so'nggi nafasimgacha sevaman!"
  ],
  poemStanzas: [
    "Sening ko'zlaringda porlaydi quyosh,\nKulgingda yangraydi bahor nafasi.\nSen bilan dunyoda yo'q menga ko'zyosh,\nSen mening ko'nglimning yorug' ertasi.",
    "Zilolam, sevgilim, qalbim malogi,\nDoniyoring senga baxsh etar jonin.\nSen borsan — yorug'dir dunyo charog'i,\nSen bilan baxtlidir har bir onim!"
  ],
  signOff: "Abadiy sening vafodor oshig'ing — Doniyor",
};

export const ROMANTIC_MEMORIES: RomanticMemory[] = [
  {
    id: 'memory-1',
    title: "Yulduzlar Ostidagi Sayr & Sevgi Qasami",
    subtitle: "Tungi osmon, mayin shabada va ikkimizning orzularimiz",
    description: "Shahar chiroqlari uzoqda miltillayotgan, osmonda millionlab yulduzlar porlagan sokin kecha. Doniyor Zilolaning qo'llaridan ushlab, unga abadiy sadoqat haqida so'zlagan eng sehrli lahza.",
    location: "Yulduzli shahar tepaligi",
    date: "Bizning unutilmas oqshomimiz",
    recommendedStyle: "Rustic/Dark",
    photoUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=85",
    photoResolution: "2K",
    photoStyle: "Rustic/Dark",
    photoAspectRatio: "1:1",
  },
  {
    id: 'memory-2',
    title: "101 Ta Qizil Atirgul & Ilk Tabassum",
    subtitle: "Zilolaning yuzidagi cheksiz hayrat va baxtiyronlik",
    description: "Doniyorning kutilmagan syurprizi: yangi ochilgan eng nafis 101 ta qizil atirgul guldastasi va ichiga yashirilgan sevgi maktubi. Zilolaning ko'zlaridagi quvonch butun xonani nurlantirgan lahza.",
    location: "Bahoriy gulzor bog'i",
    date: "Gullar iforli baxtli tong",
    recommendedStyle: "Bright/Modern",
    photoUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
    photoResolution: "2K",
    photoStyle: "Bright/Modern",
    photoAspectRatio: "1:1",
  },
  {
    id: 'memory-3',
    title: "Sham Yorug'idagi Romantik Kechki Oqshom",
    subtitle: "Faqat ikkimiz, sokin musiqa va chinakam muhabbat",
    description: "Iliq shamlar shu'lasi, billur qadahlar, sekin yangrayotgan fortepiano kuyi. Doniyor va Zilolaning bir-birining ko'zlariga qarab soatlab gaplashgan eng qadrdon kechasi.",
    location: "Shinam panoramali terassa",
    date: "Yuraklar uchrashuvi",
    recommendedStyle: "Rustic/Dark",
    photoUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85",
    photoResolution: "2K",
    photoStyle: "Rustic/Dark",
    photoAspectRatio: "1:1",
  },
  {
    id: 'memory-4',
    title: "Qo'lyozma Sevgi Xati & Polaroid Xotiralar",
    subtitle: "90° flat-lay: Doniyorning xati, tilla uzuk va atirgul barglari",
    description: "Zilolaga atab yozilgan sarg'ish qog'ozdagi samimiy xat, mum muhrli konvert, esdalik polaroid fotosuratlar va quritilgan gul yaproqlari bilan bezatilgan estetik kompozitsiya.",
    location: "Esdaliklar xonasi",
    date: "Abadiy saqlanadigan xotira",
    recommendedStyle: "Social Media",
    photoUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85",
    photoResolution: "2K",
    photoStyle: "Social Media",
    photoAspectRatio: "1:1",
  },
  {
    id: 'memory-5',
    title: "Parij Eyfel Minorasi Oldidagi Orzu Qilingan Sayr",
    subtitle: "Ikkimizning kelajakdagi eng romantik sayohatimiz",
    description: "Tonggi quyosh nurlari ostida Parij ko'chalari bo'ylab qahva ichib yurish, Eyfel minorasi fonida qattiq quchoqlashish va abadiy sevgi haqida orzular.",
    location: "Parij, Fransiya",
    date: "Kelajakdagi orzularimiz manzili",
    recommendedStyle: "Bright/Modern",
    photoUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    photoResolution: "2K",
    photoStyle: "Bright/Modern",
    photoAspectRatio: "1:1",
  },
  {
    id: 'memory-6',
    title: "Qishki Qorli Oqshomda Qo'llaringni Isitganim",
    subtitle: "Muzdek havodagi eng issiq va mehribon quchoq",
    description: "Sekin yog'ayotgan oppoq qor parchalari, qishki xiyobonda qo'l ushlashib ketayotganimiz va Doniyorning issiq kaftlarida Zilolaning qo'llari isigan lahzalar.",
    location: "Qorli oqshom xiyoboni",
    date: "Sehrli qish fasli",
    recommendedStyle: "Rustic/Dark",
    photoUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=85",
    photoResolution: "2K",
    photoStyle: "Rustic/Dark",
    photoAspectRatio: "1:1",
  }
];

export const LOVE_REASONS: LoveReason[] = [
  { id: 1, text: "Sening beg'ubor va samimiy kulging dunyodagi eng yoqimli musiqadan ham a'lo.", category: "Tabassum" },
  { id: 2, text: "Ko'zlaringga boqqanimda butun qalbimda cheksiz tinchlik va orom topaman.", category: "Qalb" },
  { id: 3, text: "Mening har bir orzuim va intilishimda sen doim eng katta kuch va ilhomsan.", category: "Orzular" },
  { id: 4, text: "Sen bilan o'tgan har bir oddiy daqiqa ham eng buyuk mo'jizaga aylanadi.", category: "Sadoqat" },
  { id: 5, text: "Har safar 'Doniyor' deb chaqirganingda qalbim hayajondan titrab ketadi.", category: "Qalb" },
  { id: 6, text: "Sening mehribon qalbing va nozik diding bu dunyoga yorug'lik ulashadi.", category: "Qalb" },
  { id: 7, text: "Qiyin vaziyatlarda bergan birgina iliq nigohing butun dunyoni yengishga kuch beradi.", category: "Sadoqat" },
  { id: 8, text: "Sening borligingning o'zi — Tangrining menga bergan eng buyuk in'omi.", category: "Qalb" },
  { id: 9, text: "Biz birga kulganimizda, bu olamda faqat ikkimiz borimizdek tuyuladi.", category: "Tabassum" },
  { id: 10, text: "Kelajak haqida o'ylaganimda, har bir kadrda faqat sening go'zal chehrangni ko'raman.", category: "Orzular" },
  { id: 11, text: "Sening sochlaringdagi mayin ifor gullar iforidan ham xushbo'y.", category: "Tabassum" },
  { id: 12, text: "Meni borligimcha sevishing va qadrlashing uchun sendan minnatdorman.", category: "Sadoqat" },
  { id: 13, text: "Qo'llarimiz bir-biriga tekkanda butun dunyo to'xtab qolgandek bo'ladi.", category: "Qalb" },
  { id: 14, text: "Sen sababli men har kuni o'zimni yaxshiroq inson bo'lishga undayman.", category: "Orzular" },
  { id: 15, text: "Zilolam, sening sevgiging mening qalbimdagi eng muqaddas olovdir.", category: "Sadoqat" }
];

export const LOVE_PROMISES: LovePromise[] = [
  {
    id: 1,
    title: "Abadiy Sadoqat & Vafo",
    promise: "Hayotimning har bir onida faqat senga sodiq qolishga, sening ishonchingni tog'dek mustahkam asrashga so'z beraman.",
    icon: "Shield"
  },
  {
    id: 2,
    title: "Baxtli Qilish & Quvontirish",
    promise: "Ko'zlaringdan faqat quvonch yoshlari oqishi uchun, har kuningda tabassum bo'lishi uchun bor kuchimni baxsh etaman.",
    icon: "Smile"
  },
  {
    id: 3,
    title: "Har Doim Himoya Qilish",
    promise: "Hayotning har qanday shamol va bo'ronlarida sening qalqoning, suyanchig'ing va ishonchli qo'rg'oning bo'laman.",
    icon: "HeartHandshake"
  },
  {
    id: 4,
    title: "Birga Orzularga Yetishish",
    promise: "Biz birgalikda orzu qilgan barcha go'zal cho'qqilarni, baxtli va farovon kelajagimizni birgalikda barpo etamiz.",
    icon: "Sparkles"
  },
  {
    id: 5,
    title: "Qo'lingni Hech Qachon Qo'yib Yubormaslik",
    promise: "Qanday kunlar kelmasin, qariyb sochlarimizga oq tushganda ham qo'llaringni xuddi bugungidek mehr bilan tutaman.",
    icon: "Heart"
  }
];

export const LOVE_TIMELINE: TimelineEvent[] = [
  {
    year: "Ilk Nigoh",
    title: "Qalbimiz Bir-birini Tanigan Kun",
    description: "Doniyor va Zilolaning ko'zlari ilk bor to'qnashgan o'sha lahza. Dunyo bir lahzaga to'xtab qolgandek, taqdir bizni abadiyatga bog'lagan muborak on.",
    quote: "«O'sha kuni men butun umr qidirgan baxtimni topdim...»",
    iconName: "Sparkles"
  },
  {
    year: "Birinchi Tabassum",
    title: "Yurakdagi Uyg'ongan Sevgi Tuyg'usi",
    description: "Zilolaning Doniyorga qarata ilk mayin jilmayishi. O'sha tabassum qalbimdagi eng qorong'i burchaklarni ham nurga to'ldirdi.",
    quote: "«Sening kulging mening hayotimdagi eng go'zal faslni boshlab berdi.»",
    iconName: "Smile"
  },
  {
    year: "Bugun va Hozir",
    title: "Doniyorning Cheksiz Muhabbat Izhori",
    description: "Bugun Doniyor o'z sevgilisi Zilolaga butun dunyo eshitadigan darajada baland ovozda 'SENI SEVAMAN!' deb izhor qilmoqda.",
    quote: "«Zilolam, senga bo'lgan sevgim vaqtsiz va chegarasizdir.»",
    iconName: "Heart"
  },
  {
    year: "Abadiy Kelajak",
    title: "Bizning Baxtli Oila Qasrimiz",
    description: "Birga quriladigan shinamgina xonadon, mehrga to'la bolalar qahqahasi, har oqshom birga ichiladigan choy va bir umrlik baxt.",
    quote: "«Doniyor va Zilola — bu abadiy muhabbat qissasi.»",
    iconName: "Infinity"
  }
];
