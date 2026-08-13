import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "./Icons";
import { site, bookingHref } from "@/lib/site";

export function CtaBanner({
  title = "Zadbaj o regenerację bez wychodzenia z domu",
  text = "Wybierz termin, otwórz drzwi — resztą zajmę się ja. Stół, olejki i pełne wyposażenie przywożę ze sobą.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band" aria-label="Umów wizytę">
      <div className="container cta-band-inner" data-reveal>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="hero-ctas">
          <Link href={bookingHref()} className="btn btn--gold btn--lg">
            Umów wizytę <ArrowRightIcon size={14} />
          </Link>
          <a href={site.phoneHref} className="btn btn--ghost on-dark btn--lg">
            <PhoneIcon size={15} /> {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
