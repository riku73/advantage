"use client";

import Link from "next/link";
import Image from "next/image";
import { Printer, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import ServiceFeaturesPricing from "@/components/sections/service-features-pricing";
import { getServiceById } from "@/lib/services-data";

const benefits = [
  "Gain de temps considérable",
  "Meilleurs tarifs négociés",
  "Qualité d'impression garantie",
  "Livraison gérée de A à Z",
  "Un seul interlocuteur",
];

const process = [
  {
    step: "1. Sélection",
    description: "Nous choisissons le meilleur imprimeur pour votre projet",
  },
  {
    step: "2. Devis",
    description: "Négociation des tarifs et validation avec vous",
  },
  {
    step: "3. Production",
    description: "Suivi de la production et contrôle qualité",
  },
  {
    step: "4. Livraison",
    description: "Coordination de la livraison à l'adresse de votre choix",
  },
];

export default function PrintCoordinationPageContent() {
  const service = getServiceById("print-coordination");
  if (!service) return null;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <Printer className="h-4 w-4 text-primary" />
                <span>Services d'Impression</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                On gère l'impression pour vous
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Laissez-nous coordonner l'impression de vos supports avec nos
                partenaires locaux de confiance. Qualité garantie, tarifs
                transparents.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Demander une coordination
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1567880905822-56f8e06fe630?w=800&h=800&fit=crop&q=80"
                  alt="Professional printing services and coordination"
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
                Les avantages de notre service
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

      {/* Process */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold">Notre processus</h2>
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

      {/* Features & Pricing */}
      <ServiceFeaturesPricing service={service} />

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Simplifiez vos impressions
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Confiez-nous la coordination de vos impressions et concentrez-vous
              sur votre business.
            </p>
            <div className="mt-8">
              <Link
                href="/devis-personnalise"
                className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                Obtenir un devis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
