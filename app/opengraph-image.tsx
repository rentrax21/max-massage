import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Max Massage — profesjonalny masaż w Twoim domu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1E293B 0%, #16202E 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
            <rect x="1" y="1" width="46" height="46" rx="13" stroke="#C8A96A" strokeWidth="1.5" />
            <path
              d="M12 33V17.5c0-1.2 1.5-1.7 2.3-.8l8.2 9.6c.8.9 2.2.9 3 0l8.2-9.6c.8-.9 2.3-.4 2.3.8V28"
              stroke="#FFFFFF"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="36" cy="33" r="3" fill="#C8A96A" />
          </svg>
          <div style={{ display: "flex", fontSize: 30, color: "#FFFFFF", fontWeight: 600 }}>
            Max&nbsp;<span style={{ color: "#C8A96A" }}>Massage</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#C8A96A",
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Mobilny salon masażu
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              color: "#FFFFFF",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Profesjonalny masaż w Twoim domu
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.16)",
            paddingTop: 30,
          }}
        >
          <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.75)" }}>
            Ty odpoczywasz. Ja przyjeżdżam.
          </div>
          <div style={{ display: "flex", fontSize: 21, color: "#C8A96A", fontWeight: 600 }}>
            Sosnowiec · Dąbrowa G. · Będzin · Czeladź · Katowice
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
