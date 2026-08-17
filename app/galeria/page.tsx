import type { Metadata } from "next";
import Link from "next/link";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { Photo } from "@/components/Photo";
import { photos, type PhotoKey } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Galeria — zdjęcia z prawdziwych wizyt",
  description:
    "Zdjęcia z masaży wykonywanych w domach klientów: stanowisko, technika, atmosfera. Bez zdjęć ze stocku. Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice.",
  alternates: { canonical: "/galeria" },
};

/** Kolejność w galerii — mieszam kadry szerokie i wąskie, żeby siatka oddychała. */
const order: PhotoKey[] = [
  "kark-praca",
  "bark-kciuk",
  "lydka-szeroki",
  "olejek-nalewanie",
  "plecy-zloto",
  "kark-z-gory",
  "udo-zloto",
  "lopatka-punkt",
  "oklepywanie",
  "dlon-detal",
  "plecy-dloni",
  "lydka-oburacz",
  "noga-drewno",
  "plecy-obie-dlonie",
  "lydka-zloto",
  "udo-nacisk",
  "olejek-dlon",
  "lydka-kostki",
  "plecy-spokoj",
  "przy-stole",
  "lotos",
  "portret-koszula",
  "portret-polo",
  "portret-usmiech",
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Okruszki">
            <Link href="/">Strona główna</Link>
            <span className="sep">/</span>
            <span>Galeria</span>
          </nav>
          <h1>
            Zobacz, jak to wygląda <span className="gold">u Ciebie w domu.</span>
          </h1>
          <p className="lead">
            Wszystkie zdjęcia pochodzą z prawdziwych zabiegów — to ten sam stół, ta sama pościel
            i ten sam masażysta, który przyjedzie pod Twój adres.
          </p>
        </div>
      </section>

      <AreaStrip />

      <section className="section">
        <div className="container">
          <div className="gallery-grid" data-reveal>
            {order.map((k) => (
              <Photo
                key={k}
                name={k}
                sizes="(max-width: 479px) 100vw, (max-width: 859px) 50vw, 33vw"
                /* własne proporcje zdjęcia — układ kolumnowy je udźwignie */
                ratio={`${photos[k].width} / ${photos[k].height}`}
                className="photo--warm"
              />
            ))}
          </div>

          <p className="reviews-note" style={{ marginTop: 40 }}>
            Zdjęcia powstały podczas zwykłych wizyt, za zgodą klientów. Widać na nich to samo
            wyposażenie, które przywożę pod każdy adres: stół z podgłówkiem, świeże pokrycie
            i ręczniki wymieniane po każdym zabiegu.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Chcesz, żeby następne zdjęcie powstało u Ciebie?"
        text="Wybierz termin — przyjeżdżam z całym wyposażeniem."
      />
    </>
  );
}
