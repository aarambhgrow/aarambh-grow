import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import LegalCA from "../../Components/Services/LegalCA";
import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export default function LegalCAPage() {
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