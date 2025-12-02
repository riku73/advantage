"use client";

import Link from "next/link";
import {
  MousePointerClick,
  ArrowRight,
  CheckCircle2,
  Target,
  Euro,
  BarChart3,
  Eye,
  ShoppingBag,
  Video,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { seaFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: Target,
    title: "Résultats immédiats",
    description:
      "Contrairement au SEO, le SEA génère du trafic qualifié dès la mise en ligne de vos campagnes publicitaires.",
  },
  {
    icon: Eye,
    title: "Ciblage ultra-précis",
    description:
      "Atteignez exactement votre audience idéale grâce aux options de ciblage avancées : mots-clés, localisation, démographie.",
  },
  {
    icon: Euro,
    title: "Contrôle total du budget",
    description:
      "Définissez votre budget quotidien et ne payez que lorsqu'un utilisateur clique sur votre annonce. Aucune surprise.",
  },
  {
    icon: BarChart3,
    title: "ROI mesurable",
    description:
      "Tracking complet des conversions pour mesurer précisément le retour sur investissement de chaque euro dépensé.",
  },
];

const services = [
  {
    icon: MousePointerClick,
    name: "Google Search",
    description: "Annonces textuelles sur les résultats de recherche Google.",
  },
  {
    icon: Eye,
    name: "Display & Remarketing",
    description: "Bannières visuelles sur le réseau Display Google et retargeting.",
  },
  {
    icon: ShoppingBag,
    name: "Google Shopping",
    description: "Annonces produits avec prix et images pour l'e-commerce.",
  },
  {
    icon: Video,
    name: "YouTube Ads",
    description: "Publicités vidéo avant, pendant ou après les vidéos YouTube.",
  },
  {
    icon: BarChart3,
    name: "Optimisation des conversions",
    description: "Amélioration continue des taux de conversion et du Quality Score.",
  },
  {
    icon: Target,
    name: "Tracking avancé",
    description: "Mise en place de tracking précis et tableaux de bord personnalisés.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Audit & Stratégie",
    description:
      "Analyse approfondie de votre marché, étude de la concurrence et définition des objectifs de campagne avec KPIs mesurables.",
  },
  {
    title: "Structure de campagne",
    description:
      "Création des groupes d'annonces optimisés, sélection des mots-clés à fort potentiel et définition des audiences cibles.",
  },
  {
    title: "Création des annonces",
    description:
      "Rédaction des textes publicitaires persuasifs et configuration des extensions d'annonces pour maximiser la visibilité.",
  },
  {
    title: "Lancement & Monitoring",
    description:
      "Mise en ligne des campagnes avec surveillance des performances en temps réel et alertes automatisées.",
  },
  {
    title: "Optimisation continue",
    description:
      "Ajustements des enchères basés sur les données, A/B testing des annonces et amélioration constante du Quality Score.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "SEO", href: "/services/seo" },
  { name: "Landing Pages", href: "/services/landing-pages" },
  { name: "Social Media Ads", href: "/services/social-media-ads" },
];

export default function SEAPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="/images/sea-publicite-google-ads-luxembourg.jpg"
        backgroundAlt="SEA Publicité Google Ads Luxembourg - Campagnes PPC"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <MousePointerClick className="h-4 w-4 text-primary" />
                <span>Référencement Payant</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Google Ads pour des résultats immédiats
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Atteignez vos clients au moment précis où ils recherchent vos
                produits ou services avec des campagnes Google Ads optimisées.
                Résultats mesurables dès les premières 24 heures.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Lancer une campagne
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        title="Pourquoi choisir Google Ads ?"
        subtitle="La publicité payante la plus efficace pour générer du trafic qualifié"
        benefits={benefits}
        columns={2}
      />

      {/* Services SEA */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nos services SEA</h2>
              <p className="mt-4 text-muted-foreground">
                Une gamme complète de services pour maximiser votre présence sur Google
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={service.name}>
                    <div className="h-full rounded-xl border-2 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg">{service.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {service.description}
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
        title="Notre méthodologie Google Ads"
        subtitle="Une approche structurée en 5 étapes pour des campagnes performantes"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur Google Ads"
        subtitle="Tout ce que vous devez savoir sur la publicité payante"
        faqs={seaFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Maximisez votre ROI avec Google Ads"
        description="Discutons de vos objectifs et créons ensemble une stratégie Google Ads qui génère des résultats concrets."
        buttonText="Demandez un devis"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
