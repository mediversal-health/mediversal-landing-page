import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClarityInitializer } from "./components/ClarityInitializer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mediversal247 - All-in-one Healthcare App",
  description:
    "Experience seamless healthcare with instant doctor consultations, digital prescriptions, and comprehensive health management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClarityInitializer />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
