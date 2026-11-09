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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Hotel Himalayan",
              description:
                "Scenic Hilltop Retreat in Chumbong, Pelling, West Sikkim overlooking Mt. Kanchenjunga.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Chumbong Road",
                addressLocality: "Pelling",
                addressRegion: "West Sikkim",
                postalCode: "737113",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 27.305437,
                longitude: 88.241066,
              },
              telephone: "+919304957835",
              priceRange: "₹1999 - ₹3499",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.2",
                reviewCount: "104",
              },
              hasMap:
                "https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#020617] selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
