import Link from "next/link";
import { Photo } from "./Photo";
import { ArrowRightIcon } from "./Icons";
import { galleryKeys } from "@/lib/photos";

/**
 * Poziomy pasek zdjęć z prawdziwych wizyt.
 * Własne zdjęcia (zamiast stocku) to najmocniejszy sygnał zaufania dla
 * usługi wykonywanej u klienta w domu — dlatego pasek stoi wysoko na stronie.
 */
export function GalleryStrip({ count = 8 }: { count?: number }) {
  const keys = galleryKeys.slice(0, count);

  return (
    <section className="section" aria-labelledby="galeria-pasek">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">
            <span className="idx">02</span> Jak to wygląda
          </span>
          <div className="sh-body">
            <h2 className="section-title" id="galeria-pasek">
              Żadnych zdjęć ze stocku. To moje wizyty.
            </h2>
            <p className="section-lead">
              Zdjęcia z realnych zabiegów w mieszkaniach klientów — ten sam stół, ta sama pościel
              i ten sam masażysta, który przyjedzie do Ciebie.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="gallery-strip" data-reveal>
          {keys.map((k) => (
            <Photo
              key={k}
              name={k}
              sizes="(max-width: 700px) 60vw, 24vw"
              ratio="3 / 4"
              className="photo--warm"
            />
          ))}
        </div>

        <div style={{ marginTop: 32 }} data-reveal>
          <Link href="/galeria" className="link-arrow">
            Zobacz całą galerię <ArrowRightIcon size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
