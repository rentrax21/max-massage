import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import { site, bookingHref, whatsappLink } from "@/lib/site";
import { AreaStrip } from "@/components/AreaStrip";
import { FaqList } from "@/components/FaqList";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/uslugi/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    url: `${site.url}/uslugi/${service.slug}`,
    serviceType: service.name,
    provider: { "@id": `${site.url}/#business` },
    areaServed: ["Sosnowiec", "Dąbrowa Górnicza", "Będzin", "Czeladź", "Katowice"].map((c) => ({
      "@type": "City",
      name: c,
    })),
    offers: service.variants.map((v) => ({
      "@type": "Offer",
      price: v.price.replace(/\D/g, ""),
      priceCurrency: "PLN",
      description: `${service.name} — ${v.time}`,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
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
            <Link href="/uslugi">Usługi</Link>
            <span className="sep">/</span>
            <span>{service.shortName}</span>
          </nav>
          <h1>
            {service.name} <span className="gold">z dojazdem do domu</span>
          </h1>
          <p className="lead">{service.lead}</p>
          <div className="hero-ctas">
            <Link href={bookingHref()} className="btn btn--gold">
              Umów {service.shortName.toLowerCase()}
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
              {service.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div data-reveal>
              <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 22 }}>
                Efekty, które poczujesz
              </h2>
              <ul className="check-list">
                {service.effects.map((e) => (
                  <li key={e}>
                    <CheckIcon /> {e}
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal>
              <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 22 }}>
                Ten zabieg jest dla Ciebie, jeśli…
              </h2>
              <ul className="check-list">
                {service.forWhom.map((e) => (
                  <li key={e}>
                    <CheckIcon /> {e}
                  </li>
                ))}
              </ul>
            </div>

            {service.note && (
              <p
                className="form-note"
                style={{
                  padding: "18px 22px",
                  background: "var(--paper-warm)",
                  borderRadius: "var(--radius-sm)",
                  borderLeft: "2px solid var(--gold)",
                }}
                data-reveal
              >
                {service.note}
              </p>
            )}

            <div data-reveal>
              <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 22 }}>
                Pytania o {service.shortName.toLowerCase()}
              </h2>
              <FaqList items={service.faq} />
            </div>
          </div>

          <aside className="sidebar">
            <div className="side-card" data-reveal>
              <h3>Czas i cena</h3>
              <div className="variants">
                {service.variants.map((v) => (
                  <div className="variant-row" key={v.time}>
                    <span className="t">{v.time}</span>
                    <span className="p">{v.price}</span>
                  </div>
                ))}
              </div>
              <p>Cena zawiera dojazd, stół i pełne wyposażenie. Płatność po zabiegu.</p>
              <Link href={bookingHref()} className="btn btn--gold">
                Umów wizytę
              </Link>
              <a
                href={whatsappLink(`Dzień dobry, chcę umówić: ${service.name}.`)}
                target="_blank"
                rel="noopener"
                className="hero-wa"
              >
                <WhatsAppIcon size={17} /> Zapytaj na WhatsApp
              </a>
            </div>

            <div className="side-card side-card--plain" data-reveal>
              <h3>Obszar dojazdu</h3>
              <p>
                Sosnowiec · Dąbrowa Górnicza · Będzin · Czeladź · Katowice — dojazd wliczony w cenę
                każdego zabiegu.
              </p>
              <Link href="/cennik" className="link-arrow">
                Zobacz pełny cennik
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner
        title={`${service.shortName} — bez wychodzenia z domu`}
        text="Wybierz termin, a ja przywiozę wszystko, czego potrzebuje profesjonalny zabieg."
      />
    </>
  );
}
