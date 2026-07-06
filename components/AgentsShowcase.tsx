"use client";

import { Fragment, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const chatAnswerOne =
  "It runs a loop: read the goal, plan a step, call a tool, evaluate the output, and re-plan until the success criteria pass.";
const chatAnswerTwo =
  "Context drift over long horizons. So I checkpoint state, gate every write behind a verifier, and re-plan from the last good step.";

const thoughts = [
  "decompose: goal → subtasks → tool calls",
  "the verifier should gate every write",
  "two failed runs — re-plan from checkpoint"
];

const roster = [
  { name: "research", status: "running", tone: "on", delay: 0.3 },
  { name: "code-review", status: "thinking", tone: "think", delay: 0.5 },
  { name: "deploy", status: "idle", tone: "off", delay: 0.7 },
  { name: "monitor", status: "idle", tone: "off", delay: 0.9 }
];

const pipelineSteps = ["plan", "edit", "test", "review", "merge"];

function StreamedText({ text, start, step = 0.085 }: { text: string; start: number; step?: number }) {
  const words = text.split(" ");
  const cursorDelay = (start + words.length * step + 0.1).toFixed(2);

  return (
    <p className="chat-answer">
      {words.map((word, index) => (
        <span
          className="chat-token"
          style={{ animationDelay: `${(start + index * step).toFixed(2)}s` }}
          key={`${word}-${index}`}
        >
          {word}{" "}
        </span>
      ))}
      <span
        className="chat-cursor"
        style={{ animationDelay: `${cursorDelay}s, ${cursorDelay}s` }}
        aria-hidden="true"
      />
    </p>
  );
}

function ThinkingRow({ delay }: { delay: number }) {
  return (
    <div className="chat-thinking" style={{ animationDelay: `${delay}s` }}>
      thinking
      <span className="chat-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
    </div>
  );
}

function ActionRow({ delay }: { delay: number }) {
  return (
    <div className="chat-actions" style={{ animationDelay: `${delay}s` }}>
      <button type="button">copy</button>
      <button type="button">retry</button>
      <button type="button">edit</button>
    </div>
  );
}

export function AgentsShowcase() {
  const [runId, setRunId] = useState(0);

  return (
    <section className="content-section agents-section section-shell" id="agents">
      <div className="agents-label-col">
        <SectionLabel title="agents" />
        <button
          type="button"
          className="agents-replay"
          onClick={() => setRunId((id) => id + 1)}
          aria-label="Replay the agents animation"
        >
          <span aria-hidden="true">↻</span>
        </button>
      </div>

      <Reveal>
        <div className="agents-demo" key={runId}>
          <div className="agent-card chat-card">
            <span className="agent-card-label">chat thread</span>
            <div className="chat-stream">
              <div className="chat-user" style={{ animationDelay: "0.3s" }}>
                how does an agent actually execute a task?
              </div>
              <ThinkingRow delay={1.0} />
              <StreamedText text={chatAnswerOne} start={1.8} />
              <ActionRow delay={4.0} />
              <div className="chat-user" style={{ animationDelay: "4.8s" }}>
                what breaks in practice?
              </div>
              <ThinkingRow delay={5.4} />
              <StreamedText text={chatAnswerTwo} start={6.2} />
              <ActionRow delay={8.1} />
            </div>
          </div>

          <div className="agent-card think-card">
            <span className="agent-card-label">thinking</span>
            <div className="think-toggle" style={{ animationDelay: "0.5s" }}>
              thinking <span className="think-chevron" aria-hidden="true">▸</span>
            </div>
            <div className="think-body">
              {thoughts.map((thought, index) => (
                <p
                  className="think-line"
                  style={{ animationDelay: `${1.6 + index * 0.4}s` }}
                  key={thought}
                >
                  {thought}
                </p>
              ))}
            </div>
          </div>

          <div className="agent-card composer-card">
            <span className="agent-card-label">composer</span>
            <div className="composer-box" style={{ animationDelay: "0.3s" }}>
              <span className="composer-text">
                <span>dispatch a new agent</span>
              </span>
              <span className="composer-send" aria-hidden="true">
                <svg viewBox="0 0 16 16">
                  <path d="M3 13V3l11 5-11 5z" />
                </svg>
              </span>
            </div>
            <div className="composer-hints" style={{ animationDelay: "0.6s" }}>
              <span>⏎ send</span>
              <span>⇧⏎ newline</span>
              <span>/ commands</span>
            </div>
          </div>

          <div className="agent-card tool-card">
            <span className="agent-card-label">tool use</span>
            <div className="tool-call" style={{ animationDelay: "0.5s" }}>
              <div className="tool-call-head">
                <span aria-hidden="true">⚡</span> search_web(&quot;agent eval harness&quot;)
                <span className="tool-call-state">
                  <span className="tool-spinner" style={{ animationDelay: "0s, 2.2s" }} />
                  <span className="tool-check" style={{ animationDelay: "2.2s" }}>
                    ✓
                  </span>
                </span>
              </div>
              <div className="tool-call-result" style={{ animationDelay: "2.2s" }}>
                3 results — arxiv.org, github.com
              </div>
            </div>
            <div className="tool-call" style={{ animationDelay: "2.7s" }}>
              <div className="tool-call-head">
                <span aria-hidden="true">📄</span> read_file(&quot;agent_loop.py&quot;)
                <span className="tool-call-state">
                  <span className="tool-spinner" style={{ animationDelay: "0s, 3.9s" }} />
                  <span className="tool-check" style={{ animationDelay: "3.9s" }}>
                    ✓
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="agent-card roster-card">
            <span className="agent-card-label">agents</span>
            {roster.map((agent) => (
              <div
                className={`roster-row${agent.tone === "on" ? " roster-row-active" : ""}`}
                style={{ animationDelay: `${agent.delay}s` }}
                key={agent.name}
              >
                <span className={`roster-dot roster-dot-${agent.tone}`} aria-hidden="true" />
                <span className="roster-name">{agent.name}</span>
                <span className="roster-status">{agent.status}</span>
              </div>
            ))}
          </div>

          <div className="agent-card pipe-card">
            <span className="agent-card-label">pipeline</span>
            <div className="pipe-track">
              {pipelineSteps.map((step, index) => (
                <Fragment key={step}>
                  {index > 0 ? (
                    <span
                      className="pipe-line"
                      style={{ animationDelay: `${0.8 + index * 1.5}s` }}
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="pipe-step" style={{ animationDelay: `${1 + index * 1.5}s` }}>
                    <span className="pipe-node" aria-hidden="true">
                      <span
                        className="pipe-check"
                        style={{ animationDelay: `${2.2 + index * 1.5}s` }}
                      >
                        ✓
                      </span>
                    </span>
                    {step}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
