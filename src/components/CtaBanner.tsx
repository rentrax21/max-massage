import Link from "next/link";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import { site, bookingHref, whatsappLink, hasCalendar, guarantee } from "@/lib/site";

/**
 * Zamykający pas CTA.
 *
 * Dopóki w site.ts nie ma podpiętego kalendarza, pierwszym przyciskiem
 * jest WhatsApp, a nie „Umów wizytę”: bez kalendarza ten drugi prowadzi
 * tylko do strony Kontakt, gdzie klient i tak musi dopiero wybrać kanał —
 * czyli kosztuje przeładowanie strony i nie przybliża do terminu.
 * Po wklejeniu linku do Booksy/Calendly kolejność sama się odwraca.
 */
export function CtaBanner({
  title = "Zadbaj o regenerację bez wychodzenia z domu",
  text = "Wybierz termin, otwórz drzwi — resztą zajmę się ja. Stół, olejki i pełne wyposażenie przywożę ze sobą.",
  source = "cta-band",
}: {
  title?: string;
  text?: string;
  /** skąd pochodzi kliknięcie — trafia do atrybutu data-cta */
  source?: string;
}) {
  const calendar = hasCalendar();

  return (
    <section className="cta-band" aria-label="Umów wizytę">
      <div className="container cta-band-inner" data-reveal>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="hero-ctas">
          {calendar ? (
            <Link
              href={bookingHref()}
              className="btn btn--gold btn--lg"
              data-cta={`kalendarz-${source}`}
            >
              Zobacz wolne terminy <ArrowRightIcon size={14} />
            </Link>
          ) : (
            <a
              href={whatsappLink("Dzień dobry, chcę umówić masaż z dojazdem.")}
              target="_blank"
              rel="noopener"
              className="btn btn--gold btn--lg"
              data-cta={`whatsapp-${source}`}
            >
              <WhatsAppIcon size={16} /> Napisz na WhatsApp
            </a>
          )}
          <a
            href={site.phoneHref}
            className="btn btn--ghost on-dark btn--lg"
            data-cta={`tel-${source}`}
          >
            <PhoneIcon size={15} /> {site.phoneDisplay}
          </a>
        </div>
        <p className="cta-pledge">{guarantee.text}</p>
      </div>
    </section>
  );
}
