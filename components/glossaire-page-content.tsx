"use client";

import Link from "next/link";
import { Book, Search, Mail, Globe, TrendingUp, ArrowRight, Server } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";

interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  example?: string;
}

interface GlossaryCategory {
  title: string;
  slug: string;
  icon: React.ElementType;
  terms: GlossaryTerm[];
}

const glossaryData: GlossaryCategory[] = [
  {
    title: "Marketing digital",
    slug: "marketing-digital",
    icon: TrendingUp,
    terms: [
      {
        term: "SEO",
        slug: "seo",
        definition: "Techniques pour que votre site apparaisse dans les résultats Google sans payer de publicité.",
        example: "Quand quelqu'un cherche \"coiffeur Luxembourg\", le SEO aide votre salon à apparaître en haut des résultats.",
      },
      {
        term: "SEA",
        slug: "sea",
        definition: "Publicités payantes qui apparaissent en haut des résultats Google (marquées \"Annonce\").",
        example: "Vous payez pour que votre annonce s'affiche quand quelqu'un cherche vos services.",
      },
      {
        term: "ROI",
        slug: "roi",
        definition: "Ce que vous gagnez par rapport à ce que vous investissez. Si vous dépensez 100 et gagnez 300, votre ROI est positif.",
        example: "Une campagne avec un bon ROI vous rapporte plus qu'elle ne vous coûte.",
      },
      {
        term: "KPI",
        slug: "kpi",
        definition: "Indicateurs qui mesurent si vos actions marketing fonctionnent.",
        example: "Nombre de visiteurs, nombre de demandes de devis, chiffre d'affaires généré.",
      },
      {
        term: "Taux de conversion",
        slug: "taux-de-conversion",
        definition: "Pourcentage de visiteurs qui font l'action souhaitée (achat, demande de devis, inscription).",
        example: "Si 100 personnes visitent votre site et 5 vous contactent, votre taux de conversion est de 5%.",
      },
      {
        term: "Lead",
        slug: "lead",
        definition: "Une personne potentiellement intéressée par vos services qui vous a laissé ses coordonnées.",
        example: "Quelqu'un qui remplit votre formulaire de contact est un lead.",
      },
      {
        term: "CTA (Call-to-Action)",
        slug: "cta",
        definition: "Bouton ou texte qui invite le visiteur à faire une action précise.",
        example: "\"Demandez un devis gratuit\", \"Réservez maintenant\", \"Contactez-nous\".",
      },
    ],
  },
  {
    title: "Site web",
    slug: "site-web",
    icon: Globe,
    terms: [
      {
        term: "Responsive",
        slug: "responsive",
        definition: "Un site qui s'adapte automatiquement à tous les écrans : mobile, tablette et ordinateur.",
        example: "Votre site a la même qualité d'affichage sur un iPhone que sur un ordinateur de bureau.",
      },
      {
        term: "CMS",
        slug: "cms",
        definition: "Outil qui vous permet de modifier votre site vous-même, sans connaissances techniques.",
        example: "WordPress est un CMS populaire. Vous pouvez changer vos textes et images facilement.",
      },
      {
        term: "Hébergement",
        slug: "hebergement",
        definition: "Le service qui garde votre site en ligne 24h/24. C'est l'équivalent du loyer pour votre site.",
        example: "Sans hébergement, votre site n'est pas accessible sur internet.",
      },
      {
        term: "Nom de domaine",
        slug: "nom-de-domaine",
        definition: "L'adresse de votre site sur internet (exemple : votre-entreprise.lu).",
        example: "C'est ce que les gens tapent dans leur navigateur pour vous trouver.",
      },
      {
        term: "SSL / HTTPS",
        slug: "ssl-https",
        definition: "Certificat de sécurité qui protège les données de vos visiteurs. Reconnaissable au cadenas dans la barre d'adresse.",
        example: "Indispensable pour rassurer vos visiteurs et améliorer votre référencement Google.",
      },
      {
        term: "Landing page",
        slug: "landing-page",
        definition: "Page web conçue pour une action précise : inscription, achat, demande de devis.",
        example: "Une page dédiée à une offre spéciale avec un formulaire pour réserver.",
      },
    ],
  },
  {
    title: "E-mail marketing",
    slug: "email-marketing",
    icon: Mail,
    terms: [
      {
        term: "Newsletter",
        slug: "newsletter",
        definition: "E-mail envoyé régulièrement à vos abonnés pour partager actualités et offres.",
        example: "Un e-mail mensuel avec vos nouveautés et conseils pour vos clients.",
      },
      {
        term: "Taux d'ouverture",
        slug: "taux-ouverture",
        definition: "Pourcentage de personnes qui ouvrent votre e-mail.",
        example: "Un bon taux d'ouverture se situe entre 20% et 30%.",
      },
      {
        term: "Délivrabilité",
        slug: "delivrabilite",
        definition: "Capacité de vos e-mails à arriver dans la boîte de réception (et non dans les spams).",
        example: "Une mauvaise configuration technique peut envoyer vos e-mails directement en spam.",
      },
      {
        term: "Automation",
        slug: "automation",
        definition: "E-mails envoyés automatiquement selon des règles que vous définissez.",
        example: "Un e-mail de bienvenue automatique quand quelqu'un s'inscrit à votre newsletter.",
      },
      {
        term: "Segmentation",
        slug: "segmentation",
        definition: "Diviser votre liste de contacts en groupes pour envoyer des messages adaptés.",
        example: "Envoyer une offre différente aux nouveaux clients et aux clients fidèles.",
      },
    ],
  },
  {
    title: "E-mail technique",
    slug: "email-technique",
    icon: Server,
    terms: [
      {
        term: "SPF",
        slug: "spf",
        definition: "Protocole qui permet aux serveurs de messagerie de vérifier que l'e-mail vient bien d'un expéditeur autorisé.",
        example: "Sans SPF correctement configuré, vos e-mails risquent d'être considérés comme suspects.",
      },
      {
        term: "DKIM",
        slug: "dkim",
        definition: "Signature numérique ajoutée à vos e-mails qui prouve qu'ils n'ont pas été modifiés en cours de route.",
        example: "DKIM est comme un sceau de cire sur une lettre : il garantit l'authenticité du message.",
      },
      {
        term: "DMARC",
        slug: "dmarc",
        definition: "Règle qui indique aux serveurs de messagerie comment traiter les e-mails qui échouent aux vérifications SPF et DKIM.",
        example: "DMARC peut indiquer de rejeter, mettre en quarantaine ou accepter les e-mails suspects.",
      },
    ],
  },
  {
    title: "Réseaux sociaux",
    slug: "reseaux-sociaux",
    icon: Search,
    terms: [
      {
        term: "Engagement",
        slug: "engagement",
        definition: "Les interactions sur vos publications : likes, commentaires, partages.",
        example: "Un post avec beaucoup d'engagement est vu par plus de personnes.",
      },
      {
        term: "Portée (Reach)",
        slug: "portee",
        definition: "Nombre de personnes uniques qui ont vu votre publication.",
        example: "Une portée de 1000 signifie que 1000 personnes différentes ont vu votre post.",
      },
      {
        term: "Impression",
        slug: "impression",
        definition: "Nombre total de fois où votre contenu a été affiché (une même personne peut voir plusieurs fois).",
        example: "1000 impressions ne veut pas dire 1000 personnes différentes.",
      },
      {
        term: "Ciblage",
        slug: "ciblage",
        definition: "Choisir précisément à qui montrer vos publicités selon des critères (âge, lieu, intérêts).",
        example: "Montrer votre pub de restaurant uniquement aux personnes vivant à 10km.",
      },
      {
        term: "Pixel",
        slug: "pixel",
        definition: "Code invisible sur votre site qui permet de suivre ce que font les visiteurs venus de vos pubs.",
        example: "Savoir combien de personnes ont acheté après avoir vu votre publicité Facebook.",
      },
    ],
  },
];

export default function GlossairePageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 px-4 py-2 text-sm font-medium">
              <Book className="h-4 w-4 text-primary" />
              <span>Glossaire</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Le marketing digital expliqué simplement
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Tous les termes que vous rencontrez sur notre site et dans le monde
              du marketing digital, expliqués en français clair et sans jargon.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Glossary Content with Sticky Sidebar */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sticky Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <nav className="sticky top-24 space-y-6 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
                <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Navigation
                </h2>
                {glossaryData.map((category) => (
                  <div key={category.slug} className="space-y-2">
                    <a
                      href={`#${category.slug}`}
                      className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <category.icon className="h-4 w-4 text-primary" />
                      {category.title}
                    </a>
                    <ul className="ml-6 space-y-1 border-l border-border pl-3">
                      {category.terms.map((term) => (
                        <li key={term.slug}>
                          <a
                            href={`#${term.slug}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5"
                          >
                            {term.term}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-16">
              {glossaryData.map((category) => (
                <div key={category.slug}>
                  <div
                    id={category.slug}
                    className="scroll-mt-24 flex items-center gap-3 mb-8"
                  >
                    <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>

                  <div className="space-y-6">
                    {category.terms.map((item) => (
                      <div key={item.slug}>
                        <div
                          id={item.slug}
                          className="scroll-mt-24 rounded-xl border bg-card p-6 transition-all hover:shadow-md hover:border-primary/30"
                        >
                          <h3 className="text-lg font-semibold text-primary">
                            {item.term}
                          </h3>
                          <p className="mt-2 text-muted-foreground">
                            {item.definition}
                          </p>
                          {item.example && (
                            <p className="mt-3 text-sm text-muted-foreground/80 border-l-2 border-primary/30 pl-4 italic">
                              Exemple : {item.example}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Besoin d&apos;aide pour votre marketing digital ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Nous parlons votre langue, pas le jargon technique. Discutons de
              votre projet en termes simples.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-3 font-semibold text-primary transition-all hover:bg-gray-100 hover:scale-105"
              >
                Contactez-nous
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
