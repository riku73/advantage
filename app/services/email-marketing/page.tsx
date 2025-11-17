import type { Metadata } from "next";
import EmailMarketingPageContent from "@/components/service-page-email";

export const metadata: Metadata = {
  title: "Email Marketing | Advantage",
  description:
    "Fidélisez et convertissez avec l'email marketing. Campagnes automatisées, segmentation avancée et reporting détaillé.",
};

export default function EmailMarketingPage() {
  return <EmailMarketingPageContent />;
}
