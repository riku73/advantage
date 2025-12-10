import type { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "Contact - Demandez un devis gratuit",
  description:
    "Contactez ADVANTAGE pour discuter de votre projet marketing digital au Luxembourg. Devis gratuit et sans engagement.",
  keywords: [
    "contact agence marketing",
    "devis marketing digital",
    "agence Luxembourg contact",
    "demande devis",
  ],
  openGraph: {
    title: "Contact | ADVANTAGE",
    description:
      "Contactez ADVANTAGE pour discuter de votre projet marketing digital. Devis gratuit et sans engagement.",
    url: "/contact",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <Content />;
}
