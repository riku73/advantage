"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import ServiceFeaturesPricing from "@/components/sections/service-features-pricing";
import { getServiceById } from "@/lib/services-data";

const benefits = [
  "Designs créatifs et impactants",
  "Fichiers prêts pour l'impression",
  "Révisions incluses jusqu'à satisfaction",
  "Formats adaptés à vos besoins",
  "Cohérence avec votre identité visuelle",
];

const materials = [
  "Cartes de visite",
  "Flyers promotionnels",
  "Brochures et dépliants",
  "Affiches",
  "Menus restaurant",
  "Catalogues produits",
];

export default function PrintDesignPageContent() {
  const service = getServiceById("print-design");
  if (!service) return null;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <FileText className="h-4 w-4 text-primary" />
                <span>Design Print</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Supports imprimés qui marquent les esprits
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Cartes de visite, flyers, brochures... Nous créons tous vos
                supports marketing print avec un design professionnel et
                impactant.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Créer mes supports
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=800&fit=crop&q=80"
                  alt="Print design materials including business cards and brochures"
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
                Pourquoi choisir nos designs print ?
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

      {/* Materials */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold">Nos supports disponibles</h2>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {materials.map((material) => (
                <StaggerItem key={material}>
                  <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:scale-105">
                    <CheckCircle2 className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-3 font-semibold">{material}</p>
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
              Besoin de supports print professionnels ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Contactez-nous pour discuter de votre projet et recevoir un devis
              personnalisé.
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
