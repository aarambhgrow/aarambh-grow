import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Operations from "../../components/services/Operations";
// import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Business Process Improvement & Operations Consulting – AarambhGrow",
  description:
    "Streamline workflows, automate processes, and structure your team for growth with AarambhGrow's operations consulting services. Free consultation.",
};

export default function OperationsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Process Improvement & Operations Consulting",
    serviceType: "Operations Consulting",
    description:
      "Streamline workflows, automate processes, and structure your team for growth with AarambhGrow's operations consulting services.",
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
        <Operations />
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