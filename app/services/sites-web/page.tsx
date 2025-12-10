import type { Metadata } from "next";
import SitesWebPageContent from "@/components/service-page-sites-web";

export const metadata: Metadata = {
  title: "Création de sites web Luxembourg",
  description:
    "Création de sites web professionnels au Luxembourg. Design sur-mesure, optimisés pour la conversion et les moteurs de recherche.",
  keywords: [
    "création site web Luxembourg",
    "agence web Luxembourg",
    "site internet professionnel",
    "développement web",
    "site vitrine",
    "site e-commerce",
    "web design",
  ],
  openGraph: {
    title: "Création de sites web | ADVANTAGE",
    description:
      "Création de sites web professionnels au Luxembourg. Design sur-mesure et optimisés pour la conversion.",
    url: "/services/sites-web",
    images: ["/images/creation-site-web-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/sites-web",
  },
};

export default function SitesWebPage() {
  return <SitesWebPageContent />;
}
