import { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "Publicité réseaux sociaux Luxembourg",
  description:
    "Campagnes publicitaires optimisées au Luxembourg sur Facebook, Instagram, LinkedIn et TikTok. Ciblage précis et ROI mesurable.",
  keywords: [
    "social media ads Luxembourg",
    "facebook ads",
    "instagram ads",
    "linkedin ads",
    "publicité réseaux sociaux",
    "tiktok ads",
  ],
  openGraph: {
    title: "Publicité réseaux sociaux | ADVANTAGE",
    description:
      "Campagnes publicitaires optimisées sur Facebook, Instagram, LinkedIn et TikTok.",
    url: "/services/social-media-ads",
    images: ["/images/publicite-reseaux-sociaux-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/social-media-ads",
  },
};

export default function SocialMediaAdsPage() {
  return <Content />;
}
