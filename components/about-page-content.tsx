"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Target, TrendingUp, Award, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import { ServiceHero } from "@/components/ui/page-hero";
import ClientsSection from "@/components/sections/clients-section";

const values = [
  {
    name: "Expertise",
    description:
      "Une équipe de spécialistes passionnés avec des années d'expérience en marketing digital.",
    icon: Award,
  },
  {
    name: "Résultats",
    description:
      "Nous nous concentrons sur des KPIs concrets et un ROI mesurable pour chaque client.",
    icon: TrendingUp,
  },
  {
    name: "Transparence",
    description:
      "Communication claire, reporting détaillé et honnêteté dans toutes nos interactions.",
    icon: Users,
  },
  {
    name: "Innovation",
    description:
      "Nous restons à la pointe des dernières tendances et technologies du marketing digital.",
    icon: Target,
  },
];


export default function AboutPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
        backgroundAlt="Team collaboration and digital marketing professionals"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center" immediate>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Votre agence marketing au Luxembourg, à l&apos;écoute de vos ambitions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Basée au Luxembourg, ADVANTAGE accompagne les entreprises dans leur
              croissance digitale grâce à des stratégies sur-mesure et à des
              résultats concrets.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
              >
                Contactez-nous
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </ServiceHero>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold">Notre histoire</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  ADVANTAGE est née de la longue collaboration de deux professionnels
                  du marketing et du web. Forts de plusieurs décennies d&apos;expérience,
                  nous avons traversé et anticipé les évolutions de l&apos;information,
                  des technologies et du digital — toujours avec la même passion et
                  la même exigence.
                </p>
                <p>
                  Notre volonté : offrir aux petites, moyennes et grandes entreprises
                  une alternative locale, réactive et fiable face aux grandes agences
                  internationales.
                </p>
                <p>
                  Notre équipe accompagne des clients de tous secteurs — restauration,
                  transport, beauté, services, industrie, e-commerce et bien d&apos;autres —
                  dans la définition et la mise en œuvre de leur stratégie digitale.
                </p>
                <p>
                  Nous sommes convaincus qu&apos;une stratégie marketing efficace repose
                  sur trois piliers : l&apos;écoute, la qualité d&apos;exécution et la mesure
                  des résultats. C&apos;est cette approche qui guide chacune de nos
                  collaborations.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&q=80"
                  alt="Team collaboration and digital marketing professionals working together"
                  width={800}
                  height={800}
                  className="object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Nos valeurs</h2>
            <p className="mt-4 text-muted-foreground">
              Les principes qui guident notre travail au quotidien
            </p>
          </FadeIn>
          <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.name}>
                <div className="text-center transition-transform hover:scale-105">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary/20 hover:shadow-lg">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{value.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Clients */}
      <ClientsSection
        title="Nos clients"
        subtitle="Ils nous font confiance pour leur croissance digitale"
      />

      {/* Mission & CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold text-primary-foreground">Notre mission</h2>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Aider les petites, moyennes et grandes entreprises à
                exploiter tout le potentiel du marketing digital pour accélérer
                leur croissance et maximiser leur retour sur investissement.
              </p>
              <p className="mt-4 text-primary-foreground/80">
                Proximité, réactivité et résultats concrets : voilà ce qui nous
                différencie des grandes agences internationales.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-2xl bg-black/10 dark:bg-white/10 p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground">
                  Travaillons ensemble
                </h3>
                <p className="mt-4 text-primary-foreground/90">
                  Prêt à donner un nouvel élan à votre présence digitale ?
                  Parlons de votre projet.
                </p>
                <div className="mt-6">
                  <Link
                    href="/devis-personnalise"
                    className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                  >
                    Demandez un devis gratuit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
