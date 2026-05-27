import { ContactFooter } from "@/components/ContactFooter";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { WritingForm } from "@/components/WritingForm";

export default function WritePage() {
  return (
    <>
      <Header />
      <main className="subpage admin-page section-shell">
        <Reveal className="page-intro">
          <span>Private</span>
          <h1>Write something new.</h1>
          <p>
            This page can be seen, but publishing only works with your private author key.
          </p>
        </Reveal>
        <Reveal>
          <WritingForm />
        </Reveal>
      </main>
      <ContactFooter />
    </>
  );
}
