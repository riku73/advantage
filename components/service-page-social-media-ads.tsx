"use client";

import Link from "next/link";
import Image from "next/image";
import { Share2, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import PricingTiers from "@/components/sections/pricing-tiers";
import { getServiceById } from "@/lib/services-data";

const benefits = [
  "Ciblage précis de votre audience idéale",
  "ROI mesurable et transparent",
  "Visibilité immédiate",
  "Retargeting des visiteurs",
  "Tests A/B des créatifs",
];

const platforms = [
  "Facebook Ads",
  "Instagram Ads",
  "LinkedIn Ads",
  "TikTok Ads",
  "Twitter Ads",
  "Pinterest Ads",
];

export default function SocialMediaAdsPageContent() {
  const service = getServiceById("social-media-ads");
  if (!service) return null;

  const tiers = Array.isArray(service.pricing) ? service.pricing : [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <Share2 className="h-4 w-4 text-primary" />
                <span>Social Media Ads</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Publicités qui performent sur les réseaux sociaux
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Atteignez votre audience cible là où elle se trouve avec des
                campagnes publicitaires optimisées sur Meta, LinkedIn, TikTok et
                plus.
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
                  src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=800&fit=crop&q=80"
                  alt="Social media advertising and campaign management"
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
                Pourquoi investir dans les social ads ?
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

      {/* Pricing */}
      {tiers.length > 0 && (
        <section className="bg-muted/50">
          <PricingTiers
            tiers={tiers}
            title="Nos Tarifs Social Media Ads"
            description="Choisissez entre la mise en place ou la gestion mensuelle continue"
          />
        </section>
      )}

      {/* Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold">Plateformes disponibles</h2>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {platforms.map((platform) => (
                <StaggerItem key={platform}>
                  <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:scale-105">
                    <CheckCircle2 className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-3 font-semibold">{platform}</p>
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
              Prêt à booster votre visibilité sociale ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Discutons de vos objectifs et créons ensemble une stratégie
              publicitaire qui génère des résultats.
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
