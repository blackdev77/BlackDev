import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Portfolio from "@/components/home/Portfolio";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
