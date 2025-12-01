import { Metadata } from "next";
import SocialContentPageContent from "@/components/service-page-social-content";

export const metadata: Metadata = {
  title: "Création de contenu | ADVANTAGE",
  description:
    "Calendrier éditorial complet avec 8-10 posts par mois. Visuels, captions et hashtags inclus à partir de €390/mois.",
  keywords: [
    "social media content",
    "création contenu",
    "calendrier éditorial",
    "gestion réseaux sociaux",
  ],
};

export default function SocialContentPage() {
  return <SocialContentPageContent />;
}
