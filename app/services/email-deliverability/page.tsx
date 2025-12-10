import { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "Délivrabilité e-mail Luxembourg",
  description:
    "Audit et optimisation de la délivrabilité e-mail au Luxembourg. Configuration SPF, DKIM, DMARC et suivi de réputation pour des e-mails qui arrivent en boîte de réception.",
  keywords: [
    "délivrabilité e-mail",
    "SPF",
    "DKIM",
    "DMARC",
    "spam score",
    "réputation e-mail",
    "configuration email",
  ],
  openGraph: {
    title: "Délivrabilité e-mail | ADVANTAGE",
    description:
      "Audit et optimisation de la délivrabilité e-mail. Configuration SPF, DKIM, DMARC et suivi de réputation.",
    url: "/services/email-deliverability",
    images: ["/images/delivrabilite-email-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/email-deliverability",
  },
};

export default function EmailDeliverabilityPage() {
  return <Content />;
}
