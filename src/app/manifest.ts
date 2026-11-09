import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hotel Himalayan | Pelling, West Sikkim",
    short_name: "Hotel Himalayan",
    description:
      "Scenic Hilltop Retreat in Chumbong, Pelling, West Sikkim overlooking Mt. Kanchenjunga.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e40af",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
