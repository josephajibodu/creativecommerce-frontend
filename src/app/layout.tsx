import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const mainFont = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flitsell - Launch Your Online Store with Ease",
  description:
    "Discover cost-effective, customizable, and user-friendly e-commerce solutions designed specifically for small to medium businesses.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.flitsell.com/",
    title: "Launch Your Online Store with Ease",
    description:
      "Discover cost-effective, customizable, and user-friendly e-commerce solutions designed specifically for small to medium businesses.",
    images: [
      {
        url: "https://www.flitsell.com/og-image.webp",
        width: 800,
        height: 600,
        alt: "Flitsell",
      },
    ],
    siteName: "Flitsell",
  },
  twitter: {
    creator: "@flitsell",
    site: "@flitsell",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        {children}
        <Toaster richColors position="top-right" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
