import "./globals.css";
import { Poppins } from "next/font/google";
import overview from "@/config/overview.json" assert { type: "json" };

const font = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: overview?.title,
  description: overview?.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-text">
      <body className={`${font.className} `}>{children}</body>
    </html>
  );
}
