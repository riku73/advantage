"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Package, TrendingUp } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import { bundles, getServiceById } from "@/lib/services-data";

export default function PackagesPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center" immediate>
            <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
              <Package className="h-8 w-8" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Packages Bundlés
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Économisez jusqu'à 500€ en combinant plusieurs services. Des
              solutions complètes pour accélérer votre croissance digitale.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {bundles.map((bundle, index) => {
              // Calculate individual prices
              const individualTotal = bundle.includedServices.reduce((sum, serviceId) => {
                const service = getServiceById(serviceId);
                if (service && service.pricing) {
                  if (Array.isArray(service.pricing)) {
                    return sum + service.pricing[0].price.amount;
                  } else {
                    return sum + service.pricing.amount;
                  }
                }
                return sum;
              }, 0);

              const savings = bundle.savings || individualTotal - bundle.price;

              return (
                <FadeIn key={bundle.id} delay={index * 0.1}>
                  <div
                    className={`relative h-full rounded-2xl border-2 bg-card p-8 transition-all hover:shadow-xl hover:scale-105 ${
                      bundle.popular
                        ? "border-primary shadow-lg"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {bundle.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                          <TrendingUp className="h-4 w-4" />
                          Populaire
                        </span>
                      </div>
                    )}

                    <div className="text-center">
                      <h2 className="text-3xl font-bold">{bundle.name}</h2>
                      <p className="mt-2 text-muted-foreground">
                        {bundle.description}
                      </p>

                      <div className="mt-6">
                        <div className="text-5xl font-bold">{bundle.price}€</div>
                        {savings > 0 && (
                          <div className="mt-2 flex items-center justify-center gap-2">
                            <span className="text-muted-foreground line-through">
                              {individualTotal}€
                            </span>
                            <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-600 dark:text-green-400">
                              Économisez {savings}€
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="font-semibold">Services inclus :</h3>
                      <ul className="mt-4 space-y-3">
                        {bundle.includedServices.map((serviceId) => {
                          const service = getServiceById(serviceId);
                          if (!service) return null;
                          return (
                            <li key={serviceId} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                              <div>
                                <span className="font-medium">{service.name}</span>
                                <span className="text-sm text-muted-foreground">
                                  {" "}
                                  - {service.shortDescription}
                                </span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <h3 className="font-semibold">Avantages supplémentaires :</h3>
                      <ul className="mt-4 space-y-3">
                        {bundle.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className={`block w-full rounded-md px-6 py-3 text-center font-semibold transition-all hover:scale-105 ${
                          bundle.popular
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
                        }`}
                      >
                        Choisir ce package
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Package */}
      <section className="border-t py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Besoin d'un package sur-mesure ?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nous pouvons créer un package personnalisé qui répond exactement à
              vos besoins et votre budget.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md border-2 border-primary bg-transparent px-8 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
              >
                Demandez un package personnalisé
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Services CTA */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold">Vous préférez des services individuels ?</h2>
            <p className="mt-4 text-muted-foreground">
              Découvrez tous nos services et tarifs à la carte
            </p>
            <div className="mt-6">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-primary hover:text-primary/80"
              >
                Voir tous les services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Prêt à démarrer ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Contactez-nous pour choisir le package idéal pour votre entreprise.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                Contactez-nous
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
