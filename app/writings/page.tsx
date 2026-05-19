import { ContactFooter } from "@/components/ContactFooter";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";

const writings = [
  {
    title: "Notes on Building Taste",
    description:
      "Short reflections on engineering judgment, design sense, and the small decisions that make software feel intentional.",
    status: "Draft"
  },
  {
    title: "Learning in Public",
    description:
      "A running place for thoughts on college, projects, systems, AI infrastructure, and the ideas I keep returning to.",
    status: "Soon"
  }
];

export default function WritingsPage() {
  return (
    <>
      <Header />
      <main className="subpage writings-page section-shell">
        <Reveal className="page-intro">
          <span>Writings</span>
          <h1>Small notes, unfinished thoughts, and things I am thinking through.</h1>
        </Reveal>
        <div className="writing-list">
          {writings.map((writing) => (
            <Reveal className="writing-row interactive-row" key={writing.title}>
              <div>
                <h2>{writing.title}</h2>
                <p>{writing.description}</p>
              </div>
              <span>{writing.status}</span>
            </Reveal>
          ))}
        </div>
      </main>
      <ContactFooter />
    </>
  );
}
