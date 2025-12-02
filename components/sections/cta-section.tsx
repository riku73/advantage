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

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Parallax background image */}
      <ParallaxImage
        src="/images/agence-marketing-luxembourg-equipe.jpg"
        alt="Équipe ADVANTAGE - Agence marketing Luxembourg"
      />
      {/* Primary color blur overlay */}
      <div className="absolute inset-0 -z-10 bg-white/80 dark:bg-gray-900/85 backdrop-blur-sm" />

      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Prêt à faire décoller votre présence digitale ?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Notre équipe vous accompagne de A à Z dans votre
            croissance digitale. Parlons de votre projet.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/devis-personnalise"
              className="group inline-flex items-center justify-center gap-2 rounded-md border-2 border-transparent bg-black dark:bg-white px-8 py-3 text-base font-semibold text-white dark:text-black shadow-lg transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:shadow-xl hover:scale-105"
            >
              Demandez un devis gratuit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black dark:border-white bg-transparent px-8 py-3 text-base font-semibold text-black dark:text-white transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105"
            >
              Découvrir nos services
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
