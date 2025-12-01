"use client";

import Link from "next/link";
import Image from "next/image";
import { Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import ServiceFeaturesPricing from "@/components/sections/service-features-pricing";
import FAQSection, { projectManagementFAQs } from "@/components/sections/faq-section";
import { getServiceById } from "@/lib/services-data";

const benefits = [
  "Un seul interlocuteur pour tout votre projet",
  "Coordination de tous les prestataires",
  "Respect des délais et du budget",
  "Communication transparente",
  "Qualité garantie",
];

const projectTypes = [
  "Lancement de site web complet",
  "Campagnes marketing multi-canaux",
  "Projets de rebranding",
  "Événements et lancements produits",
  "Projets de transformation digitale",
  "Campagnes vidéo et média",
];

export default function ProjectManagementPageContent() {
  const service = getServiceById("project-management");
  if (!service) return null;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>Gestion de projet</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                On gère vos projets de A à Z
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Confiez-nous la coordination complète de vos projets digitaux et
                marketing. Nous gérons tout pendant que vous vous concentrez sur
                votre business.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Confier mon projet
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop&q=80"
                  alt="Project management and coordination"
                  width={800}
                  height={800}
                  className="object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="text-3xl font-bold">
                Les avantages de l'externalisation
              </h2>
            </FadeIn>
            <StaggerContainer className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <StaggerItem key={benefit}>
                  <div className="flex items-start gap-3 transition-transform hover:translate-x-2">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Features & Pricing */}
      <section className="bg-muted/50">
        <ServiceFeaturesPricing service={service} />
      </section>

      {/* Project Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold">Types de projets</h2>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
              {projectTypes.map((type) => (
                <StaggerItem key={type}>
                  <div className="rounded-lg border bg-card p-6 text-left transition-all hover:shadow-lg hover:border-primary/50 hover:scale-105">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <p className="mt-3 font-semibold">{type}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur la gestion de projet"
        subtitle="Tout ce que vous devez savoir sur nos services de coordination"
        faqs={projectManagementFAQs}
        className="bg-muted/50"
      />

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Prêt à déléguer votre projet ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Contactez-nous pour discuter de votre projet et recevoir un devis
              personnalisé.
            </p>
            <div className="mt-8">
              <Link
                href="/devis-personnalise"
                className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                Demandez un devis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
