import type { Metadata } from "next";
import SEAPageContent from "@/components/service-page-sea";

export const metadata: Metadata = {
  title: "SEA - Google Ads | ADVANTAGE",
  description:
    "Générez des résultats immédiats avec nos campagnes Google Ads optimisées. ROI maximal, ciblage précis et reporting transparent.",
};

export default function SEAPage() {
  return <SEAPageContent />;
}
