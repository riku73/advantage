import type { Metadata } from "next";
import SitesWebPageContent from "@/components/service-page-sites-web";

export const metadata: Metadata = {
  title: "Sites web | ADVANTAGE",
  description:
    "Création de sites web professionnels, performants et optimisés pour la conversion. Design sur-mesure et technologies modernes.",
};

export default function SitesWebPage() {
  return <SitesWebPageContent />;
}
