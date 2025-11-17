import { formatPrice, ServicePricing } from "@/lib/services-data";

interface PricingBadgeProps {
  pricing: ServicePricing;
  className?: string;
}

export default function PricingBadge({
  pricing,
  className = "",
}: PricingBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ${className}`}
    >
      {formatPrice(pricing)}
    </span>
  );
}
