import type { Metadata } from "next";
import SEOPageContent from "@/components/service-page-seo";

export const metadata: Metadata = {
  title: "SEO - Référencement naturel | ADVANTAGE",
  description:
    "Améliorez votre visibilité sur Google avec nos services SEO. Audit, optimisation, stratégie de contenu et link building pour un trafic qualifié durable.",
};

export default function SEOPage() {
  return <SEOPageContent />;
}
