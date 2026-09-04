import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Finance from "../../components/services/Finance";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";
import JsonLd from "../../components/seo/JsonLd";

export const metadata = {
  title: "MSME Loans & Business Finance Consulting Gujarat",

  description: "MSME loans, Mudra loans, government subsidies and investor pitch support in Gujarat.",

  alternates: {
    canonical: "https://aarambhgrow.group/services/finance",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "MSME Loans & Business Finance Consulting Gujarat | AarambhGrow",

    description: "Business loans, government subsidy support, investor pitching and financial planning.",

    url: "https://aarambhgrow.group/services/finance",

    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  name: "MSME Loans & Business Finance Consulting Gujarat",

  serviceType: "Business Finance",

  description:
    "MSME loans, Mudra loans, government subsidies, investor pitch support and financial planning services for businesses in Gujarat.",

  provider: {
    "@type": "Organization",

    name: "AarambhGrow Group of Companies",

    url: "https://aarambhgrow.group",
  },

  areaServed: {
    "@type": "State",

    name: "Gujarat",
  },

  url: "https://aarambhgrow.group/services/finance",
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

      name: "Finance",

      item: "https://aarambhgrow.group/services/finance",
    },
  ],
};

export default function FinancePage() {
  return (
    <>
   
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Finance />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
