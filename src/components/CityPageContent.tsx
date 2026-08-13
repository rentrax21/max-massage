import type { Metadata } from "next";
import Link from "next/link";
import { getCity } from "@/lib/cities";
import { services } from "@/lib/services";
import { site, bookingHref, whatsappLink } from "@/lib/site";
import { AreaStrip } from "@/components/AreaStrip";
import { FaqList } from "@/components/FaqList";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRightIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";

export function cityMetadata(slug: string): Metadata {
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/${city.slug}` },
  };
}

export function CityPageContent({ slug }: { slug: string }) {
  const city = getCity(slug);
  if (!city) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Masaż z dojazdem ${city.inCity}`,
    description: city.metaDescription,
    url: `${site.url}/${city.slug}`,
    serviceType: "Masaż mobilny z dojazdem do klienta",
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: city.name },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Okruszki">
            <Link href="/">Strona główna</Link>
            <span className="sep">/</span>
            <Link href="/obszar-dzialania">Obszar działania</Link>
            <span className="sep">/</span>
            <span>{city.name}</span>
          </nav>
          <h1>
            Masaż z dojazdem — <span className="gold">{city.name}</span>
          </h1>
          <p className="lead">{city.lead}</p>
          <div className="hero-ctas">
            <Link href={bookingHref()} className="btn btn--gold">
              Umów masaż {city.inCity}
            </Link>
            <a href={site.phoneHref} className="btn btn--ghost on-dark">
              <PhoneIcon size={16} /> Zadzwoń
            </a>
          </div>
        </div>
      </section>

      <AreaStrip />

      <section className="section">
        <div className="container split">
          <div style={{ display: "grid", gap: 44 }}>
            <div className="prose" data-reveal>
              {city.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div data-reveal>
              <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 20 }}>
                Dzielnice, do których dojeżdżam
              </h2>
              <div className="chips">
                {city.districts.map((d) => (
                  <span className="chip" key={d}>
                    <PinIcon size={13} /> {d}
                  </span>
                ))}
              </div>
            </div>

            <div data-reveal>
              <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 20 }}>
                Zabiegi dostępne {city.inCity}
              </h2>
              <ul className="city-services">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/uslugi/${s.slug}`}>
                      <span>{s.name}</span>
                      <span className="cs-meta">
                        {s.priceFrom} <ArrowRightIcon size={14} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal>
              <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 22 }}>
                Pytania klientów z miasta {city.name}
              </h2>
              <FaqList items={city.faq} />
            </div>
          </div>

          <aside className="sidebar">
            <div className="side-card" data-reveal>
              <h3>Rezerwacja {city.inCity}</h3>
              <p>
                Wybierz usługę i termin — przyjadę z pełnym wyposażeniem pod wskazany adres.
                Terminy wieczorne i weekendowe w standardzie.
              </p>
              <Link href={bookingHref()} className="btn btn--gold">
                Umów wizytę
              </Link>
              <a
                href={whatsappLink(`Dzień dobry, chcę umówić masaż ${city.inCity}.`)}
                target="_blank"
                rel="noopener"
                className="hero-wa"
              >
                <WhatsAppIcon size={17} /> Napisz na WhatsApp
              </a>
            </div>
            <div className="side-card side-card--plain" data-reveal>
              <h3>Godziny pracy</h3>
              <p>
                pn–pt 9:00–21:00
                <br />
                sobota 9:00–18:00
                <br />
                niedziela — po uzgodnieniu
              </p>
              <Link href="/cennik" className="link-arrow">
                Zobacz cennik
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner
        title={`Masaż w domu ${city.inCity} — zamiast dojazdów`}
        text="Ty zostajesz u siebie. Stół, olejki i całe wyposażenie przywożę ze sobą."
      />
    </>
  );
}
