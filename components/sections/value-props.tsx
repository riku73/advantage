"use client";

import { TrendingUp, Target, BarChart3, Users } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";

const values = [
  {
    name: "Expertise Francophone",
    description:
      "Parfaite connaissance des marchés francophones et de leurs spécificités culturelles pour des campagnes ciblées et efficaces.",
    icon: Users,
  },
  {
    name: "Approche Data-Driven",
    description:
      "Décisions basées sur l'analyse de données réelles et des KPIs précis pour un ROI optimal et mesurable.",
    icon: BarChart3,
  },
  {
    name: "ROI Transparent",
    description:
      "Reporting détaillé et transparent de tous vos investissements marketing avec des résultats concrets et mesurables.",
    icon: TrendingUp,
  },
  {
    name: "Stratégie Personnalisée",
    description:
      "Solutions sur-mesure adaptées à vos objectifs spécifiques, votre secteur et votre budget pour un impact maximal.",
    icon: Target,
  },
];

export default function ValueProps() {
  return (
    <section className="bg-muted/50 py-20 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pourquoi choisir Advantage ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Notre approche unique combine expertise, transparence et résultats
            pour votre réussite digitale.
          </p>
        </FadeIn>

        {/* Values grid */}
        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem key={value.name}>
              <div className="flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary/20 hover:shadow-lg">
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
  );
}
