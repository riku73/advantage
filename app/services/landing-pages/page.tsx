import type { Metadata } from "next";
import LandingPagesPageContent from "@/components/service-page-landing";

export const metadata: Metadata = {
  title: "Landing pages optimisées | Advantage",
  description:
    "Créez des landing pages à fort taux de conversion. Design orienté conversion, A/B testing et optimisation continue.",
};

export default function LandingPagesPage() {
  return <LandingPagesPageContent />;
}
