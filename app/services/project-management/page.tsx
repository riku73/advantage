import { Metadata } from "next";
import ProjectManagementPageContent from "@/components/service-page-project-management";

export const metadata: Metadata = {
  title: "Gestion de Projet Externalisée | Advantage",
  description:
    "Coordination complète de vos projets digitaux et marketing de A à Z. À partir de €490/projet.",
  keywords: [
    "gestion de projet",
    "project management",
    "coordination projet",
    "externalisation",
  ],
};

export default function ProjectManagementPage() {
  return <ProjectManagementPageContent />;
}
