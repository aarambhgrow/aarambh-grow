import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import Operations from "../../components/services/Operations";
import FAQ from "../../components/layout/FAQ";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export default function OperationsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Hero />
                <Operations />
                <FAQ />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}