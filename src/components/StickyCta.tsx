import Link from "next/link";
import { PhoneIcon } from "./Icons";
import { site, bookingHref } from "@/lib/site";

/** Dolny pasek CTA — widoczny tylko na mobile. */
export function StickyCta() {
  return (
    <div className="sticky-cta">
      <a href={site.phoneHref} className="btn btn--ghost on-dark">
        <PhoneIcon size={16} /> Zadzwoń
      </a>
      <Link href={bookingHref()} className="btn btn--gold">
        Umów wizytę
      </Link>
    </div>
  );
}
