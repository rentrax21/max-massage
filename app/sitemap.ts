import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/o-mnie", "/uslugi", "/cennik", "/obszar-dzialania", "/blog", "/kontakt"];

  return [
    ...staticPages.map((p) => ({
      url: `${site.url}${p}`,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${site.url}/uslugi/${s.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...cities.map((c) => ({
      url: `${site.url}/${c.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
