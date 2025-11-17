import { Metadata } from "next";
import PackagesPageContent from "@/components/packages-page-content";

export const metadata: Metadata = {
  title: "Packages Bundlés | Advantage",
  description:
    "Économisez jusqu'à €500 avec nos packages bundlés. Start-Up Pack à €1,590 et Growth Pack à €3,290. Solutions complètes pour votre croissance digitale.",
  keywords: [
    "package digital",
    "bundle marketing",
    "pack startup",
    "offre globale agence",
  ],
};

export default function PackagesPage() {
  return <PackagesPageContent />;
}
