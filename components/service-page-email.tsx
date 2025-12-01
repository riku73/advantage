"use client";

import Link from "next/link";
import {
  Mail,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Users,
  Zap,
  BarChart3,
  Settings,
  Palette,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { emailMarketingFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: DollarSign,
    title: "ROI exceptionnel",
    description:
      "L'e-mail marketing offre le meilleur retour sur investissement : en moyenne 42 EUR générés pour chaque euro investi.",
  },
  {
    icon: Users,
    title: "Communication personnalisée",
    description:
      "Créez des messages sur mesure pour chaque segment de votre audience grâce à la personnalisation avancée et la segmentation comportementale.",
  },
  {
    icon: Zap,
    title: "Automation intelligente",
    description:
      "Gagnez du temps avec des séquences automatisées : bienvenue, panier abandonné, réengagement, anniversaires et plus encore.",
  },
  {
    icon: BarChart3,
    title: "Résultats mesurables",
    description:
      "Suivez vos KPIs en temps réel : taux d'ouverture, clics, conversions et revenus générés par campagne.",
  },
];

const services = [
  {
    icon: Palette,
    name: "Design d'e-mails responsive",
    description: "Templates sur mesure adaptés à tous les clients e-mail.",
  },
  {
    icon: Zap,
    name: "Automation marketing",
    description: "Séquences automatisées pour nurturing et conversion.",
  },
  {
    icon: Users,
    name: "Segmentation comportementale",
    description: "Ciblage précis basé sur les actions de vos contacts.",
  },
  {
    icon: BarChart3,
    name: "A/B Testing",
    description: "Tests comparatifs pour optimiser chaque élément.",
  },
  {
    icon: Settings,
    name: "Intégration CRM",
    description: "Connexion avec vos outils existants et synchronisation.",
  },
  {
    icon: Mail,
    name: "Reporting avancé",
    description: "Tableaux de bord détaillés et analyses approfondies.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Stratégie & Segmentation",
    description:
      "Définition des personas, mapping du parcours client et segmentation avancée de votre base de données pour des communications ciblées.",
  },
  {
    title: "Design des templates",
    description:
      "Création de modèles d'e-mails responsive et attractifs, parfaitement alignés avec votre identité visuelle et optimisés pour tous les clients e-mail.",
  },
  {
    title: "Rédaction & Automation",
    description:
      "Écriture de contenus persuasifs avec copywriting optimisé et configuration des séquences automatisées pour chaque étape du parcours client.",
  },
  {
    title: "Tests & Délivrabilité",
    description:
      "Vérification du spam score, tests multi-clients (Gmail, Outlook, Apple Mail) et optimisation pour une délivrabilité maximale.",
  },
  {
    title: "Analyse & Optimisation",
    description:
      "Reporting détaillé des KPIs, identification des opportunités d'amélioration et optimisation continue des performances.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "Délivrabilité e-mail", href: "/services/email-deliverability" },
  { name: "Landing Pages", href: "/services/landing-pages" },
  { name: "Sites Web", href: "/services/sites-web" },
];

export default function EmailMarketingPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1920&h=1080&fit=crop&q=80"
        backgroundAlt="E-mail marketing campaign with newsletter design"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>E-mail Marketing</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                E-mail marketing qui fidélise vos clients
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Créez des campagnes e-mail personnalisées qui engagent, convertissent
                et fidélisent votre audience avec un ROI exceptionnel de 42x.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Lancer votre campagne
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        title="Pourquoi l'e-mail marketing"
        subtitle="Le canal marketing le plus rentable pour votre entreprise"
        benefits={benefits}
        columns={2}
      />

      {/* Services */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold">Nos services e-mail marketing</h2>
              <p className="mt-4 text-muted-foreground">
                Une offre complète pour maximiser l'impact de vos campagnes e-mail
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
        title="Notre méthodologie e-mail marketing"
        subtitle="Une approche structurée en 5 étapes pour des campagnes performantes"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur l'e-mail marketing"
        subtitle="Tout ce que vous devez savoir sur nos services e-mail"
        faqs={emailMarketingFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Prêt à booster votre e-mail marketing ?"
        description="Découvrez comment nos campagnes e-mail peuvent transformer votre communication et générer des résultats concrets."
        buttonText="Demandez un devis"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
