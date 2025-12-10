import { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "Photographie professionnelle Luxembourg",
  description:
    "Séances photo corporate, événements et produits au Luxembourg. Photos haute résolution avec retouche professionnelle.",
  keywords: [
    "photographe professionnel Luxembourg",
    "photo corporate",
    "photo événement",
    "photo produit",
    "portraits professionnels",
    "photographe entreprise",
  ],
  openGraph: {
    title: "Photographie professionnelle | ADVANTAGE",
    description:
      "Séances photo corporate, événements et produits. Photos haute résolution avec retouche.",
    url: "/services/photography",
    images: ["/images/photographie-professionnelle-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/photography",
  },
};

export default function PhotographyPage() {
  return <Content />;
}
