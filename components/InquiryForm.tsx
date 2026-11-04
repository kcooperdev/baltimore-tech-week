"use client";

import { useMemo, useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export type InquiryField = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  autoComplete?: string;
};

export function InquiryForm({
  fields,
  subject,
  submitLabel,
  id,
}: {
  fields: InquiryField[];
  subject: string;
  submitLabel: string;
  id?: string;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [openedMail, setOpenedMail] = useState(false);

  const mailto = useMemo(() => {
    if (!preview) return "";
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(preview)}`;
  }, [preview, subject]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = fields.map((field) => {
      const value = String(data.get(field.name) ?? "").trim();
      return `${field.label}: ${value || "—"}`;
    });
    const message = lines.join("\n");
    setPreview(message);
    setCopied(false);
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    const canOpen = href.length < 1800;
    setOpenedMail(canOpen);
    if (canOpen) window.location.href = href;
  }

  async function copyMessage() {
    if (!preview) return;
    try {
      await navigator.clipboard.writeText(`To: ${site.email}\nSubject: ${subject}\n\n${preview}`);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (preview) {
    return (
      <div id={id} className="border border-border bg-card p-6 md:p-8">
        <p className="font-display text-2xl font-semibold tracking-tight">Ready to send.</p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          {openedMail
            ? "Your email app should open with this note. Send it from there. If nothing opens, copy the note instead."
            : "This note is long enough that an email link may drop it. Copy it and send it yourself."}{" "}
          <a className="text-foreground underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <pre className="mt-6 overflow-x-auto whitespace-pre-wrap border border-border bg-background p-4 font-mono text-xs leading-relaxed text-foreground">
          {preview}
        </pre>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {openedMail ? (
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={mailto}>Open email</a>
            </Button>
          ) : null}
          <Button type="button" variant="outline" className="border-border" onClick={copyMessage}>
            {copied ? "Copied" : "Copy note"}
          </Button>
          <Button type="button" variant="ghost" onClick={() => setPreview(null)}>
            Edit answers
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="space-y-5 border border-border bg-card p-6 md:p-8">
      {fields.map((field) => (
        <label key={field.name} className="block">
          <span className="mb-2 block font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {field.label}
            {field.required ? <span className="text-accent"> *</span> : null}
          </span>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              rows={4}
              className="field"
            />
          ) : field.type === "select" ? (
            <select name={field.name} required={field.required} className="field" defaultValue="">
              <option value="" disabled>
                Select
              </option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              className="field"
            />
          )}
        </label>
      ))}
      <p className="text-sm text-muted-foreground">
        This opens an email to {site.email}. The site does not store the form.
      </p>
      <Button type="submit" className="h-12 bg-accent px-6 text-accent-foreground hover:bg-accent/90">
        {submitLabel}
      </Button>
    </form>
  );
}
