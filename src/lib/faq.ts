export type Faq = { q: string; a: string };

/** Główne FAQ — strona główna + kontakt. Odpowiada też na pytania AI/GEO z briefu. */
export const mainFaq: Faq[] = [
  {
    q: "Czy przywozisz stół do masażu?",
    a: "Tak — przywożę profesjonalny, stabilny stół do masażu, świeże pokrycie jednorazowe, ręczniki, olejki i muzykę. Ty nie przygotowujesz niczego poza odrobiną wolnej przestrzeni.",
  },
  {
    q: "Ile miejsca potrzebuję w mieszkaniu?",
    a: "Wystarczy około 2 × 3 metry wolnej podłogi — tyle, żeby rozłożyć stół i swobodnie się przy nim poruszać. W praktyce sprawdza się salon, sypialnia, a nawet większy przedpokój.",
  },
  {
    q: "Jak przygotować się do masażu w domu?",
    a: "Weź ciepły prysznic, przewietrz pokój i przygotuj chwilę spokoju — to wszystko. Nie jedz obfitego posiłku bezpośrednio przed zabiegiem. Całą resztą, łącznie z rozłożeniem i złożeniem stanowiska, zajmuję się ja.",
  },
  {
    q: "Czy działasz w Katowicach?",
    a: "Tak. Wykonuję masaż z dojazdem na terenie Sosnowca, Dąbrowy Górniczej, Będzina, Czeladzi i Katowic. Dojazd we wszystkich tych miastach jest wliczony w cenę zabiegu.",
  },
  {
    q: "Jak mogę zapłacić?",
    a: "Gotówką, BLIK-iem lub przelewem na telefon — bezpośrednio po zabiegu. Przy pakietach możliwa jest płatność z góry przelewem.",
  },
  {
    q: "Jak wygląda mobilny masaż krok po kroku?",
    a: "Umawiamy termin telefonicznie lub przez WhatsApp. Przyjeżdżam kilka minut wcześniej, rozkładam stół i przygotowuję stanowisko (ok. 10 minut). Wykonuję zabieg, a po nim sprzątam wszystko po sobie. Ty zostajesz w domu i po prostu odpoczywasz dalej.",
  },
];
