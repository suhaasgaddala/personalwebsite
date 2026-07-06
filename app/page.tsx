import { AgentsShowcase } from "@/components/AgentsShowcase";
import { ContactFooter } from "@/components/ContactFooter";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AgentsShowcase />
      </main>
      <ContactFooter />
    </>
  );
}
