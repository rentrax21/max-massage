export type ServiceVariant = {
  time: string;
  price: string;
};

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  /**
   * Czy usługa jest w ofercie. `false` chowa ją wszędzie — w menu, cenniku,
   * na liście usług, w danych strukturalnych i w sitemapie — ale zostawia
   * gotową treść w kodzie. Żeby wrócić do oferty, wystarczy przestawić na `true`.
   */
  active: boolean;
  name: string;
  /** krótka nazwa do kafelków / stopki */
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  /** jedno zdanie na kafelku oferty */
  tile: string;
  /** lead na podstronie usługi */
  lead: string;
  /** akapity opisu */
  description: string[];
  variants: ServiceVariant[];
  priceFrom: string;
  effects: string[];
  forWhom: string[];
  note?: string;
  faq: ServiceFaq[];
};

export const services: Service[] = [
  {
    active: true,
    slug: "masaz-klasyczny",
    name: "Masaż klasyczny",
    shortName: "Masaż klasyczny",
    metaTitle: "Masaż klasyczny z dojazdem do domu — Sosnowiec, Katowice i okolice",
    metaDescription:
      "Masaż klasyczny z dojazdem do domu klienta. Redukcja napięcia karku, barków i pleców po pracy przy komputerze. Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice.",
    tile: "Rozluźnia kark, barki i plecy po godzinach przy biurku.",
    lead:
      "Najczęściej wybierany zabieg u osób pracujących przy komputerze. Skupiam się na miejscach, które realnie bolą: kark, barki, odcinek lędźwiowy — bez zbędnej otoczki, za to z konkretną techniką.",
    description: [
      "Masaż klasyczny to praca na mięśniach i powięzi z użyciem sprawdzonych technik: głaskania, rozcierania, ugniatania i uciskania. Dobieram siłę nacisku do Twoich potrzeb — od zdecydowanego rozpracowania napięć po łagodniejszą pracę na wrażliwych partiach.",
      "Zabieg wykonuję u Ciebie w domu, na profesjonalnym stole do masażu, który przywożę ze sobą. Potrzebuję tylko kawałka wolnej podłogi — resztą zajmuję się ja.",
      "Pierwszą wizytę zaczynam od pytania, co dokładnie boli i od jak dawna — bo „bolą mnie plecy” może oznaczać pięć różnych rzeczy i każda wymaga innej pracy. Zwykle okazuje się, że źródłem sztywnego karku są barki podciągnięte przez cały dzień do uszu, a nie sam kark.",
    ],
    variants: [
      { time: "50 min", price: "160 zł" },
      { time: "80 min", price: "220 zł" },
    ],
    priceFrom: "od 160 zł",
    effects: [
      "Rozluźnienie napiętego karku i barków",
      "Zmniejszenie bólu pleców po pracy siedzącej",
      "Poprawa krążenia i dotlenienia mięśni",
      "Większa swoboda ruchu i lżejsza sylwetka",
      "Odczuwalna ulga już po pierwszym zabiegu",
    ],
    forWhom: [
      "Pracujesz przy komputerze i czujesz sztywność karku",
      "Budzisz się z bólem pleców lub drętwiejącymi rękami",
      "Spędzasz dużo czasu za kierownicą",
      "Chcesz regularnie dbać o ciało bez wychodzenia z domu",
    ],
    faq: [
      {
        q: "Czy masaż klasyczny boli?",
        a: "Nie powinien. Pracuję na granicy „przyjemnego rozpracowania” napięcia — siłę nacisku ustalamy na bieżąco. Po zabiegu może pojawić się delikatna tkliwość mięśni, podobna do tej po treningu, która mija w ciągu doby.",
      },
      {
        q: "Jak często powtarzać masaż klasyczny?",
        a: "Przy dużych napięciach dobre efekty daje seria 4–6 zabiegów co 7–10 dni, a potem wizyta podtrzymująca raz na 3–4 tygodnie. Plan zawsze dopasowuję do Twojej sytuacji.",
      },
      {
        q: "Czy wykonujesz masaż klasyczny w Katowicach i Sosnowcu?",
        a: "Tak. Dojeżdżam do klientów w Sosnowcu, Dąbrowie Górniczej, Będzinie, Czeladzi i Katowicach. Dojazd na tym obszarze jest wliczony w cenę zabiegu.",
      },
    ],
  },
  {
    active: true,
    slug: "masaz-relaksacyjny",
    name: "Masaż relaksacyjny",
    shortName: "Masaż relaksacyjny",
    metaTitle: "Masaż relaksacyjny w domu klienta — odstresowanie bez wychodzenia z domu",
    metaDescription:
      "Masaż relaksacyjny z dojazdem: wyciszenie, lepszy sen i redukcja stresu w Twoim własnym domu. Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice.",
    tile: "Wycisza układ nerwowy, poprawia sen i obniża poziom stresu.",
    lead:
      "Godzina, w której nic nie musisz. Płynne, spokojne techniki obniżają napięcie całego ciała, a fakt, że jesteś u siebie, sprawia, że relaks zaczyna się jeszcze przed masażem i nie kończy się na klatce schodowej.",
    description: [
      "Masaż relaksacyjny prowadzę wolniejszym, płynnym rytmem, pracując na całym ciele. Celem nie jest „rozbijanie” napięć, ale wyciszenie układu nerwowego — to on odpowiada za jakość snu, poziom stresu i uczucie ciągłego zmęczenia.",
      "Największa różnica względem masażu w gabinecie? Po zabiegu nie wsiadasz do samochodu i nie wracasz przez korki. Zostajesz w domu, robisz herbatę i przedłużasz stan głębokiego odprężenia o cały wieczór.",
      "Ten zabieg umawia się najczęściej na wieczór albo na weekend i to ma sens: masaż relaksacyjny w środku dnia pracy działa o połowę słabiej, bo za dwie godziny i tak wracasz do maili. Ostatnie wizyty zaczynam około dziewiętnastej trzydzieści — po nich nie masz już nic w planach poza własnym łóżkiem.",
    ],
    variants: [
      { time: "50 min", price: "160 zł" },
      { time: "80 min", price: "220 zł" },
    ],
    priceFrom: "od 160 zł",
    effects: [
      "Głębokie odprężenie i spokojniejsza głowa",
      "Lepszy, głębszy sen",
      "Obniżenie napięcia mięśniowego wywołanego stresem",
      "Uczucie „zresetowania” po intensywnym tygodniu",
    ],
    forWhom: [
      "Żyjesz w ciągłym napięciu i trudno Ci „wyłączyć” myśli",
      "Masz problemy z zasypianiem lub płytki sen",
      "Czujesz zmęczenie, które nie mija po weekendzie",
      "Szukasz prezentu — masaż w domu to voucher, który naprawdę robi wrażenie",
    ],
    faq: [
      {
        q: "Czym różni się masaż relaksacyjny od klasycznego?",
        a: "Masaż klasyczny celuje w konkretne napięcia i bywa intensywny. Relaksacyjny obejmuje całe ciało, jest wolniejszy i delikatniejszy — jego zadaniem jest wyciszenie, nie rozpracowywanie punktów spustowych.",
      },
      {
        q: "Jak przygotować mieszkanie na masaż relaksacyjny?",
        a: "Wystarczy około 2×3 metry wolnej przestrzeni na stół. Przywożę ze sobą wszystko: stół, świeże pokrycie, ręczniki, olejki i muzykę. Ty możesz co najwyżej przygasić światło.",
      },
      {
        q: "Czy mogę umówić masaż wieczorem po pracy?",
        a: "Tak — to najczęściej wybierana pora. Pracuję do godziny 21:00, także w soboty. Masaż o 19:30 we własnym salonie to zupełnie inna jakość odpoczynku niż wizyta w gabinecie w porze lunchu.",
      },
    ],
  },
  {
    active: true,
    slug: "masaz-regeneracyjny",
    name: "Masaż regeneracyjny dla sportowców",
    shortName: "Masaż regeneracyjny",
    metaTitle: "Masaż sportowy i regeneracyjny z dojazdem — regeneracja po treningu",
    metaDescription:
      "Masaż regeneracyjny dla sportowców z dojazdem do domu. Szybszy powrót do treningu, mniejsza bolesność mięśni, profilaktyka kontuzji. Sosnowiec, Katowice i okolice.",
    tile: "Przyspiesza regenerację i zmniejsza ryzyko kontuzji.",
    lead:
      "Trenujesz — biegasz, dźwigasz, jeździsz na rowerze. Regeneracja to część planu treningowego, nie nagroda. Ten masaż skraca czas między „nie mogę zejść po schodach” a kolejną mocną jednostką.",
    description: [
      "Masaż regeneracyjny łączy intensywniejsze techniki masażu sportowego z pracą na powięzi i rozciąganiem. Skupiam się na grupach mięśniowych, które obciążasz najbardziej: uda, łydki, pośladki, grzbiet — w zależności od Twojej dyscypliny.",
      "Zabieg najlepiej działa 24–48 godzin po ciężkim treningu lub starcie, ale sprawdza się też jako stały element tygodnia treningowego. Regularna praca na mięśniach to mniejsza sztywność, lepszy zakres ruchu i mniejsze ryzyko przeciążeń.",
      "Dojeżdżam z pełnym wyposażeniem do domów klientów w Sosnowcu, Dąbrowie Górniczej, Będzinie, Czeladzi i Katowicach — możesz zaplanować masaż od razu po treningu, bez dodatkowej logistyki.",
    ],
    variants: [
      { time: "50 min", price: "180 zł" },
      { time: "80 min", price: "240 zł" },
    ],
    priceFrom: "od 180 zł",
    effects: [
      "Szybsza regeneracja po ciężkich jednostkach",
      "Mniejsza bolesność mięśni (DOMS)",
      "Większy zakres ruchu i elastyczność",
      "Profilaktyka przeciążeń i kontuzji",
      "Lepsze „czucie” mięśni na treningu",
    ],
    forWhom: [
      "Biegasz i przygotowujesz się do startów",
      "Trenujesz siłowo i czujesz narastającą sztywność",
      "Jeździsz na rowerze, grasz w squasha, tenisa, piłkę",
      "Wracasz do sportu po przerwie i chcesz uniknąć urazów",
    ],
    faq: [
      {
        q: "Kiedy najlepiej zrobić masaż: przed czy po treningu?",
        a: "Głęboka praca regeneracyjna najlepiej działa 24–48 h po dużym wysiłku. Bezpośrednio przed startem wykonuje się jedynie krótkie, pobudzające techniki — jeśli szykujesz się do zawodów, ustalimy to przy rezerwacji.",
      },
      {
        q: "Czy masaż sportowy jest bardzo bolesny?",
        a: "Jest intensywniejszy niż klasyczny, ale „im mocniej, tym lepiej” to mit. Pracuję głęboko, lecz w granicach, w których mięsień się rozluźnia, a nie broni. Komunikujemy się przez cały zabieg.",
      },
      {
        q: "Jak często korzystać z masażu przy regularnych treningach?",
        a: "Przy 3–5 jednostkach tygodniowo optymalny jest masaż co 1–2 tygodnie. Przy przygotowaniach startowych warto zaplanować cykl pod kalendarz zawodów — pomogę Ci to rozpisać.",
      },
    ],
  },
  {
    // ⚠️ WYŁĄCZONE do czasu ukończenia kursu Kobido — przestaw na true, żeby wróciło
    active: false,
    slug: "masaz-kobido",
    name: "Masaż Kobido",
    shortName: "Masaż Kobido",
    metaTitle: "Masaż Kobido z dojazdem — japoński lifting twarzy w Twoim domu",
    metaDescription:
      "Masaż twarzy Kobido z dojazdem do domu: naturalny lifting, redukcja napięcia żuchwy i świeży wygląd. Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice.",
    tile: "Japoński masaż twarzy — naturalny lifting i odprężenie.",
    lead:
      "Kobido to japońska technika masażu twarzy nazywana „niechirurgicznym liftingiem”. Intensywna praca na mięśniach twarzy, szyi i dekoltu poprawia napięcie skóry — a przy okazji rozluźnia zaciśniętą żuchwę i czoło, w których kumuluje się stres.",
    description: [
      "Zabieg łączy szybkie, precyzyjne ruchy pobudzające mięśnie twarzy z technikami drenującymi i głęboko relaksującymi. Efekt to lepsze ukrwienie i dotlenienie skóry, wyraźniejszy owal twarzy oraz zmniejszenie napięcia mięśni żuchwy, które często odpowiada za napięciowe bóle głowy i zaciskanie zębów.",
      "Kobido świetnie sprawdza się jako rytuał powtarzany cyklicznie — pierwsze efekty widać po jednym zabiegu, a seria utrwala rezultat. To także wyjątkowy pomysł na prezent.",
      "Masaż Kobido wykonuję w domach klientek i klientów w Sosnowcu, Dąbrowie Górniczej, Będzinie, Czeladzi i Katowicach. Ty przygotowujesz tylko chwilę dla siebie — całe wyposażenie przywożę ze sobą.",
    ],
    variants: [{ time: "60 min", price: "200 zł" }],
    priceFrom: "200 zł",
    effects: [
      "Naturalny efekt liftingu i wyraźniejszy owal twarzy",
      "Rozluźnienie żuchwy, czoła i mięśni mimicznych",
      "Lepsze ukrwienie i rozświetlenie skóry",
      "Redukcja napięciowych bólów głowy",
      "Głęboki relaks porównywany do medytacji",
    ],
    forWhom: [
      "Zaciskasz zęby lub budzisz się z napiętą żuchwą",
      "Chcesz zadbać o skórę bez medycyny estetycznej",
      "Dużo mówisz, prezentujesz, występujesz",
      "Szukasz zabiegu premium na wyjątkową okazję",
    ],
    note:
      "Przeciwwskazania: aktywne stany zapalne skóry, świeże zabiegi medycyny estetycznej (do 4 tygodni), niedawne zabiegi stomatologiczne. W razie wątpliwości napisz do mnie przed rezerwacją.",
    faq: [
      {
        q: "Po ilu zabiegach Kobido widać efekty?",
        a: "Świeższy wygląd i rozluźnienie twarzy widać zwykle po pierwszym zabiegu. Trwalszy efekt liftingu daje seria 5–10 spotkań co 1–2 tygodnie, a potem zabieg podtrzymujący raz w miesiącu.",
      },
      {
        q: "Czy Kobido zastępuje zabiegi estetyczne?",
        a: "Kobido to naturalna praca na mięśniach i tkankach — nie ingeruje w skórę jak medycyna estetyczna. Dla wielu osób jest wystarczającą alternatywą, dla innych — świetnym uzupełnieniem między zabiegami.",
      },
      {
        q: "Jak przygotować się do masażu Kobido w domu?",
        a: "Przyjdź na spotkanie bez makijażu albo zdejmij go tuż przed zabiegiem. Potrzebuję miejsca na stół do masażu i dostępu do gniazdka — resztę, łącznie z kosmetykami, przywożę ze sobą.",
      },
    ],
  },
  {
    active: true,
    slug: "masaz-limfatyczny",
    name: "Masaż limfatyczny nóg",
    shortName: "Masaż limfatyczny nóg",
    metaTitle: "Masaż limfatyczny nóg z dojazdem — lekkie nogi bez wychodzenia z domu",
    metaDescription:
      "Drenaż limfatyczny nóg z dojazdem do domu: redukcja obrzęków, uczucie lekkości, wsparcie krążenia. Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice.",
    tile: "Redukuje obrzęki i przywraca nogom lekkość.",
    lead:
      "Ciężkie, opuchnięte nogi po całym dniu — przy biurku albo na nogach — to sygnał, że układ limfatyczny potrzebuje wsparcia. Delikatny, rytmiczny drenaż przywraca uczucie lekkości często już po pierwszym zabiegu.",
    description: [
      "Masaż limfatyczny to spokojne, powtarzalne ruchy wykonywane zgodnie z kierunkiem przepływu limfy. W przeciwieństwie do masażu klasycznego nie pracuję tu siłą — liczy się rytm i precyzja. Zabieg wspiera naturalne oczyszczanie organizmu i odprowadzanie zalegających płynów.",
      "Efekt czuć od razu: nogi są lżejsze, obrys kostek wyraźniejszy, a buty pod koniec dnia przestają „ciasnąć”. Regularny drenaż to też wsparcie przy pracy stojącej, siedzącej i w podróży.",
      "Zabieg wykonuję w domu klienta na terenie Sosnowca, Dąbrowy Górniczej, Będzina, Czeladzi i Katowic — bez konieczności organizowania dojazdu, co przy zmęczonych nogach ma szczególny sens.",
    ],
    variants: [
      { time: "40 min", price: "130 zł" },
      { time: "60 min", price: "170 zł" },
    ],
    priceFrom: "od 130 zł",
    effects: [
      "Redukcja obrzęków i uczucia ciężkości nóg",
      "Wsparcie krążenia i układu limfatycznego",
      "Uczucie lekkości utrzymujące się przez kilka dni",
      "Wsparcie regeneracji po długich lotach i podróżach",
    ],
    forWhom: [
      "Pracujesz na stojąco albo siedzisz po 8+ godzin",
      "Wieczorem czujesz opuchnięte kostki i łydki",
      "Dużo podróżujesz samolotem lub samochodem",
      "Chcesz wesprzeć organizm przy zmianie stylu życia",
    ],
    note:
      "Przeciwwskazania: zakrzepica, ostre stany zapalne, niewydolność serca lub nerek, gorączka. Jeśli masz wątpliwości zdrowotne, skonsultuj zabieg z lekarzem lub napisz do mnie.",
    faq: [
      {
        q: "Czy masaż limfatyczny boli?",
        a: "Nie — to jeden z najdelikatniejszych zabiegów. Ruchy są powolne i rytmiczne, wiele osób odpręża się przy nim tak mocno, że przysypia.",
      },
      {
        q: "Ile zabiegów potrzeba, żeby zobaczyć efekt?",
        a: "Lekkość nóg czuć zwykle po pierwszym spotkaniu. Przy tendencji do obrzęków najlepiej działa seria 6–10 zabiegów 1–2 razy w tygodniu.",
      },
      {
        q: "Czy drenaż limfatyczny pomaga przy „ciężkich nogach” z pracy siedzącej?",
        a: "Tak — długie siedzenie spowalnia przepływ limfy tak samo jak praca stojąca. Drenaż plus krótkie przerwy na ruch w ciągu dnia dają wyraźną poprawę komfortu.",
      },
    ],
  },
];

/**
 * Usługi faktycznie oferowane. Tego używa cała strona — menu, cennik,
 * lista usług, dane strukturalne, sitemap. Pełna lista `services` trzyma
 * już tylko gotową treść zabiegów chwilowo wyłączonych.
 */
export const activeServices: Service[] = services.filter((s) => s.active);

/** Zwraca wyłącznie aktywną usługę — wyłączone dają 404. */
export function getService(slug: string): Service | undefined {
  return activeServices.find((s) => s.slug === slug);
}
