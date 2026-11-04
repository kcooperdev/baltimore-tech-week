import { ApplyForm } from "@/components/ApplyForm";
import { pageMeta, pillars, speakerFormats } from "@/lib/site";

export const metadata = pageMeta(
  "Speak",
  "Apply to speak at Baltimore Tech Week, April 27–29, 2027. Applying does not reserve a slot.",
);

export default function SpeakPage() {
  return (
    <main className="plain-page">
      <div className="page-top">
        <div className="week-wrap split">
          <header id="main">
            <p className="week-kicker">Get involved</p>
            <h1>Speak</h1>
            <p className="plain-lede">If you are building it, hiring for it, or teaching it here, tell us. A form is not a slot.</p>
          </header>
          <ApplyForm
            endpoint="/api/speakers"
            submitLabel="Submit"
            successTitle="Thanks. We have your session."
            successBody="Applying does not book the slot. If it fits a day, we email you."
            fields={[
              { name: "name", label: "Name", required: true, autoComplete: "name", step: "You" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", step: "You" },
              { name: "organization", label: "Organization", autoComplete: "organization", step: "You" },
              { name: "format", label: "Format", type: "select", required: true, options: speakerFormats, step: "The session" },
              {
                name: "theme",
                label: "Day",
                type: "select",
                required: true,
                options: pillars.map((pillar) => `${pillar.day} — ${pillar.name}`),
                step: "The session",
              },
              { name: "title", label: "Working title", required: true, step: "The session" },
              {
                name: "description",
                label: "What will people leave knowing?",
                type: "textarea",
                required: true,
                step: "The session",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
