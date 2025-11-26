import { Metadata } from "next";
import DigitalStrategyPageContent from "@/components/service-page-digital-strategy";

export const metadata: Metadata = {
  title: "Consulting stratégie digitale | Advantage",
  description:
    "Conseil stratégique personnalisé pour votre croissance digitale. Session d'1 heure + roadmap à €120/heure.",
  keywords: [
    "consulting digital",
    "stratégie digitale",
    "conseil marketing",
    "roadmap digitale",
  ],
};

export default function DigitalStrategyPage() {
  return <DigitalStrategyPageContent />;
}
