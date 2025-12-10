import { Metadata } from "next";
import Content from "./_components/content";

export const metadata: Metadata = {
  title: "Production vidéo professionnelle Luxembourg",
  description:
    "Vidéos promotionnelles, corporate et interviews au Luxembourg. Production professionnelle du tournage au montage.",
  keywords: [
    "production vidéo Luxembourg",
    "vidéo promotionnelle",
    "vidéo corporate",
    "tournage vidéo",
    "montage vidéo",
    "vidéaste professionnel",
  ],
  openGraph: {
    title: "Production vidéo professionnelle | ADVANTAGE",
    description:
      "Vidéos promotionnelles, corporate et interviews. Production professionnelle du tournage au montage.",
    url: "/services/video-production",
    images: ["/images/production-video-luxembourg.jpg"],
  },
  alternates: {
    canonical: "/services/video-production",
  },
};

export default function VideoProductionPage() {
  return <Content />;
}
