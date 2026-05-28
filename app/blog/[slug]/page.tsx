import { redirect } from "next/navigation";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  redirect(`/writings/${slug}`);
}
