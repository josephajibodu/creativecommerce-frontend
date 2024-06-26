import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { MainFooter } from "@/components/main-footer";
import { MainNav } from "@/components/main-nav";
import { Toaster } from "@/components/ui/sonner";

const mainFont = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <MainNav />
        {children}
        <Toaster richColors position="top-right" />
        <MainFooter />
      </body>
    </html>
  );
}
