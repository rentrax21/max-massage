import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/lib/cities";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { JourneyMap } from "@/components/JourneyMap";
import { Photo } from "@/components/Photo";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Obszar działania — masaż z dojazdem: Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice",
  description:
    "Sprawdź, gdzie dojeżdżam z masażem: Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź i Katowice. Dojazd z pełnym wyposażeniem wliczony w cenę zabiegu.",
  alternates: { canonical: "/obszar-dzialania" },
};

export default function AreaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Okruszki">
            <Link href="/">Strona główna</Link>
            <span className="sep">/</span>
            <span>Obszar działania</span>
          </nav>
          <h1>
            Pięć miast. <span className="gold">Jeden standard.</span>
          </h1>
          <p className="lead">
            Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź i Katowice. Dojazd w każdym z tych miast
            jest wliczony w cenę — bez dopłat za kilometry, za piętro bez windy i bez widełek
            „to zależy”.
          </p>
        </div>
      </section>

      <AreaStrip />

      <section className="section">
        <div className="container split">
          <div className="area-list" data-reveal>
            {cities.map((c, i) => (
              <Link key={c.slug} href={`/${c.slug}`} className="area-row">
                <span className="no">/0{i + 1}</span>
                <span className="body">
                  <h3>Masaż {c.name}</h3>
                  <span className="districts">
                    {c.districts.slice(0, 4).join(" · ")} i pozostałe dzielnice
                  </span>
                </span>
                <span className="go" aria-hidden>
                  <ArrowRightIcon size={16} />
                </span>
              </Link>
            ))}
          </div>

          <aside className="sidebar">
            <div data-reveal>
              <JourneyMap />
            </div>
            <div data-reveal>
              <Photo
                name="przy-stole"
                sizes="(max-width: 1023px) 100vw, 340px"
                ratio="3 / 2"
                alt="Przenośny stół do masażu rozłożony przed wizytą"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--warm" aria-labelledby="jak-dojezdzam">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="kicker">
              <span className="idx">01</span> Zasady dojazdu
            </span>
            <div className="sh-body">
              <h2 className="section-title" id="jak-dojezdzam">
                Dlaczego akurat te pięć miast
              </h2>
            </div>
          </div>
          <div className="prose" style={{ maxWidth: 760 }} data-reveal>
            <p>
              Obszar jest wąski celowo. Masaż z dojazdem ma sens tylko wtedy, gdy przyjeżdżam
              wypoczęty i punktualnie — a nie po godzinie w korku, z opóźnieniem i pytaniem,
              gdzie tu zaparkować. Sosnowiec, Czeladź i Będzin leżą obok siebie, Dąbrowa
              Górnicza i Katowice są w zasięgu kilkunastu, najwyżej dwudziestu paru minut.
              Dalej byłoby to już obietnicą, której nie umiałbym dotrzymać.
            </p>
            <p>
              Dojazd w każdym z tych miast jest wliczony w cenę zabiegu i nie zależy od dzielnicy.
              Nie doliczam za kilometry, za wysokie piętro bez windy ani za godziny wieczorne.
              Kwota z cennika to kwota, którą płacisz po masażu.
            </p>
            <p>
              W praktyce najwięcej czasu oszczędzają dwie grupy: mieszkańcy dalszych dzielnic
              Dąbrowy Górniczej, gdzie sam przejazd przez miasto potrafi zająć pół godziny,
              oraz osoby pracujące w katowickich biurowcach, dla których wizyta w gabinecie
              po pracy oznacza wjazd w szczyt komunikacyjny.
            </p>
            <p>
              Mieszkasz tuż za granicą obszaru — w Siemianowicach, Mysłowicach, Sławkowie,
              Wojkowicach? Napisz. Przy dogodnej godzinie zwykle da się coś ustalić, choć
              wtedy potrzebuję trochę więcej wyprzedzenia.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Twoje miasto jest na mapie?"
        text="Napisz, kiedy Ci pasuje — przyjadę z pełnym wyposażeniem pod wskazany adres."
        source="obszar"
      />
    </>
  );
}
