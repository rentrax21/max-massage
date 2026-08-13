import type { Metadata } from "next";
import Link from "next/link";
import { JourneyMap } from "@/components/JourneyMap";
import { AreaStrip } from "@/components/AreaStrip";
import { FaqList } from "@/components/FaqList";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
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
    num: "01",
    title: "Profesjonalny masaż w domu",
    text: "Pełnowartościowy zabieg na profesjonalnym stole — w Twoim salonie, nie w gabinecie.",
  },
  {
    num: "02",
    title: "Oszczędność czasu",
    text: "Zero dojazdów i czekania. Zyskujesz średnio 1,5 godziny przy każdej wizycie.",
  },
  {
    num: "03",
    title: "Bez korków i parkingu",
    text: "To ja pokonuję trasę. Ty nie ruszasz się z miejsca — nawet po najdłuższym dniu.",
  },
  {
    num: "04",
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
        <div className="hero-masthead">
          <div className="container hero-masthead-inner">
            <span>Mobilny salon masażu</span>
            <span>
              Sosnowiec <span className="gold-dot">·</span> Dąbrowa Górnicza{" "}
              <span className="gold-dot">·</span> Będzin <span className="gold-dot">·</span> Czeladź{" "}
              <span className="gold-dot">·</span> Katowice
            </span>
          </div>
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 className="display" data-hero-seq="1">
              Profesjonalny masaż <span className="gold">w&nbsp;Twoim domu.</span>
            </h1>
            <p className="hero-sub" data-hero-seq="2">
              <strong>Ty odpoczywasz. Ja przyjeżdżam.</strong> Pomagam redukować napięcia karku,
              pleców i stres — bez konieczności wychodzenia z domu.
            </p>
            <div className="hero-ctas" data-hero-seq="3">
              <Link href={bookingHref()} className="btn btn--gold btn--lg">
                Umów wizytę <ArrowRightIcon size={14} />
              </Link>
              <a href={site.phoneHref} className="btn btn--ghost on-dark btn--lg">
                <PhoneIcon size={15} /> Zadzwoń
              </a>
              <a
                href={whatsappLink("Dzień dobry, chcę umówić masaż z dojazdem.")}
                target="_blank"
                rel="noopener"
                className="hero-wa"
              >
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-visual" data-hero-seq="6">
            <JourneyMap />
          </div>
        </div>

        <div className="hero-rail">
          <ul className="container hero-rail-inner" data-hero-seq="5">
            <li>Własny stół i pełne wyposażenie</li>
            <li>Dojazd wliczony w cenę</li>
            <li>Terminy wieczorne i weekendowe</li>
          </ul>
        </div>
      </section>

      <AreaStrip />

      {/* ── KORZYŚCI ── */}
      <section className="section" aria-label="Korzyści">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">01</span> Dlaczego mobilnie
            </span>
            <div className="sh-body">
              <h2 className="section-title">
                Produktem nie jest masaż. Jest nim Twój czas i regeneracja.
              </h2>
              <p className="section-lead">
                Wizyta w gabinecie to zabieg plus dojazdy, parking i czekanie. U mnie cały ten koszt
                znika — zostaje sam efekt.
              </p>
            </div>
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <article
                className="benefit"
                key={b.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <span className="benefit-num">{b.num}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DLA KOGO ── */}
      <section className="section section--dark" aria-label="Dla kogo">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">02</span> Dla kogo
            </span>
            <div className="sh-body">
              <h2 className="section-title">Znam Twój rodzaj zmęczenia</h2>
              <p className="section-lead">
                Pracuję głównie z osobami, które łączy jedno: brak czasu — przy biurku, na treningu
                i w codziennym pędzie.
              </p>
            </div>
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
            <span className="kicker">
              <span className="idx">03</span> Oferta
            </span>
            <div className="sh-body">
              <h2 className="section-title">Pięć zabiegów. Jeden adres — Twój.</h2>
              <p className="section-lead">
                Każdy masaż wykonuję na profesjonalnym stole, z pełnym wyposażeniem, w standardzie
                dobrego gabinetu.
              </p>
            </div>
          </div>

          <div className="svc-index" data-reveal>
            {services.map((s, i) => (
              <Link href={`/uslugi/${s.slug}`} className="svc-row" key={s.slug}>
                <span className="no">/0{i + 1}</span>
                <h3>{s.name}</h3>
                <p className="desc">{s.tile}</p>
                <span className="price">{s.priceFrom}</span>
                <span className="go" aria-hidden>
                  <ArrowRightIcon size={16} />
                </span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 44 }} data-reveal>
            <Link href="/cennik" className="link-arrow">
              Pełny cennik i pakiety <ArrowRightIcon size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── JAK WYGLĄDA WIZYTA ── */}
      <section className="section section--deep" aria-label="Jak wygląda wizyta">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">04</span> Przebieg wizyty
            </span>
            <div className="sh-body">
              <h2 className="section-title">Od rezerwacji do relaksu — bez Twojego wysiłku</h2>
            </div>
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
      <section className="section" aria-label="Opinie klientów">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">05</span> Opinie
            </span>
            <div className="sh-body">
              <h2 className="section-title">Klienci, którzy zostali w domu</h2>
            </div>
          </div>
          <div className="reviews-grid" data-reveal>
            {reviews.map((r) => (
              <figure className="review" key={r.name + r.place}>
                <blockquote>{r.text}</blockquote>
                <figcaption>
                  <strong>{r.name}</strong> — {r.place}
                </figcaption>
              </figure>
            ))}
          </div>
          <div style={{ marginTop: 44 }} data-reveal>
            <a href={site.googleReviewsUrl} target="_blank" rel="noopener" className="link-arrow">
              Zobacz opinie w Google <ArrowRightIcon size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section--warm" aria-label="Najczęstsze pytania">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">06</span> FAQ
            </span>
            <div className="sh-body">
              <h2 className="section-title">Najczęstsze pytania</h2>
              <p className="section-lead">
                Wszystko, co warto wiedzieć przed pierwszym masażem w domu.
              </p>
            </div>
          </div>
          <FaqList items={mainFaq} />
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBanner />
    </>
  );
}
