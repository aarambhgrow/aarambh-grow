import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Certification from "../../components/services/Certification";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";
import JsonLd from "../../components/seo/JsonLd";

export const metadata = {
  title: "ISO & FSSAI Certification Services Gujarat",

  description:
    "ISO certification, FSSAI registration, Startup India, and trademark approvals in Gujarat.",

  alternates: {
    canonical:
      "https://aarambhgrow.group/services/certification",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "ISO & FSSAI Certification Services Gujarat | AarambhGrow",

    description:
      "ISO certification, FSSAI registration, Startup India recognition, and trademark services.",

    url:
      "https://aarambhgrow.group/services/certification",

    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  name: "ISO & FSSAI Certification Services Gujarat",

  serviceType: "Business Certification",

  description:
    "ISO certification, FSSAI registration, Startup India recognition, ZED, and trademark services with expert guidance from AarambhGrow.",

  provider: {
    "@type": "Organization",

    name: "AarambhGrow Group of Companies",

    url: "https://aarambhgrow.group",
  },

  areaServed: {
    "@type": "State",

    name: "Gujarat",
  },

  url:
    "https://aarambhgrow.group/services/certification",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",

      position: 1,

      name: "Home",

      item: "https://aarambhgrow.group/",
    },

    {
      "@type": "ListItem",

      position: 2,

      name: "Services",

      item: "https://aarambhgrow.group/services",
    },

    {
      "@type": "ListItem",

      position: 3,

      name: "Certification",

      item:
        "https://aarambhgrow.group/services/certification",
    },
  ],
};

export default function CertificationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
 <JsonLd data={breadcrumbSchema} />

      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <Certification />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}