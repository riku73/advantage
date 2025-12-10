import { MetadataRoute } from "next";

const baseUrl = "https://advantage.lu";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Main pages
  const mainPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/a-propos", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/devis-personnalise", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/glossaire", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  // Service pages
  const servicePages = [
    { url: "/services/seo", priority: 0.8 },
    { url: "/services/sea", priority: 0.8 },
    { url: "/services/sites-web", priority: 0.8 },
    { url: "/services/landing-pages", priority: 0.8 },
    { url: "/services/email-marketing", priority: 0.8 },
    { url: "/services/email-deliverability", priority: 0.7 },
    { url: "/services/digital-strategy", priority: 0.7 },
    { url: "/services/logo-branding", priority: 0.7 },
    { url: "/services/print-design", priority: 0.7 },
    { url: "/services/print-coordination", priority: 0.6 },
    { url: "/services/photography", priority: 0.7 },
    { url: "/services/video-production", priority: 0.7 },
    { url: "/services/social-media-ads", priority: 0.8 },
    { url: "/services/social-content", priority: 0.7 },
    { url: "/services/project-management", priority: 0.6 },
  ];

  // Legal pages
  const legalPages = [
    { url: "/mentions-legales", priority: 0.3 },
    { url: "/politique-confidentialite", priority: 0.3 },
    { url: "/politique-cookies", priority: 0.3 },
  ];

  return [
    ...mainPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency || ("monthly" as const),
      priority: page.priority,
    })),
    ...servicePages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...legalPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: page.priority,
    })),
  ];
}
