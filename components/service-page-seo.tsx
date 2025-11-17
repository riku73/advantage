"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import PricingTiers from "@/components/sections/pricing-tiers";
import { getServiceById } from "@/lib/services-data";

const benefits = [
  "Augmentation du trafic organique qualifié",
  "Meilleure visibilité sur les moteurs de recherche",
  "Réduction du coût d'acquisition client",
  "Autorité et crédibilité renforcées",
  "Résultats durables et long-terme",
];

const process = [
  {
    step: "1. Audit SEO",
    description:
      "Analyse complète de votre site : technique, contenu, backlinks et concurrence.",
  },
  {
    step: "2. Stratégie",
    description:
      "Définition des mots-clés prioritaires et plan d'action personnalisé.",
  },
  {
    step: "3. Optimisation",
    description:
      "Mise en œuvre des recommandations techniques et optimisation du contenu.",
  },
  {
    step: "4. Création de contenu",
    description:
      "Rédaction et publication de contenu optimisé pour vos mots-clés cibles.",
  },
  {
    step: "5. Link Building",
    description:
      "Acquisition de backlinks de qualité pour renforcer votre autorité.",
  },
  {
    step: "6. Suivi & Reporting",
    description:
      "Analyse des performances et ajustements continus pour améliorer les résultats.",
  },
];

const relatedServices = [
  { name: "SEA", href: "/services/sea" },
  { name: "Sites Web", href: "/services/sites-web" },
  { name: "Landing Pages", href: "/services/landing-pages" },
];

export default function SEOPageContent() {
  const service = getServiceById("seo");
  const tiers = service && Array.isArray(service.pricing) ? service.pricing : [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <Search className="h-4 w-4 text-primary" />
                <span>Référencement Naturel</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Boostez votre visibilité avec le SEO
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Positionnez votre site en première page Google et attirez un
                trafic qualifié durable grâce à notre expertise en
                référencement naturel.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Audit SEO gratuit
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=800&fit=crop&q=80"
                  alt="SEO analytics and search engine optimization dashboard"
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
                Les avantages du référencement naturel
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
              <h2 className="text-3xl font-bold">Notre méthodologie SEO</h2>
              <p className="mt-4 text-muted-foreground">
                Une approche structurée en 6 étapes pour des résultats optimaux
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

      {/* Pricing */}
      {tiers.length > 0 && (
        <PricingTiers
          tiers={tiers}
          title="Nos Tarifs SEO"
          description="Choisissez entre un audit complet ou une optimisation mensuelle continue"
        />
      )}

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="grid gap-8 rounded-2xl border bg-card p-8 shadow-sm sm:grid-cols-3">
              <div className="text-center transition-transform hover:scale-110">
                <div className="inline-flex rounded-full bg-primary/10 p-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-4 text-3xl font-bold">+180%</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Trafic organique moyen
                </div>
              </div>
              <div className="text-center transition-transform hover:scale-110">
                <div className="inline-flex rounded-full bg-primary/10 p-3">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-4 text-3xl font-bold">Top 3</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Positions moyennes obtenues
                </div>
              </div>
              <div className="text-center transition-transform hover:scale-110">
                <div className="inline-flex rounded-full bg-primary/10 p-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-4 text-3xl font-bold">92%</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Taux de réussite client
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

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

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Prêt à dominer les résultats de recherche ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Obtenez un audit SEO gratuit et découvrez comment améliorer votre
              positionnement.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                Demandez votre audit gratuit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
