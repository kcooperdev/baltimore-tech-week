import { ApplyForm } from "@/components/ApplyForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, partnerFilters, pillars } from "@/lib/site";

export const metadata = pageMeta(
  "Host an Event",
  "Propose a Baltimore Tech Week partner event. If it is accepted, Tech Week lists it. Tech Week does not produce or fund it.",
);

const categories = partnerFilters.filter((item) => item !== "All");

export default function HostPage() {
  return (
    <main className="plain-page">
      <PageHeader
        eyebrow="Partner events"
        title="Host"
        lede="You run it. If we accept it, we list it and point people to you. We do not produce it, and we do not pay for it."
      />

      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap split">
            <p className="week-lede">Unconfirmed ideas stay off the public calendar. Say if your event is free or paid, and how many people fit.</p>
            <ApplyForm
              endpoint="/api/venues"
              submitLabel="Submit"
              successTitle="Thanks. We have your venue."
              successBody="If we accept it, we list it and point people to you. We do not produce it or pay for it."
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
                { name: "category", label: "Category", type: "select", required: true, options: [...categories], step: "The event" },
                { name: "cost", label: "Free or paid", type: "select", required: true, options: ["Free", "Paid", "Not sure"], step: "The event" },
                { name: "concept", label: "What is the event?", type: "textarea", required: true, step: "The event" },
                { name: "access", label: "Accessibility", type: "textarea", required: true, step: "The event" },
                { name: "provide", label: "What will you provide?", type: "textarea", required: true, step: "The event" },
                { name: "support", label: "What do you need from Tech Week?", type: "textarea", required: true, step: "The event" },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
