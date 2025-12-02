"use client";

import Link from "next/link";
import {
  Briefcase,
  ArrowRight,
  Users,
  Clock,
  CheckCircle2,
  Shield,
  Globe,
  Video,
  Palette,
  Megaphone,
  Zap,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { projectManagementFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: Users,
    title: "Un seul interlocuteur",
    description:
      "Fini les allers-retours avec plusieurs prestataires. Nous coordonnons tout pour vous avec un point de contact unique.",
  },
  {
    icon: Clock,
    title: "Respect des délais",
    description:
      "Planning rigoureux et suivi quotidien pour garantir le respect de vos deadlines et éviter les retards.",
  },
  {
    icon: Shield,
    title: "Qualité garantie",
    description:
      "Contrôle qualité à chaque étape du projet. Nous ne livrons que des résultats qui répondent à nos standards.",
  },
  {
    icon: CheckCircle2,
    title: "Budget maîtrisé",
    description:
      "Transparence totale sur les coûts. Pas de mauvaises surprises, vous savez exactement ce que vous payez.",
  },
];

const projectTypes = [
  {
    icon: Globe,
    name: "Lancement de site web",
    description: "Coordination design, développement, contenu et SEO.",
  },
  {
    icon: Megaphone,
    name: "Campagnes multi-canaux",
    description: "Synchronisation SEA, Social Ads, e-mail et contenu.",
  },
  {
    icon: Palette,
    name: "Projets de rebranding",
    description: "Logo, charte graphique, supports print et digital.",
  },
  {
    icon: Zap,
    name: "Lancements produits",
    description: "Stratégie de lancement et coordination des actions.",
  },
  {
    icon: Video,
    name: "Campagnes vidéo",
    description: "Production, montage et diffusion multi-plateformes.",
  },
  {
    icon: Globe,
    name: "Transformation digitale",
    description: "Accompagnement global de votre transition numérique.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Brief & Cadrage",
    description:
      "Définition détaillée de vos objectifs, contraintes et attentes. Établissement du périmètre du projet et des KPIs de succès.",
  },
  {
    title: "Planning & Devis",
    description:
      "Création du planning détaillé avec les jalons clés. Devis transparent incluant toutes les prestations nécessaires.",
  },
  {
    title: "Coordination des équipes",
    description:
      "Sélection et briefing des prestataires. Mise en place des outils de collaboration et suivi du projet.",
  },
  {
    title: "Production & Contrôle",
    description:
      "Supervision de toutes les productions avec contrôle qualité à chaque étape. Points réguliers avec vous.",
  },
  {
    title: "Livraison & Bilan",
    description:
      "Livraison finale avec documentation. Bilan du projet et recommandations pour la suite.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "Stratégie digitale", href: "/services/digital-strategy" },
  { name: "Sites Web", href: "/services/sites-web" },
  { name: "Logo & Branding", href: "/services/logo-branding" },
];

export default function ProjectManagementPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="/images/gestion-projet-marketing-luxembourg.jpg"
        backgroundAlt="Gestion de projet marketing Luxembourg"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>Gestion de Projet</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Gestion de projet digitale de A à Z
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Confiez-nous la coordination complète de vos projets digitaux et
                marketing. Nous gérons tout pendant que vous vous concentrez sur
                votre business.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Confier mon projet
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        backgroundImage="/images/gestion-projet-marketing-luxembourg.jpg"
        title="Pourquoi externaliser la gestion de vos projets ?"
        subtitle="Gagnez du temps et de la sérénité"
        benefits={benefits}
        columns={2}
      />

      {/* Project Types */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Types de projets</h2>
              <p className="mt-4 text-muted-foreground">
                Nous coordonnons tous types de projets digitaux et marketing
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectTypes.map((project) => {
                const Icon = project.icon;
                return (
                  <StaggerItem key={project.name}>
                    <div className="h-full rounded-xl border-2 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg">{project.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {project.description}
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
        subtitle="Un processus éprouvé pour des projets réussis"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur la gestion de projet"
        subtitle="Tout ce que vous devez savoir sur nos services de coordination"
        faqs={projectManagementFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Prêt à déléguer votre projet ?"
        description="Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé."
        buttonText="Demandez un devis"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
