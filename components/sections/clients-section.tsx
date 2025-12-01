"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";

interface Client {
  name: string;
  sector: string;
  description: string;
  services: string[];
  website: string;
  logo: string;
}

const clients: Client[] = [
  {
    name: "On Time",
    sector: "Transport VTC premium",
    description: "Service de chauffeur privé premium au Luxembourg. Transferts aéroportuaires, transport d'événements et livraisons discrètes.",
    services: ["Site web", "Stratégie digitale", "Branding"],
    website: "https://ontime.lu",
    logo: "/clients/ontime.svg",
  },
  {
    name: "Malo Studio",
    sector: "Salon de coiffure",
    description: "Concept unique de salon de coiffure haut de gamme sur la Route d'Esch. Spécialiste balayage et coloration.",
    services: ["Identité visuelle", "Site web", "Réseaux sociaux"],
    website: "https://malostudio.lu",
    logo: "/clients/malostudio.png",
  },
  {
    name: "Art & Beauté",
    sector: "Institut de beauté",
    description: "Institut de beauté à Bonnevoie proposant soins visage, massages et ongles. Plus de 10 ans d'expertise.",
    services: ["Site e-commerce", "Boutique en ligne", "SEO local"],
    website: "https://art-beaute.lu",
    logo: "/clients/art-beaute.png",
  },
  {
    name: "Paladar",
    sector: "E-commerce gastronomie",
    description: "E-commerce de produits portugais premium. Paniers gourmands pour entreprises et particuliers.",
    services: ["Site e-commerce complet", "Stratégie de contenu", "Réseaux sociaux"],
    website: "https://paladar.lu",
    logo: "/clients/paladar.png",
  },
  {
    name: "BauArt",
    sector: "Rénovation intérieure",
    description: "Entreprise de rénovation et aménagement intérieur au Luxembourg. Consultation sous 48h.",
    services: ["Site vitrine", "Formulaire de prise de RDV", "SEO local"],
    website: "https://bauart.lu",
    logo: "/clients/bauart.jpg",
  },
  {
    name: "Pizzeria Millénaire",
    sector: "Restaurant",
    description: "Pizzeria artisanale à Niederfeulen. Cuisson au feu de bois depuis 2015.",
    services: ["Menu digital", "Réservation en ligne", "Google Business"],
    website: "https://pizzeriamillenaire.lu",
    logo: "/clients/pizzeria-millenaire.png",
  },
  {
    name: "Eurometal",
    sector: "Association européenne",
    description: "Association européenne des distributeurs, stockistes et négociants d'acier.",
    services: ["Gestion de projet", "Organisation d'événements", "Production vidéo", "Newsletter", "LinkedIn"],
    website: "https://eurometal.net",
    logo: "/clients/eurometal.png",
  },
  {
    name: "ProSolutions",
    sector: "Transport & Logistique",
    description: "Service de transport, logistique, supply chain et stockage au Luxembourg.",
    services: ["Création d'entreprise", "Création de logo", "Réservation de domaine"],
    website: "https://prosolutions.lu",
    logo: "/clients/prosolutions.png",
  },
];

interface ClientsSectionProps {
  title?: string;
  subtitle?: string;
  showServices?: boolean;
  compact?: boolean;
}

export default function ClientsSection({
  title = "Ils nous font confiance",
  subtitle = "Nous accompagnons des entreprises de tous secteurs dans leur croissance digitale",
  showServices = true,
  compact = false,
}: ClientsSectionProps) {
  if (compact) {
    return (
      <section className="py-16 border-t">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          </FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {clients.map((client) => (
              <Link
                key={client.name}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <StaggerItem key={client.name}>
              <div className="group h-full rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-16 flex items-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={64}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                  <Link
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Visiter le site de ${client.name}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="font-semibold text-lg">{client.name}</h3>
                    <p className="text-sm text-primary">{client.sector}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {client.description}
                  </p>
                </div>

                {showServices && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-muted-foreground mb-2">Services réalisés :</p>
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service) => (
                        <span
                          key={service}
                          className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export { clients };
