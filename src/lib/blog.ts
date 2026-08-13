export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateLabel: string;
  readTime: string;
  excerpt: string;
  metaDescription: string;
  blocks: PostBlock[];
};

export const blogCategories = [
  "Home Office",
  "Regeneracja sportowa",
  "Wellness i sen",
] as const;

export const posts: Post[] = [
  {
    slug: "bol-karku-praca-przy-komputerze",
    title: "Ból karku przy pracy przy komputerze — skąd się bierze i co z nim zrobić",
    category: "Home Office",
    date: "2026-07-14",
    dateLabel: "14 lipca 2026",
    readTime: "5 min czytania",
    excerpt:
      "Sztywny kark o 16:00 to nie „uroda pracy biurowej”, tylko sygnał przeciążenia, który da się odwrócić. Wyjaśniam mechanizm — i konkretny plan działania.",
    metaDescription:
      "Skąd bierze się ból karku przy pracy przy komputerze i jak się go pozbyć: ergonomia, mikroprzerwy i masaż. Praktyczny poradnik od Max Massage.",
    blocks: [
      {
        type: "p",
        text: "Jeśli pracujesz przy komputerze, prawdopodobnie znasz ten scenariusz: rano jest w porządku, po południu kark zaczyna „ciągnąć”, a wieczorem sięga po niego napięciowy ból głowy. To nie przypadek i nie „taka uroda” — to fizjologia, która działa bardzo przewidywalnie.",
      },
      { type: "h2", text: "Co się właściwie dzieje z Twoim karkiem" },
      {
        type: "p",
        text: "Głowa dorosłego człowieka waży 4–6 kg. Gdy siedzisz prosto, dźwigają ją głównie kości i więzadła. Jednak każdy centymetr wysunięcia głowy w stronę monitora zwielokrotnia obciążenie mięśni karku — przy typowej „pozie laptopowej” pracują one tak, jakby trzymały kilkanaście kilogramów. Godzinami. Codziennie.",
      },
      {
        type: "p",
        text: "Mięsień, który nie ma szansy odpocząć, stopniowo się skraca i tworzy bolesne punkty spustowe. Stąd promieniowanie do głowy, między łopatki, czasem mrowienie w rękach. Ciało nie potrzebuje „silniejszych” mięśni karku — potrzebuje przerwać ciągłe napięcie.",
      },
      { type: "h2", text: "Trzy rzeczy, które możesz zrobić od dziś" },
      {
        type: "ul",
        items: [
          "Podnieś ekran: górna krawędź monitora na wysokości oczu. Laptop na podstawce plus zewnętrzna klawiatura to najtańsza „terapia” karku, jaka istnieje.",
          "Mikroprzerwy co 30–40 minut: 20 sekund krążenia barkami i spojrzenie w dal wystarczy, by przerwać cykl napięcia. Ustaw powtarzalny timer.",
          "Ciepło wieczorem: ciepły prysznic na kark i barki rozluźnia lepiej niż rozciąganie „na siłę”.",
        ],
      },
      { type: "h2", text: "Kiedy wkracza masaż" },
      {
        type: "p",
        text: "Ergonomia zatrzymuje pogłębianie problemu, ale istniejące punkty spustowe rzadko znikają same. Masaż klasyczny rozpracowuje przykurczone pasma mięśni, przywraca ukrwienie i — co czuć od razu — zdejmuje z karku ciężar noszony tygodniami. Przy zastarzałych napięciach najlepiej działa seria 4–6 zabiegów co 7–10 dni.",
      },
      {
        type: "p",
        text: "Max Massage wykonuje profesjonalny masaż w domu klienta na terenie Sosnowca, Dąbrowy Górniczej, Będzina, Czeladzi i Katowic — bez konieczności dojazdu, co przy napiętym grafiku pracy zdalnej ma szczególne znaczenie. Umów wizytę, a przekonasz się, jak lekko może czuć się głowa po dobrej pracy na karku.",
      },
    ],
  },
  {
    slug: "regeneracja-po-treningu-masaz",
    title: "Regeneracja po treningu: dlaczego masaż działa i kiedy go planować",
    category: "Regeneracja sportowa",
    date: "2026-06-02",
    dateLabel: "2 czerwca 2026",
    readTime: "6 min czytania",
    excerpt:
      "Trening to bodziec, ale postęp dzieje się w przerwie między jednostkami. Jak wpleść masaż w plan treningowy, żeby realnie przyspieszał formę — a nie tylko miło pachniał olejkiem.",
    metaDescription:
      "Masaż sportowy a regeneracja po treningu: kiedy planować zabieg, jak działa na DOMS i sztywność mięśni. Poradnik dla biegaczy i trenujących siłowo.",
    blocks: [
      {
        type: "p",
        text: "W sporcie amatorskim najczęściej brakuje nie motywacji, lecz regeneracji. Trenujemy po pracy, śpimy za krótko, a między treningami załatwiamy całe dorosłe życie. Efekt: sztywność, spadki formy i drobne urazy, które „wyskakują znikąd”. Masaż nie zastąpi snu, ale jest jednym z niewielu narzędzi regeneracji, które działają natychmiast i odczuwalnie.",
      },
      { type: "h2", text: "Co masaż realnie robi z mięśniami" },
      {
        type: "ul",
        items: [
          "Poprawia ukrwienie zmęczonych grup mięśniowych, przyspieszając usuwanie produktów przemiany materii.",
          "Obniża napięcie spoczynkowe mięśni — to ono odpowiada za uczucie „drewnianych” nóg.",
          "Zmniejsza bolesność powysiłkową (DOMS) i subiektywne zmęczenie.",
          "Pozwala wcześnie wychwycić miejsca nadmiernie przeciążone, zanim staną się kontuzją.",
        ],
      },
      { type: "h2", text: "Kiedy planować masaż w tygodniu treningowym" },
      {
        type: "p",
        text: "Złota zasada: głęboka praca regeneracyjna 24–48 godzin po najcięższej jednostce, nigdy bezpośrednio przed nią. Jeśli biegasz długie wybieganie w sobotę rano, idealny termin masażu to niedzielne popołudnie lub poniedziałek. Po zabiegu zaplanuj dzień lżejszy — mięśnie potrzebują chwili, by „przełknąć” bodziec.",
      },
      {
        type: "p",
        text: "Przy 3–5 treningach tygodniowo optymalna częstotliwość to masaż co 1–2 tygodnie. W okresie przygotowań startowych warto zagęścić zabiegi, a ostatni głęboki masaż wykonać minimum 3–4 dni przed zawodami.",
      },
      { type: "h2", text: "Masaż w domu — regeneracja bez logistyki" },
      {
        type: "p",
        text: "Największy wróg regeneracji amatora to czas. Dojazd do gabinetu, parking, powrót — i z 60-minutowego zabiegu robią się dwie i pół godziny. Dlatego masaż mobilny tak dobrze przyjął się wśród osób trenujących: zabieg odbywa się u Ciebie, od razu po nim możesz zjeść, rozciągnąć się i położyć spać.",
      },
      {
        type: "p",
        text: "Max Massage wykonuje masaż regeneracyjny w domu klienta na terenie Sosnowca, Dąbrowy Górniczej, Będzina, Czeladzi i Katowic. Jeśli trenujesz nad Pogorią, w Parku Śląskim albo na katowickich siłowniach — Twoja regeneracja może zaczynać się w momencie, w którym zamykasz za sobą drzwi mieszkania.",
      },
    ],
  },
  {
    slug: "jak-przygotowac-sie-do-masazu-w-domu",
    title: "Masaż w domu: jak się przygotować i jak to właściwie wygląda",
    category: "Wellness i sen",
    date: "2026-05-06",
    dateLabel: "6 maja 2026",
    readTime: "4 min czytania",
    excerpt:
      "„Nie mam warunków”, „mieszkanie jest za małe”, „co muszę przygotować?” — najczęstsze obawy przed pierwszym masażem mobilnym. Spoiler: potrzebujesz mniej, niż myślisz.",
    metaDescription:
      "Jak przygotować się do masażu z dojazdem: ile miejsca potrzeba, co przywozi masażysta, jak wygląda wizyta krok po kroku. Przewodnik Max Massage.",
    blocks: [
      {
        type: "p",
        text: "Większość osób przed pierwszą wizytą zadaje te same pytania. To zrozumiałe — masaż kojarzy się z gabinetem, a wpuszczenie zabiegu do własnego salonu wydaje się wymagać przygotowań. W praktyce Twoja rola kończy się na otwarciu drzwi.",
      },
      { type: "h2", text: "Ile miejsca naprawdę potrzeba" },
      {
        type: "p",
        text: "Około 2 × 3 metry wolnej podłogi — tyle, by rozłożyć stół i swobodnie przy nim pracować. W typowym salonie wystarczy odsunąć stolik kawowy. Zabieg z powodzeniem wykonuję też w sypialniach i większych przedpokojach. Mieszkanie w bloku ze standardowym pokojem? Warunki są w zupełności wystarczające.",
      },
      { type: "h2", text: "Co przywożę ze sobą" },
      {
        type: "ul",
        items: [
          "Profesjonalny, stabilny stół do masażu z podgłówkiem",
          "Świeże pokrycie jednorazowe i czyste ręczniki",
          "Olejki hipoalergiczne (bezzapachowe na życzenie)",
          "Muzykę i wszystko, co tworzy atmosferę zabiegu",
        ],
      },
      { type: "h2", text: "Jak wygląda wizyta krok po kroku" },
      {
        type: "p",
        text: "Przyjeżdżam kilka minut przed umówioną godziną. Rozłożenie stanowiska zajmuje około 10 minut — w tym czasie krótko rozmawiamy o Twoich potrzebach: co boli, jaki nacisk lubisz, czego oczekujesz. Potem następuje właściwy zabieg, a po nim składam wszystko i zostawiam przestrzeń dokładnie taką, jaką zastałem. Ty nie wracasz autem przez miasto — zostajesz u siebie, najlepiej z herbatą i wolnym wieczorem.",
      },
      { type: "h2", text: "Trzy proste rzeczy, które zwiększą komfort" },
      {
        type: "ul",
        items: [
          "Weź ciepły prysznic przed wizytą — rozgrzane mięśnie szybciej się rozluźniają.",
          "Nie jedz obfitego posiłku na godzinę przed masażem.",
          "Przewietrz pokój i wycisz telefon. Reszta należy do mnie.",
        ],
      },
      {
        type: "p",
        text: "Max Massage wykonuje profesjonalny masaż w domu klienta na terenie Sosnowca, Dąbrowy Górniczej, Będzina, Czeladzi i Katowic. Jeśli masz pytania, których nie znalazłeś tutaj — napisz na WhatsApp, odpowiadam zwykle w ciągu godziny.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
