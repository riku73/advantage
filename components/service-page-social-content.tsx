"use client";

import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  CheckCircle2,
  Palette,
  Clock,
  TrendingUp,
  Hash,
  Image as ImageIcon,
  PenTool,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { socialContentFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: Calendar,
    title: "Présence cohérente",
    description:
      "Planning éditorial structuré pour une présence régulière et professionnelle sur vos réseaux sociaux.",
  },
  {
    icon: Palette,
    title: "Visuels professionnels",
    description:
      "Créations graphiques sur mesure qui reflètent votre identité de marque et captent l'attention de votre audience.",
  },
  {
    icon: Clock,
    title: "Gain de temps considérable",
    description:
      "Déléguez la création et la planification de votre contenu pour vous concentrer sur votre coeur de métier.",
  },
  {
    icon: TrendingUp,
    title: "Engagement optimisé",
    description:
      "Contenus créés selon les meilleures pratiques pour maximiser les interactions avec votre communauté.",
  },
];

const included = [
  {
    icon: ImageIcon,
    name: "8-10 posts par mois",
    description: "Contenu régulier pour maintenir l'engagement.",
  },
  {
    icon: Palette,
    name: "Création visuelle",
    description: "Visuels personnalisés pour chaque publication.",
  },
  {
    icon: PenTool,
    name: "Rédaction de captions",
    description: "Textes optimisés pour l'engagement.",
  },
  {
    icon: Hash,
    name: "Recherche de hashtags",
    description: "Hashtags stratégiques pour la visibilité.",
  },
  {
    icon: Calendar,
    name: "Planning éditorial",
    description: "Calendrier structuré et thématique.",
  },
  {
    icon: Clock,
    name: "Scheduling automatique",
    description: "Publication aux heures optimales.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Briefing & Stratégie",
    description:
      "Définition de votre ligne éditoriale, ton de communication et objectifs mensuels. Analyse de votre audience cible.",
  },
  {
    title: "Création du calendrier",
    description:
      "Planification des thématiques et sujets du mois. Proposition d'un calendrier éditorial complet pour validation.",
  },
  {
    title: "Production des contenus",
    description:
      "Création des visuels, rédaction des captions et recherche des hashtags optimaux pour chaque publication.",
  },
  {
    title: "Publication & Suivi",
    description:
      "Programmation automatique aux heures optimales et suivi des performances avec rapport mensuel.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "Social Media Ads", href: "/services/social-media-ads" },
  { name: "Photographie", href: "/services/photography" },
  { name: "Vidéo", href: "/services/video-production" },
];

export default function SocialContentPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="/images/creation-contenu-reseaux-sociaux-luxembourg.jpg"
        backgroundAlt="Création contenu réseaux sociaux Luxembourg"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Création de contenu social</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Contenu social qui engage votre audience
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Calendrier éditorial complet avec visuels créatifs, captions
                optimisées et hashtags stratégiques pour maximiser votre
                engagement sur les réseaux sociaux.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/devis-personnalise"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Démarrer maintenant
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        backgroundImage="/images/creation-contenu-reseaux-sociaux-luxembourg.jpg"
        title="Les avantages de déléguer votre contenu social"
        subtitle="Concentrez-vous sur votre métier, nous gérons votre présence en ligne"
        benefits={benefits}
        columns={2}
      />

      {/* Ce qui est inclus */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ce qui est inclus</h2>
              <p className="mt-4 text-muted-foreground">
                Un service complet pour une présence sociale professionnelle
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {included.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.name}>
                    <div className="h-full rounded-xl border-2 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg">{item.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
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
        title="Notre méthodologie"
        subtitle="Un processus structuré pour un contenu de qualité"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur le contenu réseaux sociaux"
        subtitle="Tout ce que vous devez savoir sur nos services de création de contenu"
        faqs={socialContentFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Prêt à avoir une présence sociale impactante ?"
        description="Laissez-nous créer du contenu de qualité pendant que vous vous concentrez sur votre business."
        buttonText="Demandez un devis"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
