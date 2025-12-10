"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/fade-in";
import {
  services,
  categoryLabels,
  ServiceCategory,
} from "@/lib/services-data";
import { ServiceHero } from "@/components/ui/page-hero";

// Service images mapping
const serviceImages: Record<string, string> = {
  "seo": "/images/seo-referencement-luxembourg.jpg",
  "sea": "/images/sea-publicite-google-ads-luxembourg.jpg",
  "email-marketing": "/images/email-marketing-luxembourg.jpg",
  "sites-web": "/images/creation-site-web-luxembourg.jpg",
  "landing-pages": "/images/landing-page-conversion-luxembourg.jpg",
  "logo-branding": "/images/creation-logo-branding-luxembourg.jpg",
  "print-design": "/images/design-print-luxembourg.jpg",
  "print-coordination": "/images/coordination-impression-luxembourg.jpg",
  "social-media-ads": "/images/social-media-marketing-luxembourg.jpg",
  "social-content": "/images/creation-contenu-reseaux-sociaux-luxembourg.jpg",
  "video-production": "/images/production-video-luxembourg.jpg",
  "photography": "/images/photographie-professionnelle-luxembourg.jpg",
  "digital-strategy": "/images/strategie-digitale-consulting-luxembourg.jpg",
  "project-management": "/images/gestion-projet-marketing-luxembourg.jpg",
  "email-deliverability": "/images/delivrabilite-email-luxembourg.jpg",
};

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="absolute inset-0 -z-20 overflow-hidden rounded-2xl">
      <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale"
        />
      </motion.div>
    </div>
  );
}

export default function ServicesPageContent() {
  // Custom order for digital-web services
  const digitalWebOrder = [
    "landing-pages",
    "sites-web",
    "seo",
    "sea",
    "email-marketing",
    "email-deliverability",
  ];

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

  // Sort digital-web services according to custom order
  if (servicesByCategory["digital-web"]) {
    servicesByCategory["digital-web"].sort((a, b) => {
      const aIndex = digitalWebOrder.indexOf(a.id);
      const bIndex = digitalWebOrder.indexOf(b.id);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        backgroundImage="/images/services-marketing-digital-luxembourg.jpg"
        backgroundAlt="Services marketing digital Luxembourg - ADVANTAGE agence"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-5xl text-center" immediate>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Nos services marketing digital
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Des solutions complètes et sur-mesure pour accélérer votre
              croissance digitale et atteindre vos objectifs business.
            </p>
            <div className="mt-8">
              <Link
                href="/devis-personnalise"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
              >
                Demandez un devis gratuit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </ServiceHero>

      {/* Services by Category */}
      {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
        <section key={category} id={category} className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
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
                const serviceImage = serviceImages[service.id];
                return (
                  <FadeIn
                    key={service.id}
                    delay={index * 0.05}
                  >
                    <div className="relative flex h-full flex-col rounded-2xl border overflow-hidden shadow-sm transition-all hover:shadow-lg hover:border-primary/50 group">
                      {/* Background image with parallax */}
                      {serviceImage && (
                        <ParallaxImage src={serviceImage} alt={service.title} />
                      )}
                      {/* Blur overlay */}
                      <div className="absolute inset-0 -z-10 bg-white/80 dark:bg-gray-900/85 backdrop-blur-sm" />

                      <div className="p-8 flex flex-col h-full">
                        <div className="flex items-center justify-between">
                          <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                            <service.icon className="h-6 w-6" />
                          </div>
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

                        <div className="mt-6 pt-6 border-t border-current/20">
                          <Link
                            href={service.href}
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
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        {/* Parallax background image */}
        <ParallaxImage
          src="/images/agence-marketing-luxembourg-equipe.jpg"
          alt="Équipe ADVANTAGE - Agence marketing Luxembourg"
        />
        {/* Primary color blur overlay */}
        <div className="absolute inset-0 -z-10 bg-white/80 dark:bg-gray-900/85 backdrop-blur-sm" />
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Parlons de votre projet
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Chaque entreprise est unique. Discutons de vos objectifs pour
              définir la stratégie qui vous correspond.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md border-2 border-transparent bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                Contactez-nous
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/a-propos#clients"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black dark:border-white bg-transparent px-8 py-3 font-semibold text-black dark:text-white transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105"
              >
                Voir nos clients
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
