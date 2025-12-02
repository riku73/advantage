import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Home, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Merci pour votre message | ADVANTAGE",
  description:
    "Votre demande a bien été envoyée. Notre équipe vous contactera dans les plus brefs délais.",
};

export default function MerciPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 mb-8">
            <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Merci pour votre message !
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4">
            Votre demande a bien été envoyée. Notre équipe va l&apos;analyser et
            vous contactera dans les <strong>24 heures</strong> avec une réponse
            personnalisée.
          </p>

          <p className="text-muted-foreground mb-10">
            En attendant, n&apos;hésitez pas à explorer nos services ou à
            découvrir nos réalisations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-md border-2 border-black dark:border-white bg-transparent px-8 py-3 font-semibold text-black dark:text-white transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105"
            >
              <Home className="h-5 w-5" />
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-md border-2 border-transparent bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
            >
              <Briefcase className="h-5 w-5" />
              Découvrir nos services
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-16 rounded-2xl border bg-card p-8">
            <h2 className="text-xl font-semibold mb-4">
              Besoin d&apos;une réponse urgente ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Notre équipe est disponible du lundi au vendredi, de 9h à 18h.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <a
                href="tel:+35227565962"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                +352 27 56 59 62
              </a>
              <a
                href="mailto:take@advantage.lu"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                take@advantage.lu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
