import type { Metadata } from "next";
import Link from "next/link";
import { priceTable, packages, specials } from "@/lib/pricing";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Cennik masażu z dojazdem — pakiety, vouchery, oferta dla par",
  description:
    "Przejrzysty cennik masażu mobilnego: klasyczny, relaksacyjny, sportowy, Kobido, limfatyczny. Pakiety, vouchery podarunkowe i masaż dla par. Dojazd w cenie — Sosnowiec, Katowice i okolice.",
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
          <div className="price-table-wrap" data-reveal>
            <table className="price-table">
              <thead>
                <tr>
                  <th scope="col">Usługa</th>
                  <th scope="col">Czas</th>
                  <th scope="col" style={{ textAlign: "right" }}>
                    Cena
                  </th>
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

          <ul
            className="check-list"
            style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: "12px 32px" }}
            data-reveal
          >
            <li>
              <CheckIcon /> Dojazd wliczony w cenę
            </li>
            <li>
              <CheckIcon /> Płatność po zabiegu
            </li>
            <li>
              <CheckIcon /> Terminy wieczorne i weekendowe
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--warm" aria-label="Pakiety">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">Pakiety</span>
            <h2 className="section-title">Regularność płaci się sama</h2>
            <p className="section-lead">
              Najlepsze efekty daje seria zabiegów — dlatego przy pakietach cena pojedynczego masażu
              wyraźnie spada.
            </p>
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
            <span className="kicker">Na wyjątkowe okazje</span>
            <h2 className="section-title">Vouchery i masaż dla par</h2>
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
          <p className="form-note" style={{ marginTop: 24 }} data-reveal>
            Ceny obowiązują na całym obszarze działania. Masaż poza obszarem — wyceniam
            indywidualnie po krótkiej rozmowie.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
