import Navbar from "../components/layout/Navbar";
import Hero from "../components/about/Hero";
import About from "../components/about/About";
import ValueOutcomes from "../components/about/ValueOutcomes";
import CorePillars from "../components/about/CorePillars";
import WhyTrustUs from "../components/about/WhyTrustUs";
import FAQ from "../components/layout/FAQ";
import CTASection from "../components/layout/CTA";
import Footer from "../components/layout/Footer";
import JsonLd from "../components/seo/JsonLd";

export const metadata = {
  title: "About AarambhGrow – Trusted Business Consultants in Gujarat",

  description:
    "Learn about AarambhGrow's team of expert consultants helping startups and MSMEs with registration, compliance, and growth across India.",

  alternates: {
    canonical: "https://aarambhgrow.group/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About AarambhGrow – Trusted Business Consultants in Gujarat",

    description:
      "Learn about AarambhGrow's team of expert consultants helping startups and MSMEs with registration, compliance, and growth across India.",

    url: "https://aarambhgrow.group/about",

    type: "website",
  },
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

      name: "About Us",

      item: "https://aarambhgrow.group/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <ValueOutcomes />
        <CorePillars />
        <WhyTrustUs />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
