"use client";

import FadeIn from "@/components/ui/fade-in";

export interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  className?: string;
}

export default function StatsSection({ stats, className = "" }: StatsSectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
