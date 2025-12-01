"use client";

import Link from "next/link";
import {
  Camera,
  ArrowRight,
  Image as ImageIcon,
  Users,
  Building2,
  Star,
  Sparkles,
  Calendar,
  Palette,
  Download,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { photographyFAQs } from "@/components/sections/faq-section";
import { ServiceHero } from "@/components/ui/page-hero";
import BenefitsGrid, { BenefitItem } from "@/components/sections/benefits-grid";
import ProcessTimeline, { ProcessStep } from "@/components/sections/process-timeline";
import CTAWithServices, { RelatedService } from "@/components/sections/cta-with-services";

const benefits: BenefitItem[] = [
  {
    icon: Star,
    title: "Qualité haute résolution",
    description:
      "Photos en haute définition prêtes pour l'impression grand format ou l'utilisation digitale.",
  },
  {
    icon: Palette,
    title: "Retouche professionnelle",
    description:
      "Chaque photo est soigneusement retouchée pour un rendu naturel et professionnel.",
  },
  {
    icon: Download,
    title: "Droits d'utilisation complets",
    description:
      "Utilisez vos photos librement sur tous vos supports : web, print, réseaux sociaux.",
  },
  {
    icon: Sparkles,
    title: "Livraison rapide",
    description:
      "Recevez vos photos retouchées sous 48 à 72h après la séance photo.",
  },
];

const photoTypes = [
  {
    icon: Calendar,
    name: "Événements d'entreprise",
    description: "Conférences, séminaires, lancements produits.",
  },
  {
    icon: Users,
    name: "Portraits corporate",
    description: "Photos professionnelles pour LinkedIn et CV.",
  },
  {
    icon: ImageIcon,
    name: "Photos de produits",
    description: "Packshots et mises en scène pour e-commerce.",
  },
  {
    icon: Users,
    name: "Photos d'équipe",
    description: "Team building et portraits de groupe.",
  },
  {
    icon: Building2,
    name: "Photos de locaux",
    description: "Bureaux, showroom, espaces de travail.",
  },
  {
    icon: Star,
    name: "Photos pour réseaux sociaux",
    description: "Contenu visuel optimisé pour vos posts.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Briefing préparatoire",
    description:
      "Discussion de vos besoins, du style recherché et des contraintes techniques. Définition du nombre de photos et des livrables attendus.",
  },
  {
    title: "Planification de la séance",
    description:
      "Organisation logistique : lieu, date, équipement nécessaire. Préparation du shot list pour optimiser le temps de shooting.",
  },
  {
    title: "Séance photo",
    description:
      "Shooting professionnel avec direction artistique. Prise de vue multiple pour garantir le meilleur résultat.",
  },
  {
    title: "Sélection & Retouche",
    description:
      "Sélection des meilleures photos en collaboration avec vous. Retouche professionnelle : couleurs, lumière, recadrage.",
  },
  {
    title: "Livraison des fichiers",
    description:
      "Remise des photos haute résolution dans les formats adaptés à vos usages (web, print, réseaux sociaux).",
  },
];

const relatedServices: RelatedService[] = [
  { name: "Production Vidéo", href: "/services/video-production" },
  { name: "Contenu Social", href: "/services/social-content" },
  { name: "Logo & Branding", href: "/services/logo-branding" },
];

export default function PhotographyPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ServiceHero
        backgroundImage="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&h=1080&fit=crop&q=80"
        backgroundAlt="Professional photography session"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                <Camera className="h-4 w-4 text-primary" />
                <span>Photographie Professionnelle</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Photos professionnelles qui valorisent votre image
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Événements, portraits corporate, photos produits... Captez vos
                meilleurs moments avec un photographe professionnel pour tous
                vos supports de communication.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Réserver une séance
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </ServiceHero>

      {/* Benefits Grid */}
      <BenefitsGrid
        title="Pourquoi des photos professionnelles"
        subtitle="Valorisez votre image avec des visuels de qualité"
        benefits={benefits}
        columns={2}
      />

      {/* Photo Types */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold">Types de séances photo</h2>
              <p className="mt-4 text-muted-foreground">
                Nous couvrons tous vos besoins en photographie professionnelle
              </p>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {photoTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <StaggerItem key={type.name}>
                    <div className="h-full rounded-xl border-2 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div className="inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-semibold text-lg">{type.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {type.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline
        title="Notre processus photo"
        subtitle="De la préparation à la livraison"
        steps={processSteps}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur la photographie"
        subtitle="Tout ce que vous devez savoir sur nos services photo"
        faqs={photographyFAQs}
        className="bg-muted/50"
      />

      {/* CTA with Related Services */}
      <CTAWithServices
        title="Prêt à valoriser votre image ?"
        description="Réservez votre séance photo et obtenez des visuels professionnels pour tous vos supports."
        buttonText="Demandez un devis"
        buttonHref="/devis-personnalise"
        relatedServices={relatedServices}
      />
    </div>
  );
}
