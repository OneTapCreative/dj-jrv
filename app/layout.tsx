import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DJ JRV | Stockton DJ for Weddings, Quinceañeras & Events",
  description:
    "Stockton DJ for weddings, quinceañeras, birthdays, private parties, corporate events, and special celebrations. Old School music, dance floor lighting, and 10 years of experience.",
  keywords: [
    "DJ JRV",
    "Romero Vision",
    "wedding DJ",
    "quinceañera DJ",
    "birthday party DJ",
    "corporate event DJ",
    "private party DJ",
    "Old School DJ",
    "Stockton DJ",
    "dance floor lighting",
  ],
  openGraph: {
    title: "DJ JRV | Stockton DJ for Weddings, Quinceañeras & Events",
    description:
      "Old School music, dance floor lighting, and 10 years of event experience. DJ services for weddings, quinceañeras, birthdays, private parties, corporate events, and more.",
    type: "website",
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
      <body>{children}</body>
    </html>
  );
}
