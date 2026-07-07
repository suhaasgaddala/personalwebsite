import { AgentsShowcase } from "@/components/AgentsShowcase";
import { About } from "@/components/About";
import { Books } from "@/components/Books";
import { ContactFooter } from "@/components/ContactFooter";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Interests } from "@/components/Interests";
import { Music } from "@/components/Music";
import { Research } from "@/components/Research";
import { WritingsShowcase } from "@/components/WritingsShowcase";
import { FeaturedProjects } from "@/components/FeaturedProjects";

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AgentsShowcase />
        <div className="home-about-flow about-simple">
          <About />
          <Experience />
          <Education />
          <Music />
          <Books />
          <Research />
          <Interests />
        </div>
        <FeaturedProjects />
        <WritingsShowcase />
      </main>
      <ContactFooter />
    </>
  );
}
