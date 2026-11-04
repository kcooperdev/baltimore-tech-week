"use client";

import { useState, type FormEvent } from "react";
import type { ApplyChoice, ApplyField } from "@/lib/apply-fields";
import { site } from "@/lib/site";

export type { ApplyField };

function choicesFor(field: ApplyField): ApplyChoice[] {
  if (field.choices?.length) return field.choices;
  return (field.options ?? []).map((option) => ({ value: option, label: option }));
}

function wordCount(value: string) {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

function lineCount(value: string) {
  return value
    .split("\n")
    .map((line) => line.replace(/^\s*\d+[.)]\s*/, "").trim())
    .filter(Boolean).length;
}

export function ApplyForm({
  id,
  endpoint,
  extra,
  fields,
  submitLabel,
  successTitle,
  successBody,
  closed = false,
  defaults,
}: {
  id?: string;
  endpoint: string;
  extra?: Record<string, string>;
  fields: ApplyField[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
  closed?: boolean;
  defaults?: Record<string, string>;
}) {
  const steps = [...new Set(fields.map((field) => field.step).filter(Boolean))] as string[];
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  const current = steps.length ? steps[step] : "";
  const visible = steps.length ? fields.filter((field) => field.step === current) : fields;
  const progress = steps.length ? ((step + 1) / steps.length) * 100 : 100;

  function read(form: HTMLFormElement) {
    const data = new FormData(form);
    const payload: Record<string, unknown> = { ...extra };
    for (const field of fields) {
      if (field.type === "checks") {
        payload[field.name] = data.getAll(field.name).map(String);
      } else {
        payload[field.name] = String(data.get(field.name) ?? "").trim();
      }
    }
    return payload;
  }

  function validate(payload: Record<string, unknown>, only?: ApplyField[]) {
    const next: Record<string, string> = {};
    for (const field of only ?? fields) {
      const value = payload[field.name];
      const empty = Array.isArray(value) ? value.length === 0 : !String(value ?? "").trim();
      const textValue = Array.isArray(value) ? "" : String(value ?? "").trim();
      if (field.required && empty) next[field.name] = "This is required";
      if (field.type === "email" && textValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(textValue)) {
        next[field.name] = "Enter a valid email";
      }
      if (field.type === "tel" && textValue && textValue.replace(/\D/g, "").length < 10) {
        next[field.name] = "Enter a 10-digit phone number";
      }
      if (field.type === "url" && textValue && !/^https?:\/\/\S+$/i.test(textValue)) {
        next[field.name] = `${field.label} must start with http:// or https://`;
      }
      if (field.minWords && textValue && wordCount(textValue) < field.minWords) {
        next[field.name] = `Give this at least ${field.minWords} words`;
      }
      if (field.minLines && lineCount(textValue) < field.minLines) {
        next[field.name] = `Add ${field.minLines}, one per line`;
      }
    }
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (closed) return;
    const form = event.currentTarget;
    const payload = read(form);
    const problems = validate(payload, visible);
    setFieldErrors(problems);
    if (Object.keys(problems).length) {
      setError("Check the fields marked below.");
      return;
    }
    if (steps.length && step < steps.length - 1) {
      setError("");
      setStep((value) => value + 1);
      return;
    }
    setPending(true);
    setError("");
    void fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        const body = (await response.json().catch(() => ({}))) as { error?: string };
        if (!response.ok) throw new Error(body.error || "Something went wrong.");
        setDone(true);
      })
      .catch((reason: unknown) => {
        setError(reason instanceof Error ? reason.message : "Something went wrong.");
      })
      .finally(() => setPending(false));
  }

  if (closed) {
    return (
      <div className="apply-card">
        <button type="button" className="week-btn" disabled>
          {submitLabel}
        </button>
        <p className="apply-note">Not open yet.</p>
      </div>
    );
  }

  if (done) {
    return (
      <div className="apply-card" role="status">
        <p className="apply-panel-kicker">Sent</p>
        <h2 className="apply-panel-title">{successTitle}</h2>
        <p className="apply-lead">{successBody}</p>
        <p className="apply-note">
          We read every one. If we need you, we write from <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form id={id} className="apply-card" onSubmit={onSubmit}>
      {steps.length > 1 ? (
        <>
          <ol className="apply-steps">
            {steps.map((label, index) => (
              <li key={label}>
                <button
                  type="button"
                  className={`apply-step${index === step ? " is-current" : ""}${index < step ? " is-done" : ""}`}
                  onClick={() => {
                    if (index < step) setStep(index);
                  }}
                >
                  <span className="apply-step-num">0{index + 1}</span>
                  {label}
                </button>
              </li>
            ))}
          </ol>
          <div className="apply-progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
        </>
      ) : null}
      <div className="apply-grid">
        {fields.map((field) => {
          const problem = fieldErrors[field.name];
          const shown = !steps.length || field.step === current;
          const choices = choicesFor(field);
          const wide = field.wide || field.type === "textarea" || field.type === "checks" || field.type === "radio";
          const control =
            field.type === "textarea" ? (
              <textarea
                name={field.name}
                className={`apply-input${problem ? " is-invalid" : ""}`}
                placeholder={field.placeholder}
                rows={field.minLines ? 5 : 4}
                defaultValue={defaults?.[field.name]}
              />
            ) : field.type === "select" ? (
              <select name={field.name} className={`apply-input${problem ? " is-invalid" : ""}`} defaultValue={defaults?.[field.name] ?? ""}>
                <option value="">{field.placeholder || "Select"}</option>
                {choices.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "checks" || field.type === "radio" ? (
              <span className="apply-checks">
                {choices.map((option) => (
                  <label key={option.value} className="apply-check">
                    <input
                      type={field.type === "radio" ? "radio" : "checkbox"}
                      name={field.name}
                      value={option.value}
                      defaultChecked={defaults?.[field.name] === option.value}
                    />
                    {option.label}
                  </label>
                ))}
              </span>
            ) : (
              <input
                name={field.name}
                type={field.type ?? "text"}
                className={`apply-input${problem ? " is-invalid" : ""}`}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                defaultValue={defaults?.[field.name]}
              />
            );
          return (
            <div key={field.name} hidden={!shown} className={`apply-field${wide ? " apply-wide" : ""}`}>
              <span className="apply-label">
                {field.label}
                {field.required ? <span className="apply-req"> *</span> : <span className="apply-opt"> optional</span>}
              </span>
              {field.hint ? <span className="apply-opt">{field.hint}</span> : null}
              {control}
              {problem ? (
                <span className="apply-error" role="alert">
                  {problem}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
      {error ? (
        <p className="apply-banner" role="alert">
          {error}
        </p>
      ) : null}
      <div className="apply-actions">
        {step > 0 ? (
          <button type="button" className="week-btn week-btn-ghost" onClick={() => setStep((value) => value - 1)}>
            Back
          </button>
        ) : null}
        <button type="submit" className="week-btn" disabled={pending}>
          {pending ? "Sending…" : steps.length && step < steps.length - 1 ? "Continue" : submitLabel}
        </button>
      </div>
    </form>
  );
}
