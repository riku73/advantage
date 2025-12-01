"use client";

import Link from "next/link";
import Image from "next/image";
import { Server, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { emailDeliverabilityFAQs } from "@/components/sections/faq-section";

const benefits = [
  "Vos e-mails arrivent en boîte de réception",
  "Meilleur taux d'ouverture",
  "Protection contre le blacklistage",
  "Réputation d'expéditeur optimisée",
  "Conformité technique assurée",
];

const includes = [
  "Audit complet de délivrabilité",
  "Configuration SPF, DKIM, DMARC",
  "Tests de spam score",
  "Recommandations techniques",
  "Suivi de réputation (30 jours)",
  "Documentation complète",
];

const process = [
  {
    step: "1. Audit technique",
    description:
      "Analyse complète de votre configuration : SPF, DKIM, DMARC, réputation IP et domaine.",
  },
  {
    step: "2. Configuration DNS",
    description:
      "Mise en place des enregistrements DNS nécessaires pour l'authentification e-mail.",
  },
  {
    step: "3. Tests de délivrabilité",
    description:
      "Vérification multi-provider (Gmail, Outlook, Yahoo) et analyse du spam score.",
  },
  {
    step: "4. Monitoring 30 jours",
    description:
      "Suivi de votre réputation d'expéditeur et alertes en cas de problème détecté.",
  },
];

const relatedServices = [
  { name: "E-mail marketing", href: "/services/email-marketing" },
  { name: "Sites Web", href: "/services/sites-web" },
];

export default function EmailDeliverabilityPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <Server className="h-4 w-4 text-primary" />
                <span>Délivrabilité e-mail</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Assurez que vos e-mails arrivent à destination
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Évitez les filtres anti-spam et améliorez la délivrabilité de vos
                e-mails avec notre expertise technique. Configuration complète et
                optimisation de réputation.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Améliorer ma délivrabilité
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=800&fit=crop&q=80"
                  alt="Délivrabilité e-mail et configuration serveur"
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
                Pourquoi optimiser la délivrabilité ?
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

      {/* Includes */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold">Ce qui est inclus</h2>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
              {includes.map((item) => (
                <StaggerItem key={item}>
                  <div className="rounded-lg border bg-card p-6 text-left transition-all hover:shadow-lg hover:border-primary/50 hover:scale-105">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <p className="mt-3 font-semibold">{item}</p>
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
                Une approche structurée en 4 étapes pour garantir votre délivrabilité
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
        title="Questions fréquentes sur la délivrabilité e-mail"
        subtitle="Tout ce que vous devez savoir sur nos services de délivrabilité"
        faqs={emailDeliverabilityFAQs}
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

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Prêt à améliorer votre délivrabilité ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Contactez-nous pour un audit et optimisez la délivrabilité de vos
              campagnes e-mail.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                Demandez un audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
