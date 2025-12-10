import { Metadata } from "next";
import GlossairePageContent from "@/components/glossaire-page-content";

export const metadata: Metadata = {
  title: "Glossaire marketing digital | ADVANTAGE",
  description:
    "Comprendre le vocabulaire du marketing digital en termes simples. SEO, SEA, ROI, KPI et autres termes expliqués clairement.",
  openGraph: {
    title: "Glossaire marketing digital | ADVANTAGE",
    description:
      "Comprendre le vocabulaire du marketing digital en termes simples.",
    locale: "fr_FR",
  },
};

export default function GlossairePage() {
  return <GlossairePageContent />;
}
