import Link from "next/link";
import { ContactFooter } from "@/components/ContactFooter";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { getAllWritings } from "@/lib/writings";

export default async function WritingsPage() {
  const writings = await getAllWritings();

  return (
    <>
      <Header />
      <main className="subpage writings-page section-shell">
        <Reveal className="page-intro">
          <span>Writings</span>
          <h1>Small notes, unfinished thoughts, and things I am thinking through.</h1>
        </Reveal>
        <div className="writing-list">
          {writings.length > 0 ? (
            writings.map((writing) => (
              <Reveal className="writing-row interactive-row" key={writing.slug}>
                <Link href={`/writings/${writing.slug}`} className="writing-row-link">
                  <div>
                    <h2>{writing.title}</h2>
                    <p>{writing.description}</p>
                  </div>
                  <span>{writing.date}</span>
                </Link>
              </Reveal>
            ))
          ) : (
            <Reveal className="writing-empty">
              <p>No writing has been published yet.</p>
            </Reveal>
          )}
        </div>
      </main>
      <ContactFooter />
    </>
  );
}
