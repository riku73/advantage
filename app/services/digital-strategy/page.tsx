import { Metadata } from "next";
import DigitalStrategyPageContent from "@/components/service-page-digital-strategy";

export const metadata: Metadata = {
  title: "Consulting stratégie digitale Luxembourg",
  description:
    "Conseil stratégique personnalisé pour votre croissance digitale au Luxembourg. Audit, roadmap et accompagnement sur-mesure.",
  keywords: [
    "consulting digital Luxembourg",
    "stratégie digitale",
    "conseil marketing digital",
    "roadmap digitale",
    "audit digital",
    "transformation digitale",
  ],
  openGraph: {
    title: "Consulting stratégie digitale | ADVANTAGE",
    description:
      "Conseil stratégique personnalisé pour votre croissance digitale au Luxembourg.",
    url: "/services/digital-strategy",
    images: ["/images/consulting-strategie-digitale-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/digital-strategy",
  },
};

export default function DigitalStrategyPage() {
  return <DigitalStrategyPageContent />;
}
