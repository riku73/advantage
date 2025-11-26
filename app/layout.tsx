import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  title: "Advantage - Agence Marketing Digital",
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
  authors: [{ name: "Advantage" }],
  openGraph: {
    title: "Advantage - Agence Marketing Digital",
    description:
      "Expert en SEO, SEA, Email Marketing, Sites Web et Landing Pages pour votre croissance digitale.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advantage - Agence Marketing Digital",
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
