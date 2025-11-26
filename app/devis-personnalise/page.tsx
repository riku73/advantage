import { Metadata } from "next";
import CustomQuotePageContent from "@/components/custom-quote-page-content";

export const metadata: Metadata = {
  title: "Devis personnalisé | Advantage Marketing",
  description: "Obtenez un devis personnalisé pour votre projet digital. Répondez à quelques questions et recevez une estimation détaillée adaptée à vos besoins.",
};

export default function CustomQuotePage() {
  return <CustomQuotePageContent />;
}
