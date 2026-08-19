import type { Metadata } from "next";
import Link from "next/link";
import { AreaStrip } from "@/components/AreaStrip";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { site, whatsappLink, cityNames, cancellation } from "@/lib/site";
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
          <div className="contact-grid" data-reveal>
            <a href={site.phoneHref} className="channel">
              <span className="ch-icon">
                <PhoneIcon size={22} />
              </span>
              <h3>Telefon</h3>
              <p>Najszybsza droga do rezerwacji — ustalimy termin w dwie minuty.</p>
              <span className="val">{site.phoneDisplay}</span>
            </a>

            <a
              href={whatsappLink("Dzień dobry, chcę umówić masaż z dojazdem.")}
              target="_blank"
              rel="noopener"
              className="channel"
            >
              <span className="ch-icon">
                <WhatsAppIcon size={22} />
              </span>
              <h3>WhatsApp</h3>
              <p>Wygodne, gdy jesteś w pracy — odpiszę z propozycją terminów.</p>
              <span className="val">Otwórz czat</span>
            </a>

            <a href={`mailto:${site.email}`} className="channel">
              <span className="ch-icon">
                <MailIcon size={22} />
              </span>
              <h3>E-mail</h3>
              <p>Dla spraw mniej pilnych: vouchery, pakiety, współpraca.</p>
              <span className="val">{site.email}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section--warm" aria-label="Formularz rezerwacji">
        <div className="container split">
          <div data-reveal>
            <div style={{ display: "grid", gap: 20, marginBottom: 44, justifyItems: "start" }}>
              <span className="kicker">
                <span className="idx">01</span> Formularz
              </span>
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
              <h3>Godziny pracy</h3>
              <div className="variants">
                {site.hours.map((h) => (
                  <div className="variant-row" key={h.days}>
                    <span className="t">{h.days}</span>
                    <span className="p" style={{ fontSize: "0.85rem" }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <p>Ostatni zabieg zaczynam ok. 19:30–20:00.</p>
            </div>

            <div className="side-card side-card--plain" data-reveal>
              <h3>Obszar działania</h3>
              <p style={{ fontWeight: 600, color: "var(--ink)" }}>{cityNames.join(" · ")}</p>
              <p style={{ fontSize: "0.8rem" }}>
                Dojazd w tych pięciu miastach jest wliczony w cenę zabiegu. Mieszkasz tuż za
                granicą obszaru? Napisz — zwykle da się coś ustalić.
              </p>
            </div>

            <div className="side-card side-card--plain" data-reveal>
              <h3>Odwołanie terminu</h3>
              <p style={{ fontSize: "0.85rem" }}>{cancellation.text}</p>
            </div>

            <div data-reveal>
              <Photo
                name="przy-stole"
                sizes="(max-width: 1023px) 100vw, 340px"
                alt="Max Majka przy rozłożonym stole do masażu — sprzęt, który przyjeżdża do klienta"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="section" aria-label="Pytania przed rezerwacją">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">02</span> Przed rezerwacją
            </span>
            <div className="sh-body">
              <h2 className="section-title">Najczęstsze pytania</h2>
            </div>
          </div>
          <FaqList items={mainFaq.slice(0, 4)} />
        </div>
      </section>
    </>
  );
}
