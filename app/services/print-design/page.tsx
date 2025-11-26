import { Metadata } from "next";
import PrintDesignPageContent from "@/components/service-page-print-design";

export const metadata: Metadata = {
  title: "Design de supports imprimés | Advantage",
  description:
    "Cartes de visite, flyers, brochures professionnels. Designs créatifs prêts pour l'impression à partir de €90.",
  keywords: [
    "design print",
    "cartes de visite",
    "flyers",
    "brochures",
    "supports imprimés",
  ],
};

export default function PrintDesignPage() {
  return <PrintDesignPageContent />;
}
