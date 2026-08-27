import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Finance from "../../components/services/Finance";
import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export default function FinancePage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen">
                <Hero />
                <Finance />
                <FAQ />
                <CTASection />
            </main>

            <Footer />
        </>
    );
}