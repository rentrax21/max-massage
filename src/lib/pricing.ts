/**
 * ⚠️ CENNIK PRZYKŁADOWY — podmień kwoty na własne.
 * Ceny zawierają dojazd na terenie: Sosnowiec, Dąbrowa Górnicza,
 * Będzin, Czeladź, Katowice.
 */

export type PriceRow = {
  service: string;
  href: string;
  time: string;
  price: string;
};

export const priceTable: PriceRow[] = [
  { service: "Masaż klasyczny", href: "/uslugi/masaz-klasyczny", time: "50 min", price: "180 zł" },
  { service: "Masaż klasyczny", href: "/uslugi/masaz-klasyczny", time: "80 min", price: "240 zł" },
  { service: "Masaż relaksacyjny", href: "/uslugi/masaz-relaksacyjny", time: "50 min", price: "180 zł" },
  { service: "Masaż relaksacyjny", href: "/uslugi/masaz-relaksacyjny", time: "80 min", price: "240 zł" },
  { service: "Masaż regeneracyjny dla sportowców", href: "/uslugi/masaz-regeneracyjny", time: "50 min", price: "200 zł" },
  { service: "Masaż regeneracyjny dla sportowców", href: "/uslugi/masaz-regeneracyjny", time: "80 min", price: "260 zł" },
  { service: "Masaż Kobido", href: "/uslugi/masaz-kobido", time: "60 min", price: "220 zł" },
  { service: "Masaż limfatyczny nóg", href: "/uslugi/masaz-limfatyczny", time: "40 min", price: "150 zł" },
  { service: "Masaż limfatyczny nóg", href: "/uslugi/masaz-limfatyczny", time: "60 min", price: "190 zł" },
];

export type Extra = {
  title: string;
  price: string;
  desc: string;
};

export const packages: Extra[] = [
  {
    title: "Pakiet 4 masaży",
    price: "640 zł",
    desc: "4 × masaż 50 min (klasyczny lub relaksacyjny) do wykorzystania w 3 miesiące. 160 zł za zabieg — oszczędzasz 80 zł.",
  },
  {
    title: "Pakiet 8 masaży",
    price: "1200 zł",
    desc: "8 × masaż 50 min do wykorzystania w 6 miesięcy. 150 zł za zabieg — oszczędzasz 240 zł. Najlepszy wybór przy regularnej pracy nad napięciami.",
  },
  {
    title: "Pakiet sportowca",
    price: "720 zł",
    desc: "4 × masaż regeneracyjny 50 min dopasowany do Twojego planu treningowego. 180 zł za zabieg.",
  },
];

export const specials: Extra[] = [
  {
    title: "Masaż dla par",
    price: "340 zł",
    desc: "Dwa masaże 50 min wykonywane jeden po drugim podczas jednej wizyty. Wspólny wieczór regeneracji bez wychodzenia z domu.",
  },
  {
    title: "Voucher podarunkowy",
    price: "od 150 zł",
    desc: "Elegancki voucher na wybrany zabieg lub kwotę — wysyłam w wersji do druku lub online. Prezent, który naprawdę robi wrażenie.",
  },
];
