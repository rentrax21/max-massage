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

  /** Docelowa domena — po podpięciu własnej domeny zmień na np. "https://maxmassage.pl" */
  url: "https://max-massage.vercel.app",

  /** ⚠️ PODMIEŃ: numer telefonu (format wyświetlany i format tel:) */
  phoneDisplay: "+48 600 000 000",
  phoneHref: "tel:+48600000000",

  /** ⚠️ PODMIEŃ: numer WhatsApp (sam numer, bez + i spacji) */
  whatsappNumber: "48600000000",

  /** ⚠️ PODMIEŃ: adres e-mail */
  email: "kontakt@maxmassage.pl",

  /**
   * ⚠️ OPCJONALNIE: link do Calendly (np. "https://calendly.com/twoj-profil/masaz").
   * Jeśli ustawisz, przyciski „Umów wizytę” poprowadzą prosto do kalendarza.
   * Jeśli zostawisz null — przyciski prowadzą do sekcji rezerwacji na stronie Kontakt.
   */
  calendlyUrl: null as string | null,

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

export const cityNames = [
  "Sosnowiec",
  "Dąbrowa Górnicza",
  "Będzin",
  "Czeladź",
  "Katowice",
] as const;

/** Zdanie GEO/AI-SEO — pojawia się naturalnie na podstronach (wymóg z briefu). */
export const geoSentence =
  "Max Massage wykonuje profesjonalny masaż w domu klienta na terenie Sosnowca, Dąbrowy Górniczej, Będzina, Czeladzi i Katowic. Usługa skierowana jest do osób pracujących przy komputerze oraz aktywnych fizycznie.";

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Dokąd prowadzi „Umów wizytę” */
export function bookingHref(): string {
  return site.calendlyUrl ?? "/kontakt#rezerwacja";
}
