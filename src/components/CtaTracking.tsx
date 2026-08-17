"use client";

import { useEffect } from "react";

/**
 * Liczenie kliknięć w kanały kontaktu.
 *
 * Każdy przycisk kontaktowy na stronie ma atrybut `data-cta` (np.
 * "whatsapp-cennik", "tel-masaz-katowice"). Ten komponent nasłuchuje
 * kliknięć i przekazuje je do analityki, jeśli jakaś jest wpięta.
 *
 * Bez analityki nie da się odpowiedzieć na najważniejsze pytanie tej
 * strony: która podstrona faktycznie przyprowadza klientów. Formularz
 * niczego nie zapisuje, więc kliknięcie w telefon lub WhatsApp to
 * jedyny mierzalny sygnał konwersji, jaki tu w ogóle istnieje.
 *
 * Obsługiwane cele — wykrywane automatycznie, nic nie trzeba zmieniać
 * w kodzie po wpięciu któregoś z nich:
 *   · Google Analytics 4      (window.gtag)
 *   · Google Tag Manager      (window.dataLayer)
 *   · Plausible / Umami       (window.plausible / window.umami)
 *
 * Jeśli nie ma żadnego, komponent nie robi nic — żadnych błędów
 * w konsoli i żadnych zapytań sieciowych.
 */

type Gtag = (command: string, event: string, params?: Record<string, unknown>) => void;
type Plausible = (event: string, opts?: { props?: Record<string, unknown> }) => void;
type Umami = { track: (event: string, data?: Record<string, unknown>) => void };

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: Array<Record<string, unknown>>;
    plausible?: Plausible;
    umami?: Umami;
  }
}

export function CtaTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const el = target?.closest<HTMLElement>("[data-cta]");
      if (!el) return;

      const cta = el.dataset.cta;
      if (!cta) return;

      // "whatsapp-cennik" → kanał "whatsapp", miejsce "cennik"
      const [channel, ...rest] = cta.split("-");
      const payload = { channel, placement: rest.join("-") || "brak", cta, path: location.pathname };

      window.gtag?.("event", "kontakt_klik", payload);
      window.dataLayer?.push({ event: "kontakt_klik", ...payload });
      window.plausible?.("Kontakt", { props: payload });
      window.umami?.track("kontakt", payload);
    }

    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
