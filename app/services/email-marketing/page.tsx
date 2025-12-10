import type { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "E-mail marketing Luxembourg",
  description:
    "Fidélisez et convertissez avec l'e-mail marketing au Luxembourg. Campagnes automatisées, segmentation avancée et reporting détaillé.",
  keywords: [
    "email marketing Luxembourg",
    "newsletter",
    "marketing automation",
    "campagne email",
    "segmentation",
    "emailing professionnel",
    "fidélisation client",
  ],
  openGraph: {
    title: "E-mail marketing | ADVANTAGE",
    description:
      "Fidélisez et convertissez avec l'e-mail marketing au Luxembourg. Campagnes automatisées et segmentation avancée.",
    url: "/services/email-marketing",
    images: ["/images/email-marketing-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/email-marketing",
  },
};

export default function EmailMarketingPage() {
  return <Content />;
}
