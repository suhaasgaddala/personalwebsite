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
          <h1>Projects</h1>
        </section>
        <FeaturedProjects />
      </main>
      <ContactFooter />
    </>
  );
}
