import type { Metadata } from "next";
import ServicesPageContent from "@/components/services-page-content";

export const metadata: Metadata = {
  title: "Services marketing digital - Advantage",
  description:
    "Découvrez nos services de marketing digital : SEO, SEA, E-mail marketing, Sites web et Landing pages pour votre croissance.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
