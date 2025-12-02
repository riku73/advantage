"use client";

import Link from "next/link";
import {
  Video,
  ArrowRight,
  Play,
  Clapperboard,
  Share2,
  Users,
  Mic,
  Sparkles,
  Film,
  Wand2,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { videoProductionFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: Play,
    title: "Contenu engageant",
    description:
      "La vidéo génère 1200% plus de partages que le texte et les images combinés sur les réseaux sociaux.",
  },
  {
    icon: Clapperboard,
    title: "Production complète",
    description:
      "De la pré-production au montage final, nous gérons tout le processus de création vidéo.",
  },
  {
    icon: Share2,
    title: "Multi-plateforme",
    description:
      "Formats optimisés pour chaque plateforme : YouTube, LinkedIn, Instagram, TikTok, site web.",
  },
  {
    icon: Sparkles,
    title: "Révisions incluses",
    description:
      "Plusieurs rounds de révisions pour un résultat final qui correspond parfaitement à vos attentes.",
  },
];

const videoTypes = [
  {
    icon: Share2,
    name: "Vidéos réseaux sociaux",
    description: "Reels, Stories, posts vidéo optimisés pour l'engagement.",
  },
  {
    icon: Film,
    name: "Vidéos corporate",
    description: "Présentation d'entreprise, valeurs, culture d'entreprise.",
  },
  {
    icon: Mic,
    name: "Interviews & Témoignages",
    description: "Témoignages clients, interviews dirigeants.",
  },
  {
    icon: Clapperboard,
    name: "Vidéos produits",
    description: "Démonstrations, unboxing, mises en situation.",
  },
  {
    icon: Users,
    name: "Couverture événements",
    description: "Aftermovies, highlights, captations live.",
  },
  {
    icon: Wand2,
    name: "Motion design",
    description: "Animations, infographies animées, explainers.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Brief créatif",
    description:
      "Définition des objectifs, du message clé, du ton et du style souhaité. Identification de l'audience cible et des plateformes de diffusion.",
  },
  {
    title: "Pré-production",
    description:
      "Écriture du script, storyboarding et planification du tournage. Organisation logistique : lieux, équipe, matériel.",
  },
  {
    title: "Tournage",
    description:
      "Captation vidéo professionnelle avec équipement HD/4K. Direction artistique et interviews si nécessaire.",
  },
  {
    title: "Post-production",
    description:
      "Montage, étalonnage couleur, sound design et motion graphics. Intégration de la musique et des effets sonores.",
  },
  {
    title: "Livraison",
    description:
      "Export dans tous les formats nécessaires. Déclinaisons pour chaque plateforme (vertical, carré, horizontal).",
  },
];

const relatedServices: RelatedService[] = [
  { name: "Photographie", href: "/services/photography" },
  { name: "Contenu Social", href: "/services/social-content" },
  { name: "Social Media Ads", href: "/services/social-media-ads" },
];

export default function VideoProductionPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="/images/production-video-luxembourg.jpg"
        backgroundAlt="Production vidéo Luxembourg - Tournage professionnel"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Video className="h-4 w-4 text-primary" />
                <span>Production Vidéo</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Vidéos qui captivent votre audience
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                De la vidéo promo courte à la vidéo corporate complète, nous
                créons du contenu vidéo professionnel qui raconte votre histoire
                et engage votre audience.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Créer ma vidéo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        backgroundImage="/images/production-video-luxembourg.jpg"
        title="Pourquoi miser sur la production vidéo ?"
        subtitle="Le format le plus engageant pour votre communication"
        benefits={benefits}
        columns={2}
      />

      {/* Video Types */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Types de vidéos</h2>
              <p className="mt-4 text-muted-foreground">
                Nous produisons tous types de contenus vidéo pour votre entreprise
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videoTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <StaggerItem key={type.name}>
                    <div className="h-full rounded-xl border-2 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg">{type.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {type.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline
        title="Notre processus de production"
        subtitle="De l'idée au produit final"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur la production vidéo"
        subtitle="Tout ce que vous devez savoir sur nos services vidéo"
        faqs={videoProductionFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Prêt à créer du contenu vidéo impactant ?"
        description="Discutons de votre projet vidéo et donnons vie à votre vision."
        buttonText="Demandez un devis"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
