import type { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "SEO - Référencement naturel Luxembourg",
  description:
    "Améliorez votre visibilité sur Google avec nos services SEO au Luxembourg. Audit, optimisation, stratégie de contenu et link building pour un trafic qualifié durable.",
  keywords: [
    "SEO Luxembourg",
    "référencement naturel",
    "audit SEO",
    "optimisation Google",
    "agence SEO",
    "link building",
    "stratégie de contenu",
  ],
  openGraph: {
    title: "SEO - Référencement naturel | ADVANTAGE",
    description:
      "Améliorez votre visibilité sur Google avec nos services SEO au Luxembourg. Audit, optimisation et stratégie de contenu.",
    url: "/services/seo",
    images: ["/images/seo-referencement-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/seo",
  },
};

export default function SEOPage() {
  return <Content />;
}
