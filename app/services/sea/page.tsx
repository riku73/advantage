import type { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "SEA - Google Ads Luxembourg",
  description:
    "Générez des résultats immédiats avec nos campagnes Google Ads au Luxembourg. ROI maximal, ciblage précis et reporting transparent.",
  keywords: [
    "Google Ads Luxembourg",
    "SEA",
    "publicité Google",
    "campagnes PPC",
    "référencement payant",
    "agence Google Ads",
    "publicité en ligne",
  ],
  openGraph: {
    title: "SEA - Google Ads | ADVANTAGE",
    description:
      "Générez des résultats immédiats avec nos campagnes Google Ads au Luxembourg. ROI maximal et ciblage précis.",
    url: "/services/sea",
    images: ["/images/sea-publicite-google-ads-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/sea",
  },
};

export default function SEAPage() {
  return <Content />;
}
