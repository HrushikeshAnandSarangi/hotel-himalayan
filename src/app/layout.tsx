import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Himalayan | Scenic Hilltop Retreat in Pelling, West Sikkim",
  description:
    "Overlooking the majestic Mt. Kanchenjunga range in Chumbong, Pelling. Experience tranquil Himalayan serenity, home-style mountain cuisine, and front-row balcony views.",
  keywords: [
    "Hotel Himalayan",
    "Hotel Himalayan Pelling",
    "Chumbong Pelling hotel",
    "Kanchenjunga view hotel Pelling",
    "Sikkim hotel booking",
    "Himalayan Retreat Pelling",
    "Pelling hotels with mountain view",
  ],
  authors: [{ name: "Hotel Himalayan, Pelling" }],
  openGraph: {
    title: "Hotel Himalayan | Scenic Hilltop Retreat in Pelling, West Sikkim",
    description:
      "Front-row panoramic views of Mt. Kanchenjunga, serene alpine atmosphere, and warm Sikkimese hospitality.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://db.onlinewebfonts.com" />
        <link
          href="https://db.onlinewebfonts.com/c/c8b39fed03f94d04076e43085def7a5e?family=Plantin"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..800;1,6..72,300..800&family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#020617] selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
