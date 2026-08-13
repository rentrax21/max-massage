import Link from "next/link";
import { cities } from "@/lib/cities";

/** Pasek miast — obszar działania widoczny na każdej stronie. */
export function AreaStrip() {
  return (
    <div className="area-strip">
      <div className="area-strip-inner">
        <span className="area-strip-label">Dojazd w cenie</span>
        {cities.map((c, i) => (
          <span key={c.slug} style={{ display: "inline-flex", alignItems: "center" }}>
            {i > 0 && <span className="dot" aria-hidden />}
            <Link href={`/${c.slug}`}>{c.name}</Link>
          </span>
        ))}
      </div>
    </div>
  );
}
