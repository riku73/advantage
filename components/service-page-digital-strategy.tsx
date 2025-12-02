"use client";

import Link from "next/link";
import {
  Lightbulb,
  ArrowRight,
  Map,
  Users,
  Target,
  Zap,
  Globe,
  Mail,
  BarChart3,
  Search,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { digitalStrategyFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: Map,
    title: "Roadmap claire et actionnable",
    description:
      "Repartez avec un plan d'action concret et priorisé pour les 3 à 6 prochains mois de votre stratégie digitale.",
  },
  {
    icon: Users,
    title: "Conseils d'expert personnalisés",
    description:
      "Bénéficiez de l'expérience acquise sur des dizaines de projets similaires pour éviter les erreurs courantes.",
  },
  {
    icon: Target,
    title: "Priorisation des actions",
    description:
      "Identifiez les quick wins et les actions à fort impact pour maximiser votre retour sur investissement.",
  },
  {
    icon: Zap,
    title: "Recommandations d'outils",
    description:
      "Sélection des meilleurs outils et plateformes adaptés à vos besoins et votre budget.",
  },
];

const topics = [
  {
    icon: Globe,
    name: "Stratégie de présence digitale",
    description: "Définir votre positionnement en ligne et vos objectifs.",
  },
  {
    icon: Target,
    name: "Choix des plateformes",
    description: "Sélectionner les canaux les plus pertinents pour vous.",
  },
  {
    icon: Search,
    name: "Stratégie SEO & Contenu",
    description: "Optimiser votre visibilité organique sur le long terme.",
  },
  {
    icon: BarChart3,
    name: "Publicité digitale",
    description: "SEA, Social Ads : définir votre mix publicitaire optimal.",
  },
  {
    icon: Mail,
    name: "E-mail marketing & Automation",
    description: "Structurer vos séquences et votre nurturing.",
  },
  {
    icon: Zap,
    name: "Optimisation de la conversion",
    description: "Améliorer votre taux de conversion à chaque étape.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Questionnaire préparatoire",
    description:
      "Avant la session, vous remplissez un questionnaire détaillé pour que nous comprenions votre contexte, vos objectifs et vos défis actuels.",
  },
  {
    title: "Session de consulting (2h)",
    description:
      "Échange approfondi pour analyser votre situation, identifier les opportunités et définir les priorités de votre stratégie digitale.",
  },
  {
    title: "Livraison de la roadmap",
    description:
      "Dans les 48h, vous recevez votre roadmap personnalisée avec les actions priorisées et les recommandations d'outils.",
  },
  {
    title: "Support post-session (7 jours)",
    description:
      "Questions par e-mail pendant 7 jours pour clarifier les points de votre roadmap et vous accompagner dans la mise en oeuvre.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "Gestion de projet", href: "/services/project-management" },
  { name: "SEO", href: "/services/seo" },
  { name: "Sites Web", href: "/services/sites-web" },
];

export default function DigitalStrategyPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="/images/strategie-digitale-consulting-luxembourg.jpg"
        backgroundAlt="Stratégie digitale et consulting Luxembourg"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Lightbulb className="h-4 w-4 text-primary" />
                <span>Consulting Digital</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Conseil stratégique pour votre croissance digitale
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Bénéficiez de notre expertise pour définir une stratégie digitale
                claire et efficace. Roadmap personnalisée et conseils d'expert
                pour accélérer votre croissance en ligne.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Réserver une session
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        title="Pourquoi faire appel à un consultant digital ?"
        subtitle="Gagnez du temps et évitez les erreurs coûteuses"
        benefits={benefits}
        columns={2}
      />

      {/* Topics */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sujets couverts</h2>
              <p className="mt-4 text-muted-foreground">
                Tous les aspects de votre stratégie digitale peuvent être abordés
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <StaggerItem key={topic.name}>
                    <div className="h-full rounded-xl border-2 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg">{topic.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {topic.description}
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
        title="Comment ça fonctionne"
        subtitle="Un processus simple et efficace"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur le consulting digital"
        subtitle="Tout ce que vous devez savoir sur nos services de stratégie"
        faqs={digitalStrategyFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Besoin de clarifier votre stratégie digitale ?"
        description="Réservez une session de consulting et repartez avec une roadmap claire pour votre croissance."
        buttonText="Réserver une session"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
