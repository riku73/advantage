"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";

export interface RelatedService {
  name: string;
  href: string;
}

interface CTAWithServicesProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  relatedServices: RelatedService[];
}

export default function CTAWithServices({
  title,
  description,
  buttonText = "Demandez un devis",
  buttonHref = "/devis-personnalise",
  relatedServices,
}: CTAWithServicesProps) {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">
            {title}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            {description}
          </p>
          <div className="mt-8">
            <Link
              href={buttonHref}
              className="group inline-flex items-center gap-2 rounded-md bg-black dark:bg-white px-8 py-3 font-semibold text-white dark:text-black transition-all hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
            >
              {buttonText}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/70 mb-4">
                Services complémentaires
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                  >
                    {service.name}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
