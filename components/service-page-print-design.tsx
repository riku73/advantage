"use client";

import Link from "next/link";
import {
  FileText,
  ArrowRight,
  Sparkles,
  Palette,
  CheckCircle2,
  Eye,
  CreditCard,
  BookOpen,
  FileImage,
  Utensils,
  Package,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { printDesignFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: Sparkles,
    title: "Designs créatifs et impactants",
    description:
      "Créations originales qui captent l'attention et transmettent efficacement votre message.",
  },
  {
    icon: FileImage,
    title: "Fichiers prêts pour l'impression",
    description:
      "Formats professionnels (PDF haute résolution, CMJN) compatibles avec tous les imprimeurs.",
  },
  {
    icon: CheckCircle2,
    title: "Révisions incluses",
    description:
      "Plusieurs rounds de révisions pour un résultat qui correspond parfaitement à vos attentes.",
  },
  {
    icon: Eye,
    title: "Cohérence visuelle",
    description:
      "Designs alignés avec votre identité de marque pour une image professionnelle et cohérente.",
  },
];

const materials = [
  {
    icon: CreditCard,
    name: "Cartes de visite",
    description: "Formats standard ou originaux, finitions variées.",
  },
  {
    icon: FileImage,
    name: "Flyers promotionnels",
    description: "A5, A4, formats personnalisés pour vos campagnes.",
  },
  {
    icon: BookOpen,
    name: "Brochures & Dépliants",
    description: "2, 3 ou 4 volets selon vos besoins.",
  },
  {
    icon: FileText,
    name: "Affiches",
    description: "Du A3 au grand format pour vos événements.",
  },
  {
    icon: Utensils,
    name: "Menus restaurant",
    description: "Menus, cartes des vins, supports de table.",
  },
  {
    icon: Package,
    name: "Catalogues produits",
    description: "Mise en page professionnelle multi-pages.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Brief créatif",
    description:
      "Définition de vos besoins : type de support, format, quantité souhaitée. Discussion du message à transmettre et du style visuel.",
  },
  {
    title: "Proposition de concepts",
    description:
      "Création de 2-3 propositions de design pour vous permettre de choisir la direction créative.",
  },
  {
    title: "Révisions et finalisation",
    description:
      "Affinage du concept choisi avec vos retours. Ajustements jusqu'à validation finale du design.",
  },
  {
    title: "Préparation des fichiers",
    description:
      "Export des fichiers dans les formats adaptés à l'impression : PDF haute résolution, CMJN, fonds perdus.",
  },
  {
    title: "Livraison",
    description:
      "Remise des fichiers sources et des versions prêtes pour l'impression. Option de coordination avec l'imprimeur.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "Coordination Print", href: "/services/print-coordination" },
  { name: "Logo & Branding", href: "/services/logo-branding" },
  { name: "Photographie", href: "/services/photography" },
];

export default function PrintDesignPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="/images/design-print-luxembourg.jpg"
        backgroundAlt="Design print Luxembourg - Cartes de visite et supports imprimés"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Palette className="h-4 w-4 text-primary" />
                <span>Design print</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Design print qui marque les esprits
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Cartes de visite, flyers, brochures... Nous créons tous vos
                supports marketing print avec un design professionnel et
                impactant qui reflète votre identité de marque.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/devis-personnalise"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Créer mes supports
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        backgroundImage="/images/design-print-luxembourg.jpg"
        title="Pourquoi soigner votre design print ?"
        subtitle="Des créations professionnelles pour votre communication"
        benefits={benefits}
        columns={2}
      />

      {/* Materials */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nos supports disponibles</h2>
              <p className="mt-4 text-muted-foreground">
                Tous types de supports print pour votre communication
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {materials.map((material) => {
                const Icon = material.icon;
                return (
                  <StaggerItem key={material.name}>
                    <div className="h-full rounded-xl border-2 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg">{material.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {material.description}
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
        title="Du brief à l'impression"
        subtitle="Les étapes de création de vos supports"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur le design print"
        subtitle="Tout ce que vous devez savoir sur nos services de design imprimé"
        faqs={printDesignFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Besoin de supports print professionnels ?"
        description="Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé."
        buttonText="Demandez un devis"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
