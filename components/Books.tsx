import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const books = [
  "No Longer Human by Osamu Dazai",
  "White Nights by Fyodor Dostoevsky",
  "Big Nate Comics"
];

export function Books() {
  return (
    <section className="content-section section-shell" aria-labelledby="books-title">
      <SectionLabel title="Books" />
      <Reveal className="interest-copy" id="books-title">
        <ul>
          {books.map((book) => (
            <li key={book}>{book}</li>
          ))}
        </ul>
        <p>I love reading anything that intrigues me.</p>
      </Reveal>
    </section>
  );
}
