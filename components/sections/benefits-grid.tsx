"use client";

import { useRef } from "react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="absolute inset-0 -z-20 overflow-hidden rounded-xl">
      <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
}

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
  backgroundImage?: string;
}

export default function BenefitsGrid({
  title,
  subtitle,
  benefits,
  className = "",
  columns = 3,
  backgroundImage,
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
                <div className="relative h-full rounded-xl border-2 overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg">
                  {backgroundImage && (
                    <>
                      <ParallaxImage src={backgroundImage} alt={benefit.title} />
                      <div className="absolute inset-0 -z-10 bg-white/80 dark:bg-gray-900/85 backdrop-blur-sm rounded-xl" />
                    </>
                  )}
                  <div className={`p-6 ${!backgroundImage ? 'bg-card' : ''}`}>
                    <div className="inline-flex rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
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
