import Preloader from "./components/layout/Preloader";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/About";
import Services from "./components/home/Services"; // Moved up for faster service discovery
import WhyChooseUs from "./components/home/WhyChooseUs";
import ProcessSection from "./components/home/Process";
import BusinessCategories from "./components/home/BusinessCategories";
import CTASection from "./components/layout/CTA";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Preloader />
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <ProcessSection />
      <BusinessCategories />
      <CTASection />
      <Footer />
    </main>
  );
}
