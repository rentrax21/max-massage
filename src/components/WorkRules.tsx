import { Photo } from "./Photo";
import { workRules, guarantee, cancellation } from "@/lib/site";

/**
 * „Zasady, na których pracuję" — granica zawodowa nazwana wprost.
 *
 * Kategoria „masaż z dojazdem" w polskim internecie sąsiaduje z usługami
 * erotycznymi, a usługa polega na wpuszczeniu obcej osoby do mieszkania.
 * To największa niewypowiedziana obiekcja tej strony — i praktycznie żaden
 * konkurent jej nie adresuje, więc jest to zarazem najtańsza przewaga.
 *
 * Ton: rzeczowy, bez przepraszania i bez podkreślania problemu. Zasady
 * czyta się jak standard zawodowy, a nie jak tłumaczenie się.
 */
export function WorkRules({ index = "06" }: { index?: string }) {
  return (
    <section className="section section--warm" aria-labelledby="zasady">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">
            <span className="idx">{index}</span> Zasady pracy
          </span>
          <div className="sh-body">
            <h2 className="section-title" id="zasady">
              Standard gabinetu obowiązuje też u Ciebie w salonie
            </h2>
            <p className="section-lead">
              Wpuszczasz do domu osobę, której nie znasz. Masz prawo wiedzieć z góry, na jakich
              zasadach ta osoba pracuje — zanim się umówisz, nie po fakcie.
            </p>
          </div>
        </div>

        <div className="rules">
          <div className="rules-list" data-reveal>
            {workRules.map((r, i) => (
              <article className="rule" key={r.title}>
                <span className="rule-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="rules-side" data-reveal>
            <Photo
              name="przy-stole"
              sizes="(max-width: 959px) 100vw, 34vw"
              alt="Rozłożony stół do masażu ze świeżym pokryciem"
            />
            <div className="pledge">
              <h3>{guarantee.title}</h3>
              <p>{guarantee.text}</p>
            </div>
            <div className="pledge pledge--plain">
              <h3>Odwołanie terminu</h3>
              <p>{cancellation.text}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
