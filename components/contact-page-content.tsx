"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/sections/contact-form";
import FadeIn from "@/components/ui/fade-in";

export default function ContactPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Parlons de votre projet
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Remplissez le formulaire ci-dessous et notre équipe vous
              contactera dans les 24h pour discuter de vos objectifs et vous
              proposer une solution sur-mesure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <FadeIn direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold">Contactez-nous</h2>
                  <p className="mt-2 text-muted-foreground">
                    Notre équipe est là pour répondre à toutes vos questions.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 transition-transform hover:translate-x-2">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <a
                        href="mailto:contact@advantage.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@advantage.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 transition-transform hover:translate-x-2">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary/20">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Téléphone</div>
                      <a
                        href="tel:+33123456789"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +33 1 23 45 67 89
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 transition-transform hover:translate-x-2">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Adresse</div>
                      <p className="text-muted-foreground">Paris, France</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50">
                  <h3 className="font-semibold">Horaires</h3>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span>9h - 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi - Dimanche</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right" delay={0.2} className="lg:col-span-2">
              <div className="rounded-2xl border bg-card p-8 transition-all hover:shadow-lg">
                <h2 className="text-2xl font-bold">
                  Demandez un devis gratuit
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Tous les champs marqués d'un * sont obligatoires
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="border-t py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
            <p>
              Vos données personnelles sont collectées et traitées par Advantage
              uniquement dans le cadre de votre demande de contact. Elles ne
              seront jamais partagées avec des tiers. Vous disposez d'un
              droit d'accès, de modification et de suppression de vos
              données conformément au RGPD.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
