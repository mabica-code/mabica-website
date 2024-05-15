import "./globals.css";
import { Inter } from "next/font/google";
import overview from "@/config/overview.json" assert { type: "json" };
import type { Viewport } from "next";
import type { Metadata } from "next";

const font = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: overview?.color,
};

export const metadata: Metadata = {
  title: overview?.title,
  description: overview?.description,
  openGraph: {
    title: overview?.title,
    description: overview?.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className}`}>
        {children}
      </body>
    </html>
  );
}
