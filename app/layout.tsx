import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const baseUrl = "https://advantage.lu";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ADVANTAGE - Agence Marketing Digital Luxembourg",
    template: "%s | ADVANTAGE",
  },
  description:
    "Agence marketing digital au Luxembourg. Expert en SEO, SEA, e-mail marketing, sites web et landing pages pour votre croissance digitale.",
  keywords: [
    "agence marketing digital Luxembourg",
    "marketing digital",
    "SEO Luxembourg",
    "SEA",
    "e-mail marketing",
    "agence web Luxembourg",
    "landing pages",
    "création site web",
    "référencement naturel",
    "Google Ads",
  ],
  authors: [{ name: "ADVANTAGE" }],
  creator: "ADVANTAGE",
  publisher: "ADVANTAGE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ADVANTAGE - Agence Marketing Digital Luxembourg",
    description:
      "Agence marketing digital au Luxembourg. Expert en SEO, SEA, e-mail marketing, sites web et landing pages pour votre croissance digitale.",
    url: baseUrl,
    siteName: "ADVANTAGE",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ADVANTAGE - Agence Marketing Digital Luxembourg",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADVANTAGE - Agence Marketing Digital Luxembourg",
    description:
      "Agence marketing digital au Luxembourg. Expert en SEO, SEA, e-mail marketing, sites web et landing pages.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ADVANTAGE",
  url: baseUrl,
  logo: `${baseUrl}/logo-advantage-normal.svg`,
  description:
    "Agence marketing digital au Luxembourg spécialisée en SEO, SEA, e-mail marketing et création de sites web.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Rue de Sandweiler",
    addressLocality: "Itzig",
    postalCode: "L-5974",
    addressCountry: "LU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+352-27-56-59-62",
    contactType: "customer service",
    availableLanguage: ["French", "English", "German", "Luxembourgish"],
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#localbusiness`,
  name: "ADVANTAGE - Agence Marketing Digital",
  image: `${baseUrl}/images/og-image.jpg`,
  url: baseUrl,
  telephone: "+352-27-56-59-62",
  email: "take@advantage.lu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Rue de Sandweiler",
    addressLocality: "Itzig",
    postalCode: "L-5974",
    addressCountry: "LU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.5833,
    longitude: 6.1333,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Luxembourg",
  },
  serviceType: [
    "SEO",
    "SEA",
    "E-mail Marketing",
    "Web Design",
    "Landing Pages",
    "Digital Strategy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Preconnect hints for third-party resources - must be before any scripts */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EHLF2TV57J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EHLF2TV57J');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
