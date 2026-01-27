import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { ClarityInitializer } from "./components/ClarityInitializer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
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
      <body className={`${jakarta.variable} font-jakarta`}>
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
