import Preloader from "./components/layout/Preloader";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/About";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ProcessSection from "./components/home/Process";
import BusinessCategories from "./components/home/BusinessCategories";
import CTASection from "./components/layout/CTA";
import Footer from "./components/layout/Footer";

export const metadata = {
  title:
    "AarambhGrow – Business Registration, GST & Compliance Consultants | Gujarat",
  description:
    "Company registration, GST, ISO certification, MSME loans & branding — end-to-end support for startups & MSMEs in Gujarat. Free consultation.",
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AarambhGrow Group of Companies",
    url: "https://aarambhgrow.group",
  };

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </main>
  );
}