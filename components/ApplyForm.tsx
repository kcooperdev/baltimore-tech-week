"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export type ApplyField = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea" | "select" | "checks";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  autoComplete?: string;
  step?: string;
};

export function ApplyForm({
  id,
  endpoint,
  extra,
  fields,
  submitLabel,
  successTitle,
  successBody,
}: {
  id?: string;
  endpoint: string;
  extra?: Record<string, string>;
  fields: ApplyField[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
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
      if (field.required && empty) next[field.name] = "This is required";
      if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value))) {
        next[field.name] = "Enter a valid email";
      }
    }
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
          return (
            <label
              key={field.name}
              hidden={!shown}
              className={`apply-field${field.type === "textarea" || field.type === "checks" ? " apply-wide" : ""}`}
            >
              <span className="apply-label">
                {field.label}
                {field.required ? <span className="apply-req"> *</span> : <span className="apply-opt"> optional</span>}
              </span>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  className={`apply-input${problem ? " is-invalid" : ""}`}
                  placeholder={field.placeholder}
                  rows={4}
                />
              ) : field.type === "select" ? (
                <select name={field.name} className={`apply-input${problem ? " is-invalid" : ""}`} defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "checks" ? (
                <span className="apply-checks">
                  {field.options?.map((option) => (
                    <label key={option} className="apply-check">
                      <input type="checkbox" name={field.name} value={option} />
                      {option}
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
                />
              )}
              {problem ? (
                <span className="apply-error" role="alert">
                  {problem}
                </span>
              ) : null}
            </label>
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
