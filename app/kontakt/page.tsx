import type { Metadata } from "next";
import Link from "next/link";
import { AreaStrip } from "@/components/AreaStrip";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { site, whatsappLink, geoSentence, cityNames } from "@/lib/site";
import { mainFaq } from "@/lib/faq";
import { FaqList } from "@/components/FaqList";

export const metadata: Metadata = {
  title: "Kontakt i rezerwacja — umów masaż z dojazdem",
  description:
    "Umów masaż z dojazdem: telefon, WhatsApp lub formularz. Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice. Terminy wieczorne i weekendowe.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Kontakt — Max Massage",
          url: `${site.url}/kontakt`,
        }}
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Okruszki">
            <Link href="/">Strona główna</Link>
            <span className="sep">/</span>
            <span>Kontakt</span>
          </nav>
          <h1>
            Dwa kliknięcia od <span className="gold">rezerwacji</span>
          </h1>
          <p className="lead">
            Wybierz najwygodniejszy kanał — telefon, WhatsApp albo krótki formularz. Odpowiadam
            zwykle w ciągu godziny w godzinach pracy.
          </p>
        </div>
      </section>

      <AreaStrip />

      <section className="section" id="rezerwacja" aria-label="Rezerwacja">
        <div className="container">
          <div className="contact-grid">
            <a href={site.phoneHref} className="channel" data-reveal>
              <div className="benefit-icon">
                <PhoneIcon size={24} />
              </div>
              <h3>Zadzwoń</h3>
              <p>Najszybsza droga do rezerwacji — ustalimy termin w dwie minuty.</p>
              <span className="val">{site.phoneDisplay}</span>
            </a>

            <a
              href={whatsappLink("Dzień dobry, chcę umówić masaż z dojazdem.")}
              target="_blank"
              rel="noopener"
              className="channel"
              data-reveal
              style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
            >
              <div className="benefit-icon">
                <WhatsAppIcon size={24} />
              </div>
              <h3>Napisz na WhatsApp</h3>
              <p>Wygodne, gdy jesteś w pracy — odpiszę z propozycją terminów.</p>
              <span className="val">Otwórz czat</span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="channel"
              data-reveal
              style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}
            >
              <div className="benefit-icon">
                <MailIcon size={24} />
              </div>
              <h3>Napisz e-mail</h3>
              <p>Dla spraw mniej pilnych: vouchery, pakiety, współpraca.</p>
              <span className="val">{site.email}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section--warm" aria-label="Formularz rezerwacji">
        <div className="container split">
          <div data-reveal>
            <div className="section-head">
              <span className="kicker">Formularz</span>
              <h2 className="section-title">Wolisz napisać? Wypełnij i wyślij.</h2>
              <p className="section-lead">
                Formularz składa gotową wiadomość i otwiera ją w WhatsApp lub w Twojej poczcie —
                bez zakładania kont i czekania.
              </p>
            </div>
            <ContactForm />
          </div>

          <aside className="sidebar">
            <div className="side-card" data-reveal>
              <h3>
                <ClockIcon size={18} className="gold" /> Godziny pracy
              </h3>
              <div className="variants">
                {site.hours.map((h) => (
                  <div className="variant-row" key={h.days}>
                    <span className="t">{h.days}</span>
                    <span className="p" style={{ fontSize: "0.88rem" }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <p>Ostatni zabieg zaczynam ok. 19:30–20:00.</p>
            </div>

            <div className="side-card side-card--plain" data-reveal>
              <h3>
                <PinIcon size={18} className="gold" /> Obszar działania
              </h3>
              <p>{cityNames.join(" · ")}</p>
              <p style={{ fontSize: "0.8rem" }}>{geoSentence}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" aria-label="Pytania przed rezerwacją">
        <div className="container">
          <div className="section-head section-head--center" data-reveal>
            <span className="kicker">Przed rezerwacją</span>
            <h2 className="section-title">Najczęstsze pytania</h2>
          </div>
          <FaqList items={mainFaq.slice(0, 4)} />
        </div>
      </section>
    </>
  );
}
