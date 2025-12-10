import { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "Logo et identité de marque Luxembourg",
  description:
    "Créez une identité visuelle forte et mémorable au Luxembourg. Logo professionnel, charte graphique et kit réseaux sociaux.",
  keywords: [
    "logo design Luxembourg",
    "identité de marque",
    "branding",
    "charte graphique",
    "identité visuelle",
    "création logo",
  ],
  openGraph: {
    title: "Logo & identité de marque | ADVANTAGE",
    description:
      "Créez une identité visuelle forte et mémorable. Logo professionnel et charte graphique complète.",
    url: "/services/logo-branding",
    images: ["/images/logo-identite-marque-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/logo-branding",
  },
};

export default function LogoBrandingPage() {
  return <Content />;
}
