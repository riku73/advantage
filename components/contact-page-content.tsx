"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/sections/contact-form";
import FadeIn from "@/components/ui/fade-in";
import { ServiceHero } from "@/components/ui/page-hero";

export default function ContactPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop&q=80"
        backgroundAlt="Contact us - communication and collaboration"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Parlons de votre projet
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Remplissez le formulaire ci-dessous et notre équipe vous
              contactera dans les 24h pour discuter de vos objectifs et vous
              proposer une solution sur-mesure.
            </p>
          </FadeIn>
        </div>
      </ServiceHero>

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
                      <div className="font-semibold">E-mail</div>
                      <a
                        href="mailto:take@advantage.lu"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        take@advantage.lu
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
                        href="tel:+35227565962"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +352 27 56 59 62
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 transition-transform hover:translate-x-2">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Adresse</div>
                      <p className="text-muted-foreground">2 Rue de Sandweiler<br />L-5974 Itzig</p>
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
              Vos données personnelles sont collectées et traitées par ADVANTAGE
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
