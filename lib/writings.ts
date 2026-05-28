import { promises as fs } from "fs";
import path from "path";

export type WritingPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  status: "draft" | "published";
  image?: string;
  content: string;
  html: string;
};

export type WritingPreview = Omit<WritingPost, "content" | "html">;

const writingsDirectory = path.join(process.cwd(), "content", "writings");

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function createSlug(title: string) {
  return slugify(title) || `writing-${Date.now()}`;
}

function parseFrontmatter(fileContents: string) {
  const match = fileContents.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return {
      metadata: {},
      content: fileContents.trim()
    };
  }

  const metadata = match[1].split(/\r?\n/).reduce<Record<string, string>>((acc, line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      return acc;
    }

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();
    acc[key] = rawValue.replace(/^["']|["']$/g, "");
    return acc;
  }, {});

  return {
    metadata,
    content: match[2].trim()
  };
}

function markdownToHtml(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const html: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) {
      return;
    }

    html.push(`<p>${paragraph.join(" ")}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }

    html.push(`<ul>${listItems.join("")}</ul>`);
    listItems = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      html.push(`<h3>${escapeHtml(trimmed.slice(4))}</h3>`);
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      html.push(`<h2>${escapeHtml(trimmed.slice(3))}</h2>`);
      continue;
    }

    if (trimmed.startsWith("# ")) {
      flushParagraph();
      flushList();
      html.push(`<h2>${escapeHtml(trimmed.slice(2))}</h2>`);
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      listItems.push(`<li>${escapeHtml(trimmed.slice(2))}</li>`);
      continue;
    }

    flushList();
    paragraph.push(escapeHtml(trimmed));
  }

  flushParagraph();
  flushList();

  return html.join("");
}

async function readWritingFile(filename: string): Promise<WritingPost | null> {
  const slug = filename.replace(/\.md$/, "");
  const filePath = path.join(writingsDirectory, filename);
  const fileContents = await fs.readFile(filePath, "utf8");
  const { metadata, content } = parseFrontmatter(fileContents);

  if (!metadata.title) {
    return null;
  }

  const status = metadata.status === "draft" ? "draft" : "published";

  return {
    slug,
    title: metadata.title,
    description: metadata.description ?? "",
    date: metadata.date ?? "",
    status,
    image: metadata.image ?? undefined,
    content,
    html: markdownToHtml(content)
  };
}

export async function getAllWritings({ includeDrafts = false } = {}) {
  try {
    const filenames = await fs.readdir(writingsDirectory);
    const posts = await Promise.all(
      filenames
        .filter((filename) => filename.endsWith(".md"))
        .map((filename) => readWritingFile(filename))
    );

    return posts
      .filter((post): post is WritingPost => Boolean(post))
      .filter((post) => includeDrafts || post.status === "published")
      .sort((a, b) => b.date.localeCompare(a.date));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function getWriting(slug: string) {
  const safeSlug = slugify(slug);

  if (!safeSlug) {
    return null;
  }

  try {
    return await readWritingFile(`${safeSlug}.md`);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

export function createWritingMarkdown(input: {
  title: string;
  description: string;
  content: string;
  status: "draft" | "published";
}) {
  const date = new Date().toISOString().slice(0, 10);
  const escapedDescription = input.description.replace(/"/g, '\\"');

  return `---
title: "${input.title.replace(/"/g, '\\"')}"
description: "${escapedDescription}"
date: "${date}"
status: "${input.status}"
---

${input.content.trim()}
`;
}
