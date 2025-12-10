import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Home,
  Briefcase,
  Search,
  Target,
  Globe,
  Mail,
  FileText,
  Palette,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Merci pour votre message | ADVANTAGE",
  description:
    "Votre demande a bien été envoyée. Notre équipe vous contactera dans les plus brefs délais.",
};

export default function MerciPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">
            Merci pour votre message !
          </h1>

          {/* Description */}
          <p className="text-muted-foreground mb-6">
            Votre demande a bien été envoyée. Notre équipe vous contactera dans les <strong>24 heures</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-md border-2 border-black dark:border-white bg-transparent px-6 py-2.5 font-semibold text-black dark:text-white transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 text-sm"
            >
              <Home className="h-4 w-4" />
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-md border-2 border-transparent bg-black dark:bg-white px-6 py-2.5 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105 text-sm"
            >
              <Briefcase className="h-4 w-4" />
              Découvrir nos services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-6 rounded-xl border bg-card p-4">
            <h2 className="text-base font-semibold mb-2">
              Besoin d&apos;une réponse urgente ?
            </h2>
            <p className="text-sm text-muted-foreground mb-3">
              Notre équipe est disponible du lundi au vendredi, de 9h à 18h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
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

        {/* Discover Services Section */}
        <div className="mt-8 pt-6 border-t">
          <h2 className="text-xl font-bold text-center mb-4">
            Découvrez nos autres services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {[
              { icon: Search, title: "SEO", description: "Référencement naturel", href: "/services/seo" },
              { icon: Target, title: "SEA", description: "Publicité Google Ads", href: "/services/sea" },
              { icon: Globe, title: "Sites Web", description: "Création sur mesure", href: "/services/sites-web" },
              { icon: Mail, title: "E-mail Marketing", description: "Campagnes ciblées", href: "/services/email-marketing" },
              { icon: FileText, title: "Landing Pages", description: "Pages de conversion", href: "/services/landing-pages" },
              { icon: Palette, title: "Logo & Branding", description: "Identité visuelle", href: "/services/logo-branding" },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col items-center text-center p-3 rounded-lg border bg-card hover:border-primary/50 hover:bg-accent/50 transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
