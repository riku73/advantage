"use client";

import { LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsGridProps {
  title?: string;
  subtitle?: string;
  benefits: BenefitItem[];
  className?: string;
  columns?: 2 | 3;
}

export default function BenefitsGrid({
  title,
  subtitle,
  benefits,
  className = "",
  columns = 3,
}: BenefitsGridProps) {
  const gridCols = columns === 2
    ? "sm:grid-cols-2"
    : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {(title || subtitle) && (
            <FadeIn className="text-center mb-12">
              {title && <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>}
              {subtitle && (
                <p className="mt-4 text-muted-foreground">{subtitle}</p>
              )}
            </FadeIn>
          )}

          <StaggerContainer className={`grid gap-6 ${gridCols}`}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={index}>
                  <div className="h-full rounded-xl border-2 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
