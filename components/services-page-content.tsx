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

export default function ServicesPageContent() {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center" immediate>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Nos Services Marketing Digital
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Des solutions complètes et sur-mesure pour accélérer votre
              croissance digitale et atteindre vos objectifs business.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services by Category */}
      {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
        <section key={category} className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-2">
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
                // Get pricing for badge
                const pricingForBadge = service.pricing
                  ? Array.isArray(service.pricing)
                    ? service.pricing[0].price
                    : service.pricing
                  : null;

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
                        {pricingForBadge && <PricingBadge pricing={pricingForBadge} />}
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
            <h2 className="text-3xl font-bold text-primary-foreground">
              Besoin d'un devis personnalisé ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Contactez-nous pour discuter de vos besoins et recevoir une offre
              sur-mesure.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                Demandez un devis gratuit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
