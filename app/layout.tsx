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
    default: "Asancha Properties | Expert Property Sourcing, Management & Investment UK",
    template: "%s | Asancha Properties"
  },
  description: "The UK's trusted partner for off-market & below market value property deals. We specialise in high-yield property investment, sourcing, management, and refurbishment.",
  keywords: [
    "real estate investment UK",
    "property sourcing specialists",
    "buy property below market value",
    "sell house fast UK",
    "high-yield rental properties",
    "BMV property deals",
    "property management services",
    "house refurbishment UK",
    "interior design real estate",
    "UK property investment platform"
  ],
  authors: [{ name: "Asancha Properties", url: "https://asancha.co.uk" }],
  creator: "Asancha Properties",
  publisher: "Asancha Properties",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://asancha.co.uk"),
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Asancha Properties",
  },
  openGraph: {
    title: "Asancha Properties | Expert Property Sourcing & Investment UK",
    description: "Discover high-yield property investment opportunities and exclusive below market value deals with Asancha Properties.",
    url: "https://asancha.co.uk",
    siteName: "Asancha Properties",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/core-img/logo.png",
        width: 1200,
        height: 630,
        alt: "Asancha Properties - Expert Property Sourcing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asancha Properties | Expert Property Sourcing & Investment UK",
    description: "Exclusive BMV property deals and high-yield investment opportunities with Asancha Properties.",
    creator: "@asanchaproperties",
    images: ["/core-img/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  category: "real estate",
  classification: "Property Investment and Sourcing Specialists",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Asancha Properties",
  "alternateName": "Asancha",
  "url": "https://asancha.co.uk",
  "logo": "https://asancha.co.uk/core-img/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+447398228137",
    "contactType": "customer service",
    "areaServed": "GB",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://facebook.com/asanchaproperties",
    "https://instagram.com/asanchaproperties",
    "https://linkedin.com/company/asancha-properties"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Verification tags placeholder */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
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
