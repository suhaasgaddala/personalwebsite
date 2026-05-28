import type { Metadata } from "next";
import { ContactFooter } from "@/components/ContactFooter";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { WritingForm } from "@/components/WritingForm";

export const metadata: Metadata = {
  title: "Write | Suhaas Gaddala",
  robots: {
    index: false,
    follow: false
  }
};

export default function WritePage() {
  return (
    <>
      <Header />
      <main className="subpage admin-page section-shell">
        <Reveal className="page-intro">
          <span>Private</span>
          <h1>Write something new.</h1>
          <p>
            The editor and publishing endpoint only unlock with your private author key.
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
