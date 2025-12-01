"use client";

import Link from "next/link";
import {
  Palette,
  ArrowRight,
  Sparkles,
  Eye,
  Shield,
  Target,
  FileText,
  Image as ImageIcon,
  Type,
  Layers,
  Share2,
  Download,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { logoBrandingFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: Sparkles,
    title: "Identité unique et mémorable",
    description:
      "Un logo et une identité visuelle créés sur mesure pour vous démarquer de la concurrence et marquer les esprits.",
  },
  {
    icon: Eye,
    title: "Cohérence sur tous les supports",
    description:
      "Guide de style complet pour garantir une image professionnelle et cohérente sur tous vos canaux de communication.",
  },
  {
    icon: Shield,
    title: "Professionnalisme renforcé",
    description:
      "Une identité visuelle soignée inspire confiance et crédibilité auprès de vos clients et partenaires.",
  },
  {
    icon: Target,
    title: "Différenciation concurrentielle",
    description:
      "Positionnement visuel unique qui vous distingue et renforce votre image de marque sur votre marché.",
  },
];

const deliverables = [
  {
    icon: ImageIcon,
    name: "Logo principal + variations",
    description: "Versions couleur, noir et blanc, monochrome.",
  },
  {
    icon: Palette,
    name: "Palette de couleurs",
    description: "Couleurs primaires et secondaires avec codes.",
  },
  {
    icon: Type,
    name: "Typographie personnalisée",
    description: "Polices pour titres et corps de texte.",
  },
  {
    icon: FileText,
    name: "Guide de style PDF",
    description: "Documentation complète de votre identité.",
  },
  {
    icon: Share2,
    name: "Templates réseaux sociaux",
    description: "Modèles pour vos publications sociales.",
  },
  {
    icon: Download,
    name: "Fichiers sources complets",
    description: "AI, SVG, PNG, PDF pour tous usages.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Brief créatif",
    description:
      "Questionnaire approfondi pour comprendre votre vision, vos valeurs, votre cible et vos préférences esthétiques.",
  },
  {
    title: "Recherche & Inspiration",
    description:
      "Analyse de votre secteur, benchmark concurrentiel et création d'un moodboard pour définir la direction créative.",
  },
  {
    title: "Propositions de concepts",
    description:
      "Présentation de 3 concepts de logo distincts avec les premières applications pour vous aider à choisir.",
  },
  {
    title: "Révisions & Finalisation",
    description:
      "Affinage du concept choisi avec 2 rounds de révisions inclus jusqu'à la validation finale.",
  },
  {
    title: "Livraison complète",
    description:
      "Remise de tous les fichiers, guide de style et templates prêts à l'emploi pour vos communications.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "Sites Web", href: "/services/sites-web" },
  { name: "Print Design", href: "/services/print-design" },
  { name: "Contenu Social", href: "/services/social-content" },
];

export default function LogoBrandingPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop&q=80"
        backgroundAlt="Logo design and brand identity creation"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Palette className="h-4 w-4 text-primary" />
                <span>Identité Visuelle</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Une identité de marque qui vous démarque
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Créez une image de marque forte et cohérente avec un logo
                professionnel et un guide de style complet pour tous vos
                supports de communication.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Démarrer votre branding
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        title="Pourquoi investir dans votre identité visuelle"
        subtitle="Une image de marque professionnelle pour votre entreprise"
        benefits={benefits}
        columns={2}
      />

      {/* Deliverables */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold">Ce que vous recevez</h2>
              <p className="mt-4 text-muted-foreground">
                Un package complet pour construire votre identité de marque
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((item) => {
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
        title="Notre processus créatif"
        subtitle="Une méthodologie structurée pour un résultat optimal"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur le branding"
        subtitle="Tout ce que vous devez savoir sur la création de logo et d'identité visuelle"
        faqs={logoBrandingFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Prêt à créer votre identité de marque ?"
        description="Discutons de votre vision et créons ensemble une identité visuelle qui reflète parfaitement votre entreprise."
        buttonText="Demandez un devis"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
