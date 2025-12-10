"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
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
  Lightbulb,
  Mail,
  Phone,
  Building2,
  Wallet,
  Clock,
  Users
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
  hearAboutUsOther: string;
  privacyConsent: boolean;
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
  hearAboutUsOther: "",
  privacyConsent: false,
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

// Custom order for digital-web services (same as services page)
const digitalWebOrder = [
  "landing-pages",
  "sites-web",
  "seo",
  "sea",
  "email-marketing",
  "email-deliverability",
];

// Group services by category for easy filtering
const getServicesForCategory = (category: string) => {
  if (category === "autre") return services; // Show all services for "autre"

  const filteredServices = services.filter(s => s.category === category);

  // Apply custom order for digital-web
  if (category === "digital-web") {
    filteredServices.sort((a, b) => {
      const aIndex = digitalWebOrder.indexOf(a.id);
      const bIndex = digitalWebOrder.indexOf(b.id);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
  }

  return filteredServices;
};

const budgetRanges = [
  { value: "small", label: "Petit budget", description: "Projet simple" },
  { value: "medium", label: "Budget moyen", description: "Projet standard" },
  { value: "large", label: "Grand budget", description: "Projet d'envergure" },
];

const timelineOptions = [
  { value: "urgent", label: "< 1 mois", description: "Urgent" },
  { value: "normal", label: "1-3 mois", description: "Normal" },
  { value: "relaxed", label: "3-6 mois", description: "Pas pressé" },
  { value: "long-term", label: "> 6 mois", description: "Long terme" },
];

const hearAboutUsOptions = [
  { value: "google", label: "Recherche Google" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "recommendation", label: "Recommandation" },
  { value: "social-media", label: "Réseaux sociaux" },
  { value: "autre", label: "Autre" },
];

export default function CustomQuotePageContent() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const totalSteps = 5;

  const updateFormData = (field: keyof FormData, value: string | string[] | boolean) => {
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
        return formData.projectName !== "";
      case 3:
        return formData.budget !== "" && formData.timeline !== "";
      case 4:
        return formData.fullName !== "" && formData.email !== "" && formData.phone !== "";
      case 5:
        return formData.privacyConsent === true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (canProceed() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      setTimeout(() => {
        progressBarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setTimeout(() => {
        progressBarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    router.push("/merci");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 py-20 overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-8 overflow-hidden">
        <FadeIn className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Devis personnalisé</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Obtenez votre devis sur mesure
            </h1>
            <p className="text-lg text-muted-foreground">
              Répondez à quelques questions pour recevoir une estimation détaillée
            </p>
          </div>

          {/* Progress Bar */}
          <div ref={progressBarRef} className="mb-12 scroll-mt-8">
            {/* Circles and Lines Row */}
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((step, index) => (
                <div key={step} className={cn("flex items-center", index < 4 && "flex-1")}>
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-all shrink-0",
                      step < currentStep
                        ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
                        : step === currentStep
                        ? "border-black dark:border-white bg-background text-black dark:text-white"
                        : "border-gray-300 dark:border-gray-600 bg-background text-muted-foreground"
                    )}
                  >
                    {step < currentStep ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      step
                    )}
                  </div>
                  {index < 4 && (
                    <div
                      className={cn(
                        "flex-1 mx-2 transition-all rounded-full",
                        step < currentStep
                          ? "h-1 bg-black dark:bg-white"
                          : "h-0.5 bg-gray-300 dark:bg-gray-600"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
            {/* Labels Row */}
            <div className="hidden sm:flex mt-2">
              {["Type", "Détails", "Budget", "Contact", "Finaliser"].map((label, index) => (
                <div key={label} className={cn("text-xs text-muted-foreground", index < 4 ? "flex-1" : "")}>
                  <span className="inline-block w-10 text-center">{label}</span>
                </div>
              ))}
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
                            <div
                              key={category.value}
                              onClick={() => updateFormData("projectCategory", category.value)}
                              className="cursor-pointer"
                            >
                              <RadioGroupItem
                                value={category.value}
                                id={category.value}
                                className="peer sr-only"
                              />
                              <div
                                className={cn(
                                  "relative flex flex-col items-start gap-2 rounded-lg border-2 p-4 transition-all",
                                  isSelected
                                    ? "border-primary bg-primary/10 dark:bg-primary/20 shadow-lg shadow-primary/10"
                                    : "border-gray-200 dark:border-gray-700 bg-card hover:bg-accent/50 hover:border-gray-300 dark:hover:border-gray-600"
                                )}
                              >
                                {isSelected && (
                                  <div className="absolute inset-0 rounded-lg ring-2 ring-primary ring-offset-2 ring-offset-background pointer-events-none" />
                                )}
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
                              </div>
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
                                "relative flex items-center space-x-3 rounded-lg border-2 p-3 transition-all cursor-pointer",
                                isChecked
                                  ? "border-primary bg-primary/10 dark:bg-primary/20 shadow-lg shadow-primary/10"
                                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-card hover:bg-accent/50"
                              )}
                              onClick={() => handleServiceToggle(service.id)}
                            >
                              <Checkbox
                                checked={isChecked}
                                onCheckedChange={() => {}}
                                onClick={(e) => e.stopPropagation()}
                                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary pointer-events-none"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <ServiceIcon className="h-4 w-4 text-muted-foreground" />
                                  <span
                                    className={cn(
                                      "text-sm font-medium select-none",
                                      isChecked ? "text-primary" : "text-foreground"
                                    )}
                                  >
                                    {service.title}
                                  </span>
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
                    <Label htmlFor="projectDescription">Description du projet (optionnel)</Label>
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
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {budgetRanges.map((range) => {
                          const isSelected = formData.budget === range.value;
                          return (
                            <div
                              key={range.value}
                              onClick={() => updateFormData("budget", range.value)}
                              className="cursor-pointer"
                            >
                              <RadioGroupItem
                                value={range.value}
                                id={`budget-${range.value}`}
                                className="peer sr-only"
                              />
                              <div
                                className={cn(
                                  "relative flex items-center justify-between rounded-lg border-2 p-4 transition-all",
                                  isSelected
                                    ? "border-primary bg-primary/10 dark:bg-primary/20 shadow-lg shadow-primary/10"
                                    : "border-gray-200 dark:border-gray-700 bg-card hover:bg-accent/50 hover:border-gray-300 dark:hover:border-gray-600"
                                )}
                              >
                                {isSelected && (
                                  <div className="absolute inset-0 rounded-lg ring-2 ring-primary ring-offset-2 ring-offset-background pointer-events-none" />
                                )}
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
                              </div>
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
                            <div
                              key={option.value}
                              onClick={() => updateFormData("timeline", option.value)}
                              className="cursor-pointer"
                            >
                              <RadioGroupItem
                                value={option.value}
                                id={`timeline-${option.value}`}
                                className="peer sr-only"
                              />
                              <div
                                className={cn(
                                  "relative flex flex-col items-start gap-2 rounded-lg border-2 p-4 transition-all",
                                  isSelected
                                    ? "border-primary bg-primary/10 dark:bg-primary/20 shadow-lg shadow-primary/10"
                                    : "border-gray-200 dark:border-gray-700 bg-card hover:bg-accent/50 hover:border-gray-300 dark:hover:border-gray-600"
                                )}
                              >
                                {isSelected && (
                                  <div className="absolute inset-0 rounded-lg ring-2 ring-primary ring-offset-2 ring-offset-background pointer-events-none" />
                                )}
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
                              </div>
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
                    <Label htmlFor="hearAboutUs" className="text-base font-semibold mb-2 block">
                      Comment avez-vous entendu parler de nous ?
                    </Label>
                    <select
                      id="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={(e) => updateFormData("hearAboutUs", e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Sélectionnez une option</option>
                      {hearAboutUsOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {formData.hearAboutUs === "autre" && (
                      <div className="mt-3">
                        <Input
                          id="hearAboutUsOther"
                          placeholder="Précisez..."
                          value={formData.hearAboutUsOther}
                          onChange={(e) => updateFormData("hearAboutUsOther", e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  <div className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6">
                    <h3 className="font-semibold text-lg flex items-center gap-2 mb-6">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Récapitulatif de votre demande
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* Card 1: Project Type */}
                      <div className="rounded-lg bg-background/80 backdrop-blur-sm p-4 space-y-3 border border-border/50">
                        <div className="flex items-center gap-2 text-primary">
                          <FileText className="h-4 w-4" />
                          <span className="font-semibold text-sm">Type de projet</span>
                        </div>
                        <p className="font-medium">
                          {projectCategories.find((c) => c.value === formData.projectCategory)?.label}
                        </p>
                        {formData.services.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {formData.services.map((serviceId) => {
                              const service = services.find((s) => s.id === serviceId);
                              return service ? (
                                <span
                                  key={serviceId}
                                  className="inline-flex rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary"
                                >
                                  {service.title}
                                </span>
                              ) : null;
                            })}
                          </div>
                        )}
                      </div>

                      {/* Card 2: Project Details */}
                      <div className="rounded-lg bg-background/80 backdrop-blur-sm p-4 space-y-3 border border-border/50">
                        <div className="flex items-center gap-2 text-primary">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-semibold text-sm">Détails du projet</span>
                        </div>
                        <p className="font-medium">{formData.projectName}</p>
                        {formData.projectDescription && (
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {formData.projectDescription.length > 80
                              ? `${formData.projectDescription.substring(0, 80)}...`
                              : formData.projectDescription}
                          </p>
                        )}
                        {formData.targetAudience && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-3.5 w-3.5" />
                            <span>{formData.targetAudience}</span>
                          </div>
                        )}
                      </div>

                      {/* Card 3: Budget & Timeline */}
                      <div className="rounded-lg bg-background/80 backdrop-blur-sm p-4 space-y-3 border border-border/50">
                        <div className="flex items-center gap-2 text-primary">
                          <Wallet className="h-4 w-4" />
                          <span className="font-semibold text-sm">Budget & Délais</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center gap-1.5 text-sm bg-muted/50 rounded-md px-2 py-1">
                            <Wallet className="h-3.5 w-3.5 text-primary" />
                            {budgetRanges.find((b) => b.value === formData.budget)?.label}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sm bg-muted/50 rounded-md px-2 py-1">
                            <Clock className="h-3.5 w-3.5 text-primary" />
                            {timelineOptions.find((t) => t.value === formData.timeline)?.label}
                          </span>
                        </div>
                      </div>

                      {/* Card 4: Contact */}
                      <div className="rounded-lg bg-background/80 backdrop-blur-sm p-4 space-y-3 border border-border/50">
                        <div className="flex items-center gap-2 text-primary">
                          <User className="h-4 w-4" />
                          <span className="font-semibold text-sm">Contact</span>
                        </div>
                        <p className="font-medium">{formData.fullName}</p>
                        <div className="space-y-1.5 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Mail className="h-3.5 w-3.5" />
                            <span>{formData.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5" />
                            <span>{formData.phone}</span>
                          </div>
                          {formData.company && (
                            <div className="flex items-center gap-2">
                              <Building2 className="h-3.5 w-3.5" />
                              <span>{formData.company}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Source - full width at bottom if present */}
                    {formData.hearAboutUs && (
                      <div className="mt-4 pt-4 border-t border-primary/10 text-sm text-muted-foreground">
                        <span>Source : </span>
                        <span className="font-medium text-foreground">
                          {formData.hearAboutUs === "autre" && formData.hearAboutUsOther
                            ? formData.hearAboutUsOther
                            : hearAboutUsOptions.find((o) => o.value === formData.hearAboutUs)?.label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Privacy Consent */}
                  <div
                    className={cn(
                      "relative flex items-start space-x-3 rounded-lg border-2 p-4 transition-all cursor-pointer",
                      formData.privacyConsent
                        ? "border-primary bg-primary/10 dark:bg-primary/20 shadow-lg shadow-primary/10"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-card hover:bg-accent/50"
                    )}
                    onClick={() => updateFormData("privacyConsent", !formData.privacyConsent)}
                  >
                    <Checkbox
                      id="privacyConsent"
                      checked={formData.privacyConsent}
                      onCheckedChange={(checked) => updateFormData("privacyConsent", checked === true)}
                      className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor="privacyConsent"
                        className="text-sm cursor-pointer select-none"
                      >
                        J&apos;accepte que mes données soient collectées et traitées par ADVANTAGE dans le cadre de ma demande de devis. <span className="text-destructive">*</span>
                      </Label>
                      <p className="text-xs text-muted-foreground mt-1">
                        Vos données ne seront jamais partagées avec des tiers et sont protégées conformément au RGPD.
                      </p>
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
