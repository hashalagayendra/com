import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YOUR STUDIO. — Creative Digital Agency",
  description:
    "We design brands, websites, 3D visuals and digital campaigns that make a real impact.",
  keywords: [
    "YOUR STUDIO",
    "Creative Digital Agency",
    "3D Visuals",
    "Brand Design",
    "Web Development",
    "Digital Campaigns",
  ],
  authors: [{ name: "YOUR STUDIO" }],
  openGraph: {
    title: "YOUR STUDIO. — Creative ideas Built to stand out",
    description:
      "We design brands, websites, 3D visuals and digital campaigns that make a real impact.",
    siteName: "YOUR STUDIO",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
