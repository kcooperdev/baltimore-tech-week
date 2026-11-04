import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, pillars, speakerFormats } from "@/lib/site";

export const metadata = pageMeta(
  "Speak",
  "Apply to speak at Baltimore Tech Week 2027. Applying does not reserve a slot.",
);

export default function SpeakPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get involved"
        title="Speak"
        lede="Apply if you are building, hiring, or teaching here. Applying does not book you a slot."
      />

      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap split">
            <div>
              <p className="week-lede">{speakerFormats.join(", ")}.</p>
              <p className="week-lede">{pillars.map((pillar) => `${pillar.day}: ${pillar.name}`).join(" · ")}</p>
            </div>
            <InquiryForm
              subject="Baltimore Tech Week speaker application"
              submitLabel="Apply"
              fields={[
                { name: "name", label: "Name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "organization", label: "Organization", autoComplete: "organization" },
                { name: "format", label: "Format", type: "select", required: true, options: speakerFormats },
                {
                  name: "theme",
                  label: "Day",
                  type: "select",
                  required: true,
                  options: pillars.map((pillar) => `${pillar.day} — ${pillar.name}`),
                },
                { name: "title", label: "Working title", required: true },
                {
                  name: "description",
                  label: "What will people leave knowing?",
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
