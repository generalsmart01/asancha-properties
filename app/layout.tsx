import type { Metadata } from "next";
import Script from "next/script";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Asancha Properties | Expert Property Sourcing, Management & Investment",
    template: "%s | Asancha Properties"
  },
  description: "The UK’s Trusted Partner for Off-Market & Below Market Value Property Deals. Discover high-yield property investment opportunities and exclusive below market value deals with Asancha Properties. We specialise in property sourcing, management, refurbishment, and real estate investment across the UK.",
  keywords: ["real estate investment", "property sourcing", "buy property", "sell property fast", "high-yield investments", "below market value properties", "property management", "refurbishment", "interior design", "real estate solutions", "property deals"],
  authors: [{ name: "Asancha Properties" }],
  creator: "Asancha Properties",
  metadataBase: new URL("https://asancha.co.uk"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "Asancha Properties",
  },
  openGraph: {
    title: "Asancha Properties | Expert Property Sourcing, Management & Investment",
    description: "Discover high-yield property investment opportunities and exclusive below market value deals with Asancha Properties.",
    url: "https://asancha.co.uk",
    siteName: "Asancha Properties",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/core-img/logo.png",
        width: 800,
        height: 600,
        alt: "Asancha Properties Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asancha Properties | Expert Property Sourcing, Management & Investment",
    description: "Find exclusive property deals and below market value opportunities with Asancha Properties.",
    images: ["/core-img/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/core-img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

        {/* EmailJS and Legacy Scripts */}
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" strategy="afterInteractive" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </body>
    </html>
  );
}
