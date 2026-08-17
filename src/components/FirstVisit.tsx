import { Photo } from "./Photo";

/**
 * „Zanim przyjadę" — sekcja odpowiadająca na obawy przed pierwszą wizytą.
 * Badania nad konwersją usług masażu zgodnie wskazują, że lęk pierwszego
 * klienta bierze się z niewiedzy (co przygotować, ile się rozbierać, czy
 * będzie bolało). Wypisanie tego wprost zdejmuje główną barierę rezerwacji.
 */

export const firstVisitSteps = [
  {
    n: "01",
    title: "Potrzebuję 2 × 2 metry wolnej podłogi",
    text: "Salon, sypialnia, nawet pokój dziecka — wystarczy tyle miejsca, żeby rozłożyć stół i obejść go dookoła. Nie musisz nic przygotowywać ani sprzątać.",
  },
  {
    n: "02",
    title: "Przywożę wszystko: stół, pościel, olejek, muzykę",
    text: "Pokrycie stołu i ręczniki są świeże dla każdego klienta. Ty nie musisz mieć w domu absolutnie niczego.",
  },
  {
    n: "03",
    title: "Rozbierasz się tylko do miejsca, które masujemy",
    text: "Reszta ciała jest przez cały czas przykryta. Do masażu pleców zostaje bielizna. Nigdy nie odsłaniam obszaru, nad którym akurat nie pracuję.",
  },
  {
    n: "04",
    title: "Zaczynamy od rozmowy — 5 minut",
    text: "Pytam o to, co boli, o kontuzje, choroby i leki. Ustalamy, gdzie pracować mocniej, a czego nie ruszać. To Ty decydujesz o zakresie.",
  },
  {
    n: "05",
    title: "Nacisk regulujesz w trakcie, jednym słowem",
    text: "„Mocniej” albo „za mocno” wystarczy. Masaż nie musi boleć, żeby działał — dobry nacisk to taki, przy którym potrafisz swobodnie oddychać.",
  },
  {
    n: "06",
    title: "Po zabiegu zostajesz u siebie",
    text: "Składam stół w kilka minut i wychodzę. Bez ubierania się w pośpiechu i bez powrotu przez miasto. Warto wypić wodę i nie planować nic wymagającego.",
  },
];

export function FirstVisit() {
  return (
    <section className="section section--deep" aria-labelledby="pierwsza-wizyta">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">
            <span className="idx">05</span> Pierwsza wizyta
          </span>
          <div className="sh-body">
            <h2 className="section-title" id="pierwsza-wizyta">
              Wpuszczasz kogoś do domu. Powiem Ci dokładnie, jak to wygląda.
            </h2>
            <p className="section-lead">
              Najczęstszy powód, dla którego ktoś odkłada pierwszy masaż w domu, to nie cena —
              tylko niewiedza. Poniżej wszystko, o co ludzie pytają, zanim się umówią.
            </p>
          </div>
        </div>

        <div className="firstvisit">
          <div data-reveal>
            <Photo
              name="olejek-nalewanie"
              sizes="(max-width: 959px) 100vw, 40vw"
              ratio="4 / 5"
              className="photo--warm"
            />
          </div>

          <dl className="fv-list" data-reveal>
            {firstVisitSteps.map((s) => (
              <div className="fv-item" key={s.n}>
                <dt>{s.n}</dt>
                <dd>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
