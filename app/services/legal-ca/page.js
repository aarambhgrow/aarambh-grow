import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import LegalCA from "../../components/services/LegalCA";
// import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";
import JsonLd from "../../components/seo/JsonLd";

export const metadata = {
  title: "GST Filing & Legal Compliance Services Gujarat",

  description:
    "GST filing, ITR, ROC compliance, legal drafting & audit services in Gujarat. AarambhGrow's CA and legal experts keep your business compliant.",

  alternates: {
    canonical: "https://aarambhgrow.group/services/legal-ca",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "GST Filing & Legal Compliance Services Gujarat | AarambhGrow",

    description: "Expert GST filing, income tax returns, ROC compliance and legal consulting for businesses in Gujarat.",

    url: "https://aarambhgrow.group/services/legal-ca",

    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  serviceType: "Legal & Compliance Services",

  name: "GST Filing & Legal Compliance Services Gujarat",

  description: "GST registration and filing, income tax returns, ROC compliance, legal drafting, and audit support from AarambhGrow.",

  provider: {
    "@type": "Organization",

    name: "AarambhGrow Group of Companies",

    url: "https://aarambhgrow.group",
  },

  areaServed: {
    "@type": "State",

    name: "Gujarat",
  },

  url: "https://aarambhgrow.group/services/legal-ca",
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

      name: "Legal & CA",

      item: "https://aarambhgrow.group/services/legal-ca",
    },
  ],
};

export default function LegalCaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <LegalCA />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
