# Max Massage — strona www

Strona mobilnego salonu masażu (Next.js). Masaż z dojazdem: Sosnowiec, Dąbrowa Górnicza,
Będzin, Czeladź, Katowice.

## ✅ Co podmienić przed startem (checklista)

Wszystkie dane kontaktowe są w **jednym pliku**: [`src/lib/site.ts`](src/lib/site.ts)

1. **Telefon** — `phoneDisplay` i `phoneHref`
2. **WhatsApp** — `whatsappNumber` (sam numer, np. `48512345678`)
3. **E-mail** — `email`
4. **Calendly** (opcjonalnie) — wklej link w `calendlyUrl`, a wszystkie przyciski „Umów wizytę"
   poprowadzą prosto do Twojego kalendarza. Bez linku prowadzą do sekcji rezerwacji w Kontakcie.
5. **Wizytówka Google** — `googleReviewsUrl` (link „Zobacz opinie w Google")
6. **Domena** — po podpięciu własnej domeny zmień `url` (ważne dla SEO / sitemap)

Poza tym:

7. **Cennik** — przykładowe kwoty w [`src/lib/pricing.ts`](src/lib/pricing.ts) oraz ceny przy
   usługach w [`src/lib/services.ts`](src/lib/services.ts) (pola `variants` i `priceFrom`)
8. **Opinie** — [`src/lib/reviews.ts`](src/lib/reviews.ts) zawiera **przykładowe** opinie.
   Podmień je na prawdziwe z Google zanim wystartujesz z reklamą.
9. **Zdjęcie na stronie „O mnie"** — wrzuć plik do `public/` i podmień oznaczony blok
   w [`app/o-mnie/page.tsx`](app/o-mnie/page.tsx). Warto też dodać swoje imię i prawdziwe
   certyfikaty.
10. **Godziny pracy** — `hours` w `src/lib/site.ts` + wzmianki w stopce.

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Strona działa na http://localhost:3210

## Struktura

- `app/` — strony (App Router): główna, o-mnie, uslugi/[slug], cennik, masaz-<miasto>, blog, kontakt
- `src/lib/` — **cała treść strony** (usługi, miasta, cennik, opinie, FAQ, blog) jako dane
- `src/components/` — nagłówek, stopka, mapa dojazdu, formularz itd.
- `app/globals.css` — design system (grafit `#1E293B`, złoto `#C8A96A`, Montserrat)

## SEO — co już jest

- Osobne podstrony usług (`/uslugi/masaz-klasyczny` …) i miast (`/masaz-sosnowiec` …)
- Meta title/description dla każdej podstrony, canonical, sitemap.xml, robots.txt
- Dane strukturalne schema.org: LocalBusiness, Service, FAQPage, BlogPosting
- Zdania GEO/AI-SEO wplecione naturalnie w treści podstron
- Blog z 3 startowymi artykułami

Po starcie warto: założyć Google Business Profile, podpiąć Search Console i dodać sitemap.
