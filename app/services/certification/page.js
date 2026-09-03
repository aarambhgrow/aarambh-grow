import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Certification from "../../components/services/Certification";
// import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "ISO, FSSAI, Startup India & Trademark Certification – AarambhGrow",
  description:
    "Get ISO, FSSAI, Startup India recognition, ZED, and trademark certification with expert guidance from AarambhGrow. Fast processing, full compliance support.",
};

export default function CertificationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Certification Services",
    serviceType: "Business Certification",
    description:
      "Get ISO, FSSAI, Startup India recognition, ZED, and trademark certification with expert guidance from AarambhGrow.",
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
        <Certification />
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