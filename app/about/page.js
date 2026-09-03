import Navbar from "../components/layout/Navbar";
import Hero from "../components/about/Hero";
import About from "../components/about/About";
import ValueOutcomes from "../components/about/ValueOutcomes";
import CorePillars from "../components/about/CorePillars";
import WhyTrustUs from "../components/about/WhyTrustUs";
import FAQ from "../components/layout/FAQ";
import CTASection from "../components/layout/CTA";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "About AarambhGrow – Business Consultancy Team in Gujarat",
  description:
    "Meet the team behind AarambhGrow — helping startups, MSMEs, and enterprises across India with registration, compliance, finance, and growth strategy.",
};

export default function AboutPage() {
  return (
    <>
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
