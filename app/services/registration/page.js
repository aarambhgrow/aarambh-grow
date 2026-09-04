import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Registration from "../../components/services/Registration";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";
import JsonLd from "../../components/seo/JsonLd";

export const metadata = {
  title: "Company Registration Services in Gujarat",

  description:
    "Company registration in Gujarat — Private Limited, LLP, OPC, MSME, GST & Startup India. Fully managed by AarambhGrow experts.",

  alternates: {
    canonical: "https://aarambhgrow.group/services/registration",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Company Registration Services in Gujarat | AarambhGrow",

    description: "Register your Private Limited, LLP, OPC, or MSME in Gujarat with AarambhGrow.",

    url: "https://aarambhgrow.group/services/registration",

    type: "website",
  },
};

/* =====================================================
   SERVICE SCHEMA
===================================================== */

const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  serviceType: "Business Registration",

  name: "Company Registration Services in Gujarat",

  description: "Private Limited, LLP, OPC, MSME, GST registration and Startup India recognition services.",

  provider: {
    "@type": "Organization",

    name: "AarambhGrow Group of Companies",

    url: "https://aarambhgrow.group",
  },

  areaServed: {
    "@type": "State",

    name: "Gujarat",
  },

  url: "https://aarambhgrow.group/services/registration",
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

      name: "Registration",

      item: "https://aarambhgrow.group/services/registration",
    },
  ],
};

export default function RegistrationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Registration />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
