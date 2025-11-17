import { Metadata } from "next";
import PhotographyPageContent from "@/components/service-page-photography";

export const metadata: Metadata = {
  title: "Photographie Professionnelle | Advantage",
  description:
    "Séances photo événements, corporate, produits. Photos haute résolution avec retouche à partir de €290/session.",
  keywords: [
    "photographe professionnel",
    "photo corporate",
    "photo événement",
    "photo produit",
    "portraits professionnels",
  ],
};

export default function PhotographyPage() {
  return <PhotographyPageContent />;
}
