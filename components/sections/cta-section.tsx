"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/fade-in";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 h-full w-full bg-gradient-to-l from-accent/20 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Prêt à booster votre croissance digitale ?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90">
            Discutons de vos objectifs et découvrez comment Advantage peut
            transformer votre présence en ligne pour des résultats concrets et
            mesurables.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/devis-personnalise"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 text-base font-semibold text-white dark:text-black shadow-lg transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:shadow-xl hover:scale-105"
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
