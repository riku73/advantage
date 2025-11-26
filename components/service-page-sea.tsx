"use client";

import Link from "next/link";
import Image from "next/image";
import { MousePointerClick, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import PricingTiers from "@/components/sections/pricing-tiers";
import { getServiceById } from "@/lib/services-data";

const benefits = [
  "Résultats immédiats et trafic instantané",
  "Ciblage précis de votre audience idéale",
  "Contrôle total du budget publicitaire",
  "ROI mesurable et transparent",
  "Tests et optimisation continue",
];

const services = [
  "Campagnes Google Search",
  "Display et remarketing",
  "Google Shopping",
  "Campagnes vidéo YouTube",
  "Optimisation des conversions",
  "Tracking et analytics avancés",
];

export default function SEAPageContent() {
  const service = getServiceById("sea");
  const tiers = service && Array.isArray(service.pricing) ? service.pricing : [];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <MousePointerClick className="h-4 w-4 text-primary" />
                <span>Référencement Payant</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Google Ads pour des résultats immédiats
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Atteignez vos clients au moment précis où ils recherchent vos
                produits ou services avec des campagnes Google Ads optimisées.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Lancer une campagne
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop&q=80"
                  alt="Google Ads and PPC advertising campaign dashboard"
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
              <h2 className="text-3xl font-bold">Pourquoi choisir Google Ads ?</h2>
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
              <h2 className="text-3xl font-bold">Nos services SEA</h2>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <StaggerItem key={service}>
                  <div className="rounded-lg border bg-card p-6 text-left transition-all hover:shadow-lg hover:border-primary/50 hover:scale-105">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <p className="mt-3 font-semibold">{service}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Pricing */}
      {tiers.length > 0 && (
        <PricingTiers
          tiers={tiers}
          title="Nos Tarifs Google Ads"
          description="Configuration initiale ou gestion mensuelle continue"
        />
      )}

      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Maximisez votre ROI avec Google Ads
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Discutons de vos objectifs et créons ensemble une stratégie Google Ads qui génère des résultats concrets.
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
