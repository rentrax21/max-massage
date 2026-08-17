import type { Metadata } from "next";
import Link from "next/link";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { Photo } from "@/components/Photo";
import { Credentials } from "@/components/Credentials";
import { WorkRules } from "@/components/WorkRules";
import { CheckIcon } from "@/components/Icons";
import { bookingHref, credentials, hasCredentials } from "@/lib/site";

export const metadata: Metadata = {
  title: "O mnie — kim jestem i na jakich zasadach pracuję",
  description:
    "Kto przyjedzie do Twojego domu: kwalifikacje, sposób pracy i jasne zasady zabiegu. Masaż z dojazdem w Sosnowcu, Dąbrowie Górniczej, Będzinie, Czeladzi i Katowicach.",
  alternates: { canonical: "/o-mnie" },
};

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
            Nazywam się {credentials.firstName} i prowadzę Max Massage sam — mobilny gabinet masażu,
            który przyjeżdża do domów klientów w Zagłębiu i Katowicach. To ja odbieram telefon
            i to ja wykonuję zabieg.
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
            <h2>Kwalifikacje</h2>
            <p>
              Pracuję z masażem klasycznym, sportowym i limfatycznym oraz z japońskim masażem
              twarzy Kobido. Poniżej konkrety, które możesz sprawdzić — bo wpuszczasz do domu
              osobę, której nie znasz, i „profesjonalny masażysta” to za mało.
            </p>

            <Credentials />

            <h2>Jak pracuję</h2>
            <p>
              Każdą wizytę zaczynam od krótkiej rozmowy: co dolega, jak pracujesz, jak sypiasz,
              jakiego nacisku oczekujesz, czy są kontuzje albo choroby, o których muszę wiedzieć.
              Dopiero potem wybieram techniki. To pięć minut, które decyduje o tym, czy zabieg
              faktycznie zadziała.
            </p>
            <p>
              Na co dzień pracuję głównie z dwoma rodzajami napięcia: karkiem i barkami u osób
              spędzających długie godziny przy komputerze oraz nogami i grzbietem u amatorów
              sportu — biegaczy, rowerzystów, bywalców siłowni. Jeśli Twój przypadek jest inny,
              napisz przed rezerwacją; czasem uczciwszą odpowiedzią jest skierowanie do
              fizjoterapeuty niż sprzedanie masażu.
            </p>
            <p>
              <Link href={bookingHref()} style={{ fontWeight: 600, color: "var(--ink)" }}>
                Umów pierwszą wizytę
              </Link>{" "}
              — a przekonasz się, że profesjonalny masaż i własna kanapa pięć minut po zabiegu to
              połączenie, od którego trudno wrócić do gabinetów.
            </p>
          </div>

          <aside className="sidebar">
            <div data-reveal>
              <Photo
                name="portret-koszula"
                sizes="(max-width: 1023px) 100vw, 340px"
                ratio="4 / 5"
                position="50% 20%"
                alt="Maks — masażysta prowadzący Max Massage"
              />
            </div>
            <div className="side-card side-card--plain" data-reveal>
              <h3>Jak to działa</h3>
              {/* Wyłącznie fakty operacyjne — rzeczy, których klient
                  może się spodziewać, a nie deklaracje o jakości. */}
              <ul className="check-list">
                <li>
                  <CheckIcon /> Praca wyłącznie z dojazdem, pięć miast
                </li>
                <li>
                  <CheckIcon /> Własny stół, pościel, olejki i muzyka
                </li>
                <li>
                  <CheckIcon /> Świeże pokrycie na każdą wizytę
                </li>
                <li>
                  <CheckIcon /> Jedna osoba — ja odbieram telefon i ja masuję
                </li>
                <li>
                  <CheckIcon /> Terminy wieczorne i sobotnie
                </li>
              </ul>
              {!hasCredentials() && (
                /* Widoczne tylko dla właściciela w kodzie: dopóki
                   credentials w src/lib/site.ts są puste, blok faktów
                   wyżej się nie renderuje. Uzupełnij go przed startem. */
                <p style={{ fontSize: "0.8rem", color: "var(--ink-faint)" }}>
                  Chcesz zobaczyć dyplom? Poproś przy pierwszej wizycie — pokazuję bez problemu.
                </p>
              )}
            </div>
          </aside>
        </div>
      </section>

      <WorkRules index="01" />

      <CtaBanner
        title="Poznajmy się przy pierwszym zabiegu"
        text="Wybierz usługę i termin — resztą zajmę się ja. Do zobaczenia u Ciebie."
      />
    </>
  );
}
