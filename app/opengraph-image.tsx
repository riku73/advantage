import { ImageResponse } from "next/og";

export const alt = "ADVANTAGE - Agence Marketing Digital Luxembourg";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "40px",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: "bold",
            marginBottom: "20px",
            letterSpacing: "-2px",
          }}
        >
          ADVANTAGE
        </div>
        <div
          style={{
            fontSize: 36,
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          Agence Marketing Digital Luxembourg
        </div>
        <div
          style={{
            fontSize: 24,
            opacity: 0.6,
            marginTop: "40px",
          }}
        >
          SEO • SEA • E-mail Marketing • Sites Web
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
