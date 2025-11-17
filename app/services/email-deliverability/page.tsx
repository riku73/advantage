import { Metadata } from "next";
import EmailDeliverabilityPageContent from "@/components/service-page-email-deliverability";

export const metadata: Metadata = {
  title: "Optimisation de la Délivrabilité Email | Advantage",
  description:
    "Audit et optimisation de la délivrabilité email. Configuration SPF/DKIM/DMARC et suivi de réputation à €390.",
  keywords: [
    "délivrabilité email",
    "SPF",
    "DKIM",
    "DMARC",
    "spam score",
    "réputation email",
  ],
};

export default function EmailDeliverabilityPage() {
  return <EmailDeliverabilityPageContent />;
}
