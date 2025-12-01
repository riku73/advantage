import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import ValueProps from "@/components/sections/value-props";
import CtaSection from "@/components/sections/cta-section";
import ClientsSection from "@/components/sections/clients-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsSection compact />
      <ServicesGrid />
      <ValueProps />
      <CtaSection />
    </>
  );
}
