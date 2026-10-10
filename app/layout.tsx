import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.dj-jrv.com";
const siteTitle = "DJ JRV | Stockton DJ for Weddings & Events";
const siteDescription =
  "Professional DJ services in Stockton, CA for weddings, quinceañeras, birthdays and private events. Music and dance floor lighting. Request a quote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | DJ JRV",
  },

  description: siteDescription,

  keywords: [
    "Stockton DJ",
    "wedding DJ Stockton CA",
    "quinceañera DJ Stockton",
    "birthday party DJ Stockton",
    "event DJ Stockton",
    "private party DJ",
    "corporate event DJ",
    "All-genre DJ",
    "dance floor lighting",
    "DJ JRV",
    "Romero Vision",
  ],

  applicationName: "DJ JRV / Romero Vision",
  authors: [{ name: "Jason Romero Vasquez", url: siteUrl }],
  creator: "Jason Romero Vasquez",
  publisher: "DJ JRV / Romero Vision",
  category: "DJ and event entertainment",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "DJ JRV / Romero Vision",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/dj-jrv-setup.webp",
        width: 1283,
        height: 1380,
        alt: "DJ JRV performing with a professional DJ booth and speaker setup in Stockton, California",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/dj-jrv-setup.webp"],
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/manifest.webmanifest",

  other: {
    "geo.region": "US-CA",
    "geo.placename": "Stockton",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/dj-jrv-brand-hero.webp"
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
