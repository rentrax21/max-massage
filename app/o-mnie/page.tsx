import type { Metadata } from "next";
import Link from "next/link";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { CheckIcon, ShieldIcon, SparkIcon, TableIcon, ClockIcon } from "@/components/Icons";
import { bookingHref, geoSentence } from "@/lib/site";

export const metadata: Metadata = {
  title: "O mnie — kim jestem i dlaczego przyjeżdżam do Ciebie",
  description:
    "Poznaj osobę stojącą za Max Massage: certyfikowany masażysta, który przywozi profesjonalny gabinet do Twojego domu. Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice.",
  alternates: { canonical: "/o-mnie" },
};

const values = [
  {
    icon: ClockIcon,
    title: "Punktualność",
    text: "Przyjeżdżam o umówionej porze, a zabieg trwa dokładnie tyle, ile ma trwać. Twój czas to fundament tej usługi.",
  },
  {
    icon: SparkIcon,
    title: "Higiena bez kompromisów",
    text: "Świeże pokrycie jednorazowe przy każdej wizycie, czyste ręczniki, dezynfekcja stołu i rąk. Standard gabinetu — u Ciebie.",
  },
  {
    icon: ShieldIcon,
    title: "Dyskrecja i spokój",
    text: "Jestem gościem w Twoim domu i o tym pamiętam. Bez oceniania, bez małomównych niezręczności, bez presji.",
  },
  {
    icon: TableIcon,
    title: "Pełne wyposażenie",
    text: "Profesjonalny stół, podgłówek, olejki hipoalergiczne, muzyka. Przywożę wszystko — Ty nie przygotowujesz niczego.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Okruszki">
            <Link href="/">Strona główna</Link>
            <span className="sep">/</span>
            <span>O mnie</span>
          </nav>
          <h1>
            Masaż to mój zawód. <span className="gold">Dojazd to mój standard.</span>
          </h1>
          <p className="lead">
            Jestem certyfikowanym masażystą i twórcą Max Massage — mobilnego salonu masażu, który
            przyjeżdża do domów klientów w Zagłębiu i Katowicach.
          </p>
        </div>
      </section>

      <AreaStrip />

      <section className="section">
        <div className="container split">
          <div className="prose" data-reveal>
            <h2>Dlaczego mobilnie?</h2>
            <p>
              Max Massage powstał z jednej obserwacji: ludzie, którzy najbardziej potrzebują masażu,
              mają najmniej czasu, żeby na niego dojechać. Pracowałem z osobami, które odwoływały
              wizyty w gabinecie tydzień po tygodniu — nie z braku chęci, tylko z braku wolnych
              dwóch i pół godzin w kalendarzu.
            </p>
            <p>
              Postanowiłem odwrócić ten układ. Zamiast czekać, aż klient znajdzie czas na dojazd,
              sam pokonuję trasę — z profesjonalnym stołem, świeżym pokryciem, olejkami i całym
              zapleczem dobrego gabinetu. Zabieg jest dokładnie ten sam. Znika tylko wszystko to, co
              było wokół niego stratą czasu.
            </p>
            <h2>Doświadczenie i podejście</h2>
            <p>
              Ukończyłem kursy zawodowe z zakresu masażu klasycznego, sportowego, limfatycznego oraz
              japońskiego masażu twarzy Kobido i stale poszerzam warsztat na szkoleniach. Na co
              dzień pracuję głównie z osobami spędzającymi długie godziny przy komputerze oraz z
              amatorami sportu — biegaczami, bywalcami siłowni, rowerzystami.
            </p>
            <p>
              Każdą wizytę zaczynam od krótkiej rozmowy: co Ci dolega, jak pracujesz, jak sypiasz,
              jakiego nacisku oczekujesz. Nie wykonuję „zabiegu z cennika” — wykonuję zabieg dla
              Ciebie. Dlatego klienci wracają i dlatego większość rezerwacji to dziś stali klienci
              oraz polecenia.
            </p>
            <p>{geoSentence}</p>
            <p>
              <Link href={bookingHref()} style={{ fontWeight: 600, color: "var(--graphite)" }}>
                Umów pierwszą wizytę
              </Link>{" "}
              — a przekonasz się, że profesjonalny masaż i własna kanapa pięć minut po zabiegu to
              połączenie, od którego trudno wrócić do gabinetów.
            </p>
          </div>

          <aside className="sidebar">
            <div
              className="side-card"
              style={{ minHeight: 320, alignContent: "center", textAlign: "center", justifyItems: "center" }}
              data-reveal
            >
              {/* ⚠️ Podmień ten blok na prawdziwe zdjęcie (public/o-mnie.jpg + <Image>) */}
              <TableIcon size={44} />
              <h3>Tu wstaw swoje zdjęcie</h3>
              <p>
                Klient kupuje człowieka, nie markę — dobre, naturalne zdjęcie przy stole do masażu
                zwiększa zaufanie bardziej niż jakikolwiek tekst.
              </p>
            </div>
            <div className="side-card side-card--plain" data-reveal>
              <h3>W skrócie</h3>
              <ul className="check-list">
                <li>
                  <CheckIcon /> Certyfikowany masażysta
                </li>
                <li>
                  <CheckIcon /> Kursy: klasyczny, sportowy, limfatyczny, Kobido
                </li>
                <li>
                  <CheckIcon /> Praca wyłącznie z dojazdem — 5 miast
                </li>
                <li>
                  <CheckIcon /> Własny stół i pełne wyposażenie
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--dark section--texture" aria-label="Zasady pracy">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">Zasady pracy</span>
            <h2 className="section-title">Cztery rzeczy, na które zawsze możesz liczyć</h2>
          </div>
          <div className="benefits-grid">
            {values.map((v, i) => (
              <article
                className="benefit"
                key={v.title}
                style={
                  {
                    background: "var(--card-dark)",
                    borderColor: "var(--line-dark)",
                    "--reveal-delay": `${i * 0.08}s`,
                  } as React.CSSProperties
                }
                data-reveal
              >
                <div className="benefit-icon">
                  <v.icon size={24} />
                </div>
                <h3 style={{ color: "var(--on-dark)" }}>{v.title}</h3>
                <p style={{ color: "var(--on-dark-muted)" }}>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Poznajmy się przy pierwszym zabiegu"
        text="Wybierz usługę i termin — resztą zajmę się ja. Do zobaczenia u Ciebie."
      />
    </>
  );
}
