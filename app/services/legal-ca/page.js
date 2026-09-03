import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import LegalCA from "../../components/services/LegalCA";
// import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "GST, ITR & ROC Compliance Services – AarambhGrow Legal & CA",
  description:
    "GST registration & filing, income tax returns, ROC compliance, legal drafting & audits — all handled by AarambhGrow's in-house legal & CA team.",
};

export default function LegalCaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GST, ITR & ROC Compliance Services",
    serviceType: "Legal & Compliance Services",
    description:
      "GST registration and filing, income tax returns, ROC compliance, legal drafting, and audit support from AarambhGrow.",
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
        <LegalCA />
        {/* <FAQ /> */}
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