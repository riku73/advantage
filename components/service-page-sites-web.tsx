"use client";

import Link from "next/link";
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Zap,
  Search,
  Smartphone,
  Shield,
  Pencil,
  Lightbulb,
  Palette,
  Wrench,
  Rocket,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { sitesWebFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const relatedServices: RelatedService[] = [
  { name: "SEO", href: "/services/seo" },
  { name: "Landing Pages", href: "/services/landing-pages" },
  { name: "Logo & Branding", href: "/services/logo-branding" },
];

const benefits = [
  {
    icon: Zap,
    title: "Votre site s'affiche rapidement",
    description:
      "Les visiteurs n'attendent pas. Un site rapide garde vos clients et améliore votre position sur Google.",
  },
  {
    icon: Search,
    title: "Google vous trouve facilement",
    description:
      "Votre site est construit pour être bien référencé. Vos futurs clients vous trouvent quand ils cherchent vos services.",
  },
  {
    icon: Smartphone,
    title: "Parfait sur tous les écrans",
    description:
      "Mobile, tablette ou ordinateur : votre site s'adapte automatiquement et reste agréable à utiliser.",
  },
  {
    icon: Shield,
    title: "Sécurisé et fiable",
    description:
      "Protection contre les pirates, certificat de sécurité inclus. Vos visiteurs naviguent en confiance.",
  },
  {
    icon: Pencil,
    title: "Facile à mettre à jour",
    description:
      "Modifiez vos textes et images vous-même, sans connaissances techniques. Nous vous formons à l'outil.",
  },
];

const processSteps = [
  {
    icon: Lightbulb,
    step: "1",
    title: "Découverte",
    description:
      "Nous discutons de vos objectifs, de votre clientèle cible et de ce que vous attendez de votre site. Nous analysons aussi vos concurrents.",
  },
  {
    icon: Palette,
    step: "2",
    title: "Design",
    description:
      "Nous créons les maquettes de votre site. Vous voyez exactement à quoi il ressemblera avant que nous commencions à le construire.",
  },
  {
    icon: Wrench,
    step: "3",
    title: "Développement",
    description:
      "Nous construisons votre site avec les dernières technologies. Il sera rapide, sécurisé et prêt à accueillir vos visiteurs.",
  },
  {
    icon: Rocket,
    step: "4",
    title: "Lancement",
    description:
      "Votre site est mis en ligne. Nous vous formons à sa gestion et restons disponibles pour toute question.",
  },
];

export default function SitesWebPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="/images/creation-site-web-luxembourg.jpg"
        backgroundAlt="Création site web Luxembourg - Développement web professionnel"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Globe className="h-4 w-4 text-primary" />
                <span>Création de sites web</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Un site web qui vous apporte des clients
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Nous créons des sites web professionnels qui attirent vos clients
                et les convainquent de vous contacter. Design moderne, facile à
                trouver sur Google, simple à gérer.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/devis-personnalise"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Démarrer votre projet
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits - What You Get */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ce que vous obtenez
            </h2>
            <p className="mt-4 text-muted-foreground">
              Un site web conçu pour développer votre activité
            </p>
          </FadeIn>

          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="rounded-2xl border bg-card p-6 h-full transition-all hover:shadow-lg hover:border-primary/50">
                  <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comment ça se passe ?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Un processus simple en 4 étapes pour créer votre site
            </p>
          </FadeIn>

          <div className="mt-12 max-w-4xl mx-auto">
            <StaggerContainer className="grid gap-6 md:grid-cols-2">
              {processSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-4 rounded-2xl border bg-card p-6 h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Types of Sites */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Quel site pour votre activité ?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nous adaptons le site à vos besoins réels
            </p>
          </FadeIn>

          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <StaggerItem>
              <div className="rounded-2xl border-2 bg-card p-6 h-full transition-all hover:shadow-lg hover:border-primary/50">
                <h3 className="text-xl font-bold">Site vitrine</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Idéal pour présenter votre entreprise et vos services. Parfait
                  pour les artisans, professions libérales et PME.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Présentation de vos services</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Formulaire de contact</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Optimisé pour Google</span>
                  </li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-2xl border-2 border-primary bg-card p-6 h-full transition-all hover:shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Populaire
                  </span>
                </div>
                <h3 className="text-xl font-bold">Site complet</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Un site plus développé avec plusieurs pages, blog intégré et
                  fonctionnalités avancées.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Toutes les pages dont vous avez besoin</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Blog pour partager vos actualités</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Prise de rendez-vous en ligne</span>
                  </li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-2xl border-2 bg-card p-6 h-full transition-all hover:shadow-lg hover:border-primary/50">
                <h3 className="text-xl font-bold">Boutique en ligne</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vendez vos produits sur internet. Paiement sécurisé et gestion
                  des commandes simplifiée.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Catalogue de produits</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Paiement par carte bancaire</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Gestion des stocks et livraisons</span>
                  </li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        subtitle="Tout ce que vous devez savoir avant de lancer votre projet"
        faqs={sitesWebFAQs}
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Prêt à lancer votre site web ?"
        description="Discutons de votre projet. Nous vous proposerons la solution adaptée à vos besoins et votre budget."
        buttonText="Demandez un devis gratuit"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
