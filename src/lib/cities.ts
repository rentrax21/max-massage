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

/**
 * ─────────────────────────────────────────────────────────────
 *  STRONY MIAST
 *
 *  Zasada, której trzeba tu pilnować: każda strona musi dać się
 *  przeczytać jako tekst o TYM mieście, a nie jako szablon
 *  z podmienioną nazwą. Google deprecjonuje strony lokalizacyjne
 *  różniące się wyłącznie nazwą miejscowości, a czytelnik wyczuwa
 *  to jeszcze szybciej niż wyszukiwarka.
 *
 *  Dlatego każde miasto ma:
 *   · własny kąt (co konkretnie tutaj czyni dojazd sensownym),
 *   · realia geograficzne i komunikacyjne, których nie da się
 *     przekleić do sąsiedniego miasta,
 *   · własne pytania w FAQ.
 *
 *  Czego tu nie ma i nie powinno być: zdań o popularności usługi
 *  w danym mieście, dopóki nie ma na to danych. Fikcyjna statystyka
 *  kosztuje wiarygodność dokładnie tyle samo, co fikcyjna opinia.
 * ─────────────────────────────────────────────────────────────
 */
export const cities: City[] = [
  {
    slug: "masaz-sosnowiec",
    name: "Sosnowiec",
    inCity: "w Sosnowcu",
    metaTitle: "Masaż z dojazdem Sosnowiec — masaż w domu klienta",
    metaDescription:
      "Masaż z dojazdem do domu w Sosnowcu: klasyczny, relaksacyjny, regeneracyjny, Kobido, limfatyczny. Stół i pełne wyposażenie przywożę ze sobą, dojazd w cenie.",
    lead:
      "Sosnowiec to moja baza — stąd wyjeżdżam na wszystkie wizyty. Dla Ciebie znaczy to tyle, że tutaj mam najkrótszy dojazd i najwięcej swobody w układaniu terminów.",
    paragraphs: [
      "Sosnowiec jest miastem rozciągniętym i podzielonym — torami, Czarną Przemszą i pozostałościami po przemyśle. Z Kazimierza czy Maczek do gabinetu w centrum jedzie się realnie dłużej niż wynikałoby z odległości na mapie, a wieczorem dochodzi jeszcze szukanie miejsca do zaparkowania. To dokładnie ten rodzaj tarcia, przez który ludzie odkładają masaż tygodniami.",
      "Ja tego problemu nie mam, bo mieszkam tutaj. Dojeżdżam do wszystkich dzielnic: Pogoni, Środuli, Zagórza, Klimontowa, Sielca, Milowic, Niwki, a także do Kazimierza Górniczego i Maczek. Potrzebuję około dwóch na trzy metry wolnej podłogi — resztę, ze stołem i świeżym pokryciem włącznie, przywożę ze sobą.",
      "Praktyczna uwaga o sosnowieckich blokach: wysokie piętro bez windy nie jest przeszkodą, stół noszę sam. Nie potrzebuję też miejsca w garażu ani karty do bramy — wystarczy, że napiszesz, pod który domofon zadzwonić.",
      "Najczęściej pracuję tu z dwoma rodzajami napięcia: karkiem i barkami po pracy zdalnej oraz nogami po treningu. Jeśli nie masz pewności, który zabieg wybrać, napisz krótko, co dokładnie boli — dobiorę technikę przy rezerwacji, a nie na miejscu.",
    ],
    districts: [
      "Centrum",
      "Pogoń",
      "Środula",
      "Zagórze",
      "Klimontów",
      "Sielec",
      "Milowice",
      "Niwka",
      "Kazimierz Górniczy",
      "Maczki",
    ],
    faq: [
      {
        q: "Jak szybko możesz przyjechać w Sosnowcu?",
        a: "Sosnowiec to moje miasto bazowe, więc terminy znajdują się tu najszybciej — przy wolnym oknie w grafiku nawet tego samego dnia. Standardowo proponuję dwa lub trzy terminy do wyboru w ciągu najbliższego tygodnia.",
      },
      {
        q: "Czy dojazd na terenie Sosnowca jest płatny?",
        a: "Nie. Dojazd w Sosnowcu i w pozostałych miastach obszaru działania jest wliczony w cenę zabiegu — kwota z cennika to kwota, którą płacisz.",
      },
      {
        q: "Mieszkam w Maczkach, to daleko od centrum. Dojedziesz?",
        a: "Tak, Maczki, Kazimierz Górniczy i Ostrowy Górnicze obsługuję na tych samych zasadach co centrum, bez dopłaty. Przy dalszych dzielnicach proszę tylko o wcześniejsze umówienie, bo trudniej mi tam wcisnąć wizytę „na już”.",
      },
    ],
  },
  {
    slug: "masaz-dabrowa-gornicza",
    name: "Dąbrowa Górnicza",
    inCity: "w Dąbrowie Górniczej",
    metaTitle: "Masaż z dojazdem Dąbrowa Górnicza — masaż mobilny w domu",
    metaDescription:
      "Masaż mobilny w Dąbrowie Górniczej z dojazdem do domu: klasyczny, regeneracyjny, relaksacyjny, Kobido, limfatyczny. Pełne wyposażenie, dojazd wliczony w cenę.",
    lead:
      "Dąbrowa Górnicza jest jednym z największych powierzchniowo miast w Polsce. To brzmi jak ciekawostka, dopóki nie mieszkasz w Ząbkowicach i nie masz umówionego masażu w centrum.",
    paragraphs: [
      "Prawie dwieście kilometrów kwadratowych i dzielnice rozrzucone tak, że ze Strzemieszyc do Gołonogu jedzie się jak między osobnymi miastami. Przy takiej geografii wizyta w gabinecie to nie sześćdziesiąt minut, tylko realnie dwie godziny wyjęte z wieczoru — z czego połowa upływa w samochodzie. Dojazd masażysty zabiera ten koszt w całości.",
      "Obsługuję całą Dąbrowę: Centrum, Gołonóg, Mydlice, Reden, Łęknice, a także dalsze Ząbkowice i Strzemieszyce. W dzielnicach z zabudową jednorodzinną rozkładam stanowisko równie łatwo jak w bloku — potrzebuję kawałka podłogi i dziesięciu minut.",
      "Osobny wątek to Pogoria. Cztery zbiorniki, ścieżki wokół nich i ruch biegowo-rowerowy, jakiego nie ma nigdzie indziej w Zagłębiu. Jeśli trenujesz w tym rejonie, masaż regeneracyjny w domu ma tę przewagę, że możesz go umówić na dobę po najcięższej jednostce, bez planowania kolejnego wyjazdu — a właśnie dwadzieścia cztery do czterdziestu ośmiu godzin po dużym wysiłku jest na to najlepszy moment.",
      "Przy dalszych dzielnicach jedna prośba: rezerwuj z kilkudniowym wyprzedzeniem. Nie dlatego, że brakuje terminów, tylko dlatego, że dojazd na drugi koniec miasta muszę wpasować w grafik razem z resztą wizyt.",
    ],
    districts: [
      "Centrum",
      "Gołonóg",
      "Mydlice",
      "Reden",
      "Łęknice",
      "Ząbkowice",
      "Strzemieszyce",
      "Okolice Pogorii",
    ],
    faq: [
      {
        q: "Czy dojeżdżasz do Ząbkowic i Strzemieszyc?",
        a: "Tak, obsługuję całą Dąbrowę Górniczą razem z dalszymi dzielnicami i nie doliczam za to ani złotówki. Proszę tylko o umówienie z kilkudniowym wyprzedzeniem, żebym mógł zaplanować trasę.",
      },
      {
        q: "Trenuję nad Pogorią — kiedy najlepiej umówić masaż regeneracyjny?",
        a: "Najlepiej dobę do dwóch dni po najcięższym treningu tygodnia, bo wtedy praca na mięśniach daje największy efekt. Przy regularnych startach warto ustawić stały termin, na przykład niedzielne popołudnie po sobotnim długim wybieganiu.",
      },
      {
        q: "Mieszkam w domu z ogrodem — czy można zrobić masaż na tarasie?",
        a: "Jeśli jest zacieniony, osłonięty od wiatru i ma równe podłoże, to tak — bywa to najprzyjemniejszy wariant lata. Przy niższych temperaturach odradzam: rozgrzane mięśnie szybko wychładzają się na powietrzu i efekt zabiegu spada.",
      },
    ],
  },
  {
    slug: "masaz-bedzin",
    name: "Będzin",
    inCity: "w Będzinie",
    metaTitle: "Masaż z dojazdem Będzin — profesjonalny masaż w domu",
    metaDescription:
      "Masaż z dojazdem do domu w Będzinie: klasyczny, relaksacyjny, regeneracyjny, Kobido, limfatyczny nóg. Dojazd wliczony w cenę, terminy wieczorne i weekendowe.",
    lead:
      "Będzin jest wystarczająco mały, żeby po dobry masaż jeździć do Sosnowca albo Katowic, i wystarczająco duży, żeby to była realna strata czasu co tydzień.",
    paragraphs: [
      "Wybór gabinetów na miejscu jest tu skromny, więc mieszkańcy Będzina domyślnie zakładają, że trzeba gdzieś pojechać. Dojazd masażysty odwraca ten nawyk: zabieg tej samej klasy odbywa się w Twoim salonie, a zaoszczędzony czas to nie kwadrans, tylko cały wieczór, który normalnie rozpada się na dojazd, zabieg i powrót.",
      "Dojeżdżam do wszystkich części miasta: Śródmieścia pod Wzgórzem Zamkowym, Syberki, Ksawery, Warpia i Gzichowa, a także do Grodźca i Łagiszy, które leżą wyraźnie na uboczu i mają najgorsze połączenie z centrum. Właśnie tam mobilny masaż oszczędza najwięcej.",
      "Zabudowa w Będzinie jest mieszana — wieżowce na Syberce i domy w Grodźcu wymagają dokładnie tego samego: około dwóch na trzy metry wolnej podłogi. Stół, pokrycie, ręczniki, olejki i muzykę przywożę ze sobą, a po zabiegu wszystko po sobie składam.",
      "Jeśli szukasz prezentu, masaż w domu sprawdza się tu lepiej niż voucher do gabinetu, właśnie dlatego, że obdarowany nie musi nigdzie jechać ani niczego organizować. Voucher wystawiam na wybrany zabieg albo na kwotę.",
    ],
    districts: [
      "Śródmieście",
      "Syberka",
      "Ksawera",
      "Warpie",
      "Gzichów",
      "Grodziec",
      "Łagisza",
    ],
    faq: [
      {
        q: "Czy w Będzinie obowiązuje dopłata za dojazd?",
        a: "Nie. Będzin należy do podstawowego obszaru działania, więc dojazd jest wliczony w cenę każdego zabiegu — również do Grodźca i Łagiszy.",
      },
      {
        q: "Mieszkam w bloku bez windy na czwartym piętrze. To problem?",
        a: "Żaden. Stół przenoszę samodzielnie i wchodzę na wyższe piętra bez marudzenia. Ty nie musisz nic organizować ani schodzić po mnie na dół — wystarczy numer domofonu.",
      },
      {
        q: "Czy mogę zamówić masaż jako prezent dla kogoś z Będzina?",
        a: "Tak. Wystawiam voucher na konkretny zabieg lub na kwotę, w wersji do druku albo do wysłania mailem. Termin ustala już sama osoba obdarowana, bezpośrednio ze mną.",
      },
    ],
  },
  {
    slug: "masaz-czeladz",
    name: "Czeladź",
    inCity: "w Czeladzi",
    metaTitle: "Masaż z dojazdem Czeladź — masaż mobilny w domu klienta",
    metaDescription:
      "Mobilny masaż w Czeladzi z dojazdem do domu: klasyczny, relaksacyjny, regeneracyjny, Kobido, limfatyczny nóg. Krótki dojazd, elastyczne godziny, dojazd w cenie.",
    lead:
      "Czeladź to najkrótszy dojazd w całym moim obszarze. Brzmi jak szczegół logistyczny, ale przekłada się na coś konkretnego dla Ciebie: łatwiej tu o nietypową godzinę.",
    paragraphs: [
      "Kilkanaście minut od mojej bazy oznacza, że mogę tu przyjechać na siódmą rano przed Twoją pracą albo na wpół do dziewiątej wieczorem, kiedy dzieci już śpią. W miastach położonych dalej takie skrajne godziny są trudniejsze do wpasowania w grafik; w Czeladzi to normalny termin.",
      "Obsługuję Śródmieście ze starym rynkiem, Piaski, Nowe Miasto i Maderę. Zabudowa Piasków, z dawnej kolonii robotniczej, bywa ciasna, ale nawet w niedużym mieszkaniu znajduje się zwykle dwa na trzy metry wolnej podłogi w salonie albo sypialni — tyle mi wystarczy.",
      "Krótki dojazd ma jeszcze jeden skutek: to jedyne miasto, w którym realnie da się utrzymać stały, cotygodniowy termin. Regularność zmienia charakter pracy z gaszenia pożaru na utrzymanie — mniej napięcia w karku, spokojniejszy sen i brak tych momentów, w których nagle nie da się obrócić głowy.",
      "Jeśli chcesz taki stały slot, powiedz o tym przy pierwszej wizycie. Rezerwuję wtedy tę samą godzinę z tygodnia na tydzień i nie musisz o niczym pamiętać ani pisać za każdym razem od nowa.",
    ],
    districts: ["Śródmieście", "Stare Miasto", "Piaski", "Nowe Miasto", "Madera"],
    faq: [
      {
        q: "Jak szybko możesz przyjechać do Czeladzi?",
        a: "Dojazd zajmuje mi kilkanaście minut, więc o termin jest tu najłatwiej w całym obszarze — często udaje się znaleźć okno w ciągu jednego lub dwóch dni.",
      },
      {
        q: "Czy mogę umówić stały cotygodniowy termin?",
        a: "Tak i w Czeladzi jest to najprostsze ze wszystkich miast. Rezerwuję powtarzalny slot, na przykład wtorek o dziewiętnastej, i trzymam go dla Ciebie — nie musisz pamiętać o rezerwacji.",
      },
      {
        q: "Robisz masaże wcześnie rano, przed pracą?",
        a: "W Czeladzi tak, od siódmej. Bliskość sprawia, że poranny termin nie rozwala mi reszty dnia. W pozostałych miastach poranki ustalam indywidualnie.",
      },
    ],
  },
  {
    slug: "masaz-katowice",
    name: "Katowice",
    inCity: "w Katowicach",
    metaTitle: "Masaż z dojazdem Katowice — masaż w domu po pracy",
    metaDescription:
      "Masaż mobilny Katowice: dojazd do domu z pełnym wyposażeniem. Klasyczny, relaksacyjny, regeneracyjny, Kobido, limfatyczny. Terminy wieczorne po pracy w biurze.",
    lead:
      "W Katowicach masaż z dojazdem oszczędza najwięcej, bo tutaj czas kosztuje najwięcej. Godzina w gabinecie po pracy oznacza w praktyce wyjęcie z wieczoru trzech.",
    paragraphs: [
      "Ktoś, kto wychodzi o osiemnastej z biurowca w Śródmieściu, ma przed sobą Chorzowską albo Roździeńskiego w godzinach szczytu, potem gabinet, potem drogę do domu. Zabieg trwa godzinę, cała operacja — znacznie dłużej. Dlatego katowiccy klienci najczęściej wybierają terminy między dziewiętnastą a dwudziestą: wracasz prosto do domu, a ja przyjeżdżam po Tobie.",
      "Dojeżdżam do wszystkich dzielnic: Śródmieścia, Koszutki, Bogucic, osiedli Tysiąclecia i Paderewskiego, Ligoty, Brynowa, Piotrowic, Dębu i Załęża. W wieżowcach na Tysiącleciu i w kamienicach w Śródmieściu warunki bywają różne, ale wymagania mam wszędzie te same: dwa na trzy metry wolnej podłogi i dziesięć minut na rozłożenie stanowiska.",
      "Praca przy komputerze zostawia tu bardzo powtarzalny ślad — sztywny kark, barki podciągnięte do uszu i ból między łopatkami, który nasila się po południu. To najczęstszy powód, dla którego umawiają się osoby z katowickich biur, i najczęstszy zakres pracy podczas pierwszej wizyty.",
      "Katowice to też jedyne miasto w moim obszarze, gdzie regularnie zdarzają się wizyty dla dwóch osób pod jednym adresem, jedna po drugiej tego samego wieczoru. Jeśli chcesz taki wariant, powiedz od razu przy rezerwacji, bo rezerwuję wtedy podwójne okno w grafiku.",
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
      "Załęże",
    ],
    faq: [
      {
        q: "Pracuję do osiemnastej — czy zdążymy tego samego dnia?",
        a: "Tak, wieczorne terminy w Katowicach to standard. Ostatnie zabiegi zaczynam około dziewiętnastej trzydzieści, więc po wyjściu z biura spokojnie zdążysz dojechać do domu i jeszcze odpocząć na stole.",
      },
      {
        q: "Czy dojazd do Katowic jest droższy niż do Sosnowca?",
        a: "Nie. Katowice należą do podstawowego obszaru działania i cena jest identyczna jak w Zagłębiu — dojazd we wszystkich pięciu miastach jest wliczony w kwotę z cennika.",
      },
      {
        q: "Czy możesz przyjechać do dwóch osób pod jednym adresem?",
        a: "Tak, wykonuję wtedy dwa zabiegi jeden po drugim podczas jednej wizyty. Zaznacz to przy rezerwacji, bo muszę zarezerwować w grafiku dłuższe okno.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
