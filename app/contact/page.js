import Navbar from "../components/layout/Navbar";
import ContactHero from "../components/contact/Hero";
import ContactInfoSection from "../components/contact/ContactInfoSection";
import ContactFormWithMap from "../components/contact/ContactFormWithMap";
import WhyGetInTouch from "../components/contact/WhyGetInTouch";
import CTASection from "../components/layout/CTA";
import Footer from "../components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ContactHero />
        <ContactInfoSection />
        <ContactFormWithMap />
        <WhyGetInTouch />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
