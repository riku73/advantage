import { Metadata } from "next";
import PrintDesignPageContent from "@/components/service-page-print-design";

export const metadata: Metadata = {
  title: "Design supports imprimés Luxembourg",
  description:
    "Création de cartes de visite, flyers et brochures professionnels au Luxembourg. Designs créatifs et prêts pour l'impression.",
  keywords: [
    "design print Luxembourg",
    "cartes de visite",
    "flyers",
    "brochures",
    "supports imprimés",
    "graphisme print",
  ],
  openGraph: {
    title: "Design supports imprimés | ADVANTAGE",
    description:
      "Création de cartes de visite, flyers et brochures professionnels. Designs créatifs prêts pour l'impression.",
    url: "/services/print-design",
    images: ["/images/design-print-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/print-design",
  },
};

export default function PrintDesignPage() {
  return <PrintDesignPageContent />;
}
