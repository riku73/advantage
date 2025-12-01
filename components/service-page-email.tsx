"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { emailMarketingFAQs } from "@/components/sections/faq-section";

const benefits = [
  "ROI exceptionnel (42€ pour 1€ investi)",
  "Communication directe et personnalisée",
  "Automation pour gagner du temps",
  "Segmentation précise de votre audience",
  "Résultats mesurables en temps réel",
];

const features = [
  "Design d'e-mails responsive",
  "Automation marketing",
  "Segmentation comportementale",
  "A/B testing",
  "Reporting avancé",
  "Intégration CRM",
];

const process = [
  {
    step: "1. Stratégie & Segmentation",
    description:
      "Définition des personas, parcours client et segmentation de votre audience.",
  },
  {
    step: "2. Design des templates",
    description:
      "Création de modèles d'e-mails responsive alignés avec votre identité visuelle.",
  },
  {
    step: "3. Rédaction & Automation",
    description:
      "Écriture des contenus persuasifs et configuration des séquences automatisées.",
  },
  {
    step: "4. Tests & Délivrabilité",
    description:
      "Vérification du spam score, tests multi-clients et optimisation du rendu.",
  },
  {
    step: "5. Analyse & Optimisation",
    description:
      "Reporting détaillé des KPIs et amélioration continue des performances.",
  },
];

const relatedServices = [
  { name: "Délivrabilité e-mail", href: "/services/email-deliverability" },
  { name: "Landing Pages", href: "/services/landing-pages" },
  { name: "Sites Web", href: "/services/sites-web" },
];

export default function EmailMarketingPageContent() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <Mail className="h-4 w-4 text-primary" />
                <span>E-mail marketing</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Transformez vos contacts en clients fidèles
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Créez des campagnes e-mail personnalisées qui engagent, convertissent
                et fidélisent votre audience avec un ROI exceptionnel.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Lancer votre campagne
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=800&fit=crop&q=80"
                  alt="E-mail marketing campaign with newsletter design"
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
              <h2 className="text-3xl font-bold">Pourquoi l'e-mail marketing ?</h2>
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
              <h2 className="text-3xl font-bold">Nos services e-mail marketing</h2>
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
              <h2 className="text-3xl font-bold">Notre méthodologie e-mail marketing</h2>
              <p className="mt-4 text-muted-foreground">
                Une approche structurée en 5 étapes pour des campagnes performantes
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
        title="Questions fréquentes sur l'e-mail marketing"
        subtitle="Tout ce que vous devez savoir sur nos services e-mail"
        faqs={emailMarketingFAQs}
        className="bg-muted/50"
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
              Prêt à booster votre e-mail marketing ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Découvrez comment nos campagnes e-mail peuvent transformer votre communication.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                Demandez une démo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
