import { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "Devis personnalisé gratuit",
  description:
    "Obtenez un devis personnalisé pour votre projet digital au Luxembourg. Répondez à quelques questions et recevez une estimation détaillée.",
  keywords: [
    "devis marketing digital",
    "estimation projet web",
    "devis gratuit Luxembourg",
    "prix site web",
  ],
  openGraph: {
    title: "Devis personnalisé | ADVANTAGE",
    description:
      "Obtenez un devis personnalisé pour votre projet digital. Estimation détaillée et sans engagement.",
    url: "/devis-personnalise",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "/devis-personnalise",
  },
};

export default function CustomQuotePage() {
  return <Content />;
}
