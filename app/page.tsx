import type { Metadata } from "next";
import Link from "next/link";
import { AreaStrip } from "@/components/AreaStrip";
import { FaqList } from "@/components/FaqList";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { GalleryStrip } from "@/components/GalleryStrip";
import { FirstVisit } from "@/components/FirstVisit";
import { WorkRules } from "@/components/WorkRules";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { activeServices } from "@/lib/services";
import { reviews } from "@/lib/reviews";
import { mainFaq } from "@/lib/faq";
import { servicePhoto } from "@/lib/photos";
import { site, whatsappLink, bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Max Massage — profesjonalny masaż w Twoim domu | Sosnowiec, Katowice, Zagłębie",
  description:
    "Masaż z dojazdem do domu: Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice. Klasyczny, relaksacyjny, regeneracyjny, limfatyczny. Własny stół i pełne wyposażenie — ja przyjeżdżam, Ty odpoczywasz.",
  alternates: { canonical: "/" },
};

const allPersonas = [
  {
    num: "01",
    title: "Pracujesz przy komputerze",
    desc: "Osiem godzin przy biurku zostawia ślad. Znam go dobrze i wiem, jak go zdjąć.",
    items: ["Ból i sztywność karku", "Napięte barki i „ciężka” głowa", "Ból pleców po pracy siedzącej"],
    href: "/uslugi/masaz-klasyczny",
  },
  {
    num: "02",
    title: "Trenujesz i jesteś aktywny",
    desc: "Regeneracja to część planu treningowego — nie luksus, na który brakuje czasu.",
    items: ["Szybsza regeneracja mięśni", "Sprawny powrót do treningu", "Profilaktyka kontuzji"],
    href: "/uslugi/masaz-regeneracyjny",
  },
  {
    num: "03",
    title: "Żyjesz w ciągłym napięciu",
    desc: "Stres kumuluje się w ciele. Masaż to najkrótsza droga, by go z niego wyprowadzić.",
    items: ["Głęboki relaks bez wychodzenia z domu", "Lepszy, spokojniejszy sen", "Komfort od pierwszej minuty"],
    href: "/uslugi/masaz-relaksacyjny",
  },
  {
    // Persona pod Kobido. Znika automatycznie razem z usługą (patrz
    // `active` w services.ts) i wraca, gdy zabieg wróci do oferty.
    num: "04",
    title: "Zaciskasz zęby i nosisz stres na twarzy",
    desc: "Żuchwa, skronie i czoło trzymają napięcie równie mocno jak kark — tylko trudniej to zauważyć.",
    items: ["Rozluźnienie zaciśniętej żuchwy", "Mniej napięciowych bólów głowy", "Naturalny efekt liftingu"],
    href: "/uslugi/masaz-kobido",
  },
];

/**
 * Persony pokazujemy tylko te, których zabieg jest w ofercie — inaczej
 * klient klikałby w usługę, której nie ma.
 */
const personas = allPersonas.filter((p) =>
  activeServices.some((s) => p.href === `/uslugi/${s.slug}`),
);

/** Trzy powody „dlaczego mobilnie" — każdy dostaje własne zdjęcie zamiast ikonki. */
const duets = [
  {
    photo: "przy-stole" as const,
    title: "Przyjeżdżam z całym gabinetem",
    text: "Profesjonalny stół, świeże pokrycie na każdą wizytę, olejki i muzyka. Rozłożenie stanowiska zajmuje mi dziesięć minut. Ty nie musisz mieć w domu niczego poza kawałkiem wolnej podłogi.",
    cta: { href: "/o-mnie", label: "Poznaj mnie" },
  },
  {
    photo: "kark-z-gory" as const,
    ratio: "3 / 2",
    title: "Oszczędzasz półtorej godziny na każdej wizycie",
    text: "Wizyta w gabinecie to nie 60 minut, tylko dojazd, parking, poczekalnia, zabieg i droga powrotna. Tutaj zostaje sam zabieg — reszta znika. To ja pokonuję trasę.",
    cta: { href: "/obszar-dzialania", label: "Sprawdź obszar dojazdu" },
  },
  {
    photo: "plecy-zloto" as const,
    ratio: "3 / 2",
    title: "Po masażu nie musisz nigdzie wracać",
    text: "Największą wartość masażu traci się w drodze do domu — w tramwaju, w korku, na zimnie. U siebie po prostu zostajesz. Relaks nie kończy się na progu gabinetu, tylko trwa cały wieczór.",
    cta: { href: "/cennik", label: "Zobacz cennik" },
  },
];

const steps = [
  {
    num: "01",
    title: "Piszesz lub dzwonisz",
    text: "WhatsApp, telefon albo formularz. Wybieramy usługę i godzinę — także wieczorem po pracy.",
  },
  {
    num: "02",
    title: "Potwierdzam termin",
    text: "Odpowiadam zwykle w ciągu godziny. Dostajesz dokładną godzinę i wiesz, ile zabieg potrwa.",
  },
  {
    num: "03",
    title: "Przyjeżdżam i rozkładam stanowisko",
    text: "Dziesięć minut i gabinet stoi w Twoim salonie. Zaczynamy od krótkiej rozmowy o tym, co boli.",
  },
  {
    num: "04",
    title: "Zostajesz w domu",
    text: "Składam sprzęt i wychodzę. Ty przedłużasz relaks o cały wieczór, zamiast wracać przez miasto.",
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
      <section className="hero hero--photo">
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

        <div className="hero-split">
          <div className="hero-split-copy">
            <h1 className="display" data-hero-seq="1">
              Masaż przyjeżdża <span className="gold">do Ciebie.</span>
            </h1>
            <p className="hero-sub" data-hero-seq="2">
              <strong>Ja przyjeżdżam, Ty odpoczywasz.</strong> Profesjonalny masaż karku, pleców i
              nóg — na własnym stole, w Twoim mieszkaniu, w Sosnowcu i całym Zagłębiu.
            </p>
            <div className="hero-ctas" data-hero-seq="3">
              <a
                href={whatsappLink("Dzień dobry, chcę umówić masaż z dojazdem.")}
                target="_blank"
                rel="noopener"
                className="btn btn--gold btn--lg"
                data-cta="whatsapp-hero"
              >
                <WhatsAppIcon size={16} /> Napisz na WhatsApp
              </a>
              <a
                href={site.phoneHref}
                className="btn btn--ghost on-dark btn--lg"
                data-cta="tel-hero"
              >
                <PhoneIcon size={15} /> {site.phoneDisplay}
              </a>
            </div>
            <Link href={bookingHref()} className="hero-wa" data-hero-seq="4">
              Umów przez formularz <ArrowRightIcon size={13} />
            </Link>
          </div>

          <div className="hero-split-photo">
            {/* kadr ustawiany w CSS (.hero-split-photo), bo pion na desktopie
                i pasek 16:9 na telefonie potrzebują innego wycinka */}
            <Photo
              name="kark-praca"
              sizes="(max-width: 959px) 100vw, 50vw"
              priority
              className="photo--warm"
            />
            <p className="hero-photo-note">
              <em>Zdjęcie z wizyty</em> <span>— nie ze stocku</span>
            </p>
          </div>
        </div>

        <div className="hero-rail">
          <ul className="container hero-rail-inner" data-hero-seq="5">
            <li>Dojazd wliczony w cenę</li>
            <li>Świeża pościel na każdą wizytę</li>
            <li>Terminy wieczorne i weekendowe</li>
          </ul>
        </div>
      </section>

      <AreaStrip />

      {/* ── DLACZEGO MOBILNIE — pary zdjęcie/tekst ── */}
      <section className="section" aria-labelledby="dlaczego-mobilnie">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">01</span> Dlaczego mobilnie
            </span>
            <div className="sh-body">
              <h2 className="section-title" id="dlaczego-mobilnie">
                Moim celem nie jest masaż. Jest nim Twój czas, regeneracja i komfort.
              </h2>
              <p className="section-lead">
                Wizyta w gabinecie to zabieg plus dojazdy, parking i czekanie. U mnie cały ten koszt
                znika — zostaje sam efekt.
              </p>
            </div>
          </div>

          {duets.map((d, i) => (
            <div
              className={`duet${i % 2 === 1 ? " duet--flip" : ""}`}
              key={d.title}
              data-reveal
            >
              <div className="duet-media">
                <Photo
                  name={d.photo}
                  sizes="(max-width: 859px) 100vw, 46vw"
                  ratio={d.ratio}
                  className="photo--warm"
                />
              </div>
              <div className="duet-body">
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <Link href={d.cta.href} className="link-arrow">
                  {d.cta.label} <ArrowRightIcon size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALERIA — dowód, że to prawdziwa usługa ── */}
      <GalleryStrip count={8} />

      {/* ── DLA KOGO ── */}
      <section className="section section--dark" aria-labelledby="dla-kogo">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">03</span> Dla kogo
            </span>
            <div className="sh-body">
              <h2 className="section-title" id="dla-kogo">
                Znam Twój rodzaj zmęczenia
              </h2>
              <p className="section-lead">
                Pracuję głównie z osobami, które łączy jedno: brak czasu — przy biurku, na treningu
                i w codziennym pędzie.
              </p>
            </div>
          </div>
          <div className={`personas${personas.length === 4 ? " personas--quad" : ""}`}>
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
                <Link href={p.href} className="link-arrow">
                  Zobacz zabieg <ArrowRightIcon size={13} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFERTA ── */}
      <section className="section" aria-labelledby="oferta">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">04</span> Oferta
            </span>
            <div className="sh-body">
              <h2 className="section-title" id="oferta">
                Pięć zabiegów. Jeden adres — Twój.
              </h2>
              <p className="section-lead">
                Każdy masaż wykonuję na profesjonalnym stole, z pełnym wyposażeniem, w standardzie
                dobrego gabinetu.
              </p>
            </div>
          </div>

          <div className="svc-index" data-reveal>
            {activeServices.map((s, i) => (
              <Link href={`/uslugi/${s.slug}`} className="svc-row" key={s.slug}>
                <span className="no">/0{i + 1}</span>
                <span className="svc-thumb" aria-hidden>
                  <Photo
                    name={servicePhoto[s.slug]}
                    sizes="84px"
                    ratio="1"
                    alt=""
                    className="photo--warm"
                  />
                </span>
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

      {/* ── PIERWSZA WIZYTA ── */}
      <FirstVisit />

      {/* ── ZASADY PRACY — nazwana granica zawodowa ── */}
      <WorkRules index="06" />

      {/* ── JAK UMÓWIĆ ── */}
      <section className="section" aria-labelledby="przebieg">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">07</span> Rezerwacja
            </span>
            <div className="sh-body">
              <h2 className="section-title" id="przebieg">
                Od wiadomości do relaksu — cztery kroki
              </h2>
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

      {/* ── O MNIE ── */}
      <section className="section section--warm" aria-labelledby="o-mnie-skrot">
        <div className="container">
          <div className="about-duet">
            <div data-reveal>
              <Photo
                name="portret-usmiech"
                sizes="(max-width: 859px) 100vw, 40vw"
                ratio="4 / 5"
                position="50% 25%"
              />
            </div>
            <div className="duet-body" data-reveal>
              <span className="kicker">
                <span className="idx">08</span> Kto przyjedzie
              </span>
              <h2 className="section-title" id="o-mnie-skrot">
                Do drzwi zapuka konkretna osoba, nie „usługa”
              </h2>
              <p>
                Nazywam się Max Majka i prowadzę Max Massage sam — to ja odbieram telefon, ja ustalam
                termin i ja wykonuję zabieg. Nie ma pośredników, recepcji ani zmieniających się
                masażystów. Wiesz z góry, kto przyjedzie do Twojego domu.
              </p>
              <p>
                Pracuję głównie z napięciami karku i pleców u osób siedzących przy komputerze oraz
                z regeneracją u osób trenujących. Masaż dopasowuję do tego, co mówi ciało — i do
                tego, co mówisz Ty w trakcie zabiegu.
              </p>
              <p className="about-sign">Max Majka — Max Massage</p>
              <Link href="/o-mnie" className="link-arrow">
                Więcej o mnie i o kwalifikacjach <ArrowRightIcon size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPINIE ── */}
      <section className="section" aria-labelledby="opinie">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">09</span> Opinie
            </span>
            <div className="sh-body">
              <h2 className="section-title" id="opinie">
                Klienci, którzy zostali w domu
              </h2>
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
      <section className="section section--warm" aria-labelledby="faq">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">10</span> FAQ
            </span>
            <div className="sh-body">
              <h2 className="section-title" id="faq">
                Najczęstsze pytania
              </h2>
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
