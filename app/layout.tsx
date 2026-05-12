import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://madrefrescas.com";
const title =
  "Madre Frescas | Austin Sourdough, Aguas Frescas & Healthy Sweets";
const description =
  "Madre Frescas brings Mexican freshness and Southern baking tradition to Austin with handcrafted sourdough, naturally sweetened aguas frescas, horchata, and healthier sweets.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Madre Frescas",
  },
  description,
  keywords: [
    "Madre Frescas",
    "Austin sourdough",
    "sourdough bread Austin",
    "aguas frescas Austin",
    "horchata Austin",
    "healthy sweets Austin",
    "naturally sweetened drinks Austin",
    "Mexican bakery Austin",
    "Southern bakery Austin",
    "farmers market bakery Austin",
    "artisan bread Austin",
  ],
  authors: [{ name: "Madre Frescas" }],
  creator: "Madre Frescas",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Madre Frescas",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/photos/madre-frescas-hero.png",
        width: 1200,
        height: 630,
        alt: "Madre Frescas sourdough and aguas frescas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/photos/madre-frescas-hero.png"],
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
  icons: {
    icon: "/brand/madre-frescas-logo.png",
    apple: "/brand/madre-frescas-logo.png",
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
      </body>
    </html>
  );
}
