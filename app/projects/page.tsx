import { ContactFooter } from "@/components/ContactFooter";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Projects | Suhaas Gaddala",
  description: "Selected projects by Suhaas Gaddala."
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="projects-page">
        <section className="page-intro section-shell">
          <span>Projects</span>
          <h1>Selected work.</h1>
          <p>
            A small index of things I have built, shaped, or explored. The
            motion here is intentionally loud; the details can come later.
          </p>
        </section>
        <FeaturedProjects />
      </main>
      <ContactFooter />
    </>
  );
}
