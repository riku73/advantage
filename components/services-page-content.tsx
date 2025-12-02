"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import PricingBadge from "@/components/ui/pricing-badge";
import {
  services,
  categoryLabels,
  ServiceCategory,
} from "@/lib/services-data";
import { ServiceHero } from "@/components/ui/page-hero";

export default function ServicesPageContent() {
  // Custom order for digital-web services
  const digitalWebOrder = [
    "landing-pages",
    "sites-web",
    "seo",
    "sea",
    "email-marketing",
    "email-deliverability",
  ];

  // Group services by category
  const servicesByCategory = services.reduce(
    (acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = [];
      }
      acc[service.category].push(service);
      return acc;
    },
    {} as Record<ServiceCategory, typeof services>
  );

  // Sort digital-web services according to custom order
  if (servicesByCategory["digital-web"]) {
    servicesByCategory["digital-web"].sort((a, b) => {
      const aIndex = digitalWebOrder.indexOf(a.id);
      const bIndex = digitalWebOrder.indexOf(b.id);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        backgroundImage="/images/services-marketing-digital-luxembourg.jpg"
        backgroundAlt="Services marketing digital Luxembourg - ADVANTAGE agence"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-5xl text-center" immediate>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Nos Services Marketing Digital
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Des solutions complètes et sur-mesure pour accélérer votre
              croissance digitale et atteindre vos objectifs business.
            </p>
            <div className="mt-8">
              <Link
                href="/devis-personnalise"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
              >
                Demandez un devis gratuit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </ServiceHero>

      {/* Services by Category */}
      {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
        <section key={category} id={category} className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
                {categoryLabels[category as ServiceCategory]}
              </h2>
              <p className="text-muted-foreground mb-12">
                {categoryServices.length} service
                {categoryServices.length > 1 ? "s" : ""} disponible
                {categoryServices.length > 1 ? "s" : ""}
              </p>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {categoryServices.map((service, index) => {
                return (
                  <FadeIn
                    key={service.id}
                    delay={index * 0.05}
                  >
                    <div className="flex h-full flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/50">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                          <service.icon className="h-6 w-6" />
                        </div>
                      </div>

                      <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
                      <p className="mt-3 text-muted-foreground flex-1">
                        {service.shortDescription}
                      </p>

                      <ul className="mt-6 space-y-2">
                        {service.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-6 border-t">
                        <Link
                          href={service.href}
                          className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                        >
                          En savoir plus
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary-foreground">
              Parlons de votre projet
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Chaque entreprise est unique. Discutons de vos objectifs pour
              définir la stratégie qui vous correspond.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md border-2 border-transparent bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                Contactez-nous
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black dark:border-white bg-transparent px-8 py-3 font-semibold text-black dark:text-white transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105"
              >
                Voir nos clients
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
