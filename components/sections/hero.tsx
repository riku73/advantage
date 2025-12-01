"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Duotone Effect */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80"
          alt="Digital marketing workspace with analytics dashboard"
          fill
          className="object-cover grayscale contrast-125"
          priority
        />

        {/* Mode-adaptive overlay */}
        <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/80 transition-colors duration-300" />

        {/* Subtle brand color accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
        />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground"
          >
            <Sparkles className="h-4 w-4 text-yellow-500 dark:text-yellow-400" />
            <span>Votre agence marketing au Luxembourg</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Pendant que vous hésitez,
            <br />
            d&apos;autres prennent l&apos;<motion.span
              className="relative inline-block text-primary"
              initial="hidden"
              animate="visible"
            >
              Advantage
              <motion.span
                variants={{
                  hidden: { width: 0 },
                  visible: { width: "100%" }
                }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 h-[4px] rounded-full bg-primary sm:-bottom-2 sm:h-[6px]"
              />
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            SEO, publicité, sites web — on accélère votre croissance digitale au Luxembourg.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/devis-personnalise"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 text-base font-semibold text-white dark:text-black shadow-lg transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 hover:shadow-xl"
            >
              Demandez un devis gratuit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black dark:border-white px-8 py-3 text-base font-semibold text-black dark:text-white bg-black/10 dark:bg-white/10 backdrop-blur-sm transition-all hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-105"
            >
              Découvrir nos services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-black/60 dark:text-white/60 uppercase tracking-wider">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-6 w-4 rounded-full border border-black/40 dark:border-white/40"
          >
            <div className="mx-auto mt-1 h-1.5 w-0.5 rounded-full bg-black/60 dark:bg-white/60" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
