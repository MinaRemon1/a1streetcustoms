import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A1 Street Customs",
  description: "The best shop for wraps, PPF, and details!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#171717]">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
