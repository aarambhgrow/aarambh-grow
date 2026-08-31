import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import LegalCA from "../../components/services/LegalCA";
import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export default function LegalCaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <LegalCA />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
