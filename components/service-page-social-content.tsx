"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import ServiceFeaturesPricing from "@/components/sections/service-features-pricing";
import { getServiceById } from "@/lib/services-data";

const benefits = [
  "Présence cohérente sur les réseaux",
  "Contenu engageant et de qualité",
  "Gain de temps considérable",
  "Stratégie éditoriale réfléchie",
  "Visuels professionnels",
];

const included = [
  "8-10 posts par mois",
  "Création visuelle",
  "Rédaction de captions",
  "Recherche de hashtags",
  "Planning éditorial",
  "Scheduling automatique",
];

export default function SocialContentPageContent() {
  const service = getServiceById("social-content");
  if (!service) return null;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Création de Contenu Social</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Contenu social qui engage votre audience
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Calendrier éditorial complet avec visuels créatifs, captions
                optimisées et hashtags stratégiques pour maximiser votre
                engagement.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Démarrer maintenant
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c2c9?w=800&h=800&fit=crop&q=80"
                  alt="Social media content creation and editorial calendar"
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
                Pourquoi déléguer votre contenu social ?
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

      {/* Included */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold">Ce qui est inclus</h2>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {included.map((item) => (
                <StaggerItem key={item}>
                  <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:scale-105">
                    <CheckCircle2 className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-3 font-semibold text-sm">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Prêt à avoir une présence sociale impactante ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Laissez-nous créer du contenu de qualité pendant que vous vous
              concentrez sur votre business.
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
