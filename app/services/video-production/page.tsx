import { Metadata } from "next";
import VideoProductionPageContent from "@/components/service-page-video-production";

export const metadata: Metadata = {
  title: "Production vidéo professionnelle | Advantage",
  description:
    "Vidéos promo, corporate, interviews. Production professionnelle à partir de €490 (60s) ou €990 (2-3 min).",
  keywords: [
    "production vidéo",
    "vidéo promo",
    "vidéo corporate",
    "tournage vidéo",
    "montage vidéo",
  ],
};

export default function VideoProductionPage() {
  return <VideoProductionPageContent />;
}
