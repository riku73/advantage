import type { Metadata } from "next";
import AboutPageContent from "@/components/about-page-content";

export const metadata: Metadata = {
  title: "À propos - Agence marketing digital Luxembourg",
  description:
    "Découvrez ADVANTAGE, votre agence marketing digital au Luxembourg. Expertise locale, transparence et résultats mesurables.",
  keywords: [
    "agence marketing Luxembourg",
    "équipe marketing digital",
    "expertise digitale",
    "agence web Luxembourg",
  ],
  openGraph: {
    title: "À propos | ADVANTAGE",
    description:
      "Découvrez ADVANTAGE, votre agence marketing digital au Luxembourg. Expertise locale et résultats mesurables.",
    url: "/a-propos",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "/a-propos",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
