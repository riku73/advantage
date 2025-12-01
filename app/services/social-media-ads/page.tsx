import { Metadata } from "next";
import SocialMediaAdsPageContent from "@/components/service-page-social-media-ads";

export const metadata: Metadata = {
  title: "Publicité sur réseaux sociaux | ADVANTAGE",
  description:
    "Campagnes publicitaires optimisées sur Facebook, Instagram, LinkedIn, TikTok. Setup €290, gestion mensuelle à partir de €190/mois.",
  keywords: [
    "social media ads",
    "facebook ads",
    "instagram ads",
    "linkedin ads",
    "publicité réseaux sociaux",
  ],
};

export default function SocialMediaAdsPage() {
  return <SocialMediaAdsPageContent />;
}
