import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { createSlug, createWritingMarkdown } from "@/lib/writings";

export const runtime = "nodejs";

type WritingRequest = {
  secret?: unknown;
  title?: unknown;
  description?: unknown;
  content?: unknown;
  status?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

async function saveToGitHub(filepath: string, content: string) {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPOSITORY ?? "suhaasgaddala/personalwebsite";
  const branch = process.env.GITHUB_BRANCH ?? "main";

  if (!token) {
    return false;
  }

  const response = await fetch(`https://api.github.com/repos/${repo}/contents/${filepath}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28"
    },
    body: JSON.stringify({
      message: `Add writing: ${path.basename(filepath, ".md")}`,
      content: Buffer.from(content).toString("base64"),
      branch
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`GitHub save failed: ${details}`);
  }

  return true;
}

async function saveToFilesystem(filepath: string, content: string) {
  const absolutePath = path.join(process.cwd(), filepath);
  await fs.mkdir(path.dirname(absolutePath), { recursive: true });
  await fs.writeFile(absolutePath, content, "utf8");
}

export async function POST(request: Request) {
  const adminSecret = process.env.BLOG_ADMIN_SECRET;

  if (!adminSecret) {
    return NextResponse.json(
      { message: "BLOG_ADMIN_SECRET is not configured on the server." },
      { status: 500 }
    );
  }

  const body = (await request.json()) as WritingRequest;

  if (body.secret !== adminSecret) {
    return NextResponse.json({ message: "That author key is not valid." }, { status: 401 });
  }

  if (
    !isNonEmptyString(body.title) ||
    !isNonEmptyString(body.description) ||
    !isNonEmptyString(body.content)
  ) {
    return NextResponse.json(
      { message: "Title, description, and writing are required." },
      { status: 400 }
    );
  }

  const status = body.status === "draft" ? "draft" : "published";
  const slug = createSlug(body.title);
  const filepath = `content/writings/${slug}.md`;
  const markdown = createWritingMarkdown({
    title: body.title.trim(),
    description: body.description.trim(),
    content: body.content.trim(),
    status
  });

  try {
    const savedToGitHub = await saveToGitHub(filepath, markdown);

    if (!savedToGitHub) {
      await saveToFilesystem(filepath, markdown);
    }

    return NextResponse.json({
      message: savedToGitHub
        ? "Writing committed to GitHub."
        : "Writing saved locally.",
      slug
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Could not save this writing."
      },
      { status: 500 }
    );
  }
}
