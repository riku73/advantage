"use client";

import Link from "next/link";
import Image from "next/image";
import { Target, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { landingPagesFAQs } from "@/components/sections/faq-section";

const benefits = [
  "Taux de conversion jusqu'à 5x supérieur",
  "Design focalisé sur l'action",
  "A/B testing pour optimisation continue",
  "Chargement ultra-rapide",
  "Intégration complète avec vos outils",
];

const features = [
  "Copywriting persuasif",
  "Design conversion-driven",
  "Formulaires optimisés",
  "A/B testing",
  "Analytics avancés",
  "Responsive design",
];

const process = [
  {
    step: "1. Brief & Objectifs",
    description:
      "Définition des KPIs, de l'audience cible et des objectifs de conversion.",
  },
  {
    step: "2. Design & Copywriting",
    description:
      "Création du design conversion-driven et rédaction persuasive.",
  },
  {
    step: "3. Développement",
    description:
      "Intégration responsive, formulaires optimisés et tracking avancé.",
  },
  {
    step: "4. Tests & Optimisation",
    description:
      "A/B testing, analyse des résultats et ajustements continus.",
  },
];

const relatedServices = [
  { name: "Sites Web", href: "/services/sites-web" },
  { name: "SEA", href: "/services/sea" },
  { name: "SEO", href: "/services/seo" },
];

export default function LandingPagesPageContent() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <Target className="h-4 w-4 text-primary" />
                <span>Landing pages</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Landing pages qui convertissent
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Maximisez vos conversions avec des landing pages conçues pour
                transformer vos visiteurs en clients.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Créer ma landing page
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&q=80"
                  alt="Landing page conversion optimization and A/B testing"
                  width={800}
                  height={800}
                  className="object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="text-3xl font-bold">Pourquoi nos landing pages performent ?</h2>
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

      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold">Ce qui est inclus</h2>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="rounded-lg border bg-card p-6 text-left transition-all hover:shadow-lg hover:border-primary/50 hover:scale-105">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <p className="mt-3 font-semibold">{feature}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold">Notre méthodologie</h2>
              <p className="mt-4 text-muted-foreground">
                Une approche structurée en 4 étapes pour des landing pages performantes
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
              {process.map((item) => (
                <StaggerItem key={item.step}>
                  <div className="h-full rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:scale-105">
                    <h3 className="font-semibold text-primary">{item.step}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur les landing pages"
        subtitle="Tout ce que vous devez savoir sur nos pages de conversion"
        faqs={landingPagesFAQs}
      />

      {/* Related Services */}
      <section className="border-t py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="text-2xl font-bold">Services complémentaires</h2>
              <div className="mt-6 flex flex-wrap gap-4">
                {relatedServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-md border bg-card px-6 py-3 transition-all hover:bg-muted hover:scale-105"
                  >
                    {service.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Boostez vos conversions dès aujourd'hui
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Créons ensemble une landing page qui génère des résultats concrets pour votre business.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                Commencer maintenant
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
