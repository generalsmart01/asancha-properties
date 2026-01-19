import type { Metadata } from "next";
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
    default: "Asancha Properties | Off-Market & BMV Property Deals UK",
    template: "%s | Asancha Properties"
  },
  description: "The UK’s Trusted Partner for Off-Market & Below Market Value Property Deals. We connect investors with high-yield opportunities and motivated sellers.",
  keywords: ["Property Investment", "Below Market Value", "BMV Properties", "Off-Market Properties", "UK Real Estate", "Property Sourcing", "Investment Opportunities"],
  authors: [{ name: "Asancha Properties" }],
  creator: "Asancha Properties",
  metadataBase: new URL("https://asancha.co.uk"),
  openGraph: {
    title: "Asancha Properties | Off-Market & BMV Property Deals UK",
    description: "The UK’s Trusted Partner for Off-Market & Below Market Value Property Deals. We connect investors with high-yield opportunities.",
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
    title: "Asancha Properties | Off-Market & BMV Property Deals UK",
    description: "The UK’s Trusted Partner for Off-Market & Below Market Value Property Deals.",
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
      </body>
    </html>
  );
}
