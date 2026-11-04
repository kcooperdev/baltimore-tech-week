import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, pillars, speakerFormats } from "@/lib/site";

export const metadata = pageMeta(
  "Speak",
  "Apply to speak at Baltimore Tech Week 2027. Talks, panels, workshops, fireside conversations, and demonstrations across Connect, Build, and Opportunity.",
);

export default function SpeakPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get involved"
        title="Speak at Baltimore Tech Week"
        lede="We want people who are building, hiring, teaching, and organizing in Baltimore. Applying does not mean you are booked. Every application is read. We follow up when there is a fit."
      />

      <section className="border-b border-border">
        <div className="container grid gap-10 py-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Formats</h2>
            <ul className="mt-4 space-y-2">
              {speakerFormats.map((format) => (
                <li key={format} className="border-t border-border py-2">
                  {format}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Themes</h2>
            <ul className="mt-4 space-y-4">
              {pillars.map((pillar) => (
                <li key={pillar.id}>
                  <p className="font-display text-xl font-semibold">{pillar.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {pillar.day} · {pillar.question}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid gap-10 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-4xl font-semibold tracking-tight">Apply to Speak</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The lineup is not announced yet. Don&apos;t wait on a speaker list that isn&apos;t real.
            </p>
          </div>
          <div className="md:col-span-8">
            <InquiryForm
              subject="Baltimore Tech Week speaker application"
              submitLabel="Apply to Speak"
              fields={[
                { name: "name", label: "Name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "organization", label: "Organization", autoComplete: "organization" },
                {
                  name: "format",
                  label: "Format",
                  type: "select",
                  required: true,
                  options: speakerFormats,
                },
                {
                  name: "theme",
                  label: "Theme",
                  type: "select",
                  required: true,
                  options: pillars.map((pillar) => pillar.name),
                },
                { name: "title", label: "Working title", required: true },
                {
                  name: "description",
                  label: "What will people leave knowing or making?",
                  type: "textarea",
                  required: true,
                },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
