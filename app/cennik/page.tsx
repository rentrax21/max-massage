import type { Metadata } from "next";
import Link from "next/link";
import { priceTable, packages, specials } from "@/lib/pricing";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { Photo } from "@/components/Photo";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { site, whatsappLink, guarantee, cancellation } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cennik masażu z dojazdem — pakiety, vouchery, oferta dla par",
  description:
    "Przejrzysty cennik masażu mobilnego: klasyczny, relaksacyjny, sportowy, limfatyczny. Pakiety, vouchery podarunkowe i masaż dla par. Dojazd w cenie — Sosnowiec, Katowice i okolice.",
  alternates: { canonical: "/cennik" },
};

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Okruszki">
            <Link href="/">Strona główna</Link>
            <span className="sep">/</span>
            <span>Cennik</span>
          </nav>
          <h1>
            Jedna cena. <span className="gold">Zero niespodzianek.</span>
          </h1>
          <p className="lead">
            Każda kwota zawiera dojazd, profesjonalny stół i pełne wyposażenie na terenie Sosnowca,
            Dąbrowy Górniczej, Będzina, Czeladzi i Katowic. Płacisz po zabiegu — gotówką, BLIK-iem
            lub przelewem.
          </p>
        </div>
      </section>

      <AreaStrip />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">01</span> Cennik
            </span>
            <div className="sh-body">
              <h2 className="section-title">Usługi i czas trwania</h2>
              <p className="section-lead">
                Dojazd wliczony w cenę · płatność po zabiegu · terminy wieczorne i weekendowe.
              </p>
            </div>
          </div>

          <div className="price-table-wrap" data-reveal>
            <table className="price-table">
              <thead>
                <tr>
                  <th scope="col">Usługa</th>
                  <th scope="col">Czas</th>
                  <th scope="col">Cena</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, i) => (
                  <tr key={i}>
                    <td className="svc">
                      <Link href={row.href}>{row.service}</Link>
                    </td>
                    <td className="time">{row.time}</td>
                    <td className="price">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Co dokładnie kryje się za kwotą — przy stronie z cennikiem
              najmocniej działa pokazanie, za co klient naprawdę płaci. */}
          <div className="duet" style={{ marginTop: "clamp(56px, 7vw, 96px)" }} data-reveal>
            <div className="duet-media">
              <Photo
                name="olejek-dlon"
                sizes="(max-width: 859px) 100vw, 46vw"
                ratio="3 / 2"
                className="photo--warm"
              />
            </div>
            <div className="duet-body">
              <h3>Co jest w tej cenie</h3>
              <p>
                Dojazd pod wskazany adres, profesjonalny stół z podgłówkiem, świeże pokrycie
                jednorazowe i czyste ręczniki na każdą wizytę, olejki hipoalergiczne, muzyka
                i rozłożenie oraz złożenie całego stanowiska.
              </p>
              <p>
                Nie doliczam za kilometry, za piętro bez windy ani za godziny wieczorne. Kwota
                z tabeli to kwota, którą płacisz po zabiegu — gotówką, BLIK-iem lub przelewem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--warm" aria-label="Pakiety">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">02</span> Pakiety
            </span>
            <div className="sh-body">
              <h2 className="section-title">Regularność płaci się sama</h2>
              <p className="section-lead">
                Najlepsze efekty daje seria zabiegów — dlatego przy pakietach cena pojedynczego
                masażu wyraźnie spada.
              </p>
            </div>
          </div>
          <div className="extras-grid">
            {packages.map((p, i) => (
              <article
                className="extra-card"
                key={p.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <h3>{p.title}</h3>
                <span className="xp">{p.price}</span>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Oferty specjalne">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">03</span> Na wyjątkowe okazje
            </span>
            <div className="sh-body">
              <h2 className="section-title">Vouchery i masaż dla par</h2>
            </div>
          </div>
          <div className="extras-grid extras-grid--two">
            {specials.map((p, i) => (
              <article
                className="extra-card"
                key={p.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <h3>{p.title}</h3>
                <span className="xp">{p.price}</span>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
          <p className="form-note" style={{ marginTop: 40 }} data-reveal>
            Ceny obowiązują na całym obszarze działania. Masaż poza obszarem — wyceniam
            indywidualnie po krótkiej rozmowie.
          </p>
        </div>
      </section>

      {/* Odwrócenie ryzyka przy cenie — to jedyne miejsce na stronie,
          gdzie ryzyko pierwszej wizyty przechodzi ze mnie na klienta,
          więc gwarancja musi stać dokładnie tutaj. */}
      <section className="section section--warm" aria-labelledby="bez-ryzyka">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">04</span> Bez ryzyka
            </span>
            <div className="sh-body">
              <h2 className="section-title" id="bez-ryzyka">
                Nie musisz mi wierzyć na słowo przy pierwszej wizycie
              </h2>
            </div>
          </div>

          <div className="pledge-row" data-reveal>
            <div className="pledge">
              <h3>{guarantee.title}</h3>
              <p>{guarantee.text}</p>
            </div>
            <div className="pledge pledge--plain">
              <h3>Odwołanie i zmiana terminu</h3>
              <p>{cancellation.text}</p>
            </div>
            <div className="pledge pledge--plain">
              <h3>Płatność po zabiegu</h3>
              <p>
                Gotówką, BLIK-iem lub przelewem na telefon — dopiero po masażu. Nie pobieram
                zaliczek ani przedpłat za pojedyncze wizyty.
              </p>
            </div>
          </div>

          <div className="price-cta" data-reveal>
            <a
              href={whatsappLink("Dzień dobry, chcę zapytać o termin i cenę masażu z dojazdem.")}
              target="_blank"
              rel="noopener"
              className="btn btn--gold btn--lg"
              data-cta="whatsapp-cennik"
            >
              <WhatsAppIcon size={16} /> Zapytaj o termin
            </a>
            <a
              href={site.phoneHref}
              className="btn btn--ghost btn--lg"
              data-cta="tel-cennik"
            >
              <PhoneIcon size={15} /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
