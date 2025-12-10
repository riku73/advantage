"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  /** Background image URL */
  backgroundImage: string;
  /** Alt text for the background image */
  backgroundAlt?: string;
  /** Children to render inside the hero */
  children: React.ReactNode;
  /** Additional className for the section */
  className?: string;
  /** Height variant */
  height?: "full" | "large" | "medium" | "small" | "compact";
  /** Overlay intensity - higher means more opaque overlay */
  overlayIntensity?: "light" | "medium" | "heavy";
  /** Whether to show the decorative gradient overlay */
  showGradientOverlay?: boolean;
  /** Center content vertically */
  centerContent?: boolean;
}

const heightClasses = {
  full: "min-h-screen",
  large: "min-h-[90vh]",
  medium: "min-h-[70vh]",
  small: "min-h-[50vh]",
  compact: "min-h-[40vh]",
};

// Mode-adaptive overlay classes
// Light mode: white overlay for dark text
// Dark mode: dark overlay for light text
const overlayClasses = {
  light: "bg-white/60 dark:bg-gray-900/70",
  medium: "bg-white/70 dark:bg-gray-900/80",
  heavy: "bg-white/80 dark:bg-gray-900/85",
};

export default function PageHero({
  backgroundImage,
  backgroundAlt = "Hero background",
  children,
  className,
  height = "medium",
  overlayIntensity = "medium",
  showGradientOverlay = true,
  centerContent = true,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        heightClasses[height],
        centerContent && "flex items-center justify-center",
        className
      )}
    >
      {/* Background Image with Duotone Effect */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover grayscale contrast-125"
          priority
          sizes="100vw"
        />

        {/* Mode-adaptive overlay */}
        <div
          className={cn(
            "absolute inset-0 transition-colors duration-300",
            overlayClasses[overlayIntensity]
          )}
        />

        {/* Subtle brand color accents */}
        {showGradientOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative w-full">{children}</div>
    </section>
  );
}

// Export a simpler variant for service pages
export function ServiceHero({
  backgroundImage,
  backgroundAlt,
  children,
  className,
}: {
  backgroundImage: string;
  backgroundAlt?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <PageHero
      backgroundImage={backgroundImage}
      backgroundAlt={backgroundAlt}
      height="compact"
      overlayIntensity="medium"
      showGradientOverlay={true}
      centerContent={false}
      className={cn("py-20", className)}
    >
      {children}
    </PageHero>
  );
}
