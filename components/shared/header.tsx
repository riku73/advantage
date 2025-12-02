"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe, Palette, Share2, Video, Lightbulb, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { services, categoryLabels, type ServiceCategory } from "@/lib/services-data";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

const categoryIcons: Record<ServiceCategory, typeof Globe> = {
  "digital-web": Globe,
  "visual-print": Palette,
  "social-media": Share2,
  "media-production": Video,
  "consulting": Lightbulb,
};

const categoryOrder: ServiceCategory[] = [
  "digital-web",
  "visual-print",
  "social-media",
  "media-production",
  "consulting",
];

// Group services by category
const servicesByCategory = categoryOrder.reduce((acc, category) => {
  acc[category] = services.filter(s => s.category === category);
  return acc;
}, {} as Record<ServiceCategory, typeof services>);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent border-transparent"
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/logo-advantage-normal.svg"
              alt="Advantage"
              width={180}
              height={28}
              className="h-7 w-auto dark:hidden"
              priority
            />
            <Image
              src="/logo-advantage-negative.svg"
              alt="Advantage"
              width={180}
              height={28}
              className="hidden h-7 w-auto dark:block"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className={cn(
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
              isScrolled ? "text-foreground" : "text-black dark:text-white"
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          <Link
            href="/"
            className={cn(
              "px-4 py-2 text-sm font-semibold transition-colors hover:text-primary rounded-md",
              isScrolled ? "text-foreground" : "text-black dark:text-white"
            )}
          >
            Accueil
          </Link>

          {/* Services Mega Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50",
                    isScrolled ? "text-foreground" : "text-black dark:text-white"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Column 1: Digital & Web */}
                      <div>
                        <CategoryHeader category="digital-web" />
                        <ul className="mt-3 space-y-2 ml-10">
                          {servicesByCategory["digital-web"].map((service) => (
                            <ServiceLink key={service.id} service={service} />
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: Visual + Media */}
                      <div className="space-y-6">
                        <div>
                          <CategoryHeader category="visual-print" />
                          <ul className="mt-3 space-y-2 ml-10">
                            {servicesByCategory["visual-print"].map((service) => (
                              <ServiceLink key={service.id} service={service} />
                            ))}
                          </ul>
                        </div>
                        <div>
                          <CategoryHeader category="media-production" />
                          <ul className="mt-3 space-y-2 ml-10">
                            {servicesByCategory["media-production"].map((service) => (
                              <ServiceLink key={service.id} service={service} />
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Column 3: Social + Consulting */}
                      <div className="space-y-6">
                        <div>
                          <CategoryHeader category="social-media" />
                          <ul className="mt-3 space-y-2 ml-10">
                            {servicesByCategory["social-media"].map((service) => (
                              <ServiceLink key={service.id} service={service} />
                            ))}
                          </ul>
                        </div>
                        <div>
                          <CategoryHeader category="consulting" />
                          <ul className="mt-3 space-y-2 ml-10">
                            {servicesByCategory["consulting"].map((service) => (
                              <ServiceLink key={service.id} service={service} />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Footer CTAs */}
                    <div className="mt-6 pt-6 border-t flex items-center justify-between">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Voir tous les services
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/devis-personnalise"
                          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                          Demander un devis
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/a-propos"
            className={cn(
              "px-4 py-2 text-sm font-semibold transition-colors hover:text-primary rounded-md",
              isScrolled ? "text-foreground" : "text-black dark:text-white"
            )}
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className={cn(
              "px-4 py-2 text-sm font-semibold transition-colors hover:text-primary rounded-md",
              isScrolled ? "text-foreground" : "text-black dark:text-white"
            )}
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-4">
          <ThemeToggle />
          <Link
            href="/devis-personnalise"
            className="rounded-md bg-black dark:bg-white px-6 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm transition-colors hover:bg-gray-800 dark:hover:bg-gray-100"
          >
            Devis Gratuit
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/logo-advantage-normal.svg"
                alt="Advantage"
                width={180}
                height={28}
                className="h-7 w-auto dark:hidden"
              />
              <Image
                src="/logo-advantage-negative.svg"
                alt="Advantage"
                width={180}
                height={28}
                className="hidden h-7 w-auto dark:block"
              />
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-1 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Accueil
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        mobileServicesOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mt-2 space-y-4 pl-4">
                      {categoryOrder.map((category) => {
                        const Icon = categoryIcons[category];
                        return (
                          <div key={category}>
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                              <Icon className="h-4 w-4 text-primary" />
                              {categoryLabels[category]}
                            </div>
                            <ul className="mt-2 space-y-1 pl-6">
                              {servicesByCategory[category].map((service) => (
                                <li key={service.id}>
                                  <Link
                                    href={service.href}
                                    className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                      <Link
                        href="/services"
                        className="flex items-center gap-2 text-sm font-medium text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Voir tous les services
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/a-propos"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  À propos
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <div className="py-6">
                <Link
                  href="/devis-personnalise"
                  className="block rounded-md bg-black dark:bg-white px-6 py-2.5 text-center text-base font-semibold text-white dark:text-black shadow-sm transition-colors hover:bg-gray-800 dark:hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Devis Gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Category header component
function CategoryHeader({ category }: { category: ServiceCategory }) {
  const Icon = categoryIcons[category];
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <span className="font-semibold text-sm">{categoryLabels[category]}</span>
    </div>
  );
}

// Service link component
function ServiceLink({ service }: { service: typeof services[0] }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={service.href}
          className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
        >
          {service.name}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
