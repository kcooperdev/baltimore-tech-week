import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, pillars, speakerFormats } from "@/lib/site";

export const metadata = pageMeta(
  "Speak",
  "Apply to speak at Baltimore Tech Week 2027. Talks, panels, workshops, fireside conversations, and demonstrations across Connect, Build, and Opportunity.",
);

const panel = {
  wednesday: "day-panel day-panel-compact day-panel-connect",
  thursday: "day-panel day-panel-compact day-panel-build",
  friday: "day-panel day-panel-compact day-panel-opportunity",
} as const;

export default function SpeakPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get involved"
        title="Speak at Baltimore Tech Week"
        lede="We want people who are building, hiring, teaching, and organizing in Baltimore. Applying does not mean you are booked. Every application is read. We follow up when there is a fit."
      />

      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap">
            <p className="week-kicker">Formats</p>
            <ul className="hold-list">
              {speakerFormats.map((format) => (
                <li key={format}>{format}</li>
              ))}
            </ul>
            <div className="day-panels">
              {pillars.map((pillar) => (
                <article key={pillar.id} className={panel[pillar.id]}>
                  <div>
                    <p className="day-panel-day">{pillar.day}</p>
                    <h3>{pillar.name}</h3>
                    <p>{pillar.question}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band-ink">
          <div className="week-wrap split">
            <div>
              <h2 className="week-title">Apply to Speak</h2>
              <p className="week-lede">The lineup is not announced yet. Don&apos;t wait on a speaker list that isn&apos;t real.</p>
            </div>
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
        </section>
      </div>
    </main>
  );
}
