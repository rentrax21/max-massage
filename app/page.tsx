import type { Metadata } from "next";
import Link from "next/link";
import { JourneyMap } from "@/components/JourneyMap";
import { AreaStrip } from "@/components/AreaStrip";
import { FaqList } from "@/components/FaqList";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import {
  ArrowRightIcon,
  CarIcon,
  CheckIcon,
  ClockIcon,
  HomeIcon,
  PhoneIcon,
  ShieldIcon,
  StarIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { services } from "@/lib/services";
import { reviews } from "@/lib/reviews";
import { mainFaq } from "@/lib/faq";
import { site, whatsappLink, bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Max Massage — profesjonalny masaż w Twoim domu | Sosnowiec, Katowice, Zagłębie",
  description:
    "Masaż z dojazdem do domu: Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice. Klasyczny, relaksacyjny, sportowy, Kobido, limfatyczny. Własny stół i pełne wyposażenie — Ty odpoczywasz, ja przyjeżdżam.",
  alternates: { canonical: "/" },
};

const benefits = [
  {
    icon: HomeIcon,
    title: "Profesjonalny masaż w domu",
    text: "Pełnowartościowy zabieg na profesjonalnym stole — w Twoim salonie, nie w gabinecie.",
  },
  {
    icon: ClockIcon,
    title: "Oszczędność czasu",
    text: "Zero dojazdów i czekania. Zyskujesz średnio 1,5 godziny przy każdej wizycie.",
  },
  {
    icon: CarIcon,
    title: "Bez korków i parkingu",
    text: "To ja pokonuję trasę. Ty nie ruszasz się z miejsca — nawet po najdłuższym dniu.",
  },
  {
    icon: ShieldIcon,
    title: "Pełen komfort i prywatność",
    text: "Żadnych poczekalni i obcych ludzi. Tylko Ty, spokój i Twoja własna przestrzeń.",
  },
];

const personas = [
  {
    num: "01",
    title: "Pracujesz przy komputerze",
    desc: "Osiem godzin przy biurku zostawia ślad. Znam go dobrze i wiem, jak go zdjąć.",
    items: ["Ból i sztywność karku", "Napięte barki i „ciężka” głowa", "Ból pleców po pracy siedzącej"],
  },
  {
    num: "02",
    title: "Trenujesz i jesteś aktywny",
    desc: "Regeneracja to część planu treningowego — nie luksus, na który brakuje czasu.",
    items: ["Szybsza regeneracja mięśni", "Sprawny powrót do treningu", "Profilaktyka kontuzji"],
  },
  {
    num: "03",
    title: "Żyjesz w ciągłym napięciu",
    desc: "Stres kumuluje się w ciele. Masaż to najkrótsza droga, by go z niego wyprowadzić.",
    items: ["Głęboki relaks bez wychodzenia z domu", "Lepszy, spokojniejszy sen", "Komfort od pierwszej minuty"],
  },
];

const steps = [
  {
    num: "01",
    title: "Umawiasz termin",
    text: "Telefon, WhatsApp lub formularz — wybierasz usługę i dogodną godzinę, także wieczorem.",
  },
  {
    num: "02",
    title: "Przyjeżdżam z wyposażeniem",
    text: "Stół, świeże pokrycie, olejki i muzyka. Rozłożenie stanowiska zajmuje mi 10 minut.",
  },
  {
    num: "03",
    title: "Wykonuję zabieg",
    text: "Pełnowartościowy masaż dopasowany do Twoich potrzeb i preferowanego nacisku.",
  },
  {
    num: "04",
    title: "Odpoczywasz w swoim domu",
    text: "Bez powrotu przez miasto. Zostajesz u siebie i przedłużasz relaks o cały wieczór.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: mainFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="kicker" data-hero-seq="1">
              Mobilny salon masażu · Zagłębie i Katowice
            </span>
            <h1 className="display" data-hero-seq="2">
              Profesjonalny masaż <span className="gold">w&nbsp;Twoim domu</span>
            </h1>
            <p className="hero-sub" data-hero-seq="3">
              <strong>Ty odpoczywasz. Ja przyjeżdżam.</strong> Pomagam redukować napięcia karku,
              pleców i stres — bez konieczności wychodzenia z domu.
            </p>
            <div className="hero-ctas" data-hero-seq="4">
              <Link href={bookingHref()} className="btn btn--gold btn--lg">
                Umów wizytę
              </Link>
              <a href={site.phoneHref} className="btn btn--ghost on-dark btn--lg">
                <PhoneIcon size={17} /> Zadzwoń
              </a>
              <a
                href={whatsappLink("Dzień dobry, chcę umówić masaż z dojazdem.")}
                target="_blank"
                rel="noopener"
                className="hero-wa"
              >
                <WhatsAppIcon size={18} /> Napisz na WhatsApp
              </a>
            </div>
            <ul className="hero-trust" data-hero-seq="5">
              <li>
                <CheckIcon /> Własny stół i pełne wyposażenie
              </li>
              <li>
                <CheckIcon /> Dojazd wliczony w cenę
              </li>
              <li>
                <CheckIcon /> Terminy wieczorne i weekendowe
              </li>
            </ul>
          </div>

          <div className="hero-visual" data-hero-seq="6">
            <JourneyMap />
          </div>
        </div>
      </section>

      <AreaStrip />

      {/* ── KORZYŚCI ── */}
      <section className="section" aria-label="Korzyści">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">Dlaczego mobilnie</span>
            <h2 className="section-title">
              Produktem nie jest masaż. Jest nim Twój czas i regeneracja.
            </h2>
            <p className="section-lead">
              Wizyta w gabinecie to zabieg plus dojazdy, parking i czekanie. U mnie cały ten koszt
              znika — zostaje sam efekt.
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <article
                className="benefit"
                key={b.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <div className="benefit-icon">
                  <b.icon size={24} />
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DLA KOGO ── */}
      <section className="section section--dark section--texture" aria-label="Dla kogo">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">Dla kogo</span>
            <h2 className="section-title">Znam Twój rodzaj zmęczenia</h2>
            <p className="section-lead">
              Pracuję głównie z osobami, które łączy jedno: brak czasu — przy biurku, na treningu i
              w codziennym pędzie.
            </p>
          </div>
          <div className="personas">
            {personas.map((p, i) => (
              <article
                className="persona"
                key={p.num}
                data-reveal
                style={{ "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties}
              >
                <span className="persona-num">{p.num}</span>
                <h3>{p.title}</h3>
                <p className="persona-desc">{p.desc}</p>
                <ul>
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFERTA ── */}
      <section className="section" aria-label="Oferta">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">Oferta</span>
            <h2 className="section-title">Pięć zabiegów. Jeden adres — Twój.</h2>
            <p className="section-lead">
              Każdy masaż wykonuję na profesjonalnym stole, z pełnym wyposażeniem, w standardzie
              dobrego gabinetu.
            </p>
          </div>
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
          <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }} data-reveal>
            <Link href="/cennik" className="btn btn--ghost">
              Zobacz pełny cennik i pakiety <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── JAK WYGLĄDA WIZYTA ── */}
      <section className="section section--dark" aria-label="Jak wygląda wizyta">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">Przebieg wizyty</span>
            <h2 className="section-title">Od rezerwacji do relaksu — bez Twojego wysiłku</h2>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div
                className="step"
                key={s.num}
                data-reveal
                style={{ "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties}
              >
                <span className="step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPINIE ── */}
      <section className="section section--warm" aria-label="Opinie klientów">
        <div className="container">
          <div className="section-head section-head--center" data-reveal>
            <span className="kicker">Opinie</span>
            <h2 className="section-title">Klienci, którzy zostali w domu</h2>
          </div>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <figure
                className="review"
                key={r.name + r.place}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 0.08}s` } as React.CSSProperties}
              >
                <div className="review-stars" aria-label="5 gwiazdek">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} />
                  ))}
                </div>
                <blockquote>„{r.text}”</blockquote>
                <figcaption>
                  <span className="review-avatar">{r.name[0]}</span>
                  <span>
                    <strong>{r.name}</strong>
                    {r.place}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }} data-reveal>
            <a href={site.googleReviewsUrl} target="_blank" rel="noopener" className="link-arrow">
              Zobacz opinie w Google <ArrowRightIcon size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" aria-label="Najczęstsze pytania">
        <div className="container">
          <div className="section-head section-head--center" data-reveal>
            <span className="kicker">FAQ</span>
            <h2 className="section-title">Najczęstsze pytania</h2>
            <p className="section-lead">
              Wszystko, co warto wiedzieć przed pierwszym masażem w domu.
            </p>
          </div>
          <FaqList items={mainFaq} />
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBanner />
    </>
  );
}
