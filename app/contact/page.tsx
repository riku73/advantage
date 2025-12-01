import type { Metadata } from "next";
import ContactPageContent from "@/components/contact-page-content";

export const metadata: Metadata = {
  title: "Contact - Demandez un devis | ADVANTAGE",
  description:
    "Contactez Advantage pour discuter de votre projet marketing digital. Devis gratuit et sans engagement.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
