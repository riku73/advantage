import type { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "Services marketing digital Luxembourg",
  description:
    "Découvrez nos services de marketing digital au Luxembourg : SEO, SEA, e-mail marketing, sites web, landing pages et plus encore.",
  keywords: [
    "services marketing digital",
    "agence digitale Luxembourg",
    "SEO",
    "SEA",
    "création site web",
    "e-mail marketing",
  ],
  openGraph: {
    title: "Services marketing digital | ADVANTAGE",
    description:
      "Découvrez nos services de marketing digital au Luxembourg : SEO, SEA, e-mail marketing, sites web et landing pages.",
    url: "/services",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <Content />;
}
