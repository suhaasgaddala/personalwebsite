import { About } from "@/components/About";
import { ContactFooter } from "@/components/ContactFooter";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Header } from "@/components/Header";
import { Interests } from "@/components/Interests";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <About />
        <Experience />
        <FeaturedProjects />
        <Education />
        <Interests />
      </main>
      <ContactFooter />
    </>
  );
}
