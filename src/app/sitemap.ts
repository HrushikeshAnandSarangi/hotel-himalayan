import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hotelhimalayan.com",
      lastModified: new Date("2026-11-09"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
