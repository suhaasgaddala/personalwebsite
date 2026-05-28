"use client";

import { FormEvent, useState } from "react";

type PublishState = "idle" | "saving" | "success" | "error";
type AuthState = "locked" | "checking" | "unlocked" | "error";

export function WritingForm() {
  const [state, setState] = useState<PublishState>("idle");
  const [authState, setAuthState] = useState<AuthState>("locked");
  const [authorKey, setAuthorKey] = useState("");
  const [message, setMessage] = useState("");

  async function handleUnlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAuthState("checking");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const submittedKey = String(formData.get("authorKey") ?? "");

    const response = await fetch("/api/admin/writings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${submittedKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "verify"
      })
    });

    const result = (await response.json()) as {
      message?: string;
    };

    if (!response.ok) {
      setAuthorKey("");
      setAuthState("error");
      setMessage(result.message ?? "That author key is not valid.");
      return;
    }

    setAuthorKey(submittedKey);
    setAuthState("unlocked");
    setMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!authorKey) {
      setState("error");
      setMessage("Unlock the editor with your author key first.");
      return;
    }

    setState("saving");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/admin/writings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authorKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
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

  if (authState !== "unlocked") {
    return (
      <form className="writing-form writing-gate" onSubmit={handleUnlock}>
        <label>
          <span>Author key</span>
          <input
            name="authorKey"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Only Suhaas can unlock this editor"
          />
        </label>
        <div className="writing-form-actions">
          <button type="submit" disabled={authState === "checking"}>
            {authState === "checking" ? "checking" : "unlock editor"}
          </button>
        </div>
        {message ? <p className={`form-message ${authState}`}>{message}</p> : null}
      </form>
    );
  }

  return (
    <form className="writing-form" onSubmit={handleSubmit}>
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
        <button
          type="button"
          onClick={() => {
            setAuthorKey("");
            setAuthState("locked");
            setMessage("");
            setState("idle");
          }}
        >
          lock
        </button>
        <button type="submit" disabled={state === "saving"}>
          {state === "saving" ? "saving" : "publish"}
        </button>
      </div>
      {message ? <p className={`form-message ${state}`}>{message}</p> : null}
    </form>
  );
}
