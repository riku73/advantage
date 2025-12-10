import type { Metadata } from "next";
import LandingPagesPageContent from "@/components/service-page-landing";

export const metadata: Metadata = {
  title: "Landing pages optimisées Luxembourg",
  description:
    "Créez des landing pages à fort taux de conversion au Luxembourg. Design orienté conversion, A/B testing et optimisation continue.",
  keywords: [
    "landing page Luxembourg",
    "page de destination",
    "optimisation conversion",
    "A/B testing",
    "page de vente",
    "lead generation",
    "taux de conversion",
  ],
  openGraph: {
    title: "Landing pages optimisées | ADVANTAGE",
    description:
      "Créez des landing pages à fort taux de conversion au Luxembourg. Design orienté conversion et A/B testing.",
    url: "/services/landing-pages",
    images: ["/images/landing-page-optimisee-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/landing-pages",
  },
};

export default function LandingPagesPage() {
  return <LandingPagesPageContent />;
}
