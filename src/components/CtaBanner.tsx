import Link from "next/link";
import { PhoneIcon } from "./Icons";
import { site, bookingHref } from "@/lib/site";

export function CtaBanner({
  title = "Zadbaj o regenerację bez wychodzenia z domu",
  text = "Wybierz termin, otwórz drzwi — resztą zajmę się ja. Stół, olejki i pełne wyposażenie przywożę ze sobą.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section" aria-label="Umów wizytę">
      <div className="container">
        <div className="cta-banner" data-reveal>
          <span className="kicker" style={{ justifyContent: "center" }}>
            Rezerwacja
          </span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="hero-ctas">
            <Link href={bookingHref()} className="btn btn--gold btn--lg">
              Umów wizytę
            </Link>
            <a href={site.phoneHref} className="btn btn--ghost on-dark btn--lg">
              <PhoneIcon size={17} /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
