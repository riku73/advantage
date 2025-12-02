"use client";

import Link from "next/link";
import {
  Search,
  TrendingUp,
  ArrowRight,
  Target,
  BarChart3,
  Globe,
  FileText,
  Link2,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import FAQSection, { seoFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: TrendingUp,
    title: "Trafic organique qualifié",
    description:
      "Attirez des visiteurs qui recherchent activement vos produits ou services. Le trafic organique a un taux de conversion 14.6% supérieur aux autres canaux.",
  },
  {
    icon: Globe,
    title: "Visibilité durable",
    description:
      "Contrairement aux publicités payantes, les résultats SEO perdurent dans le temps. Un investissement qui continue de rapporter même après l'arrêt des efforts.",
  },
  {
    icon: Target,
    title: "Réduction du coût d'acquisition",
    description:
      "Le SEO offre un coût par acquisition 61% inférieur aux campagnes payantes sur le long terme. Un canal marketing rentable et pérenne.",
  },
  {
    icon: BarChart3,
    title: "Autorité et crédibilité",
    description:
      "Les premiers résultats Google inspirent confiance. Renforcez votre image de marque et votre expertise aux yeux de vos prospects.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Audit SEO complet",
    description:
      "Analyse approfondie de votre site : audit technique (vitesse, mobile, indexation), audit de contenu et analyse des backlinks existants.",
  },
  {
    title: "Stratégie de mots-clés",
    description:
      "Recherche et sélection des mots-clés à fort potentiel. Analyse de la concurrence et définition des priorités d'optimisation.",
  },
  {
    title: "Optimisation technique",
    description:
      "Amélioration de la vitesse, correction des erreurs techniques, optimisation mobile et structure du site pour les moteurs de recherche.",
  },
  {
    title: "Création de contenu",
    description:
      "Rédaction et optimisation de contenus ciblés sur vos mots-clés prioritaires. Stratégie éditoriale pour attirer et engager votre audience.",
  },
  {
    title: "Link Building",
    description:
      "Acquisition de backlinks de qualité auprès de sites pertinents dans votre secteur pour renforcer votre autorité de domaine.",
  },
  {
    title: "Suivi & Reporting",
    description:
      "Monitoring des positions, analyse du trafic et des conversions. Rapports mensuels détaillés et ajustements stratégiques continus.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "SEA", href: "/services/sea" },
  { name: "Sites Web", href: "/services/sites-web" },
  { name: "Landing Pages", href: "/services/landing-pages" },
];

export default function SEOPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="/images/seo-referencement-luxembourg.jpg"
        backgroundAlt="SEO référencement naturel Luxembourg - Optimisation Google"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Search className="h-4 w-4 text-primary" />
                <span>Référencement Naturel</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Boostez votre visibilité avec le SEO
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Positionnez votre site en première page Google et attirez un
                trafic qualifié durable grâce à notre expertise en
                référencement naturel. Stratégie data-driven et résultats mesurables.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Audit SEO gratuit
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits */}
      <BenefitsGrid
        title="Pourquoi travailler votre référencement naturel ?"
        subtitle="Un investissement rentable sur le long terme"
        benefits={benefits}
        columns={2}
      />

      {/* Process Timeline */}
      <ProcessTimeline
        title="Notre méthodologie SEO"
        subtitle="Une approche structurée en 6 étapes pour des résultats optimaux"
        steps={processSteps}
        className="bg-muted/50"
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur le SEO"
        subtitle="Tout ce que vous devez savoir sur le référencement naturel"
        faqs={seoFAQs}
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Prêt à dominer les résultats de recherche ?"
        description="Obtenez un audit SEO gratuit et découvrez comment améliorer votre positionnement."
        buttonText="Demandez votre audit gratuit"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
