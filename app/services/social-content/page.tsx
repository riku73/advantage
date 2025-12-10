import { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "Création contenu réseaux sociaux Luxembourg",
  description:
    "Calendrier éditorial complet pour vos réseaux sociaux au Luxembourg. Visuels, captions et stratégie de contenu inclus.",
  keywords: [
    "création contenu Luxembourg",
    "social media content",
    "calendrier éditorial",
    "gestion réseaux sociaux",
    "community management",
    "contenu Instagram",
  ],
  openGraph: {
    title: "Création de contenu réseaux sociaux | ADVANTAGE",
    description:
      "Calendrier éditorial complet pour vos réseaux sociaux. Visuels, captions et stratégie inclus.",
    url: "/services/social-content",
    images: ["/images/creation-contenu-reseaux-sociaux-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/social-content",
  },
};

export default function SocialContentPage() {
  return <Content />;
}
