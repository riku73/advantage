"use client";

import Link from "next/link";
import {
  Printer,
  ArrowRight,
  Clock,
  Wallet,
  Shield,
  Truck,
  Users,
  Search,
  FileCheck,
  Package,
  CheckCircle2,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { printCoordinationFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: Clock,
    title: "Gain de temps considérable",
    description:
      "Ne perdez plus de temps à chercher et comparer les imprimeurs. Nous nous occupons de tout.",
  },
  {
    icon: Wallet,
    title: "Meilleurs tarifs négociés",
    description:
      "Bénéficiez de nos tarifs préférentiels grâce à notre volume et nos partenariats établis.",
  },
  {
    icon: Shield,
    title: "Qualité garantie",
    description:
      "Contrôle qualité rigoureux avant livraison. Si le résultat ne vous convient pas, nous le refaisons.",
  },
  {
    icon: Users,
    title: "Un seul interlocuteur",
    description:
      "Plus besoin de jongler entre designers et imprimeurs. Un point de contact unique pour tout gérer.",
  },
];

const services = [
  {
    icon: Search,
    name: "Sélection d'imprimeur",
    description: "Choix du meilleur partenaire selon votre projet.",
  },
  {
    icon: Wallet,
    name: "Négociation tarifaire",
    description: "Obtention des meilleurs prix grâce à nos volumes.",
  },
  {
    icon: FileCheck,
    name: "Préparation fichiers",
    description: "Vérification et adaptation des fichiers pour l'impression.",
  },
  {
    icon: CheckCircle2,
    name: "Contrôle qualité",
    description: "Vérification du BAT et de la conformité avant livraison.",
  },
  {
    icon: Package,
    name: "Suivi production",
    description: "Monitoring du processus d'impression en temps réel.",
  },
  {
    icon: Truck,
    name: "Coordination livraison",
    description: "Gestion de la livraison à l'adresse de votre choix.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Réception du projet",
    description:
      "Analyse de vos besoins : type de support, quantité, délais, budget. Vérification des fichiers fournis.",
  },
  {
    title: "Sélection imprimeur",
    description:
      "Choix du meilleur partenaire selon vos critères : qualité, délai, prix, finitions spéciales.",
  },
  {
    title: "Devis & Validation",
    description:
      "Présentation du devis détaillé et transparent. Validation du BAT (Bon À Tirer) avec vous.",
  },
  {
    title: "Production & Contrôle",
    description:
      "Suivi de la production chez l'imprimeur. Contrôle qualité à réception avant expédition.",
  },
  {
    title: "Livraison",
    description:
      "Coordination de la livraison à l'adresse de votre choix. Vérification finale de la conformité.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "Design Print", href: "/services/print-design" },
  { name: "Logo & Branding", href: "/services/logo-branding" },
  { name: "Gestion de Projet", href: "/services/project-management" },
];

export default function PrintCoordinationPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="https://images.unsplash.com/photo-1567880905822-56f8e06fe630?w=1920&h=1080&fit=crop&q=80"
        backgroundAlt="Professional printing services"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Printer className="h-4 w-4 text-primary" />
                <span>Coordination Print</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Coordination d'impression clé en main
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Laissez-nous coordonner l'impression de vos supports avec nos
                partenaires locaux de confiance. Qualité garantie, tarifs
                négociés, livraison gérée de A à Z.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Demander une coordination
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        title="Les avantages de notre service"
        subtitle="Simplifiez vos impressions avec un partenaire de confiance"
        benefits={benefits}
        columns={2}
      />

      {/* Services */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold">Ce que nous gérons pour vous</h2>
              <p className="mt-4 text-muted-foreground">
                Un service complet de coordination pour vos impressions
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
        title="Notre processus"
        subtitle="De la réception à la livraison"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur la coordination d'impression"
        subtitle="Tout ce que vous devez savoir sur nos services d'impression"
        faqs={printCoordinationFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Simplifiez vos impressions"
        description="Confiez-nous la coordination de vos impressions et concentrez-vous sur votre business."
        buttonText="Demandez un devis"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
