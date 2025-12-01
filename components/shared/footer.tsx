import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  services: [
    { name: "Landing pages", href: "/services/landing-pages" },
    { name: "Sites web", href: "/services/sites-web" },
    { name: "SEO", href: "/services/seo" },
    { name: "SEA", href: "/services/sea" },
    { name: "E-mail marketing", href: "/services/email-marketing" },
    { name: "Délivrabilité e-mail", href: "/services/email-deliverability" },
  ],
  company: [
    { name: "À propos", href: "/a-propos" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              {/* Black logo for light mode */}
              <Image
                src="/logo-advantage-normal.svg"
                alt="Advantage"
                width={180}
                height={28}
                className="h-7 w-auto dark:hidden"
              />
              {/* White logo for dark mode */}
              <Image
                src="/logo-advantage-negative.svg"
                alt="Advantage"
                width={180}
                height={28}
                className="hidden h-7 w-auto dark:block"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Votre agence marketing digital pour une croissance durable et
              mesurable.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
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

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">
              Entreprise
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
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

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>take@advantage.lu</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>+352 27 56 59 62</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>2 Rue de Sandweiler<br />L-5974 Itzig</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} ADVANTAGE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
