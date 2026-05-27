import { ContactFooter } from "@/components/ContactFooter";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <ContactFooter />
    </>
  );
}
