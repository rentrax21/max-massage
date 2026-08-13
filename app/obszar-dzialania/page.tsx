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
          <div style={{ display: "grid", gap: 14 }}>
            {cities.map((c, i) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="city-services"
                style={{ display: "block" }}
                data-reveal
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "22px 26px",
                    background: "var(--white)",
                    border: "1px solid var(--line-light)",
                    borderRadius: "var(--radius)",
                  }}
                  className="area-city-row"
                >
                  <span style={{ display: "grid", gap: 4 }}>
                    <strong style={{ fontSize: "1.15rem", letterSpacing: "-0.01em" }}>
                      Masaż {c.name}
                    </strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--ink-muted)" }}>
                      {c.districts.slice(0, 4).join(" · ")} i pozostałe dzielnice
                    </span>
                  </span>
                  <span className="cs-meta" style={{ color: "var(--gold)", display: "inline-flex", gap: 8, alignItems: "center", fontWeight: 600, fontSize: "0.86rem", whiteSpace: "nowrap" }}>
                    0{i + 1} <ArrowRightIcon size={15} />
                  </span>
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
