import type { Metadata } from "next";
import Link from "next/link";
import { posts, blogCategories } from "@/lib/blog";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Blog — regeneracja, home office i zdrowe plecy",
  description:
    "Praktyczna wiedza o regeneracji: ból karku przy pracy przy komputerze, masaż po treningu, sen i redukcja stresu. Blog Max Massage — masaż z dojazdem, Sosnowiec i Katowice.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Okruszki">
            <Link href="/">Strona główna</Link>
            <span className="sep">/</span>
            <span>Blog</span>
          </nav>
          <h1>
            Wiedza, która <span className="gold">zdejmuje napięcie</span>
          </h1>
          <p className="lead">
            Bez lania wody: konkretne teksty o bólu karku, regeneracji po treningu i odpoczynku,
            który naprawdę działa.
          </p>
          <div className="chips" style={{ marginTop: 6 }}>
            {blogCategories.map((c) => (
              <span className="chip" key={c} style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.16)", color: "var(--on-dark-muted)" }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <AreaStrip />

      <section className="section">
        <div className="container">
          <div className="posts-grid">
            {posts.map((p, i) => (
              <Link
                href={`/blog/${p.slug}`}
                className="post-card"
                key={p.slug}
                data-reveal
                style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <div className="post-card-top">
                  <span className="post-cat">{p.category}</span>
                  <h3>{p.title}</h3>
                </div>
                <div className="post-card-body">
                  <p>{p.excerpt}</p>
                  <span className="post-meta">
                    <span>{p.dateLabel}</span>
                    <span>{p.readTime}</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="form-note" style={{ marginTop: 32, textAlign: "center" }} data-reveal>
            Nowe teksty pojawiają się regularnie — dotyczą tego, o co klienci pytają na stole.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Czytanie nie zdejmie napięcia. Masaż tak."
        text="Umów wizytę — przyjadę z pełnym wyposażeniem do Twojego domu."
      />
    </>
  );
}
