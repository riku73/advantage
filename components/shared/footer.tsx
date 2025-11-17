import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  services: [
    { name: "SEO", href: "/services/seo" },
    { name: "SEA", href: "/services/sea" },
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "Sites Web", href: "/services/sites-web" },
    { name: "Landing Pages", href: "/services/landing-pages" },
  ],
  company: [
    { name: "À Propos", href: "/a-propos" },
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
              <span className="text-2xl font-bold text-primary">Advantage</span>
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
                <span>contact@advantage.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Advantage. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
