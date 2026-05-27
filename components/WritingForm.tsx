"use client";

import { FormEvent, useState } from "react";

type PublishState = "idle" | "saving" | "success" | "error";

export function WritingForm() {
  const [state, setState] = useState<PublishState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("saving");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/admin/writings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        secret: formData.get("secret"),
        title: formData.get("title"),
        description: formData.get("description"),
        content: formData.get("content"),
        status: formData.get("status")
      })
    });

    const result = (await response.json()) as {
      message?: string;
      slug?: string;
    };

    if (!response.ok) {
      setState("error");
      setMessage(result.message ?? "Could not save this writing.");
      return;
    }

    event.currentTarget.reset();
    setState("success");
    setMessage(
      result.slug
        ? `Published. Your writing will live at /writings/${result.slug}.`
        : "Published."
    );
  }

  return (
    <form className="writing-form" onSubmit={handleSubmit}>
      <label>
        <span>Author key</span>
        <input
          name="secret"
          type="password"
          autoComplete="current-password"
          required
          placeholder="BLOG_ADMIN_SECRET"
        />
      </label>
      <label>
        <span>Title</span>
        <input name="title" type="text" required placeholder="What are you calling it?" />
      </label>
      <label>
        <span>Description</span>
        <textarea
          name="description"
          required
          rows={3}
          placeholder="A short summary for the writings page."
        />
      </label>
      <label>
        <span>Writing</span>
        <textarea
          name="content"
          required
          rows={16}
          placeholder="Write in Markdown. Headings and bullet lists are supported."
        />
      </label>
      <div className="writing-form-actions">
        <label className="status-choice">
          <input name="status" type="checkbox" value="draft" />
          <span>Save as draft</span>
        </label>
        <button type="submit" disabled={state === "saving"}>
          {state === "saving" ? "saving" : "publish"}
        </button>
      </div>
      {message ? <p className={`form-message ${state}`}>{message}</p> : null}
    </form>
  );
}
