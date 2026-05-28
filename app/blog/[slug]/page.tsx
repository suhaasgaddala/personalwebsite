import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactFooter } from "@/components/ContactFooter";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { getAllWritings, getWriting } from "@/lib/writings";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const writings = await getAllWritings();

  return writings.map((writing) => ({
    slug: writing.slug
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const writing = await getWriting(slug);

  if (!writing || writing.status !== "published") {
    return {};
  }

  return {
    title: `${writing.title} | Suhaas Gaddala`,
    description: writing.description
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const writing = await getWriting(slug);

  if (!writing || writing.status !== "published") {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="subpage writing-detail-page section-shell">
        <Reveal className="writing-detail-header">
          <Link href="/blog" className="back-link">
            blog
          </Link>
          <span>{writing.date}</span>
          <h1>{writing.title}</h1>
          <p>{writing.description}</p>
        </Reveal>
        <Reveal>
          <article
            className="writing-body"
            dangerouslySetInnerHTML={{ __html: writing.html }}
          />
        </Reveal>
        {writing.image && (
          <Reveal className="blog-post-image">
            <Image
              src={writing.image}
              alt={writing.title}
              width={800}
              height={500}
              className="blog-post-img"
            />
          </Reveal>
        )}
      </main>
      <ContactFooter />
    </>
  );
}
