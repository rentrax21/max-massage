import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/lib/cities";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { JourneyMap } from "@/components/JourneyMap";
import { ArrowRightIcon } from "@/components/Icons";
import { geoSentence } from "@/lib/site";

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
            {geoSentence} Dojazd w każdym z tych miast jest wliczony w cenę — bez ukrytych opłat i
            widełek „to zależy”.
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
          </aside>
        </div>
      </section>

      <CtaBanner
        title="Twoje miasto jest na mapie?"
        text="Umów wizytę — przyjadę z pełnym wyposażeniem pod wskazany adres. Mieszkasz tuż za granicą obszaru? Napisz, zwykle da się coś ustalić."
      />
    </>
  );
}
