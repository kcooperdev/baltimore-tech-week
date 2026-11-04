import { ApplyForm } from "@/components/ApplyForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, pillars } from "@/lib/site";

export const metadata = pageMeta(
  "Host an Event",
  "Propose a Baltimore Tech Week partner event. If it is accepted, Tech Week lists it. Tech Week does not produce or fund it.",
);

export default function HostPage() {
  return (
    <main className="plain-page">
      <PageHeader
        eyebrow="Partner events"
        title="Host"
        lede="You run the night. If we accept it, we list it and point people to you."
      />
      <div className="plain-body">
        <div className="week-wrap apply-wrap">
          <ApplyForm
            endpoint="/api/venues"
            submitLabel="Submit"
            successTitle="Thanks. We have the room."
            successBody="If we accept it, we list it and point people to you."
            fields={[
              { name: "organization", label: "Organization", required: true, autoComplete: "organization", step: "You" },
              { name: "contact", label: "Your name", required: true, autoComplete: "name", step: "You" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", step: "You" },
              { name: "venue", label: "Venue", required: true, step: "The room" },
              { name: "address", label: "Address", required: true, step: "The room" },
              { name: "capacity", label: "How many people?", required: true, step: "The room" },
              {
                name: "day",
                label: "Preferred day",
                type: "select",
                required: true,
                options: [...pillars.map((pillar) => `${pillar.day} — ${pillar.name}`), "No preference"],
                step: "The room",
              },
              { name: "time", label: "Preferred time", required: true, step: "The room" },
              { name: "cost", label: "Free or paid", type: "select", required: true, options: ["Free", "Paid", "Not sure"], step: "The room" },
              { name: "concept", label: "What is the night?", type: "textarea", required: true, step: "The room" },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
