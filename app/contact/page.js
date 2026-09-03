import Navbar from "../components/layout/Navbar";
import ContactHero from "../components/contact/Hero";
import ContactInfoSection from "../components/contact/ContactInfoSection";
import ContactFormWithMap from "../components/contact/ContactFormWithMap";
import WhyGetInTouch from "../components/contact/WhyGetInTouch";
import CTASection from "../components/layout/CTA";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "Contact AarambhGrow – Free Business Consultation | Ahmedabad, Gujarat",
  description:
    "Contact AarambhGrow for a free business consultation in Ahmedabad, Gujarat. Get expert support for business registration, compliance, finance, legal, and growth services.",
};

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AarambhGrow Group of Companies",
    url: "https://aarambhgrow.group",
    telephone: "+91-9998715799",
    address: {
      "@type": "PostalAddress",
      streetAddress: "813, Silver Rediance-4, Gota, Jagatpur Road, Gota SG Highway",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382470",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  };

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
