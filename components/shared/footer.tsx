import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";

// Custom order for digital-web services (same as services page)
const digitalWebOrder = [
  "landing-pages",
  "sites-web",
  "seo",
  "sea",
  "email-marketing",
  "email-deliverability",
];

// Group services
const digitalWebServices = services
  .filter(s => s.category === "digital-web")
  .sort((a, b) => {
    const aIndex = digitalWebOrder.indexOf(a.id);
    const bIndex = digitalWebOrder.indexOf(b.id);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });
const visualPrintServices = services.filter(s => s.category === "visual-print");
const socialMediaServices = services.filter(s => s.category === "social-media");
const mediaProductionServices = services.filter(s => s.category === "media-production");
const consultingServices = services.filter(s => s.category === "consulting");

const companyLinks = [
  { name: "À propos", href: "/a-propos" },
  { name: "Tous les services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        {/* Main grid: Logo/Contact + Services */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: Logo + Contact (spans 4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
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
            <p className="mt-4 text-sm text-muted-foreground">
              Votre agence marketing digital au Luxembourg pour une croissance durable et mesurable.
            </p>

            {/* Contact info */}
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="mailto:take@advantage.lu"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>take@advantage.lu</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+35227565962"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+352 27 56 59 62</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>2 Rue de Sandweiler, L-5974 Itzig, Luxembourg</span>
              </li>
            </ul>

            <Link
              href="/devis-personnalise"
              className="group mt-6 inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-black transition-all hover:bg-gray-800 dark:hover:bg-gray-100"
            >
              Devis gratuit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: Services grid (spans 8 cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {/* Digital & Web */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Digital & web
                </h3>
                <ul className="space-y-2">
                  {digitalWebServices.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={service.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Identité visuelle + Production */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Identité visuelle
                </h3>
                <ul className="space-y-2">
                  {visualPrintServices.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={service.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-semibold text-foreground mb-4 mt-6">
                  Production média
                </h3>
                <ul className="space-y-2">
                  {mediaProductionServices.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={service.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Réseaux sociaux + Consulting */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Réseaux sociaux
                </h3>
                <ul className="space-y-2">
                  {socialMediaServices.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={service.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-semibold text-foreground mb-4 mt-6">
                  Consulting
                </h3>
                <ul className="space-y-2">
                  {consultingServices.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={service.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entreprise */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Entreprise
                </h3>
                <ul className="space-y-2">
                  {companyLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright + Legal links */}
        <div className="mt-12 pt-8 border-t flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ADVANTAGE. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link
              href="/mentions-legales"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Confidentialité
            </Link>
            <Link
              href="/politique-cookies"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
