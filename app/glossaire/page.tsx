import { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "Glossaire marketing digital",
  description:
    "Comprendre le vocabulaire du marketing digital en termes simples. SEO, SEA, ROI, KPI, SPF, DKIM et autres termes expliqués clairement.",
  keywords: [
    "glossaire marketing digital",
    "définition SEO",
    "vocabulaire marketing",
    "termes web",
    "lexique digital",
  ],
  openGraph: {
    title: "Glossaire marketing digital | ADVANTAGE",
    description:
      "Comprendre le vocabulaire du marketing digital en termes simples. SEO, SEA, ROI et autres termes expliqués.",
    url: "/glossaire",
    images: ["/images/og-image.jpg"],
    locale: "fr_FR",
  },
  alternates: {
    canonical: "/glossaire",
  },
};

export default function GlossairePage() {
  return <Content />;
}
