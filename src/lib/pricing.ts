import { activeServices } from "./services";

/**
 * ─────────────────────────────────────────────────────────────
 *  CENNIK
 *
 *  Tabela cen NIE jest przepisywana ręcznie — powstaje z listy
 *  aktywnych usług w services.ts. Dzięki temu cena jest w jednym
 *  miejscu i nie da się jej rozjechać między podstroną usługi
 *  a cennikiem. Wyłączenie usługi (`active: false`) usuwa ją stąd
 *  automatycznie.
 *
 *  ⚠️ Pakiety i oferty specjalne trzeba aktualizować ręcznie —
 *  przy zmianie cen bazowych sprawdź, czy kwoty i deklarowane
 *  oszczędności nadal się zgadzają.
 * ─────────────────────────────────────────────────────────────
 */

export type PriceRow = {
  service: string;
  href: string;
  time: string;
  price: string;
};

export const priceTable: PriceRow[] = activeServices.flatMap((s) =>
  s.variants.map((v) => ({
    service: s.name,
    href: `/uslugi/${s.slug}`,
    time: v.time,
    price: v.price,
  })),
);

export type Extra = {
  title: string;
  price: string;
  desc: string;
};

export const packages: Extra[] = [
  {
    title: "Pakiet 4 masaży",
    price: "560 zł",
    desc: "4 × masaż 50 min (klasyczny lub relaksacyjny) do wykorzystania w 3 miesiące. 140 zł za zabieg — oszczędzasz 80 zł.",
  },
  {
    title: "Pakiet 8 masaży",
    price: "1040 zł",
    desc: "8 × masaż 50 min do wykorzystania w 6 miesięcy. 130 zł za zabieg — oszczędzasz 240 zł. Najlepszy wybór przy regularnej pracy nad napięciami.",
  },
  {
    title: "Pakiet sportowca",
    price: "640 zł",
    desc: "4 × masaż regeneracyjny 50 min dopasowany do Twojego planu treningowego. 160 zł za zabieg — oszczędzasz 80 zł.",
  },
];

export const specials: Extra[] = [
  {
    title: "Masaż dla par",
    price: "300 zł",
    desc: "Dwa masaże 50 min wykonywane jeden po drugim podczas jednej wizyty. Wspólny wieczór regeneracji bez wychodzenia z domu.",
  },
  {
    title: "Voucher podarunkowy",
    price: "od 130 zł",
    desc: "Elegancki voucher na wybrany zabieg lub kwotę — wysyłam w wersji do druku lub online. Prezent, który naprawdę robi wrażenie.",
  },
];
