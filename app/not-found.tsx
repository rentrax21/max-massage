import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "72vh", display: "grid", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center", justifyItems: "center" }}>
        <span className="kicker" style={{ justifyContent: "center" }}>
          Błąd 404
        </span>
        <h1>
          Ta strona <span className="gold">wyszła z domu</span>
        </h1>
        <p className="lead" style={{ marginInline: "auto" }}>
          Nic straconego — wszystko, czego potrzebujesz, jest o jedno kliknięcie stąd.
        </p>
        <div className="hero-ctas" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn--gold">
            Wróć na stronę główną
          </Link>
          <Link href="/uslugi" className="btn btn--ghost on-dark">
            Zobacz usługi
          </Link>
        </div>
      </div>
    </section>
  );
}
