import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://aarambhgrow.group"),

  title: {
    default: "AarambhGrow – Business Registration & GST Consultants | Gujarat",
    template: "%s | AarambhGrow",
  },

  description:
    "AarambhGrow provides company registration, GST, ISO certification, MSME loans, branding and compliance services for startups and MSMEs across Gujarat and India.",
  applicationName: "AarambhGrow",

  authors: [
    {
      name: "AarambhGrow Group of Companies",
    },
  ],
  creator: "AarambhGrow Group of Companies",
  publisher: "AarambhGrow Group of Companies",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/images/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AarambhGrow Group of Companies",
    title: "AarambhGrow – Business Registration & GST Consultants | Gujarat",
    description: "End-to-end business solutions for startups and MSMEs — registration, GST, ISO, loans, branding and compliance.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AarambhGrow Group of Companies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AarambhGrow – Business Registration & GST Consultants | Gujarat",
    description: "End-to-end business solutions for startups and MSMEs.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
