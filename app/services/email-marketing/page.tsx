import type { Metadata } from "next";
import EmailMarketingPageContent from "@/components/service-page-email";

export const metadata: Metadata = {
  title: "E-mail marketing | Advantage",
  description:
    "Fidélisez et convertissez avec l'e-mail marketing. Campagnes automatisées, segmentation avancée et reporting détaillé.",
};

export default function EmailMarketingPage() {
  return <EmailMarketingPageContent />;
}
