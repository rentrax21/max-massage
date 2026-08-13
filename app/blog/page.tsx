import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { ArrowRightIcon } from "@/components/Icons";

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
        </div>
      </section>

      <AreaStrip />

      <section className="section">
        <div className="container">
          <div className="posts-list" data-reveal>
            {posts.map((p) => (
              <Link href={`/blog/${p.slug}`} className="post-row" key={p.slug}>
                <span className="meta">
                  <span className="cat">{p.category}</span>
                  <span className="date">
                    {p.dateLabel} · {p.readTime}
                  </span>
                </span>
                <span className="body">
                  <h3>{p.title}</h3>
                  <span className="excerpt">{p.excerpt}</span>
                </span>
                <span className="go" aria-hidden>
                  <ArrowRightIcon size={16} />
                </span>
              </Link>
            ))}
          </div>
          <p className="form-note" style={{ marginTop: 40 }} data-reveal>
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
