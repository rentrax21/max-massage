import Link from "next/link";
import Image from "next/image";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon, ClockIcon } from "./Icons";
import { activeServices } from "@/lib/services";
import { cities } from "@/lib/cities";
import { site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          {/* W stopce jest miejsce na pełny lockup w oryginalnych, metalicznych
              kolorach — w nagłówku ten sam znak leci jako jednokolorowy sygnet,
              bo przy 34 px gradienty się zlewają. */}
          <Link href="/" className="footer-logo" aria-label="Max Massage — strona główna">
            <Image
              src="/logo/lockup.png"
              alt="Max Massage — profesjonalny masaż w Twoim domu"
              width={760}
              height={215}
              sizes="(max-width: 767px) 260px, 300px"
            />
          </Link>
          <p>
            Profesjonalny mobilny salon masażu. Przyjeżdżam z pełnym wyposażeniem do Twojego domu —
            Ty zajmujesz się wyłącznie odpoczynkiem.
          </p>
          <p style={{ fontSize: "0.8rem", lineHeight: 1.7 }}>
            Masaż z dojazdem dla osób pracujących przy komputerze i aktywnych fizycznie na terenie
            Sosnowca, Dąbrowy Górniczej, Będzina, Czeladzi i Katowic.
          </p>
        </div>

        <div className="footer-col">
          <h4>Usługi</h4>
          <ul>
            {activeServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/uslugi/${s.slug}`}>{s.shortName}</Link>
              </li>
            ))}
            <li>
              <Link href="/cennik">Cennik i pakiety</Link>
            </li>
            <li>
              <Link href="/galeria">Galeria zdjęć</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Obszar działania</h4>
          <ul>
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`}>Masaż {c.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/obszar-dzialania">Cały obszar dojazdu</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Kontakt</h4>
          <ul className="footer-contact">
            <li>
              <PhoneIcon size={16} />
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </li>
            <li>
              <WhatsAppIcon size={16} />
              <a href={whatsappLink()} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </li>
            <li>
              <MailIcon size={16} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <ClockIcon size={16} />
              <span>
                pn–pt 9:00–21:00
                <br />
                sob 9:00–18:00
              </span>
            </li>
            <li>
              <PinIcon size={16} />
              <span>Baza: Sosnowiec</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Max Massage. Wszystkie prawa zastrzeżone.</span>
          <span>Masaż mobilny · Zagłębie i Katowice</span>
        </div>
      </div>
    </footer>
  );
}
