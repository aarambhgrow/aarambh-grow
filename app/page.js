import Preloader from "./components/layout/Preloader";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/About";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ProcessSection from "./components/home/Process";
import BusinessCategories from "./components/home/BusinessCategories";
import CTASection from "./components/layout/CTA";
import Footer from "./components/layout/Footer";
import JsonLd from "./components/seo/JsonLd";

export const metadata = {
  title: "AarambhGrow – Business Registration & GST Consultants | Gujarat",

  description:
    "Company registration, GST, ISO certification, MSME loans & branding — end-to-end support for startups & MSMEs in Gujarat. Free consultation.",

  alternates: {
    canonical: "https://aarambhgrow.group/",
  },

  openGraph: {
    title: "AarambhGrow – Business Registration & GST Consultants | Gujarat",

    description:
      "Company registration, GST, ISO certification, MSME loans & branding — end-to-end support for startups & MSMEs in Gujarat.",

    url: "https://aarambhgrow.group/",

    type: "website",

    images: [
      {
        url: "https://aarambhgrow.group/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AarambhGrow",
      },
    ],
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "AarambhGrow Group of Companies",

    alternateName: "AarambhGrow",

    url: "https://aarambhgrow.group",

    logo: "https://aarambhgrow.group/images/white-logo.png",

    description:
      "AarambhGrow is a business consultancy in Ahmedabad, Gujarat, offering company registration, GST filing, ISO certification, MSME loans, branding, and legal compliance for startups and MSMEs.",

    foundingDate: "2020",

    address: {
      "@type": "PostalAddress",

      streetAddress: "813, Silver Rediance-4, Gota, Jagatpur Road, Gota SG Highway",

      addressLocality: "Ahmedabad",

      addressRegion: "Gujarat",

      postalCode: "382470",

      addressCountry: "IN",
    },

    contactPoint: {
      "@type": "ContactPoint",

      telephone: "+91-9998715799",

      contactType: "customer service",

      areaServed: "IN",

      availableLanguage: ["English", "Hindi", "Gujarati"],
    },

    sameAs: [
      "https://www.facebook.com/aarambhgrow",
      "https://www.instagram.com/aarambhgrow",
      "https://www.linkedin.com/company/aarambhgrow-group-of-companies",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "AarambhGrow Group of Companies",

    image: "https://aarambhgrow.group/images/white-logo.png",

    url: "https://aarambhgrow.group",

    telephone: "+91-9998715799",

    email: "info@aarambhgrow.group",

    priceRange: "₹₹",

    description:
      "End-to-end business solutions for startups and MSMEs in Gujarat — company registration, GST, ISO certification, MSME loans, branding, and legal compliance.",

    address: {
      "@type": "PostalAddress",

      streetAddress: "813, Silver Rediance-4, Gota, Jagatpur Road, Gota SG Highway",

      addressLocality: "Ahmedabad",

      addressRegion: "Gujarat",

      postalCode: "382470",

      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: 23.0929,

      longitude: 72.5247,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

        opens: "09:00",

        closes: "19:00",
      },
    ],

    areaServed: ["Ahmedabad", "Surat", "Vadodara", "Gujarat", "India"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "AarambhGrow Group of Companies",

    url: "https://aarambhgrow.group",

    description: "Business Registration, GST & Compliance Consultants in Gujarat",
  };

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={websiteSchema} />
      <Preloader />
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <ProcessSection />
      <BusinessCategories />
      <CTASection />
      <Footer />

      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={websiteSchema} />
    </main>
  );
}
