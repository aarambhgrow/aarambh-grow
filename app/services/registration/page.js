import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Registration from "../../components/services/Registration";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title:
    "Private Limited, LLP & OPC Company Registration in India – AarambhGrow",
  description:
    "Register your Private Limited Company, LLP, OPC or MSME with AarambhGrow. Fast, fully compliant registration with expert guidance — book a free consultation today.",
};

export default function RegistrationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Registration Services",
    serviceType: "Business Registration",
    description:
      "Register your Private Limited Company, LLP, OPC or MSME with AarambhGrow. Fast, fully compliant registration with expert guidance.",
    provider: {
      "@type": "Organization",
      name: "AarambhGrow",
      url: "https://aarambhgrow.group",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <Registration />
        <CTASection />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}