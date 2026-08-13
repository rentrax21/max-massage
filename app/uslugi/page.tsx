import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { ArrowRightIcon } from "@/components/Icons";
import { geoSentence } from "@/lib/site";

export const metadata: Metadata = {
  title: "Usługi — masaż z dojazdem do domu",
  description:
    "Masaż klasyczny, relaksacyjny, regeneracyjny dla sportowców, Kobido i limfatyczny nóg — wszystko z dojazdem do domu na terenie Sosnowca, Dąbrowy Górniczej, Będzina, Czeladzi i Katowic.",
  alternates: { canonical: "/uslugi" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Okruszki">
            <Link href="/">Strona główna</Link>
            <span className="sep">/</span>
            <span>Usługi</span>
          </nav>
          <h1>
            Zabiegi dopasowane do <span className="gold">Twojego zmęczenia</span>
          </h1>
          <p className="lead">
            Pięć rodzajów masażu — od konkretnej pracy na napiętym karku po głęboki relaks. Każdy w
            Twoim domu, na profesjonalnym stole, z pełnym wyposażeniem, które przywożę ze sobą.
          </p>
        </div>
      </section>

      <AreaStrip />

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <Link
                href={`/uslugi/${s.slug}`}
                className="service-card"
                key={s.slug}
                data-reveal
                style={{ "--reveal-delay": `${i * 0.07}s` } as React.CSSProperties}
              >
                <span className="service-idx">0{i + 1}</span>
                <h3>{s.name}</h3>
                <p>{s.tile}</p>
                <span className="service-meta">
                  <span className="price">{s.priceFrom}</span>
                  <span className="go">
                    Szczegóły <ArrowRightIcon size={15} />
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="prose" style={{ marginTop: 56, maxWidth: 820 }} data-reveal>
            <p>{geoSentence}</p>
            <p>
              Nie wiesz, który zabieg wybrać? Napisz lub zadzwoń — po krótkiej rozmowie doradzę,
              co najlepiej odpowie na Twoje potrzeby. Możesz też zacząć od{" "}
              <Link href="/uslugi/masaz-klasyczny" style={{ fontWeight: 600, color: "var(--graphite)" }}>
                masażu klasycznego
              </Link>{" "}
              — to najbardziej uniwersalny punkt startu.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
