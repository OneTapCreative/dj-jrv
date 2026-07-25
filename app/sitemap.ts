import type { MetadataRoute } from "next";

const siteUrl = "https://www.dj-jrv.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-07-24T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/images/dj-jrv-setup.webp`,
        `${siteUrl}/images/dj-jrv-live-setup.webp`,
        `${siteUrl}/images/dj-jrv-logo.webp`,
      ],
    },
  ];
}
