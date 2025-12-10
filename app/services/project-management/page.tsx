import { Metadata } from "next";
import ProjectManagementPageContent from "@/components/service-page-project-management";

export const metadata: Metadata = {
  title: "Gestion de projet externalisée Luxembourg",
  description:
    "Coordination complète de vos projets digitaux et marketing au Luxembourg. Pilotage de A à Z avec un interlocuteur unique.",
  keywords: [
    "gestion de projet Luxembourg",
    "project management",
    "coordination projet",
    "externalisation projet",
    "chef de projet digital",
  ],
  openGraph: {
    title: "Gestion de projet externalisée | ADVANTAGE",
    description:
      "Coordination complète de vos projets digitaux et marketing de A à Z.",
    url: "/services/project-management",
    images: ["/images/gestion-projet-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/project-management",
  },
};

export default function ProjectManagementPage() {
  return <ProjectManagementPageContent />;
}
