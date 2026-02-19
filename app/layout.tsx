import { ReactNode } from "react";
import { Lato } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://emara.com"),
  title: {
    default:
      "Emara | A verified B2B marketplace for African exporters, where transparency is the core product.",
    template: "%s | Emara",
  },
  description:
    "Emara is a verified B2B marketplace connecting African exporters with global buyers through transparency, trust, and verified trade data.",
  keywords: [
    "B2B marketplace Africa",
    "African exporters",
    "verified suppliers Africa",
    "trade platform Africa",
    "global sourcing Africa",
  ],
  openGraph: {
    title:
      "Emara | A verified B2B marketplace for African exporters, where transparency is the core product.",
    description:
      "Connect with verified African exporters and trusted global buyers on Emara.",
    url: "https://emara.com",
    siteName: "Emara",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emara B2B Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Emara | Verified B2B marketplace for African exporters",
    description:
      "Discover trusted African suppliers and transparent trade opportunities.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning className={lato.variable}>
      <body>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Emara",
              url: "https://emara.com",
              logo: "https://emara.com/logo.png",
              description:
                "A verified B2B marketplace connecting African exporters with global buyers.",
              sameAs: [],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Emara",
              url: "https://emara.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://emara.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}




