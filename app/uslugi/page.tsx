import type { Metadata } from "next";
import Link from "next/link";
import { activeServices } from "@/lib/services";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { Photo } from "@/components/Photo";
import { ArrowRightIcon } from "@/components/Icons";
import { servicePhoto } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Usługi — masaż z dojazdem do domu",
  description:
    "Masaż klasyczny, relaksacyjny, regeneracyjny dla sportowców i limfatyczny nóg — wszystko z dojazdem do domu na terenie Sosnowca, Dąbrowy Górniczej, Będzina, Czeladzi i Katowic.",
  alternates: { canonical: "/uslugi" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Okruszki">
            <Link href="/">Strona główna</Link>
            <span className="sep">/</span>
            <span>Usługi</span>
          </nav>
          <h1>
            Zabiegi dopasowane do <span className="gold">Twojego zmęczenia</span>
          </h1>
          <p className="lead">
            Cztery rodzaje masażu — od konkretnej pracy na napiętym karku po głęboki relaks. Każdy w
            Twoim domu, na profesjonalnym stole, z pełnym wyposażeniem, które przywożę ze sobą.
          </p>
        </div>
      </section>

      <AreaStrip />

      <section className="section">
        <div className="container">
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

          <div className="prose" style={{ marginTop: 64, maxWidth: 820 }} data-reveal>
            <p>
              Każdy z tych zabiegów wykonuję na tym samym profesjonalnym stole i z tym samym
              wyposażeniem, które przywożę ze sobą. Różni je technika i cel: jedne rozpracowują
              konkretne napięcie, inne wyciszają cały układ nerwowy.
            </p>
            <p>
              Nie wiesz, który zabieg wybrać? Napisz lub zadzwoń — po krótkiej rozmowie doradzę,
              co najlepiej odpowie na Twoje potrzeby. Możesz też zacząć od{" "}
              <Link href="/uslugi/masaz-klasyczny" style={{ fontWeight: 600, color: "var(--ink)" }}>
                masażu klasycznego
              </Link>{" "}
              — to najbardziej uniwersalny punkt startu.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
