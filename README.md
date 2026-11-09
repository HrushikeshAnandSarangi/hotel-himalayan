# Hotel Himalayan — Pelling, West Sikkim

An immersive, single-page luxury mountain retreat landing page for **Hotel Himalayan**, located on the scenic ridges of Chumbong in Upper Pelling, West Sikkim, directly facing Mount Kanchenjunga (8,586 m).

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Lucide React**.

---

## Key Features & Design Philosophy

- **100vh × 100vw Mountain Motion Canvas**:
  - Multi-layered vector motion illustration of the Kanchenjunga range featuring rocky brown stone strata (`#785947`, `#5c4335`), deep couloirs, and crystalline icy tips (`#ffffff`, `#e0f2fe`, `#bae6fd`).
  - Staggered moving cloud systems (high altocumulus, mid-mountain cumulus, and low valley mist) drifting continuously across the peaks.
  - Panoramic picture-window perspective giving visitors the sensation of viewing the range from an expansive resort suite.
  - Text starting at the mid-slope level inside a frosted glassmorphic card, keeping the high summits unobstructed.
  - Small, subtle Google Maps rating subscript ($4.2 / 5.0$ stars · $100+$ verified reviews).
  - Smooth bottom dissolve into pure white (`#ffffff`).

- **Bilateral & Geometric Symmetry**:
  - Rigorous architectural balance across all 8 synchronized sections: Navbar, Hero, About, Sightseeing Circuits, Guest Reviews, Transit & Directions, Rooms & Amenities, Tariff Inquiries, and Footer.

- **Branding & Visual System**:
  - **Colors**: Strictly shades of blue, pure white (`#ffffff`), and slate black (`#020617`, `#0f172a`).
  - **Typography**: **Plantin Pro** configured globally across all headings, body text, buttons, and form inputs.
  - **Iconography**: **Lucide React** utilized exclusively for all symbols.
  - **SEO & Search Rich Snippets**: Integrated Schema.org `Hotel` JSON-LD metadata, Google Maps coordinates (`27.305437° N, 88.241066° E`), custom mountain crest favicon, and OpenGraph tags.

---

## Project Structure

```
hotel-himalayan/
├── public/
│   ├── logo.png               # High-res transparent brand crest
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css        # Plantin Pro typography, 3D perspective & cloud keyframes
│   │   ├── icon.png           # Auto-generated browser favicon (mountain crest)
│   │   ├── layout.tsx         # Root layout with font preconnects & Schema.org JSON-LD
│   │   └── page.tsx           # Page coordinator mounting all 8 sections & booking modal
│   └── components/
│       ├── AboutSection.tsx         # Story, elevation metrics & 4 pillars
│       ├── BookingInquirySection.tsx# Live tariff estimator & WhatsApp trigger
│       ├── BookingModal.tsx         # Reservation modal with front desk phone/WhatsApp
│       ├── FaqSection.tsx           # 4 accordion Q&As
│       ├── Footer.tsx               # Contacts, verified reviews & 2026 copyright
│       ├── Hero.tsx                 # 100vh x 100vw SVG mountain motion hero
│       ├── LocationSection.tsx      # Google Map embed & transit cards (IXB, PYG, NJP)
│       ├── Navbar.tsx               # Fixed header with brand mark & quick actions
│       ├── ReviewsSection.tsx       # 3 verified GMaps reviews & 4.2 rating badge
│       ├── RoomsSection.tsx         # 3 room categories & 8 included amenities
│       ├── SightseeingSection.tsx   # 6 sightseeing cards (Rabdentse, Skywalk, etc.)
│       └── TiltCard.tsx             # Interactive 3D mouse parallax component
```

---

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To verify the production build:

```bash
npm run build
npm run start
```

---

## Contact & Credits

- **Location**: Chumbong Road, Pelling, West Sikkim, 737113
- **Coordinates**: `27.305437° N, 88.241066° E` (~7,200 ft elevation)
- **Front Desk**: `+91 9304957835` / `+91 7942288960`
- **Email**: `contact@hotelhimalayan.com`
- **Google Maps**: [Hotel Himalayan on Google Maps](https://www.google.com/maps/place/Hotel+Himalayan/@27.3053852,88.2382925,17z/data=!4m9!3m8!1s0x39e6867ddebfa319:0xb0fe9695a65fb77d!5m2!4m1!1i2!8m2!3d27.305437!4d88.241066!16s%2Fg%2F1ptx4vh9y)

© 2026 Hotel Himalayan. All rights reserved.
