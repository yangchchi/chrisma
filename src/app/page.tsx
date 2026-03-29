import { AuroraBackground } from "@/components/site/AuroraBackground";
import { CTA } from "@/components/site/CTA";
import { Features } from "@/components/site/Features";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Team } from "@/components/site/Team";
import { Vision } from "@/components/site/Vision";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" aria-hidden />
      <AuroraBackground />
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <Vision />
        <Features />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
