import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { RevealObserver } from "@/components/Reveal";
import { CtaTracking } from "@/components/CtaTracking";
import { JsonLd } from "@/components/JsonLd";
import { site, cityNames } from "@/lib/site";
import { activeServices } from "@/lib/services";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Max Massage — profesjonalny masaż w Twoim domu | Sosnowiec, Katowice",
    template: "%s | Max Massage",
  },
  description:
    "Mobilny salon masażu z dojazdem do domu klienta: Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice. Masaż klasyczny, relaksacyjny, sportowy, limfatyczny — ja przyjeżdżam, Ty odpoczywasz.",
  keywords: [
    "masaż z dojazdem",
    "masaż w domu",
    "mobilny masaż",
    "masaż Sosnowiec",
    "masaż Katowice",
    "masaż karku",
    "masaż pleców",
    "masaż sportowy",
    "regeneracja po treningu",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Max Massage",
    title: "Max Massage — profesjonalny masaż w Twoim domu",
    description:
      "Masaż z dojazdem: Sosnowiec, Dąbrowa Górnicza, Będzin, Czeladź, Katowice. Ja przyjeżdżam z pełnym wyposażeniem, Ty tylko odpoczywasz.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1F1A16",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${site.url}/#business`,
  name: "Max Massage",
  description:
    "Mobilny salon masażu — profesjonalny masaż w domu klienta na terenie Sosnowca, Dąbrowy Górniczej, Będzina, Czeladzi i Katowic.",
  url: site.url,
  telephone: site.phoneDisplay.replace(/\s/g, ""),
  email: site.email,
  priceRange: "130–300 zł",
  areaServed: cityNames.map((c) => ({ "@type": "City", name: c })),
  address: { "@type": "PostalAddress", addressLocality: "Sosnowiec", addressCountry: "PL" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "21:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "18:00" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi masażu z dojazdem",
    itemListElement: activeServices.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${site.url}/uslugi/${s.slug}`,
        serviceType: "Masaż mobilny z dojazdem do klienta",
      },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={montserrat.variable}>
      <body>
        <JsonLd data={localBusinessJsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
        <RevealObserver />
        <CtaTracking />
      </body>
    </html>
  );
}
