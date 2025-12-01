import type { Metadata } from "next";
import AboutPageContent from "@/components/about-page-content";

export const metadata: Metadata = {
  title: "À propos - Notre agence | ADVANTAGE",
  description:
    "Découvrez Advantage, votre agence marketing digital dédiée à votre croissance. Expertise, transparence et résultats mesurables.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
