import { CTA } from "@/components/CTA";
import { Clients } from "@/components/Clients";
import { ContactInfo } from "@/components/ContactInfo";
import { Coverage } from "@/components/Coverage";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { TrustedBrands } from "@/components/TrustedBrands";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <TrustedBrands />
      <Stats />
      <Services />
      <Coverage />
      <Clients />
      <WhyChooseUs />
      <CTA />
      <ContactInfo />
      <Footer />
    </main>
  );
}