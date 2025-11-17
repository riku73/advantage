import { Metadata } from "next";
import PrintCoordinationPageContent from "@/components/service-page-print-coordination";

export const metadata: Metadata = {
  title: "Coordination d'Impression | Advantage",
  description:
    "Nous gérons l'impression de vos supports avec nos partenaires locaux. Qualité garantie, tarifs transparents à partir de €60.",
  keywords: [
    "services impression",
    "coordination impression",
    "imprimerie",
    "gestion impression",
  ],
};

export default function PrintCoordinationPage() {
  return <PrintCoordinationPageContent />;
}
