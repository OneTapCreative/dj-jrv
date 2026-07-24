import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dj-jrv.com"),

  title: "DJ JRV | Stockton DJ for Weddings, Quinceañeras & Events",

  description:
    "Book DJ JRV for weddings, quinceañeras, birthdays, private parties, corporate events, and special celebrations in Stockton, California. DJ services start at $300.",

  applicationName: "DJ JRV / Romero Vision",

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
    title: "DJ JRV | Stockton DJ for Weddings, Quinceañeras & Events",
    description:
      "Professional DJ services for weddings, quinceañeras, birthdays, private parties, corporate events, and special celebrations in Stockton, California.",
    url: "/",
    siteName: "DJ JRV / Romero Vision",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "DJ JRV | Stockton DJ for Weddings, Quinceañeras & Events",
    description:
      "Professional DJ services for weddings, quinceañeras, birthdays, and special events in Stockton, California.",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
