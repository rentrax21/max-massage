import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/blog";
import { site, bookingHref } from "@/lib/site";
import { AreaStrip } from "@/components/AreaStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    inLanguage: "pl-PL",
    url: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Person", name: "Max Massage" },
    publisher: { "@id": `${site.url}/#business` },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Okruszki">
            <Link href="/">Strona główna</Link>
            <span className="sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            <span>{post.category}</span>
          </nav>
          <h1 style={{ maxWidth: "26ch" }}>{post.title}</h1>
          <p className="breadcrumbs" style={{ marginTop: 4 }}>
            <span>{post.dateLabel}</span>
            <span className="sep">·</span>
            <span>{post.readTime}</span>
          </p>
        </div>
      </section>

      <AreaStrip />

      <section className="section">
        <div className="container">
          <article className="prose" style={{ marginInline: "auto" }} data-reveal>
            {post.blocks.map((b, i) => {
              if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
              if (b.type === "ul")
                return (
                  <ul key={i}>
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{b.text}</p>;
            })}

            <p style={{ marginTop: 10 }}>
              <Link href={bookingHref()} style={{ fontWeight: 600, color: "var(--graphite)" }}>
                → Umów masaż z dojazdem
              </Link>
            </p>
          </article>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
