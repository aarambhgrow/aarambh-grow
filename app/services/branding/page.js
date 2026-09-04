import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Branding from "../../components/services/Branding";
// import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Brand Identity, Strategy & UI/UX Design Services – AarambhGrow",
  description:
    "Build a brand that stands out — identity design, positioning strategy, and high-impact UI/UX from AarambhGrow. Get a free brand consultation.",
};

export default function BrandingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brand Identity, Strategy & UI/UX Design Services",
    serviceType: "Branding & UI/UX Design",
    description: "Build a brand that stands out with identity design, positioning strategy, and high-impact UI/UX from AarambhGrow.",
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
        <Branding />
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
