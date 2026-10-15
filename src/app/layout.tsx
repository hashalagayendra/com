import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bou – The Brand Company",
  description:
    "Bou is a holistic brand company, working with 200+ trendsetting brands across marketing, design, communications & PR, and web development.",
  keywords: [
    "Bou",
    "Brand Agency",
    "Design Agency London",
    "Design Agency Helsinki",
    "Creative Marketing",
    "Web Development",
    "PR Agency",
  ],
  authors: [{ name: "Bou" }],
  openGraph: {
    title: "Bou – The Brand Company",
    description:
      "Bou is a holistic brand company, working with 200+ trendsetting brands around Europe and the US.",
    url: "https://wearebou.com",
    siteName: "Bou",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
