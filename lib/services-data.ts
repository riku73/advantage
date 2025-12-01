import {
  Search,
  MousePointerClick,
  Mail,
  Globe,
  Target,
  Palette,
  FileText,
  Printer,
  Share2,
  Calendar,
  Video,
  Camera,
  Lightbulb,
  Briefcase,
  Server,
  type LucideIcon,
} from "lucide-react";

// Type Definitions
export interface ServicePricing {
  amount: number;
  period?: "one-time" | "monthly" | "campaign" | "hour" | "session" | "project";
  description?: string;
  startingFrom?: boolean;
}

export interface ServiceTier {
  name: string;
  price: ServicePricing;
  features: string[];
  cta?: string;
  popular?: boolean;
}

export interface Service {
  id: string;
  category: ServiceCategory;
  name: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  href: string;
  pricing?: ServicePricing | ServiceTier[];
  features: string[];
  benefits?: string[];
  color?: string;
}

export type ServiceCategory =
  | "digital-web"
  | "visual-print"
  | "social-media"
  | "media-production"
  | "consulting";

// Services Data
export const services: Service[] = [
  // Digital & Web Services
  {
    id: "seo",
    category: "digital-web",
    name: "SEO",
    title: "Référencement naturel (SEO)",
    shortDescription: "Positionnez-vous en première page Google",
    description:
      "Améliorez votre visibilité sur Google et attirez un trafic qualifié et durable grâce à notre expertise en référencement naturel.",
    icon: Search,
    href: "/services/seo",
    pricing: [
      {
        name: "Audit SEO",
        price: { amount: 390, period: "one-time" },
        features: [
          "Analyse technique complète",
          "Audit du contenu",
          "Analyse des backlinks",
          "Étude de la concurrence",
          "Plan d'action détaillé",
        ],
      },
      {
        name: "Optimisation mensuelle",
        price: { amount: 290, period: "monthly", startingFrom: true },
        features: [
          "Optimisation on-page et off-page",
          "Stratégie de contenu",
          "Link building de qualité",
          "Suivi des positions",
          "Rapports mensuels",
        ],
        popular: true,
      },
    ],
    features: [
      "Audit SEO complet",
      "Optimisation on-page et technique",
      "Stratégie de contenu",
      "Link building de qualité",
      "Suivi des positions et rapports",
    ],
    color: "text-blue-600",
  },
  {
    id: "sea",
    category: "digital-web",
    name: "SEA",
    title: "Référencement payant (SEA)",
    shortDescription: "Résultats immédiats avec Google Ads",
    description:
      "Générez des résultats immédiats avec nos campagnes Google Ads optimisées pour un retour sur investissement maximal.",
    icon: MousePointerClick,
    href: "/services/sea",
    pricing: [
      {
        name: "Configuration campagne",
        price: { amount: 390, period: "one-time", startingFrom: true },
        features: [
          "Configuration compte Google Ads",
          "Stratégie de mots-clés",
          "Création de 1 campagne",
          "Paramétrage du tracking",
          "Formation initiale",
        ],
      },
      {
        name: "Gestion mensuelle",
        price: { amount: 290, period: "monthly", startingFrom: true },
        features: [
          "Monitoring quotidien",
          "Optimisation continue",
          "A/B testing des annonces",
          "Ajustement des enchères",
          "Rapports mensuels détaillés",
        ],
        popular: true,
      },
    ],
    features: [
      "Campagnes Google Ads",
      "Ciblage précis et audiences",
      "Optimisation du budget",
      "A/B testing des annonces",
      "Tracking et analytics ROI",
    ],
    color: "text-purple-600",
  },
  {
    id: "email-marketing",
    category: "digital-web",
    name: "E-mail marketing",
    title: "E-mail marketing",
    shortDescription: "Fidélisez et convertissez par e-mail",
    description:
      "Fidélisez vos clients et convertissez vos prospects avec des campagnes e-mail personnalisées et automatisées.",
    icon: Mail,
    href: "/services/email-marketing",
    pricing: [
      {
        name: "Newsletter design + setup",
        price: { amount: 290, period: "one-time" },
        features: [
          "Template Mailchimp personnalisé",
          "Configuration de l'automation",
          "Intégration avec votre CRM",
          "Formation à l'outil",
          "1 mois de support",
        ],
      },
      {
        name: "Campagne e-mail",
        price: { amount: 190, period: "campaign", startingFrom: true },
        features: [
          "Création du contenu",
          "Design responsive",
          "Segmentation de l'audience",
          "Scheduling optimisé",
          "Rapport de performance",
        ],
      },
    ],
    features: [
      "Campagnes e-mail créatives",
      "Segmentation avancée",
      "Automation et workflows",
      "A/B testing et optimisation",
      "Analytics et reporting",
    ],
    color: "text-red-600",
  },
  {
    id: "sites-web",
    category: "digital-web",
    name: "Sites web",
    title: "Sites web",
    shortDescription: "Sites web professionnels et performants",
    description:
      "Créez une présence en ligne professionnelle avec un site web performant, responsive et optimisé pour la conversion.",
    icon: Globe,
    href: "/services/sites-web",
    pricing: [
      {
        name: "Site basic (1 page)",
        price: { amount: 590, period: "one-time", startingFrom: true },
        features: [
          "Design responsive moderne",
          "Formulaire de contact",
          "SEO de base",
          "Hébergement 1 an inclus",
          "Formation à la gestion",
        ],
      },
      {
        name: "Site standard (5 pages)",
        price: { amount: 1490, period: "one-time", startingFrom: true },
        features: [
          "Design sur-mesure",
          "CMS WordPress",
          "Intégration Google Analytics",
          "Formation complète",
          "3 mois de support",
        ],
        popular: true,
      },
      {
        name: "Site e-commerce",
        price: { amount: 2490, period: "one-time", startingFrom: true },
        features: [
          "Boutique en ligne complète",
          "Pages produits illimitées",
          "Intégration paiement",
          "WooCommerce ou Shopify",
          "Formation et support",
        ],
      },
    ],
    features: [
      "Design sur-mesure",
      "Développement responsive",
      "Optimisation performance",
      "CMS et e-commerce",
      "Maintenance et support",
    ],
    color: "text-green-600",
  },
  {
    id: "landing-pages",
    category: "digital-web",
    name: "Landing pages",
    title: "Landing pages",
    shortDescription: "Pages de conversion haute performance",
    description:
      "Maximisez vos conversions avec des landing pages optimisées, testées et conçues pour transformer vos visiteurs en clients.",
    icon: Target,
    href: "/services/landing-pages",
    pricing: {
      amount: 490,
      period: "one-time",
      startingFrom: true,
      description:
        "Design orienté conversion, copywriting persuasif, intégration formulaires, analytics de base",
    },
    features: [
      "Design orienté conversion",
      "Copywriting persuasif",
      "A/B testing",
      "Intégration formulaires",
      "Analytics et optimisation",
    ],
    color: "text-orange-600",
  },

  // Visual Identity & Print Services
  {
    id: "logo-branding",
    category: "visual-print",
    name: "Logo & Branding",
    title: "Logo design + identité de marque",
    shortDescription: "Identité visuelle professionnelle",
    description:
      "Créez une identité de marque forte et mémorable avec un logo professionnel et un guide de style complet.",
    icon: Palette,
    href: "/services/logo-branding",
    pricing: {
      amount: 690,
      period: "one-time",
      startingFrom: true,
      description:
        "Logo, typographie, palette de couleurs, guide de style, kit réseaux sociaux",
    },
    features: [
      "Création de logo professionnel",
      "Guide de style complet",
      "Palette de couleurs",
      "Typographie personnalisée",
      "Kit réseaux sociaux",
      "Fichiers source inclus",
    ],
    color: "text-pink-600",
  },
  {
    id: "print-design",
    category: "visual-print",
    name: "Print Design",
    title: "Design de supports imprimés",
    shortDescription: "Cartes de visite, flyers, brochures",
    description:
      "Matériel marketing imprimé professionnel pour renforcer votre présence offline.",
    icon: FileText,
    href: "/services/print-design",
    pricing: {
      amount: 90,
      period: "one-time",
      startingFrom: true,
      description: "Par design (cartes de visite, flyers, brochures)",
    },
    features: [
      "Design créatif et impactant",
      "Fichiers print-ready",
      "Formats standards et personnalisés",
      "Révisions incluses",
      "Formats source fournis",
    ],
    color: "text-indigo-600",
  },
  {
    id: "print-coordination",
    category: "visual-print",
    name: "Coordination impression",
    title: "Services d'impression",
    shortDescription: "Gestion de l'impression A-Z",
    description:
      "Nous coordonnons l'impression de vos supports avec nos partenaires locaux de confiance.",
    icon: Printer,
    href: "/services/print-coordination",
    pricing: {
      amount: 60,
      period: "project",
      startingFrom: true,
      description:
        "Coordination avec imprimeurs locaux, tarifs transparents sur demande",
    },
    features: [
      "Sélection de l'imprimeur",
      "Négociation des tarifs",
      "Contrôle qualité",
      "Gestion de la livraison",
      "Tarification transparente",
    ],
    color: "text-gray-600",
  },

  // Social Media & Advertising
  {
    id: "social-media-ads",
    category: "social-media",
    name: "Social media ads",
    title: "Publicité sur réseaux sociaux",
    shortDescription: "Campagnes Meta, LinkedIn, TikTok",
    description:
      "Atteignez votre audience cible avec des campagnes publicitaires optimisées sur Facebook, Instagram, LinkedIn.",
    icon: Share2,
    href: "/services/social-media-ads",
    pricing: [
      {
        name: "Configuration campagne",
        price: { amount: 290, period: "one-time" },
        features: [
          "Design des publicités",
          "Ciblage d'audience avancé",
          "Lancement de campagne",
          "Paramétrage du pixel",
          "Formation initiale",
        ],
      },
      {
        name: "Gestion mensuelle",
        price: { amount: 190, period: "monthly", startingFrom: true },
        features: [
          "Gestion par plateforme",
          "Optimisation d'audience",
          "Boosting de posts",
          "A/B testing créatifs",
          "Rapports mensuels",
        ],
        popular: true,
      },
    ],
    features: [
      "Campagnes Meta (Facebook/Instagram)",
      "LinkedIn Ads",
      "TikTok Ads",
      "Ciblage d'audience précis",
      "Optimisation continue",
      "Reporting détaillé",
    ],
    color: "text-blue-500",
  },
  {
    id: "social-content",
    category: "social-media",
    name: "Social media content",
    title: "Création de contenu",
    shortDescription: "Contenu engageant pour vos réseaux",
    description:
      "Calendrier éditorial complet avec visuels créatifs, captions et hashtags optimisés pour maximiser l'engagement.",
    icon: Calendar,
    href: "/services/social-content",
    pricing: {
      amount: 390,
      period: "monthly",
      startingFrom: true,
      description:
        "8-10 posts par mois avec création visuelle, captions, hashtags et scheduling",
    },
    features: [
      "8-10 posts par mois",
      "Création visuelle",
      "Rédaction de captions",
      "Recherche de hashtags",
      "Planning éditorial",
      "Scheduling automatique",
    ],
    color: "text-teal-600",
  },

  // Media Production
  {
    id: "video-production",
    category: "media-production",
    name: "Production vidéo",
    title: "Services de production vidéo",
    shortDescription: "Vidéos promo et corporate",
    description:
      "Captez l'attention avec des vidéos professionnelles pour vos réseaux sociaux, site web ou publicités.",
    icon: Video,
    href: "/services/video-production",
    pricing: [
      {
        name: "Vidéo promo courte",
        price: { amount: 490, period: "one-time", startingFrom: true },
        features: [
          "Jusqu'à 60 secondes",
          "Montage professionnel",
          "Musique et effets",
          "Optimisé pour les réseaux sociaux",
          "3 révisions incluses",
        ],
      },
      {
        name: "Vidéo corporate",
        price: { amount: 990, period: "one-time", startingFrom: true },
        features: [
          "2-3 minutes",
          "Scriptwriting",
          "Tournage sur site",
          "Interviews",
          "Option drone disponible",
          "Révisions illimitées",
        ],
        popular: true,
      },
    ],
    features: [
      "Vidéos promotionnelles",
      "Vidéos corporate",
      "Tournage professionnel",
      "Montage et post-production",
      "Optimisation multi-plateformes",
    ],
    color: "text-red-500",
  },
  {
    id: "photography",
    category: "media-production",
    name: "Photographie",
    title: "Séances photo professionnelles",
    shortDescription: "Photos événements et corporate",
    description:
      "Photos professionnelles pour votre site web, réseaux sociaux, ou couverture d'événements.",
    icon: Camera,
    href: "/services/photography",
    pricing: {
      amount: 290,
      period: "session",
      startingFrom: true,
      description:
        "Session événement ou corporate avec retouche professionnelle",
    },
    features: [
      "Photos événements",
      "Portraits corporate",
      "Photos produits",
      "Retouche professionnelle",
      "Haute résolution",
      "Droits d'utilisation inclus",
    ],
    color: "text-yellow-600",
  },

  // Management & Consulting
  {
    id: "digital-strategy",
    category: "consulting",
    name: "Consulting digital",
    title: "Consulting stratégie digitale",
    shortDescription: "Conseil stratégique personnalisé",
    description:
      "Guidance experte sur votre stratégie digitale, branding, marketing et choix de plateformes.",
    icon: Lightbulb,
    href: "/services/digital-strategy",
    pricing: {
      amount: 120,
      period: "hour",
      description: "Session d'1 heure + roadmap personnalisée",
    },
    features: [
      "Audit de présence digitale",
      "Recommandations stratégiques",
      "Roadmap personnalisée",
      "Conseil sur les outils",
      "Support par e-mail (7j)",
    ],
    color: "text-amber-600",
  },
  {
    id: "project-management",
    category: "consulting",
    name: "Gestion de projet",
    title: "Gestion de projet externalisée",
    shortDescription: "Coordination complète de vos projets",
    description:
      "Nous gérons vos campagnes, lancements de site ou projets média de A à Z.",
    icon: Briefcase,
    href: "/services/project-management",
    pricing: {
      amount: 490,
      period: "project",
      startingFrom: true,
      description: "Coordination A-Z de votre projet digital ou marketing",
    },
    features: [
      "Coordination complète",
      "Gestion des prestataires",
      "Planning et suivi",
      "Reporting régulier",
      "Point de contact unique",
    ],
    color: "text-slate-600",
  },

  // Additional Service
  {
    id: "email-deliverability",
    category: "digital-web",
    name: "E-mail Deliverability",
    title: "Optimisation de la délivrabilité e-mail",
    shortDescription: "Assurez que vos e-mails arrivent en boîte de réception",
    description:
      "Améliorez la délivrabilité de vos e-mails et évitez les filtres anti-spam avec notre expertise technique.",
    icon: Server,
    href: "/services/email-deliverability",
    pricing: {
      amount: 390,
      period: "one-time",
      description:
        "Audit de délivrabilité, configuration SPF/DKIM/DMARC, optimisation",
    },
    features: [
      "Audit de délivrabilité",
      "Configuration SPF/DKIM/DMARC",
      "Optimisation de la réputation",
      "Tests de spam score",
      "Recommandations techniques",
      "Suivi sur 30 jours",
    ],
    color: "text-cyan-600",
  },
];

// Helper Functions
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getServicesByCategory(
  category: ServiceCategory
): Service[] {
  return services.filter((service) => service.category === category);
}

export function formatPrice(pricing: ServicePricing): string {
  const { amount, period, startingFrom } = pricing;
  const prefix = startingFrom ? "À partir de " : "";

  if (!period || period === "one-time") {
    return `${prefix}${amount}€`;
  }

  const periodMap = {
    monthly: "/mois",
    campaign: "/campagne",
    hour: "/heure",
    session: "/session",
    project: "/projet",
  };

  return `${prefix}${amount}€${periodMap[period as keyof typeof periodMap] || ""}`;
}

// Category Labels
export const categoryLabels: Record<ServiceCategory, string> = {
  "digital-web": "Digital & web",
  "visual-print": "Identité visuelle & print",
  "social-media": "Réseaux sociaux & publicité",
  "media-production": "Production média",
  "consulting": "Management & consulting",
};
