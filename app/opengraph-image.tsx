import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Obrazek do udostępnień (Facebook, WhatsApp, Google).
 *
 * Układ dwukolumnowy: lewa kolumna to pełny, nieprzezroczysty panel
 * z logo i nagłówkiem, prawa to zdjęcie z zabiegu. Wcześniejsza wersja
 * kładła tekst wprost na zdjęciu pod półprzezroczystym gradientem —
 * jasne partie kadru zjadały gold i logo. Panel gwarantuje czytelność
 * niezależnie od tego, jakie zdjęcie tu wstawisz.
 *
 * Runtime nodejs (nie edge), bo tło i logo wczytujemy z dysku zamiast
 * strzelać fetchem po własną domenę, której podczas builda może jeszcze
 * nie być.
 */
export const runtime = "nodejs";
export const alt = "Max Massage — profesjonalny masaż w Twoim domu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#191411";
const GOLD = "#C8A96A";

export default async function OgImage() {
  const [bg, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/foto/og-bg.jpg")),
    readFile(join(process.cwd(), "public/logo/lockup.png")),
  ]);
  const bgSrc = `data:image/jpeg;base64,${bg.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: INK, fontFamily: "sans-serif" }}>
        {/* ── lewa kolumna: treść na pełnym tle ── */}
        <div
          style={{
            width: 690,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px 56px 54px 68px",
            background: INK,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={330} height={93} alt="" />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 19,
                color: GOLD,
                letterSpacing: 5,
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              Mobilny salon masażu
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 68,
                color: "#FFFFFF",
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: -2,
              }}
            >
              Masaż przyjeżdża do Ciebie
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #3a3129", paddingTop: 24 }}>
            <div style={{ display: "flex", fontSize: 23, color: "#c9bdb0", marginBottom: 8 }}>
              Ja przyjeżdżam, Ty odpoczywasz.
            </div>
            <div style={{ display: "flex", fontSize: 18, color: GOLD, fontWeight: 600 }}>
              Sosnowiec · Dąbrowa Górnicza · Będzin · Czeladź · Katowice
            </div>
          </div>
        </div>

        {/* ── prawa kolumna: zdjęcie z delikatnym zejściem w panel ── */}
        <div style={{ width: 510, height: "100%", display: "flex", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgSrc}
            width={510}
            height={630}
            alt=""
            style={{ width: 510, height: 630, objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background: `linear-gradient(90deg, ${INK} 0%, rgba(25,20,17,0.35) 22%, rgba(25,20,17,0) 55%)`,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
