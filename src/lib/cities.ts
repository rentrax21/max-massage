export type CityFaq = { q: string; a: string };

export type City = {
  /** segment URL: /masaz-<slug> */
  slug: string;
  name: string;
  /** odmiana: „w Sosnowcu” */
  inCity: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  paragraphs: string[];
  districts: string[];
  faq: CityFaq[];
};

export const cities: City[] = [
  {
    slug: "masaz-sosnowiec",
    name: "Sosnowiec",
    inCity: "w Sosnowcu",
    metaTitle: "Masaż z dojazdem Sosnowiec — masaż w domu klienta",
    metaDescription:
      "Mobilny masaż w Sosnowcu z dojazdem do domu: klasyczny, relaksacyjny, sportowy, Kobido, limfatyczny. Własny stół i pełne wyposażenie. Umów wizytę.",
    lead:
      "Sosnowiec to moja baza. Stąd najszybciej dotrę do Ciebie z pełnym wyposażeniem — zwykle jeszcze tego samego tygodnia, a często tego samego dnia.",
    paragraphs: [
      "Dojeżdżam do wszystkich dzielnic Sosnowca: od Pogoni i Środuli, przez Zagórze i Klimontów, po Milowice, Niwkę i centrum. Nie musisz planować przejazdu przez miasto ani szukać miejsca parkingowego — przywożę stół, świeże pokrycie, olejki i muzykę prosto do Twojego mieszkania.",
      "Max Massage wykonuje profesjonalny masaż w domu klienta na terenie Sosnowca oraz sąsiednich miast: Dąbrowy Górniczej, Będzina, Czeladzi i Katowic. Usługa skierowana jest do osób pracujących przy komputerze oraz aktywnych fizycznie — czyli do tych, którym po prostu szkoda czasu na dojazdy.",
      "Najczęściej wybierane zabiegi w Sosnowcu to masaż klasyczny na napięty kark i plecy po pracy zdalnej oraz masaż regeneracyjny po treningach. Wieczorne terminy w tygodniu i soboty są najpopularniejsze — warto rezerwować z 2–3-dniowym wyprzedzeniem.",
    ],
    districts: [
      "Centrum",
      "Pogoń",
      "Środula",
      "Zagórze",
      "Klimontów",
      "Milowice",
      "Niwka",
      "Sielec",
    ],
    faq: [
      {
        q: "Jak szybko dojedziesz na masaż w Sosnowcu?",
        a: "Sosnowiec to moje miasto bazowe, więc terminy znajdują się tu najszybciej — często na następny dzień. Standardowo proponuję 2–3 terminy do wyboru w ciągu tygodnia.",
      },
      {
        q: "Czy dojazd na terenie Sosnowca jest płatny?",
        a: "Nie — dojazd w Sosnowcu i pozostałych miastach obszaru działania (Dąbrowa Górnicza, Będzin, Czeladź, Katowice) jest wliczony w cenę zabiegu.",
      },
    ],
  },
  {
    slug: "masaz-dabrowa-gornicza",
    name: "Dąbrowa Górnicza",
    inCity: "w Dąbrowie Górniczej",
    metaTitle: "Masaż z dojazdem Dąbrowa Górnicza — masaż mobilny w domu",
    metaDescription:
      "Masaż mobilny w Dąbrowie Górniczej: dojazd do domu z pełnym wyposażeniem. Masaż klasyczny, sportowy, relaksacyjny, Kobido i limfatyczny. Zarezerwuj termin.",
    lead:
      "Największe miasto Zagłębia i najdłuższe dojazdy do gabinetów — właśnie dlatego masaż mobilny w Dąbrowie Górniczej ma tyle sensu. Ja pokonuję trasę, Ty zostajesz u siebie.",
    paragraphs: [
      "Obsługuję całą Dąbrowę Górniczą: Centrum, Gołonóg, Mydlice, Reden, a także dalsze dzielnice jak Ząbkowice czy Strzemieszyce. Odległości w mieście bywają duże, więc dla mieszkańców dalszych osiedli dojazd masażysty to realna oszczędność godziny lub więcej.",
      "Max Massage wykonuje profesjonalny masaż w domu klienta na terenie Dąbrowy Górniczej, Sosnowca, Będzina, Czeladzi i Katowic. Z usługi najczęściej korzystają osoby pracujące przy komputerze oraz aktywne fizycznie.",
      "W Dąbrowie Górniczej dużym zainteresowaniem cieszy się masaż regeneracyjny — okolice Pogorii to zagłębie biegaczy, rowerzystów i triatlonistów. Po długim treningu wokół jeziora masaż w domu, bez dodatkowego przejazdu, to najlepsza forma regeneracji.",
    ],
    districts: [
      "Centrum",
      "Gołonóg",
      "Mydlice",
      "Reden",
      "Ząbkowice",
      "Strzemieszyce",
      "Okolice Pogorii",
    ],
    faq: [
      {
        q: "Czy dojeżdżasz do Ząbkowic i Strzemieszyc?",
        a: "Tak, obsługuję całą Dąbrowę Górniczą, łącznie z dalszymi dzielnicami. Dojazd jest wliczony w cenę zabiegu.",
      },
      {
        q: "Trenuję nad Pogorią — kiedy najlepiej umówić masaż regeneracyjny?",
        a: "Najlepiej 24–48 godzin po najcięższym treningu tygodnia. Wielu klientów rezerwuje stały termin, np. niedzielne popołudnie po sobotnim długim wybieganiu.",
      },
    ],
  },
  {
    slug: "masaz-bedzin",
    name: "Będzin",
    inCity: "w Będzinie",
    metaTitle: "Masaż z dojazdem Będzin — profesjonalny masaż w domu",
    metaDescription:
      "Masaż z dojazdem do domu w Będzinie: klasyczny, relaksacyjny, sportowy, Kobido, limfatyczny. Pełne wyposażenie, dojazd w cenie. Umów masaż mobilny.",
    lead:
      "Z Będzina do dobrego gabinetu masażu trzeba zwykle jechać do Katowic albo Sosnowca. Nie musisz — profesjonalny stół, olejki i pełen zabieg przyjadą pod Twoje drzwi.",
    paragraphs: [
      "Dojeżdżam do wszystkich części Będzina: Śródmieścia, Syberki, Ksawery, Warpia, a także Grodźca i Łagiszy. Niezależnie od tego, czy mieszkasz w bloku na Syberce, czy w domu w Grodźcu — potrzebuję tylko kawałka wolnej podłogi i 10 minut na rozłożenie stanowiska.",
      "Max Massage wykonuje profesjonalny masaż w domu klienta na terenie Będzina, Sosnowca, Dąbrowy Górniczej, Czeladzi i Katowic. Usługa skierowana jest do osób pracujących przy komputerze oraz aktywnych fizycznie.",
      "Mieszkańcy Będzina najczęściej wybierają masaż klasyczny karku i pleców oraz masaż relaksacyjny wieczorami. Dobrze sprawdzają się też vouchery podarunkowe — masaż w domu to prezent, którego nikt się nie spodziewa.",
    ],
    districts: ["Śródmieście", "Syberka", "Ksawera", "Warpie", "Grodziec", "Łagisza"],
    faq: [
      {
        q: "Czy w Będzinie obowiązuje dopłata za dojazd?",
        a: "Nie. Będzin należy do podstawowego obszaru działania Max Massage, więc dojazd jest wliczony w cenę każdego zabiegu.",
      },
      {
        q: "Mieszkam w bloku bez windy — czy to problem?",
        a: "Żaden. Stół do masażu przenoszę samodzielnie, wchodzę też na wyższe piętra. Ty nie musisz niczego organizować.",
      },
    ],
  },
  {
    slug: "masaz-czeladz",
    name: "Czeladź",
    inCity: "w Czeladzi",
    metaTitle: "Masaż z dojazdem Czeladź — masaż mobilny w domu klienta",
    metaDescription:
      "Mobilny masaż w Czeladzi z dojazdem: klasyczny, relaksacyjny, regeneracyjny, Kobido, limfatyczny nóg. Własny stół i wyposażenie. Zarezerwuj wizytę.",
    lead:
      "Czeladź to najkrótsze dojazdy w całym obszarze — jestem u Ciebie w kilkanaście minut. Idealne miasto, żeby masaż stał się stałym, cotygodniowym rytuałem, a nie okazjonalnym wypadem.",
    paragraphs: [
      "Obsługuję całą Czeladź: centrum, Piaski i Nowe Miasto, a także okolice. Bliskość sprawia, że łatwo tu o elastyczne godziny — również późnym wieczorem, gdy dzieci już śpią, albo wcześnie rano przed pracą.",
      "Max Massage wykonuje profesjonalny masaż w domu klienta na terenie Czeladzi, Będzina, Sosnowca, Dąbrowy Górniczej i Katowic. Usługa skierowana jest do osób pracujących przy komputerze oraz aktywnych fizycznie.",
      "W Czeladzi popularne są pakiety zabiegów — przy regularnych wizytach co tydzień lub dwa cena pojedynczego masażu spada, a efekty się kumulują: mniej napięć, lepszy sen, więcej energii.",
    ],
    districts: ["Centrum", "Piaski", "Nowe Miasto", "Madera", "Okolice"],
    faq: [
      {
        q: "Jak szybko możesz przyjechać do Czeladzi?",
        a: "Czeladź to najbliżej położone miasto obszaru działania — dojazd zajmuje mi kilkanaście minut, więc łatwo tu o dogodny termin, także „na już” w ciągu 1–2 dni.",
      },
      {
        q: "Czy mogę umówić stały cotygodniowy termin?",
        a: "Tak — stali klienci rezerwują powtarzalny slot, np. wtorek 19:00. To najwygodniejsza forma: nie musisz pamiętać o rezerwacjach, a Twój termin jest zawsze zaklepany.",
      },
    ],
  },
  {
    slug: "masaz-katowice",
    name: "Katowice",
    inCity: "w Katowicach",
    metaTitle: "Masaż z dojazdem Katowice — masaż w domu i po pracy",
    metaDescription:
      "Masaż mobilny Katowice: dojazd do domu z pełnym wyposażeniem. Masaż klasyczny, relaksacyjny, sportowy, Kobido, limfatyczny. Idealny po pracy przy komputerze.",
    lead:
      "Praca w katowickim biurowcu albo na home office, korki na Chorzowskiej, wieczne „nie mam kiedy” — Katowice to miasto, w którym masaż z dojazdem oszczędza najwięcej czasu i nerwów.",
    paragraphs: [
      "Dojeżdżam do wszystkich dzielnic Katowic: Śródmieścia, Koszutki, Bogucic, osiedli Tysiąclecia i Paderewskiego, Ligoty, Brynowa, Piotrowic czy Dębu. Po całym dniu w biurze w strefie Global Office nie musisz już nigdzie jechać — masaż czeka na Ciebie w domu.",
      "Max Massage wykonuje profesjonalny masaż w domu klienta na terenie Katowic, Sosnowca, Dąbrowy Górniczej, Będzina i Czeladzi. Usługa skierowana jest do osób pracujących przy komputerze oraz aktywnych fizycznie.",
      "Katowiccy klienci najczęściej wybierają masaż klasyczny karku i barków — efekt ośmiu godzin przy biurku — oraz masaż Kobido, który zyskał tu grono stałych entuzjastek. Popularne są też wizyty par: dwa masaże jeden po drugim tego samego wieczoru.",
    ],
    districts: [
      "Śródmieście",
      "Koszutka",
      "Bogucice",
      "Os. Tysiąclecia",
      "Os. Paderewskiego",
      "Ligota",
      "Brynów",
      "Piotrowice",
      "Dąb",
    ],
    faq: [
      {
        q: "Czy działasz w Katowicach?",
        a: "Tak — Katowice należą do stałego obszaru działania Max Massage. Dojeżdżam do wszystkich dzielnic, a dojazd jest wliczony w cenę zabiegu.",
      },
      {
        q: "Pracuję do 18:00 — czy zdążymy z masażem tego samego dnia?",
        a: "Tak, wieczorne terminy w Katowicach to standard. Ostatnie zabiegi zaczynam około 19:30–20:00, więc po pracy spokojnie zdążysz jeszcze odpocząć na stole.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
