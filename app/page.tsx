import Hero from "@/components/sections/Hero";
import BeyondSoftware from "@/components/sections/BeyondSoftware";
import HowWeWork from "@/components/sections/HowWeWork";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";
import WhyNivaran from "@/components/sections/WhyNivaran";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BeyondSoftware />
      <HowWeWork />
      <ProductShowcase />
      <Services />
      <Team />
      <WhyNivaran />
      <CTA />
    </>
  );
}