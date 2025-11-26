import { Metadata } from "next";
import EmailDeliverabilityPageContent from "@/components/service-page-email-deliverability";

export const metadata: Metadata = {
  title: "Optimisation de la délivrabilité e-mail | Advantage",
  description:
    "Audit et optimisation de la délivrabilité e-mail. Configuration SPF/DKIM/DMARC et suivi de réputation à €390.",
  keywords: [
    "délivrabilité e-mail",
    "SPF",
    "DKIM",
    "DMARC",
    "spam score",
    "réputation e-mail",
  ],
};

export default function EmailDeliverabilityPage() {
  return <EmailDeliverabilityPageContent />;
}
