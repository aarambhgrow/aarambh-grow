import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Registration from "../../components/services/Registration";
import { registrationData } from "../../data/registration";
import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export default function RegistrationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <Registration />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
