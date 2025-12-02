"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/fade-in";

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
        />
      </motion.div>
    </div>
  );
}

export interface RelatedService {
  name: string;
  href: string;
}

interface CTAWithServicesProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  relatedServices: RelatedService[];
}

export default function CTAWithServices({
  title,
  description,
  buttonText = "Demandez un devis",
  buttonHref = "/devis-personnalise",
  relatedServices,
}: CTAWithServicesProps) {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Parallax background image */}
      <ParallaxImage
        src="/images/agence-marketing-luxembourg-equipe.jpg"
        alt="Équipe ADVANTAGE - Agence marketing Luxembourg"
      />
      {/* Primary color blur overlay */}
      <div className="absolute inset-0 -z-10 bg-white/80 dark:bg-gray-900/85 backdrop-blur-sm" />
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {description}
          </p>
          <div className="mt-8">
            <Link
              href={buttonHref}
              className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
            >
              {buttonText}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mt-12 pt-8 border-t border-black/20 dark:border-white/20">
              <p className="text-sm text-muted-foreground mb-4">
                Services complémentaires
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground/10 px-4 py-2 text-sm text-foreground hover:bg-foreground/20 transition-colors"
                  >
                    {service.name}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
