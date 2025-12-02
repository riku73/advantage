"use client";

import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";

export interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export default function ProcessTimeline({
  title,
  subtitle,
  steps,
  className = "",
}: ProcessTimelineProps) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {(title || subtitle) && (
            <FadeIn className="text-center mb-12">
              {title && <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>}
              {subtitle && (
                <p className="mt-4 text-muted-foreground">{subtitle}</p>
              )}
            </FadeIn>
          )}

          <StaggerContainer className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Number circle */}
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                    {index + 1}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
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
  );
}
