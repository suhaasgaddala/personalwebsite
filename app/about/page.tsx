import { About } from "@/components/About";
import { Books } from "@/components/Books";
import { ContactFooter } from "@/components/ContactFooter";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Interests } from "@/components/Interests";
import { Music } from "@/components/Music";
import { Research } from "@/components/Research";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="subpage about-simple">
        <About />
        <Experience />
        <Education />
        <Music />
        <Books />
        <Research />
        <Interests />
      </main>
      <ContactFooter />
    </>
  );
}
