import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ServiceTier } from "@/lib/services-data";

interface PricingCardProps {
  tier: ServiceTier;
  href?: string;
}

export default function PricingCard({ tier, href = "/contact" }: PricingCardProps) {
  const { name, price, features, cta = "Commencer", popular } = tier;

  const periodMap = {
    "one-time": "paiement unique",
    monthly: "/mois",
    campaign: "/campagne",
    hour: "/heure",
    session: "/session",
    project: "/projet",
  };

  const periodDisplay = price.period
    ? periodMap[price.period as keyof typeof periodMap] || ""
    : "";

  return (
    <div
      className={`relative h-full rounded-2xl border-2 bg-card p-8 transition-all hover:shadow-xl hover:scale-105 ${
        popular
          ? "border-primary shadow-lg"
          : "border-border hover:border-primary/50"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
            Populaire
          </span>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href={href}
          className={`block w-full rounded-md px-6 py-3 text-center font-semibold transition-all hover:scale-105 ${
            popular
              ? "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100"
              : "border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          }`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
