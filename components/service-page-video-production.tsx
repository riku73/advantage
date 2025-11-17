"use client";

import Link from "next/link";
import Image from "next/image";
import { Video, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import PricingTiers from "@/components/sections/pricing-tiers";
import { getServiceById } from "@/lib/services-data";

const benefits = [
  "Contenu vidéo engageant et mémorable",
  "Production professionnelle de A à Z",
  "Optimisé pour toutes les plateformes",
  "Montage et post-production inclus",
  "Révisions jusqu'à satisfaction",
];

const videoTypes = [
  "Vidéos promo pour réseaux sociaux",
  "Vidéos corporate et institutionnelles",
  "Interviews et témoignages clients",
  "Vidéos produits et démo",
  "Couverture d'événements",
  "Vidéos explicatives (motion design disponible)",
];

export default function VideoProductionPageContent() {
  const service = getServiceById("video-production");
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
                <Video className="h-4 w-4 text-primary" />
                <span>Production Vidéo</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Vidéos qui captivent votre audience
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                De la vidéo promo courte à la vidéo corporate complète, nous
                créons du contenu vidéo professionnel qui raconte votre histoire.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Créer ma vidéo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=800&fit=crop&q=80"
                  alt="Professional video production and filming"
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
                Pourquoi investir dans la vidéo ?
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
            title="Nos Tarifs Vidéo"
            description="Choisissez le format qui correspond à vos besoins"
          />
        </section>
      )}

      {/* Video Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold">Types de vidéos</h2>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
              {videoTypes.map((type) => (
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

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Prêt à créer du contenu vidéo impactant ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Discutons de votre projet vidéo et donnons vie à votre vision.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
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
