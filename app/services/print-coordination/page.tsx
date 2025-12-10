import { Metadata } from "next";
import PrintCoordinationPageContent from "@/components/service-page-print-coordination";

export const metadata: Metadata = {
  title: "Coordination impression Luxembourg",
  description:
    "Gestion complète de l'impression de vos supports au Luxembourg. Partenaires locaux, qualité garantie et suivi de A à Z.",
  keywords: [
    "services impression Luxembourg",
    "coordination impression",
    "imprimerie Luxembourg",
    "gestion impression",
    "print management",
  ],
  openGraph: {
    title: "Coordination d'impression | ADVANTAGE",
    description:
      "Gestion complète de l'impression de vos supports. Partenaires locaux et qualité garantie.",
    url: "/services/print-coordination",
    images: ["/images/coordination-impression-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/print-coordination",
  },
};

export default function PrintCoordinationPage() {
  return <PrintCoordinationPageContent />;
}
