"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
import { ChevronDownIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { site, whatsappLink, bookingHref } from "@/lib/site";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // zamknij menu przy zmianie strony
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // zablokuj scroll pod otwartym menu
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`header${solid || open ? " is-solid" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="logo" aria-label="Max Massage — strona główna">
            <LogoMark />
            <span>
              Max <em>Massage</em>
            </span>
          </Link>

          <nav className="nav" aria-label="Nawigacja główna">
            <Link href="/" className="nav-link">
              Strona główna
            </Link>
            <Link href="/o-mnie" className="nav-link">
              O mnie
            </Link>

            <div className="nav-item">
              <Link href="/uslugi" className="nav-link">
                Usługi <ChevronDownIcon />
              </Link>
              <div className="nav-drop">
                {services.map((s) => (
                  <Link key={s.slug} href={`/uslugi/${s.slug}`}>
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/cennik" className="nav-link">
              Cennik
            </Link>

            <div className="nav-item">
              <Link href="/obszar-dzialania" className="nav-link">
                Obszar działania <ChevronDownIcon />
              </Link>
              <div className="nav-drop">
                {cities.map((c) => (
                  <Link key={c.slug} href={`/${c.slug}`}>
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/kontakt" className="nav-link">
              Kontakt
            </Link>

            <Link href={bookingHref()} className="btn btn--gold nav-cta">
              Umów wizytę
            </Link>
          </nav>

          <button
            className={`burger${open ? " is-open" : ""}`}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* menu mobilne */}
      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        <Link href="/" className="mm-link">
          Strona główna
        </Link>
        <Link href="/o-mnie" className="mm-link">
          O mnie
        </Link>

        <details className="mm-group">
          <summary>
            Usługi <ChevronDownIcon size={18} />
          </summary>
          <div className="mm-sub">
            {services.map((s) => (
              <Link key={s.slug} href={`/uslugi/${s.slug}`}>
                {s.name}
              </Link>
            ))}
          </div>
        </details>

        <Link href="/cennik" className="mm-link">
          Cennik
        </Link>

        <details className="mm-group">
          <summary>
            Obszar działania <ChevronDownIcon size={18} />
          </summary>
          <div className="mm-sub">
            {cities.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`}>
                Masaż {c.name}
              </Link>
            ))}
          </div>
        </details>

        <Link href="/blog" className="mm-link">
          Blog
        </Link>
        <Link href="/kontakt" className="mm-link">
          Kontakt
        </Link>

        <div className="mm-cta">
          <Link href={bookingHref()} className="btn btn--gold btn--lg">
            Umów wizytę
          </Link>
          <a href={site.phoneHref} className="btn btn--ghost on-dark">
            <PhoneIcon size={17} /> {site.phoneDisplay}
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn--ghost on-dark">
            <WhatsAppIcon size={17} /> Napisz na WhatsApp
          </a>
        </div>

        <p className="mm-meta">
          Masaż z dojazdem: Sosnowiec · Dąbrowa Górnicza · Będzin · Czeladź · Katowice
        </p>
      </div>
    </>
  );
}
