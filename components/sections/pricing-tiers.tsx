"use client";

import PricingCard from "@/components/ui/pricing-card";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import { ServiceTier } from "@/lib/services-data";

interface PricingTiersProps {
  tiers: ServiceTier[];
  title?: string;
  description?: string;
}

export default function PricingTiers({
  tiers,
  title = "Nos Tarifs",
  description = "Choisissez l'option qui correspond le mieux à vos besoins",
}: PricingTiersProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          )}
        </FadeIn>

        <StaggerContainer
          className={`mx-auto mt-12 grid gap-8 ${
            tiers.length === 2
              ? "max-w-4xl md:grid-cols-2"
              : tiers.length === 3
                ? "max-w-6xl md:grid-cols-3"
                : "max-w-7xl md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {tiers.map((tier, index) => (
            <StaggerItem key={index}>
              <PricingCard tier={tier} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
