"use client";

import Link from "next/link";
import {
  Share2,
  ArrowRight,
  Target,
  BarChart3,
  Eye,
  Users,
  Facebook,
  Linkedin,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { socialMediaAdsFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: Target,
    title: "Ciblage ultra-précis",
    description:
      "Atteignez exactement votre audience idéale grâce aux options de ciblage avancées : intérêts, comportements, démographie, lookalikes.",
  },
  {
    icon: BarChart3,
    title: "ROI mesurable",
    description:
      "Tracking complet des conversions pour mesurer précisément le retour sur investissement de chaque euro dépensé en publicité.",
  },
  {
    icon: Eye,
    title: "Visibilité immédiate",
    description:
      "Contrairement au contenu organique, les social ads génèrent de la visibilité instantanée auprès de votre cible.",
  },
  {
    icon: Users,
    title: "Retargeting intelligent",
    description:
      "Reciblez les visiteurs de votre site ou les personnes ayant interagi avec votre contenu pour maximiser les conversions.",
  },
];

const platforms = [
  {
    icon: Facebook,
    name: "Meta Ads",
    description: "Facebook & Instagram Ads pour toucher la plus large audience.",
  },
  {
    icon: Linkedin,
    name: "LinkedIn Ads",
    description: "Ciblage B2B précis par fonction, secteur et entreprise.",
  },
  {
    icon: Share2,
    name: "TikTok Ads",
    description: "Formats créatifs pour toucher les générations Y et Z.",
  },
  {
    icon: Share2,
    name: "Twitter/X Ads",
    description: "Visibilité sur les tendances et conversations en temps réel.",
  },
  {
    icon: Share2,
    name: "Pinterest Ads",
    description: "Idéal pour l'e-commerce, décoration et lifestyle.",
  },
  {
    icon: Share2,
    name: "Snapchat Ads",
    description: "Formats immersifs pour les audiences jeunes.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Audit & Stratégie",
    description:
      "Analyse de votre marché, définition des objectifs de campagne et sélection des plateformes les plus pertinentes pour votre cible.",
  },
  {
    title: "Création des audiences",
    description:
      "Configuration des audiences personnalisées, lookalikes et ciblages par intérêts. Mise en place du pixel de tracking.",
  },
  {
    title: "Création des publicités",
    description:
      "Design des visuels et vidéos publicitaires, rédaction des copies persuasives et configuration des différents formats.",
  },
  {
    title: "Lancement & Optimisation",
    description:
      "Mise en ligne des campagnes, A/B testing continu et optimisation des enchères pour maximiser les performances.",
  },
  {
    title: "Reporting & Scaling",
    description:
      "Rapports détaillés des performances, identification des opportunités de scaling et recommandations stratégiques.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "Contenu Social", href: "/services/social-content" },
  { name: "SEA", href: "/services/sea" },
  { name: "Landing Pages", href: "/services/landing-pages" },
];

export default function SocialMediaAdsPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="/images/social-media-marketing-luxembourg.jpg"
        backgroundAlt="Publicité réseaux sociaux Luxembourg - Social Ads"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Share2 className="h-4 w-4 text-primary" />
                <span>Social media ads</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Publicités qui performent sur les réseaux sociaux
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Atteignez votre audience cible là où elle se trouve avec des
                campagnes publicitaires optimisées sur Meta, LinkedIn, TikTok et
                plus. ROI mesurable et résultats concrets.
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
        backgroundImage="/images/social-media-marketing-luxembourg.jpg"
        title="Pourquoi parier sur la publicité sociale ?"
        subtitle="La publicité sociale pour atteindre vos objectifs business"
        benefits={benefits}
        columns={2}
      />

      {/* Platforms */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Plateformes disponibles</h2>
              <p className="mt-4 text-muted-foreground">
                Nous gérons vos campagnes sur toutes les plateformes majeures
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <StaggerItem key={platform.name}>
                    <div className="h-full rounded-xl border-2 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg">{platform.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {platform.description}
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
        title="Notre méthodologie Social Ads"
        subtitle="Une approche structurée pour des campagnes performantes"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur la publicité réseaux sociaux"
        subtitle="Tout ce que vous devez savoir sur nos services Social Ads"
        faqs={socialMediaAdsFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Prêt à booster votre visibilité sociale ?"
        description="Discutons de vos objectifs et créons ensemble une stratégie publicitaire qui génère des résultats."
        buttonText="Demandez un devis"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
