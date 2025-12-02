"use client";

import { CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import PricingBadge from "@/components/ui/pricing-badge";
import { Service, ServicePricing } from "@/lib/services-data";

interface ServiceFeaturesPricingProps {
  service: Service;
}

export default function ServiceFeaturesPricing({
  service,
}: ServiceFeaturesPricingProps) {
  const { features, pricing } = service;

  // Check if pricing is a simple pricing object or an array of tiers
  const hasSimplePricing =
    pricing && !Array.isArray(pricing);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ce qui est inclus</h2>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-3 transition-transform hover:translate-x-2">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-lg">{feature}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {hasSimplePricing && (pricing as ServicePricing).description && (
            <FadeIn delay={0.2}>
              <div className="mt-8 rounded-lg border bg-muted/50 p-6">
                <p className="text-sm text-muted-foreground">
                  {(pricing as ServicePricing).description}
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
