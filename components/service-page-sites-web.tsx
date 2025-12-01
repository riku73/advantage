"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Code2,
  Zap,
  Shield,
  Search,
  Lightbulb,
  Palette,
  Wrench,
  Rocket,
  HeartHandshake,
  AlertCircle,
  TrendingDown,
  Smartphone,
  Lock,
  Clock,
  Bug
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import StaggerContainer, { StaggerItem } from "@/components/ui/stagger-container";
import FAQSection, { sitesWebFAQs } from "@/components/sections/faq-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const relatedServices = [
  { name: "SEO", href: "/services/seo" },
  { name: "Landing Pages", href: "/services/landing-pages" },
  { name: "Logo & Branding", href: "/services/logo-branding" },
];

export default function SitesWebPageContent() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <Globe className="h-4 w-4 text-primary" />
                <span>Développement web</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Sites web qui convertissent vos visiteurs
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Nous créons des sites web performants, esthétiques et optimisés
                pour transformer vos visiteurs en clients.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
                >
                  Démarrer votre projet
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=800&fit=crop&q=80"
                  alt="Website development with code and responsive design"
                  width={800}
                  height={800}
                  className="object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center">Notre processus de développement</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Une méthodologie éprouvée pour garantir la qualité de votre projet
            </p>

            <Accordion type="single" collapsible className="mt-12">
              <AccordionItem value="discovery">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <span className="font-semibold">1. Découverte & Analyse</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Audit de l'existant et analyse concurrentielle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Définition des objectifs business et techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Analyse des personas et parcours utilisateurs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Spécifications fonctionnelles et techniques détaillées</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="design">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Palette className="h-5 w-5 text-primary" />
                    <span className="font-semibold">2. Design & Prototypage</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Wireframes et architecture de l'information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Maquettes haute-fidélité responsive (mobile, tablet, desktop)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Design system et guide de style</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Prototype interactif pour validation</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="development">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Wrench className="h-5 w-5 text-primary" />
                    <span className="font-semibold">3. Développement</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Code propre et structuré selon les standards modernes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Développement responsive mobile-first</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Intégration CMS ou système custom selon besoins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Tests automatisés et contrôle qualité continu</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="launch">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Rocket className="h-5 w-5 text-primary" />
                    <span className="font-semibold">4. Lancement & Optimisation</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Tests de performance et optimisation finale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Configuration serveur et déploiement sécurisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Configuration analytics et outils de suivi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Formation à l'administration du site</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <HeartHandshake className="h-5 w-5 text-primary" />
                    <span className="font-semibold">5. Support & Maintenance</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Mises à jour de sécurité et compatibilité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Monitoring et alertes en cas de problème</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Sauvegardes automatiques quotidiennes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Support technique prioritaire</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Code Quality Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center">Standards de qualité</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Des normes strictes pour garantir l'excellence technique
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                      <Code2 className="h-6 w-6" />
                    </div>
                    <Badge>WCAG 2.1</Badge>
                  </div>
                  <CardTitle className="mt-4">Accessibilité</CardTitle>
                  <CardDescription>Conformité aux standards internationaux</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Navigation au clavier complète</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Lecteurs d'écran compatibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Contrastes optimisés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Textes alternatifs systématiques</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                      <Zap className="h-6 w-6" />
                    </div>
                    <Badge>Core Web Vitals</Badge>
                  </div>
                  <CardTitle className="mt-4">Performance</CardTitle>
                  <CardDescription>Vitesse et expérience optimales</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>LCP &lt; 2.5s (chargement)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>FID &lt; 100ms (interactivité)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>CLS &lt; 0.1 (stabilité visuelle)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Score Lighthouse &gt; 90</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                      <Shield className="h-6 w-6" />
                    </div>
                    <Badge>ES2023+</Badge>
                  </div>
                  <CardTitle className="mt-4">Code moderne</CardTitle>
                  <CardDescription>Standards JavaScript actuels</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>TypeScript pour la fiabilité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>ESLint et Prettier configurés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Git workflow structuré</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>Documentation complète</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Common Challenges Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center">Défis techniques courants et nos solutions</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Comment nous résolvons les problèmes les plus fréquents du développement web
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <Alert className="border-2">
                    <TrendingDown className="h-5 w-5 text-primary" />
                    <AlertTitle className="text-lg font-semibold mb-2">Performance lente</AlertTitle>
                    <AlertDescription>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium">
                          Problème : Temps de chargement &gt; 5s, taux de rebond élevé
                        </p>
                        <p className="font-semibold text-foreground">Notre solution technique :</p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2">
                            <Zap className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Lazy loading et code splitting automatique</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Optimisation images (WebP, AVIF, responsive)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Zap className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>CDN et mise en cache agressive</span>
                          </li>
                        </ul>
                        <Badge variant="outline" className="mt-2">Next.js • Image Optimization • Vercel Edge</Badge>
                      </div>
                    </AlertDescription>
                  </Alert>
                </StaggerItem>

                <StaggerItem>
                  <Alert className="border-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <AlertTitle className="text-lg font-semibold mb-2">Mauvaise expérience mobile</AlertTitle>
                    <AlertDescription>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium">
                          Problème : Interface non adaptée, navigation difficile sur mobile
                        </p>
                        <p className="font-semibold text-foreground">Notre solution technique :</p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2">
                            <Smartphone className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Approche mobile-first dans tout le design</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Smartphone className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Touch-friendly UI avec zones tactiles optimales</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Smartphone className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Tests sur devices réels (iOS, Android)</span>
                          </li>
                        </ul>
                        <Badge variant="outline" className="mt-2">Tailwind CSS • Responsive Design • PWA</Badge>
                      </div>
                    </AlertDescription>
                  </Alert>
                </StaggerItem>

                <StaggerItem>
                  <Alert className="border-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <AlertTitle className="text-lg font-semibold mb-2">Vulnérabilités de sécurité</AlertTitle>
                    <AlertDescription>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium">
                          Problème : Failles XSS, CSRF, injections SQL
                        </p>
                        <p className="font-semibold text-foreground">Notre solution technique :</p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2">
                            <Shield className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Validation et sanitisation des inputs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>CSRF tokens et headers de sécurité</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Audit automatisé (Snyk, OWASP ZAP)</span>
                          </li>
                        </ul>
                        <Badge variant="outline" className="mt-2">HTTPS • JWT • Rate Limiting</Badge>
                      </div>
                    </AlertDescription>
                  </Alert>
                </StaggerItem>
              </StaggerContainer>

              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <Alert className="border-2">
                    <Search className="h-5 w-5 text-primary" />
                    <AlertTitle className="text-lg font-semibold mb-2">SEO inexistant</AlertTitle>
                    <AlertDescription>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium">
                          Problème : Pas de trafic organique, invisibilité sur Google
                        </p>
                        <p className="font-semibold text-foreground">Notre solution technique :</p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2">
                            <Search className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>SSR/SSG pour indexation optimale</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Search className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Métadonnées dynamiques et Schema.org</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Search className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Sitemap XML et robots.txt optimisés</span>
                          </li>
                        </ul>
                        <Badge variant="outline" className="mt-2">Next.js SEO • Structured Data • Semantic HTML</Badge>
                      </div>
                    </AlertDescription>
                  </Alert>
                </StaggerItem>

                <StaggerItem>
                  <Alert className="border-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <AlertTitle className="text-lg font-semibold mb-2">Maintenance coûteuse</AlertTitle>
                    <AlertDescription>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium">
                          Problème : Code legacy, dépendances obsolètes, bugs fréquents
                        </p>
                        <p className="font-semibold text-foreground">Notre solution technique :</p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2">
                            <Code2 className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Code moderne avec TypeScript</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Code2 className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Documentation automatisée</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Code2 className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Tests unitaires et d'intégration</span>
                          </li>
                        </ul>
                        <Badge variant="outline" className="mt-2">TypeScript • Jest • CI/CD</Badge>
                      </div>
                    </AlertDescription>
                  </Alert>
                </StaggerItem>

                <StaggerItem>
                  <Alert className="border-2">
                    <Bug className="h-5 w-5 text-primary" />
                    <AlertTitle className="text-lg font-semibold mb-2">Bugs en production</AlertTitle>
                    <AlertDescription>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium">
                          Problème : Erreurs non détectées, expérience utilisateur dégradée
                        </p>
                        <p className="font-semibold text-foreground">Notre solution technique :</p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Monitoring temps réel (Sentry, Datadog)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Tests E2E avant chaque déploiement</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-3 w-3 mt-1 flex-shrink-0" />
                            <span>Rollback automatique si erreurs détectées</span>
                          </li>
                        </ul>
                        <Badge variant="outline" className="mt-2">Error Tracking • E2E Testing • Continuous Deployment</Badge>
                      </div>
                    </AlertDescription>
                  </Alert>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Technology Deep-Dive */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center">Pourquoi Next.js pour votre site web ?</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Analyse technique approfondie de notre framework principal
            </p>

            <div className="mt-12 space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Performance native exceptionnelle</CardTitle>
                  <CardDescription className="text-base">
                    Next.js offre des optimisations de performance impossibles avec les frameworks traditionnels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border bg-card p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        Rendu hybride
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Combine SSR (Server-Side Rendering), SSG (Static Site Generation) et CSR (Client-Side Rendering) selon les besoins de chaque page. Le HTML est généré côté serveur pour un premier affichage quasi-instantané.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-primary" />
                        Code splitting automatique
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Chaque page charge uniquement le JavaScript nécessaire. Si une page fait 50KB et une autre 200KB, l'utilisateur ne télécharge que ce dont il a besoin.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
                    <h4 className="font-semibold mb-3">Impact mesurable sur les Core Web Vitals</h4>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div>
                        <div className="text-2xl font-bold text-primary">2.5s</div>
                        <div className="text-xs text-muted-foreground">LCP moyen (vs 4-6s en SPA classique)</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">50ms</div>
                        <div className="text-xs text-muted-foreground">FID typique (vs 100-300ms)</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">0.05</div>
                        <div className="text-xs text-muted-foreground">CLS optimal (vs 0.2-0.5)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">SEO technique supérieur</CardTitle>
                  <CardDescription className="text-base">
                    Architecture optimisée pour le référencement naturel dès la base
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Contrairement aux SPAs React classiques où le contenu est généré côté client (invisible pour les crawlers), Next.js envoie du HTML complet au serveur. Les moteurs de recherche indexent immédiatement le contenu sans attendre l'exécution JavaScript.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-sm">Server Components</h5>
                        <p className="text-xs text-muted-foreground mt-1">
                          Les composants React Server Components s'exécutent côté serveur, réduisant le JavaScript envoyé au client de 30-50% tout en gardant l'interactivité.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-sm">Metadata API</h5>
                        <p className="text-xs text-muted-foreground mt-1">
                          Génération automatique des balises meta, Open Graph, Twitter Cards et Schema.org avec typage TypeScript pour éviter les erreurs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-sm">Sitemap & Robots.txt dynamiques</h5>
                        <p className="text-xs text-muted-foreground mt-1">
                          Génération automatique basée sur les routes du site, toujours à jour même avec du contenu dynamique.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Expérience développeur et maintenabilité</CardTitle>
                  <CardDescription className="text-base">
                    Un écosystème moderne qui facilite les évolutions futures
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Badge variant="secondary">TypeScript natif</Badge>
                      <p className="text-sm text-muted-foreground">
                        Détection d'erreurs à la compilation, autocomplétion intelligente, refactoring sécurisé. Le typage strict réduit les bugs de 40% selon nos observations.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary">Hot Module Replacement</Badge>
                      <p className="text-sm text-muted-foreground">
                        Les changements de code apparaissent instantanément sans recharger la page, préservant l'état de l'application. Gain de temps de développement estimé à 30%.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary">Route Handlers</Badge>
                      <p className="text-sm text-muted-foreground">
                        API routes intégrées permettant de créer des endpoints backend sans serveur Node.js séparé. Simplifie l'architecture et réduit les coûts d'infrastructure.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary">Edge Runtime</Badge>
                      <p className="text-sm text-muted-foreground">
                        Déploiement automatique sur un CDN global. Vos pages sont servies depuis le serveur le plus proche géographiquement de l'utilisateur.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-lg border-2 border-primary bg-primary/5 p-6">
                <h3 className="font-semibold text-lg mb-2">Alternative considérée</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Nous évaluons systématiquement Vue.js/Nuxt.js pour chaque projet. Next.js est choisi quand la performance SEO est critique et que l'écosystème React offre les librairies nécessaires. Pour des projets avec des besoins différents, nous adaptons notre stack technologique.
                </p>
                <Badge variant="outline">Approche agnostique • Best tool for the job</Badge>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes sur la création de sites web"
        subtitle="Tout ce que vous devez savoir sur nos services de développement web"
        faqs={sitesWebFAQs}
        className="bg-muted/50"
      />

      {/* Related Services */}
      <section className="border-t py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="text-2xl font-bold">Services complémentaires</h2>
              <div className="mt-6 flex flex-wrap gap-4">
                {relatedServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-md border bg-card px-6 py-3 transition-all hover:bg-muted hover:scale-105"
                  >
                    {service.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Créons ensemble votre site web
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Discutons de votre projet et découvrez comment nous pouvons créer le site web parfait pour votre entreprise.
            </p>
            <div className="mt-8">
              <Link
                href="/devis-personnalise"
                className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                Demandez un devis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
