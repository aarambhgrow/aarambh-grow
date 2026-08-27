import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Branding from "../../components/services/Branding";
import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export default function BrandingPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Hero />
                <Branding />
                <FAQ />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}