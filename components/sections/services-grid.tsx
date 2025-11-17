"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import PricingBadge from "@/components/ui/pricing-badge";
import { services, formatPrice } from "@/lib/services-data";

// Show top 6 services on homepage
const featuredServices = services.slice(0, 6);

export default function ServicesGrid() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nos services marketing digital
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Une gamme complète de solutions pour propulser votre présence en
            ligne et atteindre vos objectifs business.
          </p>
        </FadeIn>

        {/* Services grid */}
        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => {
            // Get pricing for badge
            const pricingForBadge = service.pricing
              ? Array.isArray(service.pricing)
                ? service.pricing[0].price
                : service.pricing
              : null;

            return (
              <StaggerItem key={service.id}>
                <Link
                  href={service.href}
                  className="group relative block h-full rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 hover:scale-105"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`inline-flex rounded-lg bg-muted p-3 ${service.color}`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    {pricingForBadge && <PricingBadge pricing={pricingForBadge} />}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-muted-foreground">
                    {service.shortDescription}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.4} className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Voir tous nos services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
