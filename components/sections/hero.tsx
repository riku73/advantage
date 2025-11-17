"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-20 sm:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] -translate-x-1/2 bg-gradient-to-tr from-primary/30 to-accent/30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-sm w-fit"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span>Agence Marketing Digital d'Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Boostez votre croissance{" "}
              <span className="text-primary">digitale</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground sm:text-xl"
            >
              Expertise en SEO, SEA, Email Marketing et développement web pour
              propulser votre entreprise vers de nouveaux sommets. Résultats
              mesurables, ROI transparent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 text-base font-semibold text-white dark:text-black shadow-lg transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105 hover:shadow-xl"
              >
                Demandez un devis gratuit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black dark:border-white px-8 py-3 text-base font-semibold text-black dark:text-white bg-transparent transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
              >
                Découvrir nos services
              </Link>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop&q=80"
                alt="Digital marketing workspace with analytics dashboard"
                width={800}
                height={800}
                className="object-cover transition-transform hover:scale-105 duration-700"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
