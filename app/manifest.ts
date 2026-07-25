import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DJ JRV / Romero Vision",
    short_name: "DJ JRV",
    description:
      "Professional DJ services for weddings, quinceañeras, birthdays, private parties, corporate events, and special celebrations in Stockton, California.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0b",
    theme_color: "#0b0b0b",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
