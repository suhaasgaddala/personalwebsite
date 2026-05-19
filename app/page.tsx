import { About } from "@/components/About";
import { ContactFooter } from "@/components/ContactFooter";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Interests } from "@/components/Interests";
import { TechnicalDepth } from "@/components/TechnicalDepth";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <TechnicalDepth />
        <Education />
        <Interests />
      </main>
      <ContactFooter />
    </>
  );
}
