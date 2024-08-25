import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "Next Car Rental Service",
  description: "Welcome to the world of cars!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
