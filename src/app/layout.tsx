import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L5ZZRN2DY1"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L5ZZRN2DY1');
          `}
        </Script>

        <ClarityInitializer />
      </body>
    </html>
  );
}
