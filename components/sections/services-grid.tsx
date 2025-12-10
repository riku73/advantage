"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Globe, Palette, Share2, Video, Lightbulb, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/fade-in";
import { services, type ServiceCategory } from "@/lib/services-data";

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="absolute inset-0 -z-20 overflow-hidden">
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

const categories = [
  {
    id: "digital-web" as ServiceCategory,
    title: "Digital & web",
    description: "Solutions web et marketing en ligne pour développer votre présence digitale.",
    icon: Globe,
    image: "/images/creation-site-web-luxembourg.jpg",
  },
  {
    id: "visual-print" as ServiceCategory,
    title: "Identité visuelle & print",
    description: "Branding professionnel et supports imprimés pour renforcer votre image.",
    icon: Palette,
    image: "/images/creation-logo-branding-luxembourg.jpg",
  },
  {
    id: "social-media" as ServiceCategory,
    title: "Réseaux sociaux",
    description: "Publicité et création de contenu pour engager votre audience.",
    icon: Share2,
    image: "/images/social-media-marketing-luxembourg.jpg",
  },
  {
    id: "media-production" as ServiceCategory,
    title: "Production média",
    description: "Vidéo et photographie professionnelles pour vos communications.",
    icon: Video,
    image: "/images/production-video-luxembourg.jpg",
  },
  {
    id: "consulting" as ServiceCategory,
    title: "Consulting",
    description: "Stratégie digitale et gestion de projet pour atteindre vos objectifs.",
    icon: Lightbulb,
    image: "/images/strategie-digitale-consulting-luxembourg.jpg",
  },
  {
    id: "custom" as ServiceCategory,
    title: "Projet sur-mesure",
    description: "Vous avez un besoin spécifique ? Parlons de votre projet pour créer une solution adaptée.",
    icon: Sparkles,
    isCta: true,
  },
];

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

        {/* Categories grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const categoryServices = services.filter(s => s.category === category.id);
            const isCta = (category as typeof category & { isCta?: boolean }).isCta;

            // CTA Card
            if (isCta) {
              return (
                <FadeIn key={category.id} delay={index * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 transition-all hover:shadow-lg hover:border-primary hover:bg-primary/10">
                    <div className="inline-flex rounded-lg bg-primary/20 p-3 text-primary w-fit">
                      <category.icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">{category.title}</h3>
                    <p className="mt-3 text-muted-foreground flex-1">
                      {category.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-primary/20">
                      <Link
                        href="/devis-personnalise"
                        className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100"
                      >
                        Demander un devis
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            }

            // Regular category card
            return (
              <FadeIn key={category.id} delay={index * 0.05}>
                <div className="relative flex h-full flex-col rounded-2xl border overflow-hidden shadow-sm transition-all hover:shadow-lg hover:border-primary/50 group">
                  {/* Background image with grayscale and parallax */}
                  {category.image && (
                    <ParallaxImage src={category.image} alt={category.title} />
                  )}
                  {/* Blur overlay */}
                  <div className="absolute inset-0 -z-10 bg-white/80 dark:bg-gray-900/85 backdrop-blur-sm" />

                  <div className="p-8 flex flex-col h-full">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary w-fit">
                      <category.icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">{category.title}</h3>
                    <p className="mt-3 text-muted-foreground">
                      {category.description}
                    </p>

                    <ul className="mt-6 space-y-2 flex-1">
                      {categoryServices.map((service) => (
                        <li key={service.id} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <Link
                            href={service.href}
                            className="text-sm hover:text-primary transition-colors"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-6 border-t border-current/20">
                      <Link
                        href={`/services#${category.id}`}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        En savoir plus
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4} className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            Voir les services en détail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
