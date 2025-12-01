"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  FileText,
  Briefcase,
  Target,
  User,
  Calendar,
  Sparkles,
  Send,
  Globe,
  Palette,
  Share2,
  Video,
  Lightbulb
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import FadeIn from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { services, type ServiceCategory } from "@/lib/services-data";

interface FormData {
  // Step 1: Project Category & Services
  projectCategory: ServiceCategory | "autre" | "";
  services: string[];

  // Step 2: Project Details
  projectName: string;
  projectDescription: string;
  targetAudience: string;

  // Step 3: Budget & Timeline
  budget: string;
  timeline: string;
  urgency: string;

  // Step 4: Contact Information
  fullName: string;
  email: string;
  phone: string;
  company: string;

  // Step 5: Additional Information
  additionalInfo: string;
  hearAboutUs: string;
}

const initialFormData: FormData = {
  projectCategory: "",
  services: [],
  projectName: "",
  projectDescription: "",
  targetAudience: "",
  budget: "",
  timeline: "",
  urgency: "",
  fullName: "",
  email: "",
  phone: "",
  company: "",
  additionalInfo: "",
  hearAboutUs: "",
};

const projectCategories = [
  {
    value: "digital-web",
    label: "Digital & Web",
    description: "Sites web, SEO, SEA, E-mail marketing",
    icon: Globe
  },
  {
    value: "visual-print",
    label: "Identité visuelle & print",
    description: "Logo, branding, supports imprimés",
    icon: Palette
  },
  {
    value: "social-media",
    label: "Réseaux sociaux",
    description: "Publicité sociale, création de contenu",
    icon: Share2
  },
  {
    value: "media-production",
    label: "Production média",
    description: "Vidéo, photographie professionnelle",
    icon: Video
  },
  {
    value: "consulting",
    label: "Consulting & Gestion",
    description: "Stratégie digitale, gestion de projet",
    icon: Lightbulb
  },
  {
    value: "autre",
    label: "Autre",
    description: "Projet personnalisé",
    icon: Briefcase
  },
];

// Group services by category for easy filtering
const getServicesForCategory = (category: string) => {
  if (category === "autre") return services; // Show all services for "autre"
  return services.filter(s => s.category === category);
};

const budgetRanges = [
  { value: "small", label: "Petit budget", description: "Projet simple" },
  { value: "medium", label: "Budget moyen", description: "Projet standard" },
  { value: "large", label: "Budget conséquent", description: "Projet important" },
  { value: "enterprise", label: "Grand budget", description: "Projet d'envergure" },
  { value: "flexible", label: "Budget flexible", description: "À discuter" },
];

const timelineOptions = [
  { value: "urgent", label: "< 1 mois", description: "Urgent" },
  { value: "normal", label: "1-3 mois", description: "Normal" },
  { value: "relaxed", label: "3-6 mois", description: "Pas pressé" },
  { value: "long-term", label: "> 6 mois", description: "Long terme" },
];

export default function CustomQuotePageContent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    const currentServices = formData.services;
    const updatedServices = currentServices.includes(service)
      ? currentServices.filter((s) => s !== service)
      : [...currentServices, service];
    updateFormData("services", updatedServices);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.projectCategory !== "";
      case 2:
        return formData.projectName !== "" && formData.projectDescription !== "";
      case 3:
        return formData.budget !== "" && formData.timeline !== "";
      case 4:
        return formData.fullName !== "" && formData.email !== "" && formData.phone !== "";
      case 5:
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (canProceed() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Demande envoyée avec succès !</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Merci pour votre demande de devis. Notre équipe va l'analyser et vous
              contacter dans les 24h avec une proposition détaillée.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-md border-2 border-black dark:border-white bg-transparent px-6 py-3 font-semibold text-black dark:text-white transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Retour à l'accueil
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-6 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100"
              >
                Voir nos services
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Devis personnalisé</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Obtenez votre devis sur mesure
            </h1>
            <p className="text-lg text-muted-foreground">
              Répondez à quelques questions pour recevoir une estimation détaillée
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-all ${
                      step < currentStep
                        ? "border-primary bg-primary text-primary-foreground"
                        : step === currentStep
                        ? "border-primary bg-background text-primary"
                        : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    {step < currentStep ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      step
                    )}
                  </div>
                  {step < totalSteps && (
                    <div
                      className={`h-1 w-12 lg:w-24 transition-all ${
                        step < currentStep ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Type</span>
              <span>Détails</span>
              <span>Budget</span>
              <span>Contact</span>
              <span>Finaliser</span>
            </div>
          </div>

          {/* Form Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {currentStep === 1 && <><FileText className="h-6 w-6 text-primary" />Type de projet</>}
                {currentStep === 2 && <><Briefcase className="h-6 w-6 text-primary" />Détails du projet</>}
                {currentStep === 3 && <>Budget & Délais</>}
                {currentStep === 4 && <><User className="h-6 w-6 text-primary" />Vos coordonnées</>}
                {currentStep === 5 && <><Target className="h-6 w-6 text-primary" />Informations complémentaires</>}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Quel type de projet souhaitez-vous réaliser ?"}
                {currentStep === 2 && "Parlez-nous de votre projet"}
                {currentStep === 3 && "Définissez votre budget et vos délais"}
                {currentStep === 4 && "Comment pouvons-nous vous contacter ?"}
                {currentStep === 5 && "Dernières informations avant envoi"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Project Category & Services */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Catégorie de projet
                    </Label>
                    <RadioGroup
                      value={formData.projectCategory}
                      onValueChange={(value) => updateFormData("projectCategory", value)}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        {projectCategories.map((category) => {
                          const isSelected = formData.projectCategory === category.value;
                          const Icon = category.icon;
                          return (
                            <div key={category.value}>
                              <RadioGroupItem
                                value={category.value}
                                id={category.value}
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor={category.value}
                                className={cn(
                                  "relative flex flex-col items-start gap-2 rounded-lg border-2 p-4 cursor-pointer transition-all",
                                  isSelected
                                    ? "border-primary bg-primary/10 dark:bg-primary/20 shadow-lg"
                                    : "border-muted bg-card hover:bg-accent/50 hover:border-primary/50"
                                )}
                              >
                                <div className="flex items-center gap-2">
                                  <Icon className={cn(
                                    "h-5 w-5",
                                    isSelected ? "text-primary" : "text-muted-foreground"
                                  )} />
                                  <span className={cn(
                                    "font-semibold",
                                    isSelected && "text-primary"
                                  )}>{category.label}</span>
                                </div>
                                <span className={cn(
                                  "text-sm",
                                  isSelected ? "text-foreground" : "text-muted-foreground"
                                )}>
                                  {category.description}
                                </span>
                                {isSelected && (
                                  <div className="absolute top-2 right-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                  </div>
                                )}
                              </Label>
                            </div>
                          );
                        })}
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.projectCategory && (
                    <div>
                      <Label className="text-base font-semibold mb-4 block">
                        Services spécifiques (optionnel)
                      </Label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {getServicesForCategory(formData.projectCategory).map((service) => {
                          const isChecked = formData.services.includes(service.id);
                          const ServiceIcon = service.icon;
                          return (
                            <div
                              key={service.id}
                              className={cn(
                                "flex items-center space-x-3 rounded-lg border-2 p-3 transition-all cursor-pointer",
                                isChecked
                                  ? "border-primary bg-primary/10 dark:bg-primary/20"
                                  : "border-muted hover:border-primary/50 bg-card hover:bg-accent/50"
                              )}
                              onClick={() => handleServiceToggle(service.id)}
                            >
                              <Checkbox
                                id={service.id}
                                checked={isChecked}
                                onCheckedChange={() => handleServiceToggle(service.id)}
                                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <ServiceIcon className="h-4 w-4 text-muted-foreground" />
                                  <Label
                                    htmlFor={service.id}
                                    className={cn(
                                      "text-sm font-medium cursor-pointer select-none",
                                      isChecked ? "text-primary" : "text-foreground"
                                    )}
                                  >
                                    {service.title}
                                  </Label>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {service.shortDescription}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="projectName">Nom du projet *</Label>
                    <Input
                      id="projectName"
                      placeholder="Ex: Site web pour mon entreprise"
                      value={formData.projectName}
                      onChange={(e) => updateFormData("projectName", e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="projectDescription">Description du projet *</Label>
                    <Textarea
                      id="projectDescription"
                      placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, public cible..."
                      value={formData.projectDescription}
                      onChange={(e) => updateFormData("projectDescription", e.target.value)}
                      rows={6}
                      className="mt-2"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Plus vous êtes précis, plus notre devis sera adapté à vos besoins
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="targetAudience">Public cible</Label>
                    <Input
                      id="targetAudience"
                      placeholder="Ex: Particuliers, B2B, professionnels... (optionnel)"
                      value={formData.targetAudience}
                      onChange={(e) => updateFormData("targetAudience", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Timeline */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Budget envisagé *
                    </Label>
                    <RadioGroup
                      value={formData.budget}
                      onValueChange={(value) => updateFormData("budget", value)}
                    >
                      <div className="grid gap-4">
                        {budgetRanges.map((range) => {
                          const isSelected = formData.budget === range.value;
                          return (
                            <div key={range.value}>
                              <RadioGroupItem
                                value={range.value}
                                id={`budget-${range.value}`}
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor={`budget-${range.value}`}
                                className={cn(
                                  "relative flex items-center justify-between rounded-lg border-2 p-4 cursor-pointer transition-all",
                                  isSelected
                                    ? "border-primary bg-primary/10 dark:bg-primary/20 shadow-lg"
                                    : "border-muted bg-card hover:bg-accent/50 hover:border-primary/50"
                                )}
                              >
                                <div>
                                  <span className={cn(
                                    "font-semibold block",
                                    isSelected && "text-primary"
                                  )}>{range.label}</span>
                                  <span className={cn(
                                    "text-sm",
                                    isSelected ? "text-foreground" : "text-muted-foreground"
                                  )}>
                                    {range.description}
                                  </span>
                                </div>
                                {isSelected && (
                                  <CheckCircle2 className="h-5 w-5 text-primary" />
                                )}
                              </Label>
                            </div>
                          );
                        })}
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Délai souhaité *
                    </Label>
                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={(value) => updateFormData("timeline", value)}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        {timelineOptions.map((option) => {
                          const isSelected = formData.timeline === option.value;
                          return (
                            <div key={option.value}>
                              <RadioGroupItem
                                value={option.value}
                                id={`timeline-${option.value}`}
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor={`timeline-${option.value}`}
                                className={cn(
                                  "relative flex flex-col items-start gap-2 rounded-lg border-2 p-4 cursor-pointer transition-all",
                                  isSelected
                                    ? "border-primary bg-primary/10 dark:bg-primary/20 shadow-lg"
                                    : "border-muted bg-card hover:bg-accent/50 hover:border-primary/50"
                                )}
                              >
                                <div className="flex items-center gap-2">
                                  {isSelected ? (
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                  ) : (
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                  )}
                                  <span className={cn(
                                    "font-semibold",
                                    isSelected && "text-primary"
                                  )}>{option.label}</span>
                                </div>
                                <span className={cn(
                                  "text-sm",
                                  isSelected ? "text-foreground" : "text-muted-foreground"
                                )}>
                                  {option.description}
                                </span>
                              </Label>
                            </div>
                          );
                        })}
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="fullName">Nom complet *</Label>
                      <Input
                        id="fullName"
                        placeholder="Marc Schmit"
                        value={formData.fullName}
                        onChange={(e) => updateFormData("fullName", e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Entreprise</Label>
                      <Input
                        id="company"
                        placeholder="Nom de votre entreprise (optionnel)"
                        value={formData.company}
                        onChange={(e) => updateFormData("company", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="marc.schmit@example.lu"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+352 621 123 456"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="rounded-lg border bg-muted/50 p-4">
                    <p className="text-sm text-muted-foreground">
                      Vos informations personnelles sont protégées et ne seront utilisées
                      que pour vous contacter concernant votre demande de devis.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 5: Additional Information */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="additionalInfo">
                      Informations complémentaires
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Détails importants à connaître ? (optionnel)"
                      value={formData.additionalInfo}
                      onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                      rows={4}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hearAboutUs">
                      Comment avez-vous entendu parler de nous ?
                    </Label>
                    <Input
                      id="hearAboutUs"
                      placeholder="Ex: Recommandation, Google, LinkedIn... (optionnel)"
                      value={formData.hearAboutUs}
                      onChange={(e) => updateFormData("hearAboutUs", e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  {/* Summary */}
                  <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6 space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Récapitulatif de votre demande
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Catégorie :</span>
                        <span className="font-medium">
                          {projectCategories.find((c) => c.value === formData.projectCategory)?.label}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Budget :</span>
                        <span className="font-medium">
                          {budgetRanges.find((b) => b.value === formData.budget)?.label}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Délai :</span>
                        <span className="font-medium">
                          {timelineOptions.find((t) => t.value === formData.timeline)?.label}
                        </span>
                      </div>
                      {formData.services.length > 0 && (
                        <div>
                          <span className="text-muted-foreground">Services sélectionnés :</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {formData.services.map((serviceId) => {
                              const service = services.find((s) => s.id === serviceId);
                              return service ? (
                                <span
                                  key={serviceId}
                                  className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                >
                                  {service.title}
                                </span>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Précédent
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100"
                  >
                    Suivant
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100"
                  >
                    {isSubmitting ? (
                      <>Envoi en cours...</>
                    ) : (
                      <>
                        Envoyer la demande
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Vous avez des questions ?{" "}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                Contactez-nous directement
              </Link>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
