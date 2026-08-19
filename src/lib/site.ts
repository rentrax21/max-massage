/**
 * ─────────────────────────────────────────────────────────────
 *  CENTRALNA KONFIGURACJA STRONY — TU PODMIENIASZ SWOJE DANE
 *  Wszystkie numery, adresy i linki na całej stronie biorą się
 *  z tego jednego pliku.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Max Massage",
  tagline: "Profesjonalny masaż w Twoim domu",

  /**
   * Docelowa domena. Steruje canonicalami, sitemap.xml i adresami
   * w danych strukturalnych — musi być tym adresem, pod którym
   * strona faktycznie stoi.
   */
  url: "https://maxmassage.pl",

  /** ⚠️ PODMIEŃ: numer telefonu (format wyświetlany i format tel:) */
  phoneDisplay: "+48 600 000 000",
  phoneHref: "tel:+48600000000",

  /** ⚠️ PODMIEŃ: numer WhatsApp (sam numer, bez + i spacji) */
  whatsappNumber: "48600000000",

  /** ⚠️ PODMIEŃ: adres e-mail */
  email: "kontakt@maxmassage.pl",

  /**
   * ⚠️ OPCJONALNIE: link do kalendarza rezerwacji — Booksy albo Calendly.
   * Np. "https://booksy.com/pl-pl/twoj-profil" lub "https://calendly.com/…".
   * Jeśli ustawisz, przyciski „Umów wizytę” poprowadzą prosto do kalendarza.
   * Jeśli zostawisz null — przyciski prowadzą do sekcji rezerwacji na stronie Kontakt.
   *
   * To jest pojedyncza największa dźwignia konwersji na tej stronie: klient
   * rezerwuje w chwili motywacji, a ta trwa minuty, nie godziny.
   */
  bookingUrl: null as string | null,

  /** ⚠️ PODMIEŃ: link do wizytówki Google (Google Business Profile) */
  googleReviewsUrl: "https://g.page/",

  /** Godziny pracy */
  hours: [
    { days: "Poniedziałek – piątek", time: "9:00 – 21:00" },
    { days: "Sobota", time: "9:00 – 18:00" },
    { days: "Niedziela", time: "po wcześniejszym uzgodnieniu" },
  ],

  /** Miasto bazowe */
  baseCity: "Sosnowiec",
} as const;

/**
 * ─────────────────────────────────────────────────────────────
 *  KWALIFIKACJE — ⚠️ UZUPEŁNIJ SWOIMI DANYMI
 *
 *  Każde pole zostawione jako `null` po prostu się nie wyświetli.
 *  Nic nie jest zmyślone: dopóki nie wpiszesz konkretu, strona
 *  o nim milczy.
 *
 *  To najważniejszy blok na całej stronie. Klient ma wpuścić do
 *  mieszkania kogoś, kogo nie zna — a dziś nie może zweryfikować
 *  o Tobie ani jednego faktu. Sześć konkretów zbija tu więcej
 *  obiekcji niż sześć akapitów o profesjonalizmie.
 * ─────────────────────────────────────────────────────────────
 */
export const credentials = {
  /** Imię i nazwisko, którym się przedstawiasz na stronie */
  name: "Max Majka",

  /** np. { name: "Technik masażysta", issuer: "Medyczna Szkoła Policealna w Sosnowcu", year: 2019 } */
  diploma: null as { name: string; issuer: string; year: number } | null,

  /** Rok rozpoczęcia praktyki — strona sama policzy staż */
  practiceSince: null as number | null,

  /** Ukończone kursy: podaj nazwę i organizatora, np. ["Masaż sportowy — Akademia XYZ, 2023"] */
  courses: [] as string[],

  /** Szacunkowa liczba wizyt w roku — podaj tylko, jeśli to prawda */
  visitsPerYear: null as number | null,

  /** Dane firmy — sprawdzalne w CEIDG, to mocny sygnał zaufania */
  companyName: null as string | null,
  nip: null as string | null,

  /** Ubezpieczenie OC — np. "Ubezpieczenie OC zawodowe (PZU)" */
  insurance: null as string | null,
} as const;

/** Staż liczony automatycznie z `practiceSince`. */
export function yearsOfPractice(): number | null {
  if (!credentials.practiceSince) return null;
  return new Date().getFullYear() - credentials.practiceSince;
}

/** Czy jest cokolwiek do pokazania w bloku kwalifikacji. */
export function hasCredentials(): boolean {
  return Boolean(
    credentials.diploma ||
      credentials.practiceSince ||
      credentials.courses.length ||
      credentials.nip ||
      credentials.insurance,
  );
}

/**
 * ─────────────────────────────────────────────────────────────
 *  ZASADY PRACY — granica zawodowa nazwana wprost
 *
 *  Kategoria „masaż z dojazdem” w polskim internecie sąsiaduje
 *  z usługami erotycznymi. Klientka, która rozważa wpuszczenie
 *  obcego mężczyzny do mieszkania, myśli o tym, nawet jeśli
 *  o tym nie napisze. Nazwanie zasad wprost zdejmuje największą
 *  niewypowiedzianą obiekcję — i praktycznie nikt z konkurencji
 *  tego nie robi.
 * ─────────────────────────────────────────────────────────────
 */
export const workRules = [
  {
    title: "Wyłącznie masaż terapeutyczny i relaksacyjny",
    text: "Prowadzę gabinet masażu, tylko z dojazdem zamiast lokalu. Nie świadczę i nie przyjmuję zapytań o żadne usługi o charakterze erotycznym. Jeśli trafiłeś tu, szukając czegoś innego — to nie ten adres.",
  },
  {
    title: "Wywiad zdrowotny przed pierwszym zabiegiem",
    text: "Zanim położysz się na stole, pytam o kontuzje, choroby przewlekłe, ciążę i leki. To nie formalność — od tego zależy, gdzie mogę pracować, a czego nie wolno ruszać.",
  },
  {
    title: "Stała reguła przykrycia",
    text: "Odsłaniam wyłącznie tę część ciała, nad którą aktualnie pracuję. Reszta pozostaje przykryta przez cały zabieg. Do masażu pleców zostaje bielizna. Nie masuję okolic intymnych ani piersi.",
  },
  {
    title: "Możesz poprosić o obecność drugiej osoby",
    text: "Jeśli tak Ci wygodniej — przy pierwszej wizycie może być obecny partner, współlokator albo ktoś z rodziny. Nie muszę wiedzieć wcześniej i nie zmienia to niczego w przebiegu zabiegu.",
  },
  {
    title: "Przerywasz, kiedy chcesz, bez tłumaczenia się",
    text: "Jedno słowo wystarczy, żeby zmienić nacisk, pominąć partię ciała albo zakończyć wcześniej. Za zabieg przerwany w pierwszych dziesięciu minutach nie płacisz.",
  },
  {
    title: "Higiena bez wyjątków",
    text: "Świeże pokrycie jednorazowe i czyste ręczniki na każdą wizytę, dezynfekcja stołu i rąk przy Tobie. Nic z tego, co dotyka Twojej skóry, nie było wcześniej u kogoś innego.",
  },
] as const;

/**
 * ─────────────────────────────────────────────────────────────
 *  ODWOŁANIA I GWARANCJA — ⚠️ POTWIERDŹ, ŻE TO AKCEPTUJESZ
 *
 *  To zobowiązania biznesowe, nie tylko copy. Zmień warunki na
 *  takie, które faktycznie chcesz honorować — ale nie usuwaj
 *  ich bez zamiennika. Brak jakiegokolwiek odwrócenia ryzyka
 *  oznacza, że całe ryzyko pierwszej wizyty ponosi klient.
 * ─────────────────────────────────────────────────────────────
 */
export const cancellation = {
  /** Ile godzin przed wizytą można odwołać bez konsekwencji */
  freeCancelHours: 12,
  text: "Termin możesz odwołać lub przełożyć bezpłatnie do 12 godzin przed wizytą — wystarczy wiadomość. Później też odbieram telefon: przy nagłych sytuacjach po prostu szukamy nowego terminu.",
};

export const guarantee = {
  title: "Pierwsza wizyta bez ryzyka",
  text: "Jeśli w pierwszych dziesięciu minutach uznasz, że to nie dla Ciebie — kończymy, składam stół i nie płacisz nic. Nie musisz tego uzasadniać.",
};

export const cityNames = [
  "Sosnowiec",
  "Dąbrowa Górnicza",
  "Będzin",
  "Czeladź",
  "Katowice",
] as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Dokąd prowadzi „Umów wizytę” */
export function bookingHref(): string {
  return site.bookingUrl ?? "/kontakt#rezerwacja";
}

/** Czy „Umów wizytę” prowadzi do prawdziwego kalendarza, czy tylko do formularza. */
export function hasCalendar(): boolean {
  return Boolean(site.bookingUrl);
}
