"use client";

import Link from "next/link";
import {
  Target,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  MousePointerClick,
  Settings,
  BarChart3,
  Smartphone,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { landingPagesFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: TrendingUp,
    title: "Taux de conversion optimisé",
    description:
      "Nos landing pages génèrent jusqu'à 5x plus de conversions que les pages traditionnelles grâce à une structure éprouvée.",
  },
  {
    icon: MousePointerClick,
    title: "Design focalisé sur l'action",
    description:
      "Chaque élément est pensé pour guider le visiteur vers l'action souhaitée : formulaire, achat ou prise de contact.",
  },
  {
    icon: BarChart3,
    title: "A/B testing intégré",
    description:
      "Tests continus sur les titres, visuels et CTA pour identifier et déployer les variantes les plus performantes.",
  },
  {
    icon: Zap,
    title: "Chargement ultra-rapide",
    description:
      "Performance optimisée pour un chargement en moins de 3 secondes, essentiel pour maximiser les conversions.",
  },
  {
    icon: Settings,
    title: "Intégration complète",
    description:
      "Connexion native avec vos outils CRM, e-mail marketing, analytics et plateformes publicitaires.",
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    description:
      "Expérience optimale sur tous les appareils : mobile, tablette et desktop pour ne perdre aucun prospect.",
  },
];

const features = [
  "Copywriting persuasif",
  "Design conversion-driven",
  "Formulaires optimisés",
  "A/B testing",
  "Analytics avancés",
  "Responsive design",
];

const processSteps: ProcessStep[] = [
  {
    title: "Brief & Objectifs",
    description:
      "Définition des KPIs, de l'audience cible et des objectifs de conversion. Analyse de votre offre et de votre proposition de valeur unique.",
  },
  {
    title: "Design & Copywriting",
    description:
      "Création du design conversion-driven et rédaction persuasive. Structure de page optimisée pour maximiser l'engagement.",
  },
  {
    title: "Développement & Intégration",
    description:
      "Intégration responsive avec formulaires optimisés, tracking avancé et connexion à vos outils marketing existants.",
  },
  {
    title: "Tests & Optimisation",
    description:
      "A/B testing continu, analyse des heatmaps et ajustements basés sur les données pour améliorer les performances.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "Sites Web", href: "/services/sites-web" },
  { name: "SEA", href: "/services/sea" },
  { name: "SEO", href: "/services/seo" },
];

export default function LandingPagesPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="/images/landing-page-conversion-luxembourg.jpg"
        backgroundAlt="Création landing page Luxembourg - Optimisation conversion"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Target className="h-4 w-4 text-primary" />
                <span>Landing Pages</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Landing pages qui convertissent
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Maximisez vos conversions avec des landing pages conçues pour
                transformer vos visiteurs en clients. Design persuasif,
                copywriting optimisé et tests A/B pour des résultats mesurables.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Créer ma landing page
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        backgroundImage="/images/landing-page-conversion-luxembourg.jpg"
        title="Pourquoi créer une landing page dédiée ?"
        subtitle="Une approche data-driven pour maximiser votre retour sur investissement"
        benefits={benefits}
        columns={3}
      />

      {/* Ce qui est inclus */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ce qui est inclus</h2>
              <p className="mt-4 text-muted-foreground">
                Tout ce dont vous avez besoin pour une landing page performante
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="rounded-lg border bg-card p-6 text-left transition-all hover:shadow-lg hover:border-primary/50">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <p className="mt-3 font-semibold">{feature}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline
        title="Notre méthodologie"
        subtitle="Une approche structurée en 4 étapes pour des landing pages performantes"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur les landing pages"
        subtitle="Tout ce que vous devez savoir sur nos pages de conversion"
        faqs={landingPagesFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Boostez vos conversions dès aujourd'hui"
        description="Créons ensemble une landing page qui génère des résultats concrets pour votre business."
        buttonText="Demandez un devis"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
