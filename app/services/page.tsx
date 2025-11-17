import type { Metadata } from "next";
import ServicesPageContent from "@/components/services-page-content";

export const metadata: Metadata = {
  title: "Services Marketing Digital - Advantage",
  description:
    "Découvrez nos services de marketing digital : SEO, SEA, Email Marketing, Sites Web et Landing Pages pour votre croissance.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
