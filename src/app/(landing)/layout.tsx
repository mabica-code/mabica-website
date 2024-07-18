import { Header } from "@/components/section/Header";
import { Footer } from "@/components/section/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="background bg-repeat-y bg-contain">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
