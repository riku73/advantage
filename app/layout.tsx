import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "ADVANTAGE - Agence Marketing Digital",
  description:
    "Expert en SEO, SEA, E-mail marketing, Sites web et Landing pages pour votre croissance digitale.",
  keywords: [
    "marketing digital",
    "SEO",
    "SEA",
    "e-mail marketing",
    "agence web",
    "landing pages",
  ],
  authors: [{ name: "ADVANTAGE" }],
  openGraph: {
    title: "ADVANTAGE - Agence Marketing Digital",
    description:
      "Expert en SEO, SEA, Email Marketing, Sites Web et Landing Pages pour votre croissance digitale.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADVANTAGE - Agence Marketing Digital",
    description:
      "Expert en SEO, SEA, Email Marketing, Sites Web et Landing Pages pour votre croissance digitale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
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
