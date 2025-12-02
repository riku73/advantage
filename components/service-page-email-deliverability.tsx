"use client";

import Link from "next/link";
import {
  Server,
  ArrowRight,
  CheckCircle2,
  Inbox,
  Shield,
  Eye,
  FileCheck,
  Settings,
  Clock,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { emailDeliverabilityFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: Inbox,
    title: "Boîte de réception garantie",
    description:
      "Vos e-mails arrivent directement dans la boîte de réception principale, pas dans les spams ou promotions.",
  },
  {
    icon: Eye,
    title: "Meilleur taux d'ouverture",
    description:
      "Une bonne délivrabilité se traduit par des taux d'ouverture jusqu'à 45% supérieurs à la moyenne du marché.",
  },
  {
    icon: Shield,
    title: "Protection anti-blacklist",
    description:
      "Surveillance proactive de votre réputation pour éviter le blacklistage et maintenir une image d'expéditeur fiable.",
  },
  {
    icon: FileCheck,
    title: "Conformité technique totale",
    description:
      "Configuration complète SPF, DKIM et DMARC pour respecter les standards d'authentification e-mail.",
  },
];

const includes = [
  {
    icon: FileCheck,
    name: "Audit complet de délivrabilité",
    description: "Analyse approfondie de votre configuration actuelle.",
  },
  {
    icon: Settings,
    name: "Configuration SPF, DKIM, DMARC",
    description: "Mise en place des protocoles d'authentification.",
  },
  {
    icon: Shield,
    name: "Tests de spam score",
    description: "Vérification multi-provider et optimisation du score.",
  },
  {
    icon: FileCheck,
    name: "Recommandations techniques",
    description: "Guide détaillé des bonnes pratiques à suivre.",
  },
  {
    icon: Clock,
    name: "Suivi de réputation (30 jours)",
    description: "Monitoring continu et alertes automatisées.",
  },
  {
    icon: FileCheck,
    name: "Documentation complète",
    description: "Rapport détaillé et guide de maintenance.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Audit technique complet",
    description:
      "Analyse approfondie de votre configuration actuelle : SPF, DKIM, DMARC, réputation IP, historique de domaine et taux de plaintes.",
  },
  {
    title: "Configuration DNS",
    description:
      "Mise en place et optimisation des enregistrements DNS nécessaires pour l'authentification e-mail auprès de tous les providers.",
  },
  {
    title: "Tests de délivrabilité",
    description:
      "Vérification multi-provider (Gmail, Outlook, Yahoo, Apple Mail) et analyse du spam score avec recommandations d'amélioration.",
  },
  {
    title: "Monitoring 30 jours",
    description:
      "Suivi continu de votre réputation d'expéditeur avec alertes automatiques en cas de problème détecté ou de blacklistage.",
  },
];

const relatedServices: RelatedService[] = [
  { name: "E-mail marketing", href: "/services/email-marketing" },
  { name: "Sites Web", href: "/services/sites-web" },
];

export default function EmailDeliverabilityPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="/images/delivrabilite-email-luxembourg.jpg"
        backgroundAlt="Délivrabilité e-mail Luxembourg - Configuration SPF DKIM DMARC"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Server className="h-4 w-4 text-primary" />
                <span>Délivrabilité E-mail</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Assurez que vos e-mails arrivent à destination
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Évitez les filtres anti-spam et améliorez la délivrabilité de vos
                e-mails avec notre expertise technique. Configuration complète SPF,
                DKIM, DMARC et optimisation de réputation d'expéditeur.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Améliorer ma délivrabilité
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        backgroundImage="/images/delivrabilite-email-luxembourg.jpg"
        title="Pourquoi optimiser la délivrabilité de vos e-mails ?"
        subtitle="Une bonne délivrabilité est essentielle pour le succès de vos campagnes e-mail"
        benefits={benefits}
        columns={2}
      />

      {/* Ce qui est inclus */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ce qui est inclus</h2>
              <p className="mt-4 text-muted-foreground">
                Un audit complet et une configuration optimale pour votre délivrabilité
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {includes.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.name}>
                    <div className="h-full rounded-xl border-2 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg">{item.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline
        title="Notre méthodologie"
        subtitle="Une approche structurée en 4 étapes pour garantir votre délivrabilité"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur la délivrabilité e-mail"
        subtitle="Tout ce que vous devez savoir sur nos services de délivrabilité"
        faqs={emailDeliverabilityFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Prêt à améliorer votre délivrabilité ?"
        description="Contactez-nous pour un audit complet et optimisez la délivrabilité de vos campagnes e-mail."
        buttonText="Demandez un audit"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
