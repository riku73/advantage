import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ADVANTAGE - Agence Marketing Digital Luxembourg",
    short_name: "ADVANTAGE",
    description:
      "Agence marketing digital au Luxembourg. Expert en SEO, SEA, e-mail marketing, sites web et landing pages.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
