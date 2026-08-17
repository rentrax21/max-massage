import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { site, whatsappLink } from "@/lib/site";

/**
 * Dolny pasek CTA — widoczny tylko na mobile.
 *
 * Oba przyciski prowadzą do bezpośredniego kontaktu, nie do formularza:
 * większość rezerwacji masażu powstaje na telefonie, a każdy dodatkowy
 * ekran między „chcę to” a „piszę” kosztuje rezerwację. W Polsce WhatsApp
 * bije formularz, więc dostaje mocniejszy przycisk.
 */
export function StickyCta() {
  return (
    <div className="sticky-cta">
      <a href={site.phoneHref} className="btn btn--ghost on-dark" data-cta="tel-pasek">
        <PhoneIcon size={16} /> Zadzwoń
      </a>
      <a
        href={whatsappLink("Dzień dobry, chcę umówić masaż z dojazdem.")}
        target="_blank"
        rel="noopener"
        className="btn btn--gold"
        data-cta="whatsapp-pasek"
      >
        <WhatsAppIcon size={16} /> WhatsApp
      </a>
    </div>
  );
}
