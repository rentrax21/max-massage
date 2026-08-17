# Max Massage — strona www

Strona mobilnego salonu masażu (Next.js). Masaż z dojazdem: Sosnowiec, Dąbrowa Górnicza,
Będzin, Czeladź, Katowice.

## ⛔ Cztery rzeczy blokujące start

Reszta strony jest gotowa. Bez tych czterech punktów reklama spali budżet:

1. **Numer telefonu i WhatsApp to atrapy** (`+48 600 000 000` w `src/lib/site.ts`).
   Cała strona prowadzi do bezpośredniego kontaktu — dopóki numer jest fałszywy,
   żadne CTA nie działa.
2. **Brak kalendarza rezerwacji** — pole `bookingUrl` w `src/lib/site.ts` jest puste,
   więc każde „Umów wizytę” prowadzi tylko do formularza. Wklej link do Booksy albo
   Calendly: to pojedyncza największa dźwignia konwersji, a kod jest już gotowy
   (przyciski same przełączą się na „Zobacz wolne terminy”).
3. **Wizytówka Google nie jest podpięta** (`googleReviewsUrl`). Dla usługi z dojazdem
   Mapy Google są głównym źródłem klientów — zwykle więcej niż sama strona.
4. **Opinie są zmyślone** — `src/lib/reviews.ts`. Zostawione świadomie na Twoją prośbę,
   ale ryzyko zostaje otwarte: od 2023 r. (dyrektywa Omnibus) przedsiębiorca pokazujący
   opinie musi informować, jak weryfikuje ich autentyczność, a UOKiK nakłada za to realne
   kary. Podmień na prawdziwe najszybciej, jak się da.

## ⚠️ Zanim ruszysz: uzupełnij kwalifikacje

W `src/lib/site.ts` jest obiekt **`credentials`** — dyplom, staż, kursy, NIP, ubezpieczenie OC.
Każde pole zostawione jako `null` po prostu się nie wyświetla, więc **nic nie jest zmyślone**,
ale też nic nie przekonuje. To najważniejszy blok na stronie: klient ma wpuścić do mieszkania
osobę, o której nie może zweryfikować ani jednego faktu.

Sprawdź też **`guarantee`** i **`cancellation`** w tym samym pliku — to zobowiązania biznesowe,
nie tylko copy. Zmień warunki na takie, które faktycznie chcesz honorować, ale nie usuwaj ich
bez zamiennika.

## ✅ Co podmienić przed startem (checklista)

Wszystkie dane kontaktowe są w **jednym pliku**: [`src/lib/site.ts`](src/lib/site.ts)

1. **Telefon** — `phoneDisplay` i `phoneHref`
2. **WhatsApp** — `whatsappNumber` (sam numer, np. `48512345678`)
3. **E-mail** — `email`
4. **Kalendarz rezerwacji** — wklej link Booksy lub Calendly w `bookingUrl`. Wszystkie przyciski
   „Umów wizytę" zmienią się wtedy w „Zobacz wolne terminy" i poprowadzą prosto do kalendarza.
   Bez linku strona stawia na WhatsApp jako główny kanał.
5. **Wizytówka Google** — `googleReviewsUrl` (link „Zobacz opinie w Google")
6. **Domena** — po podpięciu własnej domeny zmień `url` (ważne dla SEO / sitemap)
7. **Kwalifikacje** — obiekt `credentials`: dyplom, rok rozpoczęcia praktyki, kursy, NIP, OC.
   Puste pola się nie renderują.
8. **Gwarancja i odwołania** — `guarantee` i `cancellation`. Potwierdź, że akceptujesz te warunki.

Poza tym:

9. **Cennik** — przykładowe kwoty w [`src/lib/pricing.ts`](src/lib/pricing.ts) oraz ceny przy
   usługach w [`src/lib/services.ts`](src/lib/services.ts) (pola `variants` i `priceFrom`).
   Warto sprawdzić je względem lokalnej konkurencji — obecne stawki są w górnej półce rynku.
10. **Opinie** — [`src/lib/reviews.ts`](src/lib/reviews.ts) zawiera **zmyślone** opinie
    (zob. punkt 4 na górze). Podmień na prawdziwe najszybciej, jak się da.
11. **Imię** — `credentials.firstName`, domyślnie **Maks**. Używane na stronie głównej i „O mnie".
12. **Godziny pracy** — `hours` w `src/lib/site.ts` + wzmianki w stopce.
13. **Zasady pracy** — `workRules` w `src/lib/site.ts`. Przeczytaj i dopasuj do tego, jak
    faktycznie pracujesz. To sekcja, która zdejmuje największą niewypowiedzianą obiekcję
    przy usłudze wykonywanej w mieszkaniu klienta, więc nie usuwaj jej bez zamiennika.

## Analityka

Każdy przycisk kontaktowy ma atrybut `data-cta` (np. `whatsapp-cennik`, `tel-masaz-katowice`),
a [`CtaTracking`](src/components/CtaTracking.tsx) nasłuchuje kliknięć i przekazuje je do
Google Analytics, GTM, Plausible albo Umami — jeśli którekolwiek jest wpięte. Bez nich nie robi
nic. Formularz nie zapisuje niczego na serwerze, więc kliknięcie w telefon lub WhatsApp to
jedyny mierzalny sygnał konwersji, jaki na tej stronie istnieje.

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Strona działa na http://localhost:3210

## Struktura

- `app/` — strony (App Router): główna, o-mnie, uslugi/[slug], cennik, galeria,
  masaz-<miasto>, blog, kontakt
- `src/lib/` — **cała treść strony** (usługi, miasta, cennik, opinie, FAQ, blog) jako dane
- `src/components/` — nagłówek, stopka, mapa dojazdu, formularz, `Photo` itd.
- `app/globals.css` — design system (ciepły węgiel `#1F1A16`, złoto `#C8A96A`, Montserrat)

## Zdjęcia

Fotografia jest tu nośna, nie dekoracyjna — strona jest zbudowana wokół zdjęć
z prawdziwych wizyt. Dlatego nigdy nie podmieniaj ich na stock.

- **Pliki gotowe do użycia:** `public/foto/` (JPEG max 2000 px, ~150–400 kB).
  `next/image` serwuje je jako AVIF/WebP — hero na telefonie waży ok. 25 kB.
- **Katalog i teksty alternatywne:** [`src/lib/photos.ts`](src/lib/photos.ts).
  Tu też ustawiasz, które zdjęcie trafia na którą usługę (`servicePhoto`),
  do którego miasta (`cityPhoto`) i w jakiej kolejności idą w galerii.
- **Wymiary i blur-placeholdery:** `src/lib/photos.generated.json` — plik generowany,
  nie edytuj go ręcznie.
- **Dodanie nowych zdjęć:** wrzuć oryginały do paczki w katalogu głównym, dopisz je
  do tablicy `MAP` w [`scripts/process-photos.js`](scripts/process-photos.js), uruchom:

  ```bash
  node scripts/process-photos.js
  ```

  a następnie dopisz tekst alternatywny w `ALT` w `src/lib/photos.ts`.

Oryginały z sesji (paczki `wetransfer_*`) są w `.gitignore` — do repo trafiają
wyłącznie przetworzone pliki.

## Zawsze używaj komponentu `Photo`

`<Photo>` ([`src/components/Photo.tsx`](src/components/Photo.tsx)) pilnuje proporcji
kadru, blur-placeholdera i `sizes`. Zwykły `<img>` albo `next/image` bez `sizes`
zepsuje wagę strony i wywoła przeskok layoutu (CLS).

## SEO — co już jest

- Osobne podstrony usług (`/uslugi/masaz-klasyczny` …) i miast (`/masaz-sosnowiec` …)
- Meta title/description dla każdej podstrony, canonical, sitemap.xml, robots.txt
- Dane strukturalne schema.org: LocalBusiness, Service, FAQPage, BlogPosting
- Zdania GEO/AI-SEO wplecione naturalnie w treści podstron
- Blog z 3 startowymi artykułami

Po starcie warto: założyć Google Business Profile, podpiąć Search Console i dodać sitemap.
