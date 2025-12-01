import { Metadata } from "next";
import LogoBrandingPageContent from "@/components/service-page-logo-branding";

export const metadata: Metadata = {
  title: "Logo & identité de marque | ADVANTAGE",
  description:
    "Créez une identité visuelle forte et mémorable. Logo professionnel, guide de style complet et kit réseaux sociaux à partir de €690.",
  keywords: [
    "logo design",
    "identité de marque",
    "branding",
    "charte graphique",
    "identité visuelle",
  ],
};

export default function LogoBrandingPage() {
  return <LogoBrandingPageContent />;
}
