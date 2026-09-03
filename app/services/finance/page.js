import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Finance from "../../components/services/Finance";
// import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Business Loans, MSME Funding & Subsidies – AarambhGrow Finance",
  description:
    "Get business loans, CGTMSE-backed funding, government subsidies, and investor pitch support with AarambhGrow's finance consultancy team. Free consultation.",
};

export default function FinancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Finance & Funding Services",
    serviceType: "Business Finance",
    description:
      "Get business loans, MSME funding, CGTMSE-backed funding, government subsidies, and investor pitch support with AarambhGrow's finance consultancy team.",
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
        <Finance />
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